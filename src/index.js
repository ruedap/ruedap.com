import { createRoot } from 'react-dom/client';
import './manifest.json';
import './assets/favicon.ico';
import './assets/icon512.png';
import './styles/extras.css';
import { App } from './components/App';

function createRootElement() {
  const element = document.createElement('div');
  element.id = 'root';
  document.body.appendChild(element);
  return element;
}

const element = document.getElementById('root') || createRootElement();
const root = createRoot(element);
root.render(<App />);

if (module.hot) {
  module.hot.accept();
}
