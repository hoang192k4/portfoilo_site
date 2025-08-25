//import lib
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//import file trong hệ thống
import App from './App.tsx';
import './assets/styles/GlobalStyles.module.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
