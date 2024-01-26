"use client"
import React, { useState } from 'react'
import Chart from "@/components/Chart";
import "../styles/misc1.css"
import SideComp from './SideComp';
import delivered from "../public/delivered.png"
import box from "../public/box.png"
import cart from "../public/cart.png"
import currency from "../public/currency.png"
import line from "../public/lineChart1.png"
import line2 from "../public/lineChart2.png"
import line3 from "../public/lineChart3.png"
import line4 from "../public/lineChart4.png"
import bottom from "../public/bottom1.png"
import bottom2 from "../public/bottom2.png"
import bottom3 from "../public/bottom3.png"
import bottom4 from "../public/bottom4.png"

const Misc = () => {
  
 
  const info = "Total Order"
  const amount = 350
  
  const info2 = "Total Refund"
  const amount2 = 270
  const info3 = "Average Sales"
  const amount3 = 1567
  const info4 = "Total Income"
  const amount4 = "$350.00"
  
  return (
    <div className='top'>
       <Chart />
       <div className="grid_container">
       <div className="left_side">
        <SideComp pack={delivered} line={line} info={info} amount={amount} bottom={bottom} />
        <SideComp pack={box} line={line2} info={info2} amount={amount2} bottom={bottom2} />
        <SideComp pack={cart} line={line3} info={info3} amount={amount3} bottom={bottom3} />
        <SideComp pack={currency} line={line4} info={info4} amount={amount4} bottom={bottom4} />
       </div>
       </div>
       
    </div>
  )
}

export default Misc
