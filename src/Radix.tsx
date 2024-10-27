import { Navigate, Outlet, useLocation } from "react-router-dom"

export const Radix = () => {

    const {pathname} = useLocation();

    if (pathname === '/') {
        return <Navigate to="/domus"/>
    }

  return (
    <main>  
    <Outlet />
    </main>
  )
}
