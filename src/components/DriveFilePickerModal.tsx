import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { DriveFile } from '../types';
import { fetchDriveFiles, getFileCategory } from '../services/driveService';
import {
  X,
  Search,
  HardDrive,
  Check,
  RefreshCw,
  ExternalLink,
  AlertCircle,
  LogOut,
  FolderOpen,
} from 'lucide-react';

interface DriveFilePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  accessToken: string | null;
  onLogin: () => Promise<void>;
  onLogout: () => Promise<void>;
  selectedFiles: DriveFile[];
  onConfirmSelection: (files: DriveFile[]) => void;
}

export const DriveFilePickerModal: React.FC<DriveFilePickerModalProps> = ({
  isOpen,
  onClose,
  user,
  accessToken,
  onLogin,
  onLogout,
  selectedFiles,
  onConfirmSelection,
}) => {
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [tempSelected, setTempSelected] = useState<DriveFile[]>(selectedFiles);
  const [filterType, setFilterType] = useState<string>('all');
  const [isSigningIn, setIsSigningIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTempSelected(selectedFiles);
      if (accessToken) {
        loadFiles(accessToken, searchQuery);
      }
    }
  }, [isOpen, accessToken]);

  const loadFiles = async (token: string, search = '') => {
    setLoading(true);
    setError(null);
    const result = await fetchDriveFiles(token, search);
    if (result.error) {
      setError(result.error);
    } else {
      setFiles(result.files);
    }
    setLoading(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessToken) {
      loadFiles(accessToken, searchQuery);
    }
  };

  const handleLoginClick = async () => {
    try {
      setIsSigningIn(true);
      setError(null);
      await onLogin();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Sign-in failed';
      setError(msg);
    } finally {
      setIsSigningIn(false);
    }
  };

  const toggleFile = (file: DriveFile) => {
    const isSelected = tempSelected.some((f) => f.id === file.id);
    if (isSelected) {
      setTempSelected(tempSelected.filter((f) => f.id !== file.id));
    } else {
      setTempSelected([...tempSelected, file]);
    }
  };

  const handleConfirm = () => {
    onConfirmSelection(tempSelected);
    onClose();
  };

  if (!isOpen) return null;

  const filteredFiles = files.filter((f) => {
    if (filterType === 'all') return true;
    if (filterType === 'docs') return f.mimeType.includes('document') || f.mimeType.includes('word') || f.mimeType.includes('text');
    if (filterType === 'sheets') return f.mimeType.includes('spreadsheet') || f.mimeType.includes('excel');
    if (filterType === 'pdf') return f.mimeType.includes('pdf');
    if (filterType === 'images') return f.mimeType.includes('image');
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#101114] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-6 max-h-[92vh] sm:max-h-[85vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-4 sm:py-5 bg-[#0C0D0F] border-b border-white/[0.08] flex items-center justify-between shrink-0">
          <div className="space-y-0.5 pr-2">
            <h3 className="text-sm sm:text-base font-bold text-[#ECEAE5] font-['Syne'] flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-[#E26D35] shrink-0" />
              <span className="truncate">Google Drive Specifications</span>
            </h3>
            <p className="text-[10px] sm:text-[11px] font-mono text-[#73716B] line-clamp-1">
              Select and attach project briefs or architecture specs to your inquiry
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#73716B] hover:text-white transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Auth State: Not logged in */}
        {!user || !accessToken ? (
          <div className="p-6 sm:p-8 md:p-12 text-center space-y-4 sm:space-y-6 overflow-y-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/[0.03] border border-white/10 mx-auto flex items-center justify-center text-[#E26D35]">
              <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <div className="max-w-md mx-auto space-y-2">
              <h4 className="text-lg sm:text-xl font-bold text-[#ECEAE5] font-['Syne']">
                Connect your Google Drive
              </h4>
              <p className="text-xs text-[#9E9C96] leading-relaxed">
                Browse and attach your technical brief, architecture specs, budget spreadsheets, or design assets directly from Google Drive, with your explicit permission.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center justify-center gap-2 max-w-md mx-auto">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Official Material Google Sign-in button */}
            <div className="pt-2 flex justify-center">
              <button
                onClick={handleLoginClick}
                disabled={isSigningIn}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-white text-[#0A0B0D] font-bold text-xs uppercase tracking-wider font-mono hover:bg-slate-100 transition-all shadow-md disabled:opacity-50"
              >
                <div className="w-4 h-4 shrink-0">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                  </svg>
                </div>
                <span>{isSigningIn ? 'Connecting...' : 'Sign in with Google'}</span>
              </button>
            </div>

            <p className="text-[10px] sm:text-[11px] font-mono text-[#595752] max-w-sm mx-auto">
              Only files you select are referenced. Tokens are cached in-memory only.
            </p>
          </div>
        ) : (
          /* Auth State: Logged In & File Browser */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* User Account Bar */}
            <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[#0C0D0F] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-1.5 sm:gap-2 truncate">
                <span className="text-[#ECEAE5] font-bold truncate">{user.displayName || 'Google Account'}</span>
                <span className="text-[#73716B] hidden sm:inline">({user.email})</span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => loadFiles(accessToken, searchQuery)}
                  className="p-1.5 text-[#73716B] hover:text-white"
                  title="Refresh files"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-1 text-[11px] text-[#73716B] hover:text-rose-400 px-1.5 py-1"
                >
                  <LogOut className="w-3 h-3" />
                  <span className="hidden sm:inline">Disconnect</span>
                </button>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="p-3 sm:p-4 bg-[#0A0B0D] border-b border-white/[0.08] space-y-2.5 sm:space-y-3">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#73716B]" />
                <input
                  type="text"
                  placeholder="Search files..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-16 sm:pr-20 py-2 rounded-lg bg-[#121316] border border-white/10 text-xs text-[#ECEAE5] placeholder-[#595752] focus:outline-none focus:border-white/30"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-white text-[#0A0B0D] text-[10px] font-bold font-mono"
                >
                  Search
                </button>
              </form>

              <div className="flex items-center gap-1 sm:gap-1.5 text-[11px] font-mono overflow-x-auto max-w-full pb-0.5">
                {['all', 'docs', 'sheets', 'pdf', 'images'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilterType(t)}
                    className={`px-2.5 py-1 rounded uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 ${
                      filterType === t
                        ? 'bg-white text-[#0A0B0D] font-bold'
                        : 'bg-white/[0.03] text-[#73716B] hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* File List */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1 divide-y divide-white/[0.04]">
              {loading && files.length === 0 ? (
                <div className="py-12 text-center text-xs font-mono text-[#73716B] flex flex-col items-center gap-2">
                  <RefreshCw className="w-4 h-4 animate-spin text-[#E26D35]" />
                  <span>Loading files from Google Drive...</span>
                </div>
              ) : error ? (
                <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs space-y-2 text-center">
                  <AlertCircle className="w-4 h-4 mx-auto" />
                  <p>{error}</p>
                </div>
              ) : filteredFiles.length === 0 ? (
                <div className="py-12 text-center text-xs font-mono text-[#73716B] space-y-1">
                  <p>No files found matching filter.</p>
                </div>
              ) : (
                filteredFiles.map((file) => {
                  const isSelected = tempSelected.some((f) => f.id === file.id);
                  const category = getFileCategory(file.mimeType);

                  return (
                    <div
                      key={file.id}
                      onClick={() => toggleFile(file)}
                      className={`pt-2 flex items-center justify-between p-2.5 sm:p-3 rounded-lg transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-white/[0.08] border border-white/20'
                          : 'hover:bg-white/[0.02] border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 truncate pr-2">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                            isSelected
                              ? 'bg-[#E26D35] border-[#E26D35] text-white'
                              : 'border-white/20 text-transparent'
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>

                        <div className="truncate font-mono">
                          <div className="text-xs font-medium text-[#ECEAE5] truncate">
                            {file.name}
                          </div>
                          <div className="text-[10px] text-[#73716B] mt-0.5">
                            {category.label} · {file.size}
                          </div>
                        </div>
                      </div>

                      {file.webViewLink && (
                        <a
                          href={file.webViewLink}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1 text-[#73716B] hover:text-white shrink-0"
                          title="Open in Google Drive"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Actions */}
            <div className="p-3 sm:p-4 bg-[#0C0D0F] border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0 font-mono text-xs">
              <div className="text-[#9E9C96] text-center sm:text-left">
                <strong className="text-white">{tempSelected.length}</strong> file(s) selected
              </div>

              <div className="flex items-center gap-2 justify-end">
                <button
                  onClick={onClose}
                  className="px-3 py-2 text-[#73716B] hover:text-white flex-1 sm:flex-initial"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 rounded-lg bg-[#ECEAE5] hover:bg-white text-[#0A0B0D] font-bold flex-1 sm:flex-initial text-center"
                >
                  Attach ({tempSelected.length})
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
