import React from 'react'
import "../styles/Header.css"
import SearchBar from './SearchBar'
import Image from 'next/image'

import Calender from "../public/calender.png"
import Bell from "../public/bell.png"
import img from "../public/photo.png"
import chevron from "../public/Arrow2.png"

const Header = () => {
    const date = new Date("2024-01-27")
    // console.log("Toadys date is:",date);
  return (
    <header className='header_container'>
        <div className="left__conatiner_header">
            <h3 className='Dash_header'>Dashboard</h3>
            <SearchBar />
        </div>
        <div className="right__container_header">
            <div className="date">
                <Image width={20} height={20} src={Calender} alt='calender' />
                <h4 className='date_p'>January 27, 2024</h4>
            </div>
            <div className="notif_user">
                <div className="notifications">
                    <Image width={40} height={40} src={Bell} alt='bell'/>
                </div>
                <div className="user">
                <Image src={img} width={38} height={38} alt='user'/>
                    <div className="info__user">
                        
                        <div className="mail">
                            <h4>Justin Bergson</h4>
                            <p>Justin@gmail.com</p>
                        </div>
                    </div>
                    <Image width={20} height={20} src={chevron} alt='chevron-down'/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
