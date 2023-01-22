import React from 'react';
import './App.css';

import PageContent from './PageContent';
import Form from './Form';
import Navbar from './Navbar';

import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    </LanguageProvider>
  );
}
