import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/components/App.jsx';
import './assets/styles/index.css';
import './i18n.js';




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
</BrowserRouter>
)