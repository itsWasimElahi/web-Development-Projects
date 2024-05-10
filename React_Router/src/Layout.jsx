import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// awin
function Layout() {
  return (
    <>
    <Header/>
    <Outlet />  {/* ye react router ka wo feature ha jo apne ooper aur neechay ki cheezain same rkhta ha but Outlet k part ma hum changes kr skte hain  */}
    <Footer />
    </>
  ) 
}

export default Layout