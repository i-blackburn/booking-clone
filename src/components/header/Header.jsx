import {
	faBed,
	faPlane,
	faCar,
	faStar,
	faTaxi,
	faCalendarDays,
	faPerson
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
	const [destination, setDestination] = useState('');
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection'
		}
	]);
	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adults: 1,
		children: 0,
		rooms: 1
	});

	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]: operation === 'increase' ? options[name]++ : options[name]--
			};
		});
	};

	const navigate = useNavigate();

	const handleSearch = () => {
		navigate('/hotels', { state: { destination, date, options } });
	};

	return (
		<div className="header">
			<div
				className={
					type === 'list' ? 'header-container list' : 'header-container'
				}
			>
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
				{type !== 'list' && (
					<>
						<h1 className="title">A lifetime of discounts? It's genius!</h1>
						<p className="description">
							Get rewarded for your travels – unlock instant savings of 10% or
							more with a free booking.clone account
						</p>
						<button className="header-btn">Sign in / Register</button>
						<div className="header-search">
							<div className="header-search-item">
								<FontAwesomeIcon icon={faBed} className="header-icon" />
								<input
									type="text"
									placeholder="Where are you going?"
									className="header-search-input"
									onChange={(e) => setDestination(e.target.value)}
								/>
							</div>
							<div className="header-search-item">
								<FontAwesomeIcon
									icon={faCalendarDays}
									className="header-icon"
								/>
								<span
									onClick={() => setOpenDate(!openDate)}
									className="header-search-text"
								>
									{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
										date[0].endDate,
										'MM/dd/yyyy'
									)}`}
								</span>
								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDate([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={date}
										className="header-search-date"
										minDate={new Date()}
									/>
								)}
							</div>
							<div className="header-search-item">
								<FontAwesomeIcon icon={faPerson} className="header-icon" />
								<span
									onClick={() => setOpenOptions(!openOptions)}
									className="header-search-text"
								>
									{`${options.adults} adults ~ ${options.children} children ~ ${options.rooms} rooms`}
								</span>
								{openOptions && (
									<div className="options">
										<div className="option-item">
											<span className="option-text">Adults</span>
											<div className="option-counter">
												<button
													disabled={options.adults <= 1}
													className="counter-btn"
													onClick={() => handleOption('adults', 'decrease')}
												>
													-
												</button>
												<span className="counter-number">{options.adults}</span>
												<button
													className="counter-btn"
													onClick={() => handleOption('adults', 'increase')}
												>
													+
												</button>
											</div>
										</div>

										<div className="option-item">
											<span className="option-text">Children</span>
											<div className="option-counter">
												<button
													disabled={options.children <= 0}
													className="counter-btn"
													onClick={() => handleOption('children', 'decrease')}
												>
													-
												</button>
												<span className="counter-number">
													{options.children}
												</span>
												<button
													className="counter-btn"
													onClick={() => handleOption('children', 'increase')}
												>
													+
												</button>
											</div>
										</div>
										<div className="option-item">
											<span className="option-text">Rooms</span>
											<div className="option-counter">
												<button
													disabled={options.rooms <= 1}
													className="counter-btn"
													onClick={() => handleOption('rooms', 'decrease')}
												>
													-
												</button>
												<span className="counter-number">{options.rooms}</span>
												<button
													className="counter-btn"
													onClick={() => handleOption('rooms', 'increase')}
												>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="header-search-item">
								<button className="header-btn" onClick={handleSearch}>
									Search
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
