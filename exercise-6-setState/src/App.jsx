import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
	return (
		<div id='myId'>
			<h1 key='title-adopt-me'>Adopt Me!</h1>
			<Pet
				key='pet-1'
				name='Luna'
				animal='Dog'
				breed='Havanese'
			/>
			<Pet
				key='pet-2'
				name='Pepper'
				animal='Bird'
				breed='Cockatiel'
			/>
			<Pet
				key='pet-3'
				name='Doink'
				animal='Cat'
				breed='Mixed'
			/>
		</div>
	);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
