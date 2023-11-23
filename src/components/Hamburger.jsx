//styles
import './Hamburger.css'

//assets
import logo from '../assets/logo.jpg'

export default function Hamburger() {
  return (
    <div className="hamburger-container">
        <img src={logo} alt="" className="logo" />
        {/* <div className='hamburger'>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div> */}
        <h2 className='logo-text'>airpor<small>t</small>axi</h2>
    </div>
  )
}
