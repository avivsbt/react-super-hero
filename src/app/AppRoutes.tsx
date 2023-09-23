import React, { memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ERoutesPath } from "shared/types/type";
import AppLayout from "./ui/AppLayout";
import Details from "pages/Details";
import Comparison from "pages/Comparison";

const AppRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<></>}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={ERoutesPath.COMPARISON} element={<Comparison />} />
          <Route path={ERoutesPath.DETAILS} element={<Details />} />
          <Route path='*' element={<Navigate to={ERoutesPath.COMPARISON} replace={true} />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default memo(AppRoutes);
