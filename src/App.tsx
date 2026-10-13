/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { Project, BlogPost, DriveFile } from './types';
import { initAuth, googleSignIn, logout } from './services/firebaseAuth';
import { ThemeProvider } from './context/ThemeContext';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { ClientWinsSection } from './components/ClientWinsSection';
import { EngagementSection } from './components/EngagementSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { CaseStudyModal } from './components/CaseStudyModal';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ArticleModal } from './components/ArticleModal';
import { ContactSection } from './components/ContactSection';
import { DriveFilePickerModal } from './components/DriveFilePickerModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Footer } from './components/Footer';

function AppContent() {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [attachedDriveFiles, setAttachedDriveFiles] = useState<DriveFile[]>([]);
  const [isDriveModalOpen, setIsDriveModalOpen] = useState(false);

  // Modal views
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  // Initialize auth listener
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, token) => {
        setUser(currentUser);
        setAccessToken(token);
      },
      () => {
        setUser(null);
        setAccessToken(null);
      }
    );

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setAccessToken(result.accessToken);
      }
    } catch (err) {
      console.error('Error during Google sign-in:', err);
      throw err;
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setAccessToken(null);
  };

  const handleOpenDriveModal = () => {
    setIsDriveModalOpen(true);
  };

  const handleCloseDriveModal = () => {
    setIsDriveModalOpen(false);
  };

  const handleConfirmDriveSelection = (files: DriveFile[]) => {
    setAttachedDriveFiles(files);
  };

  const handleRemoveDriveFile = (fileId: string) => {
    setAttachedDriveFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-[#ECEAE5] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-200">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navigation Bar */}
      <Navbar
        user={user}
        onOpenDriveModal={handleOpenDriveModal}
        onLogout={handleLogout}
        attachedCount={attachedDriveFiles.length}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenDriveModal={handleOpenDriveModal}
          attachedCount={attachedDriveFiles.length}
        />

        {/* Quantified Metrics Bar */}
        <MetricsBar />

        {/* Commercial Value Matrix: Where Clients Win */}
        <ClientWinsSection />

        {/* 3-Step Delivery Protocol & Buyer Guarantees */}
        <EngagementSection />

        {/* Engineering Capabilities & Services */}
        <ServicesSection />

        {/* Selected Work & Case Studies */}
        <PortfolioGallery
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Verified Executive Endorsements */}
        <TestimonialsSection />

        {/* Engineering Insights & Field Notes */}
        <BlogSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* Project Intake & Google Drive Specs Attachment */}
        <ContactSection
          user={user}
          attachedDriveFiles={attachedDriveFiles}
          onOpenDriveModal={handleOpenDriveModal}
          onRemoveDriveFile={handleRemoveDriveFile}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Technical Blog Article Modal */}
      <ArticleModal
        post={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Google Drive Workspace File Picker Modal */}
      <DriveFilePickerModal
        isOpen={isDriveModalOpen}
        onClose={handleCloseDriveModal}
        user={user}
        accessToken={accessToken}
        onLogin={handleGoogleLogin}
        onLogout={handleLogout}
        selectedFiles={attachedDriveFiles}
        onConfirmSelection={handleConfirmDriveSelection}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
