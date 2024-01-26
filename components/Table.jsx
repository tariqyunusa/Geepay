import React from 'react'
import "../styles/Table.css"
import Link from 'next/link'
import Image from 'next/image'
import download from "../public/download.png"
const Table = () => {
    const data = [
        {
            img: "/Marcus.png",
            name: "Marcus Bergson",
            date: "Nov 15, 2023",
            Amount: "$80,000",
            Status: "Paid",
            invoice: "view"
        },
        {
            img: "/Jayden.png",
            name: "Jayden Vaccaro",
            date: "Nov 15, 2023",
            Amount: "$150,000",
            Status: "Refund",
            invoice: "view"
        },
        {
            img: "/Corey.png",
            name: "Corey Shelfier",
            date: "Nov 14, 2023",
            Amount: "$87,000",
            Status: "Paid",
            invoice: "view"
        },
        {
            img: "/Cooper.png",
            name: "Cooper Press",
            date: "Nov 14, 2023",
            Amount: "$100,000",
            Status: "Refund",
            invoice: "view"
        },
        {
            img: "/Phillip.png",
            name: "Phillip Lubin",
            date: "Nov 14, 2023",
            Amount: "$78,000",
            Status: "Paid",
            invoice: "view"
        },
    ]
  return (
    <div className='table_section'>
        <header className="table__header">
            <h4 className="header">Last Orders</h4>
            <Link href="#" className='header_link'>See All</Link>
        </header>
        <table className='table'>
            <thead className='table_head'>
                <tr className='t-row'>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Invoice</th>

                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className='table_data data_1'><Image src={item.img} width={20} height={20} alt={item.name}/><p>{item.name}</p></td>
                        <td className='table_data'>{item.date}</td>
                        <td className='table_data'>{item.Amount}</td>
                        <td className='table_data'>{item.Status}</td>
                        <td className='table_data data_last'><Image src={download} width={15} height={15} alt='icon'/><p>view</p></td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default Table
