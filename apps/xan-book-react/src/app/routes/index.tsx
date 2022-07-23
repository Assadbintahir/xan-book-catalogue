import React, { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { BookCatalogue, BookDetails } from '../containers';

export const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<BookCatalogue />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Routes;
