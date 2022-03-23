import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components';
import { MainPage } from './pages';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
