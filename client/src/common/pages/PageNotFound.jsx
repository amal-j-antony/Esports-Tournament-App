import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { FaDashcube, FaDatabase } from 'react-icons/fa6'
import { useAuth } from '@/context/AuthProvider'

function PageNotFound() {
  const { user } = useAuth()
  return (
    <>
        
        <main className='w-full min-h-screen flex flex-col gap-5 justify-center items-center'>
          <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1785232826/rip-Photoroom_sc2kvk.png" className='w-50 h-50' alt="" />
            <h1 className="text-5xl font-bold">404</h1>
            <p>Page not found</p>
            <Link to={"/"} className='flex items-center gap-2' ><FaHome/> Back to home page</Link>
            <Link to={`/dashboard/discover/${user.userID}`} className='flex items-center gap-2' ><FaDatabase/> Back to dashboard</Link>
        </main>
    </>
  )
}

export default PageNotFound