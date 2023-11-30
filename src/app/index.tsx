import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'layouts/default';
import { NotFound } from 'pages/404';
import { Controlled } from 'pages/controlled';
import { Main } from 'pages/main';
import { Uncontrolled } from 'pages/uncontrolled';
import { RouteApp } from 'types/enum/routes';

export const App = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to={RouteApp.MAIN} />} />
      <Route path={RouteApp.MAIN} element={<Main />} />
      <Route path={RouteApp.CONTROLLED} element={<Controlled />} />
      <Route path={RouteApp.UNCONTROLLED} element={<Uncontrolled />} />
    </Route>
  </Routes>
);
