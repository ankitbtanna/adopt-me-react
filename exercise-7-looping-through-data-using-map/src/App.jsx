import { createRoot } from 'react-dom/client';
import SearchParams from './SearchParams';

const App = () => {
	return (
		<div id='myId'>
			<h1 key='title-adopt-me'>Adopt Me!</h1>
			<SearchParams />
		</div>
	);
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
