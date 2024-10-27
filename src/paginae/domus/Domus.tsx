import { useState } from "react";
import estilus from './estilus.module.css';
import { NavLink } from "react-router-dom";

export const Domus = () => {

  const [numerus, setnumerus] = useState<number>(0);

  const {titulo, tonitruum, botones} = estilus;

  return (
    <>
    <h1 id="title" className={titulo}> {numerus%2 === 0 ? 'Diseño web' : 'Apps interactivas'} </h1>

    <img onClick={() => setnumerus(numerus +1)} className={tonitruum} src="./tonitrui.png" alt="" />
    
    <div className={botones}> 
	    <NavLink to={''}>Usuarios</NavLink>
	    <NavLink to={'/batman'}>Batman</NavLink>
	    <NavLink to={''}>Simpsons</NavLink>
	    <a href="https://www.upv.es/">
		    Videos clase
	    </a>
</div>

    
    </>
  )
}
