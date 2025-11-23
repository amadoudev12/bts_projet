import React, { useEffect, useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import etudiantService from '../api/etudiantService'
export default function dashboard() {
    const [count , setCount] = useState(0)
    useEffect(()=>{
        const getCount = async()=>{
            try{
                const res = await etudiantService.count()
                setCount(res.data.nombre.total)
                console.log(res.data.nombre.total);
            }catch(err){
                console.log(err);
            }
        }
        getCount()
        
    },[])
  return (
    <div>
        <DashboardNav/>
        <div>
            <h2>Nombre d'etudiants</h2>
            <h1>{count}</h1>
        </div>
    </div>
  )
}
