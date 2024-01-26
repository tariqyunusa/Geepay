import React from 'react'
import "../styles/Platform.css"
import Link from 'next/link'
const Platform = () => {
  return (
    <div className='platform_container'>
        <header className='platform_header'>
            <h4 className='platform_h3'>Top platforms</h4>
            <Link href="#" className='link_platform'>See All</Link>
        </header>
        <div className="platform_body">
            <div className="platform">
                <h4 >Book Bazaar</h4>
                <div className="bar">
                    <div className="filler2"></div>
                </div>
                <div className="platform_bottom">
                    <p>$2,500,000</p>
                    <p>+15%</p>
                </div>
            </div>
            <div className="platform">
                <h4 >Artisan Aisle</h4>
                <div className="bar">
                    <div className="filler3"></div>
                </div>
                <div className="platform_bottom">
                    <p>$1,800,000</p>
                    <p>+10%</p>
                </div>
            </div>
            <div className="platform">
                <h4 >Toy Troop</h4>
                <div className="bar">
                    <div className="filler4"></div>
                </div>
                <div className="platform_bottom">
                    <p>$1,200,000</p>
                    <p>+8%</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Platform
