import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import SearchItem from '../../components/searchItem/SearchItem';
import './list.css';

const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [options, setOptions] = useState(location.state.options);
	const [openDate, setOpenDate] = useState(false);

	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="list-container">
				<div className="list-wrapper">
					<div className="list-search">
						<h1 className="list-search-title">Search</h1>
						<div className="list-search-item">
							<label>Destination</label>
							<input placeholder={destination} type="text" />
						</div>
						<div className="list-search-item">
							<label>Check-in Date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								date[0].startDate,
								'MM/dd/yyyy'
							)} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDate([item.selection])}
									minDate={new Date()}
									ranges={date}
								/>
							)}
						</div>
						<div className="list-search-item">
							<label>Options</label>
							<div className="list-options">
								<div className="list-search-option-item">
									<span className="list-search-option-text">
										Min Price <small>per night</small>
									</span>
									<input type="number" className="list-search-option-input" />
								</div>
								<div className="list-search-option-item">
									<span className="list-search-option-text">
										Max Price <small>per night</small>
									</span>
									<input type="number" className="list-search-option-input" />
								</div>
								<div className="list-search-option-item">
									<span className="list-search-option-text">Adults</span>
									<input
										placeholder={options.adults}
										type="number"
										className="list-search-option-input"
										min={1}
									/>
								</div>
								<div className="list-search-option-item">
									<span className="list-search-option-text">Children</span>
									<input
										placeholder={options.children}
										type="number"
										className="list-search-option-input"
										min={0}
									/>
								</div>
								<div className="list-search-option-item">
									<span className="list-search-option-text">Rooms</span>
									<input
										placeholder={options.rooms}
										type="number"
										className="list-search-option-input"
										min={1}
									/>
								</div>
							</div>
						</div>
						<button>Search</button>
					</div>
					<div className="list-result">
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
