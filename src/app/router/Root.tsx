import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { LoginPage } from '../../pages/LoginPage/LoginPage';


export const Root: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/" element={<App />}>
          
        </Route>
      </Routes>
    </HashRouter>
  );
};
