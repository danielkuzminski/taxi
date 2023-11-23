//styles
import './Landing.css'

//assets
import arrivals from '../assets/arrivals.jpg'

export default function Landing() {
  return (
    <div className='landing'>
      <img src={arrivals} alt="" className='landing__img' />
      <h1 className='landing__title'>Welcome to AirporTaxi</h1>
      <p className='landing__text'>
        Your Gateway to Seamless Airport Transfers in Ireland!
      </p>
      <span className='landing__underline'></span>
    </div>
  )
}
