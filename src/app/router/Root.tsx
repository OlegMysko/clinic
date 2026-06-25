import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App';


export const Root: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          
        </Route>
      </Routes>
    </HashRouter>
  );
};
