import React from 'react'
import { Link } from 'react-router-dom'
export default function DashboardNav() {
    const menus = [
        {
            name:'Etudiants',
            path:'/etudiants'
        },
        {
            name:'Matiere',
            path:'/matiere'
        },
        {
            name:'Filiere',
            path:'/filiere'
        },
        {
            name:'Utilisateu',
            path:'/utilisateur'
        },
    ]
  return (
    <div>
        <nav className='shadow-md'>
            <ul className='flex gap-4 items-center justify-center '>
                {
                    menus.map(menu=>(
                        <li key={menu.name} className='p-5'><Link className='hover:text-blue-600 text-center text-gray-700' to={menu.path}>{menu.name}</Link></li>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}
