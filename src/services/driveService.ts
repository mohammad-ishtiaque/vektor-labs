import { DriveFile } from '../types';

interface DriveApiResponse {
  files?: Array<{
    id: string;
    name: string;
    mimeType: string;
    webViewLink?: string;
    iconLink?: string;
    modifiedTime?: string;
    size?: string;
  }>;
  nextPageToken?: string;
  error?: {
    code: number;
    message: string;
  };
}

export const fetchDriveFiles = async (
  accessToken: string,
  searchQuery = '',
  pageSize = 25
): Promise<{ files: DriveFile[]; error?: string }> => {
  try {
    let q = "trashed = false";
    if (searchQuery.trim()) {
      // Escape single quotes for drive query syntax
      const escaped = searchQuery.replace(/'/g, "\\'");
      q += ` and name contains '${escaped}'`;
    }

    const params = new URLSearchParams({
      pageSize: pageSize.toString(),
      fields: 'files(id, name, mimeType, webViewLink, iconLink, modifiedTime, size), nextPageToken',
      orderBy: 'modifiedTime desc',
      q: q,
    });

    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?${params.toString()}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      if (response.status === 401) {
        return { files: [], error: 'Session expired. Please sign in again.' };
      }
      const errData = await response.json().catch(() => ({}));
      return {
        files: [],
        error: errData.error?.message || `Google Drive API error (${response.status})`,
      };
    }

    const data: DriveApiResponse = await response.json();
    const driveFiles: DriveFile[] = (data.files || []).map((file) => ({
      id: file.id,
      name: file.name,
      mimeType: file.mimeType,
      webViewLink: file.webViewLink,
      iconLink: file.iconLink,
      modifiedTime: file.modifiedTime,
      size: formatFileSize(file.size),
    }));

    return { files: driveFiles };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown network error';
    return { files: [], error: message };
  }
};

export const formatFileSize = (bytesStr?: string): string => {
  if (!bytesStr) return 'N/A';
  const bytes = parseInt(bytesStr, 10);
  if (isNaN(bytes)) return 'N/A';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
};

export const getFileCategory = (mimeType: string): { label: string; color: string; icon: string } => {
  if (mimeType.includes('spreadsheet') || mimeType.includes('excel')) {
    return { label: 'Spreadsheet', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', icon: 'sheets' };
  }
  if (mimeType.includes('presentation') || mimeType.includes('powerpoint')) {
    return { label: 'Presentation', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30', icon: 'slides' };
  }
  if (mimeType.includes('document') || mimeType.includes('word') || mimeType.includes('text')) {
    return { label: 'Document', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30', icon: 'docs' };
  }
  if (mimeType.includes('pdf')) {
    return { label: 'PDF', color: 'bg-rose-500/20 text-rose-400 border-rose-500/30', icon: 'pdf' };
  }
  if (mimeType.includes('image')) {
    return { label: 'Image Asset', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30', icon: 'image' };
  }
  if (mimeType.includes('folder')) {
    return { label: 'Folder', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30', icon: 'folder' };
  }
  if (mimeType.includes('zip') || mimeType.includes('tar') || mimeType.includes('compressed')) {
    return { label: 'Archive', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30', icon: 'archive' };
  }
  return { label: 'File', color: 'bg-slate-500/20 text-slate-300 border-slate-500/30', icon: 'file' };
};
