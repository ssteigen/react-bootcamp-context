import React from 'react';
import './App.css';

import PageContent from './PageContent';
import Form from './Form';
import Navbar from './Navbar';

import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
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

export default App;
