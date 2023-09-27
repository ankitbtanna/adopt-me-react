import { Component } from 'react';
import useBreedsList from './useBreedsList';

class Carousel extends Component {
	state = {
		active: 0,
	};

	// if you dont give anything to the component as an input
	static defaultProps = {
		images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
	};

	handleClickIndex = (event) => {
		this.setState({
			active: +event.target.dataset.index,
		});
	};

	// the function body of the functional components
	render() {
		const { active } = this.state;
		const { images } = this.props;

		return (
			<div className='carousel'>
				<h2>{images}</h2>
				<img
					src={images[active]}
					alt='animal'
				/>
				<div className='carousel-smaller'>
					{images.map((photo, index) => (
						// eslint-disable-next-line
						<img
							onClick={this.handleClickIndex}
							data-index={index}
							key={photo}
							src={photo}
							className={index === active ? 'active' : ''}
							alt='animal thumbnail'
						/>
					))}
				</div>
			</div>
		);
	}
}

function CarouselParent({ animal, images }) {
	const breedList = useBreedsList(animal);
	return (
		<Carousel
			breedList={breedList}
			images={images}
		/>
	);
}

export default CarouselParent;
