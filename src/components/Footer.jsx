//styles
import "./Footer.css"

// assets
import logo from "../assets/logo.jpg"

export default function Footer() {
	return (
		<div className='footer'>
			<div className='contact'>
				<p className='contact__details'>contact details: </p>
				<div>
					<i class='fa-solid fa-phone'></i>
					<span>+353123456789</span>
				</div>
				<div>
					<i class='fa-solid fa-envelope'></i>
					<span>airportaxi@airportaxi.ie</span>
				</div>
			</div>
			<img src={logo} alt='' className='logo' />
		</div>
	)
}
