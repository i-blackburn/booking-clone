import {
	faBed,
	faPlane,
	faCar,
	faStar,
	faTaxi
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

const Header = () => {
	return (
		<div className="header">
			<div className="header-container">
				<div className="header-list">
					<div className="header-list-item active">
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className="header-list-item">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className="header-list-item">
						<FontAwesomeIcon icon={faCar} />
						<span>Car rentals</span>
					</div>
					<div className="header-list-item">
						<FontAwesomeIcon icon={faStar} />
						<span>Attractions</span>
					</div>
					<div className="header-list-item">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport taxis</span>
					</div>
				</div>
				<h1 className="title">A lifetime of discounts? It's genius!</h1>
				<p className="description">
					Get rewarded for your travels – unlock instant savings of 10% or more
					with a free booking.clone account
				</p>
				<button className="header-btn">Sign in / Register</button>
			</div>
		</div>
	);
};

export default Header;
