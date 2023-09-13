const Pet = (props) => {
	return (
		<div>
			<h1 key='1'>{props.name}</h1>
			<h2 key='2'>{props.animal}</h2>
			<h2 key='3'>{props.breed}</h2>
		</div>
	);
};

export default Pet;
