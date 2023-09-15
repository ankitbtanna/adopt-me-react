import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
	return (
		<BrowserRouter>
			<h1 key='title-adopt-me'>Adopt Me!</h1>
			<Routes>
				<Route
					path='/'
					element={<SearchParams />}
				/>
				<Route
					path='/details/:id'
					element={<Details />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
