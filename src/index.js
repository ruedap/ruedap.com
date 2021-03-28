import { render } from 'react-dom';
import './manifest.json';
import './assets/favicon.ico';
import './assets/icon512.png';
import './styles/extras.css';
import { App } from './components/App';

function createRoot() {
  const element = document.createElement('div');
  element.id = 'root';
  document.body.appendChild(element);
  return element;
}

const element = document.getElementById('root') || createRoot();
render(<App />, element);

if (module.hot) {
  module.hot.accept();
}
