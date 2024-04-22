import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconDeals, IconTransactions, IconVerifiers } from './svgs'

const Navbar = () => {

    const links = [
        {
            name: "Verifiers",
            path: "/dashboard/verifiers",
            icon: <IconVerifiers />
        },
        {
            name: "Deals",
            path: "/dashboard/deals",
            icon: <IconDeals />

        },
        {
            name: "Transactions",
            path: "/dashboard/transactions",
            icon: <IconTransactions />
        }
    ]
  return (
    <div className='py-10 px-6 h-screen flex  w-full items-start flex-col' style={{boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.06)' }} id='SideBar'>
        <div className=' w-full mb-[50px]'>
            <img src="/LOGO.svg" className='mx-auto' alt="Logo of business" />
        </div>
        {links.map((link) => (
            <NavLink className="w-full" to={link.path}>
                <div className='px-5 py-4 h-fit rounded w-full bg-inherit'>
                    <span className='flex items-center  gap-4'>
                        <span className='icon-color'>{link.icon}</span>
                        {link.name}
                    </span>
                </div>
            </NavLink>
        ))}

       
    </div>
  )
}

export default Navbar