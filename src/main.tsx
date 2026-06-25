import './main.css';
import { createRoot } from 'react-dom/client';

import { Root } from './app/router/Root';

createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
