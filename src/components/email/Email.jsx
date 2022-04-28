import './email.css';

const Email = () => {
	return (
		<div className="email">
			<h1 className="email-title">Save time, save money!</h1>
			<span className="email-description">
				Sign up and we'll send the best deals to you
			</span>
			<div className="email-input-container">
				<input type="text" placeholder="Your Email" />
				<button>Subscribe</button>
			</div>
		</div>
	);
};

export default Email;
