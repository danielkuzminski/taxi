//styles
import './Order.css'

//

export default function Order() {
  return (
    <>
    <form className='order'>
      <h2 className='order__title'>Request Transfer</h2>
      <label>
        <span>from:</span>
        <input 
          type="text"
          required
          placeholder='collect me...'
           />
      </label>
      <label>
        <span>to:</span>
        <input 
          type="text"
          required
          placeholder='destination...' />
      </label>
      <label>
        <span>date:</span>
        <input type="date" />
      </label>
      <label>
        <span>time:</span>
        <input type="time" />
      </label>
      <label>
        <span>flight number: *</span>
        <input 
          type="text"
          placeholder='arrival / departure flight '
           />
      </label>
      <label>
        <span>your name:</span>
        <input 
          type="text"
          placeholder='your name' />
      </label>
      <button className='order__submit'>What'sApp us</button>
    </form>
    <span className='landing__underline'></span>
    </>
  )
}
