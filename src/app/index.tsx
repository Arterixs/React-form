import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'layouts/default';
import { NotFound } from 'pages/404';
import { Main } from 'pages/main';

export const App = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/main" />} />
      <Route path="/main" element={<Main />} />
    </Route>
  </Routes>
);
