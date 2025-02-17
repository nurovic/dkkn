import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingFallback from './components/LoadingFallback';
import publicRoutes from './publicRoutes';
import protectedRoutes from './protectedRoutes';    

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {publicRoutes}
        {protectedRoutes}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;