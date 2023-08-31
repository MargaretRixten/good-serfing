import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter basename="/good-serfing">
			<App />
		</BrowserRouter>
	</Provider>,
);
