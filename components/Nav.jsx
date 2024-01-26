import React from 'react'
import "../styles/Nav.css"
import Link from 'next/link'
import Image from 'next/image'

import Logo from "../public/Logo.png"
import Menu from "../public/menu.png"
import Trend from "../public/trend.png"
import People from "../public/People.png"
import Package from "../public/Package.png"
import Discount from "../public/div.png"
import Warning from "../public/warning.png"
import Light from "../public/Light.png"
import Moon from "../public/moon.png"
import Forward from "../public/Arrow-forward.png"
import Settings from "../public/settings2.png"
import Logout from "../public/logout2.png"
import Move from "../public/move.png"

const Nav = () => {
  return (
    <nav className='navbar'>
      <div className="menu_container">
        <div className="upper__container">
            <Link href="/"><Image src={Logo} width={40} height={40} alt='logo'/></Link> 
           <div className="o_links">
           <Link href="/"><Image src={Menu} width={40} height={40} alt='logo'/></Link> 
            <Link href="/"><Image src={Trend} width={40} height={40} alt='logo'/></Link> 
            <Link href="/"><Image src={People} width={40} height={40} alt='logo'/></Link> 
            <Link href="/"><Image src={Package} width={40} height={40} alt='logo'/></Link> 
            <Link href="/"><Image src={Discount} width={40} height={40} alt='logo'/></Link> 
            <Link href="/"><Image src={Warning} width={40} height={40} alt='logo'/></Link> 
            <div className="bg_color">
            <Link href="/"><Image src={Light} width={30} height={30} alt='logo'/></Link> 
            <Link href="/"><Image src={Moon} width={30} height={30} alt='logo'/></Link> 
            </div>
           </div>
            
        </div>
        <div className="lower__container">
            <Link href="/"><Image src={Move} width={40} height={40} alt='logo'/></Link>
            <Link href="/"><Image src={Settings} width={40} height={40} alt='logo'/></Link>
            <Link href="/"><Image src={Logout} width={40} height={40} alt='logo'/></Link>
            </div>
      </div>
      <div className="filler"></div>
    </nav>
  )

  }
export default Nav
