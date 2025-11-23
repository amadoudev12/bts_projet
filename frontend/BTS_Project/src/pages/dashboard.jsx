import React, { useEffect, useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import etudiantService from '../api/etudiantService'
import { Navigate } from 'react-router-dom'
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
    useEffect(()=>{
        const getAutorize = async()=>{
            const token = localStorage.getItem('token')
            if(!token){
                alert('non autoriser')
                return <Navigate to="/login"/>
            }
            try{
                const res = await fetch('http://localhost:5000/dashboard',{
                    headers:{authorization : `Bearer ${token}`}
                })
                const data = await res.json()
                console.log(data.message)
            }catch(err){
                console.log(err);
                return <Navigate to='/login'/>
            }
        }
        getAutorize()
    },[Navigate])
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
