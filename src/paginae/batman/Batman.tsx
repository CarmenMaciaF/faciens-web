import { NavLink } from 'react-router-dom'
import './estilus.css'

export const Batman = () => {
  return (
    <div className="batman">
    <NavLink to={'/'} className={"svg-home"}> 
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
    </NavLink>

    <header className='titulus'>
        <h1>Batman</h1>
        <div id='titulus-batman' className='titulus-img'></div>
        <p>Él puede tomar la decisión que nadie más puede, la decisión correcta</p>
    </header>
    </div>
  )
}
