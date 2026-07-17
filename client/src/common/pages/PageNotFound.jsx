import React from 'react'
import Header from '../components/Header'

function PageNotFound() {
  return (
    <>
        <Header/>
        <main className='w-full min-h-screen flex justify-center items-center'>
            <h1 className="text-5xl font-bold">404</h1>
        </main>
    </>
  )
}

export default PageNotFound