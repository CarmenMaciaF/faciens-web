import { NavLink } from 'react-router-dom'
import './estilus.css'

export const Batman = () => {
  return (
    <div className="batman">

      <div className='extra-nav'>

        <div className='navbar'>
        <NavLink to={'/'} className={"svg-home"}> 
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
        </NavLink>

        <ul>
          <li>
            <a href="#">Portada</a>
          </li>
          <li>
            <a href="#vehiculis">Vehículos</a>
          </li>
          <li>
            <a href="#videre">Imágenes</a>
          </li>
          <li>
            <a href='#'>Otras películas</a>
          </li>
        </ul>
        </div>


      </div>
   

    <header className='titulus'>
        <h1>Batman</h1>
        <div id='titulus-batman' className='titulus-img'></div>
        <p>Él puede tomar la decisión que nadie más puede, la decisión correcta</p>
    </header>

    
    <section id="vehiculis">
    <div className="vehiculis-arca">
      <div className="item unus">
        <div className="notitia">
          <h2>Avión</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget fermentum. Ut laoreet ante lacus. Quisque ut tincidunt metus. Curabitur congue, arcu nec tempus sodales, neque sem ultrices mauris, eu tincidunt nibh nibh eu massa. Aenean rhoncus quis nibh ac facilisis.</p>
          <small>Fabricado en 2005</small>
        </div>
        <img src='./imagenes/batman/avion.jpg'/>
      </div>

      <div className="item duo">
        <div className="notitia">
          <h2>Moto</h2>
          <p>Nulla aliquip cupidatat voluptate veniam nostrud aliquip sit enim officia. Sit eu pariatur officia qui dolor adipisicing cupidatat. Sit consectetur et eu ut esse laboris nulla.</p>
          <small>Fabricado en 2006</small>
        </div>
        <img src="./imagenes/batman/moto.jpg"/>
      </div>
      
      <div className="item tribus">
        <div className="notitia">
          <h2>Coche</h2>
          <p>Irure adipisicing est minim eu ad dolor. Eu ea commodo pariatur ut occaecat in cupidatat reprehenderit ut laborum duis. Sunt minim ex fugiat reprehenderit. Lorem consectetur reprehenderit commodo non</p>
          <small>Fabricado en 2007</small>
        </div>
        <img src="./imagenes/batman/car.jpg"/>
      </div>
    </div>

    <div className="vehiculis-titulus">
      <h1>Vehículos de Batman</h1>
    </div>
 </section>


    
    <section id="videre">
      <div className='videre-arca'>

        <svg className='retro' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
        <img id='foto' src='./imagenes/batman/justice.jpg' alt=''/>
        <svg className='ante' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
     
      </div>
    </section>

    </div>
  )
}
