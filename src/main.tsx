import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/glow.css'; // Correct if 'styles' is inside 'src'
import './styles/globals.css';



createRoot(document.getElementById("root")!).render(<App />);
