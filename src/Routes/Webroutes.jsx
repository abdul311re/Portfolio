// src/Routes/Webroute.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Portfolio = lazy(() => import('../Pages/Portfolio/Portfolio'));
const Heropage = lazy(() => import('../Pages/Hero/Heropage'));

const Webroutes = () => {
  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center">
          <div className="loadingio-spinner-ripple-9yaj8a57f0u">
            <div className="ldio-24eutxqm1o1">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Heropage />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/" element={<Navigate to="/Heropage" />} />
      </Routes>
    </Suspense>
  );
};

export default Webroutes;
