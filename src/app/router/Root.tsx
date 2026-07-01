import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { AdminPage } from '@/pages/AdminPage/AdminPage';
import { ProtectedRoute } from '@/components/protectRoutes/ProtectedRoutes';


export const Root: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
       <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminPage />
    </ProtectedRoute>
  }
/>
        <Route path="/" element={<App />}>
          
        </Route>
      </Routes>
    </HashRouter>
  );
};
