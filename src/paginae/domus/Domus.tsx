import { NavLink } from "react-router-dom";

export const Domus = () => {

 

  return (
    <>
    <div className="text-white font-sans pt-36 w-screen h-screen">
      <div className="flex flex-col justify-center items-center text-center gap-12">

        <img src="./imagenes/tonitrui.png" className="absolute opacity-20" alt=""/>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold pb-5 md:pb-20 z-10">
          <span className="text-[var(--color-caelum)]">Diseño </span>Web y 
          <br/>
          Apps <span className="text-[var(--color-caelum)]">Interactivas</span> 
        </h1>

        <p className="text-lg md:text-2xl">Aprendiendo a crear aplicaciones web</p>

        <div className="flex gap-4 z-10"> 
          <NavLink to={''} className="button">Usuarios</NavLink>

          <NavLink to={'/batman'} className="button">Batman</NavLink>

          <NavLink to={''} className="button">Simpsons</NavLink>
          
          <a className="button bg-gray-700" href="https://www.upv.es/">
              Videos clase
           </a>
        </div>

      </div>

    </div>
     
    
    
    
    </>
  )
}
