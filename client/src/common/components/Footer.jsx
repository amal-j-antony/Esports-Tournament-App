import React from 'react'

function Footer() {
  return (
    <main className=' flexMain flex-wrap w-full text-white p-5 bg-card mt-20'>
      <footer className='w-[90%] grid grid-cols-1 md:grid-cols-4'>
        <div className="flex flex-col items-center gap-5">        
          <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784428720/FIERZIO.gg_3_-Photoroom_npjprr.png" className='h-30 ' alt="" />
          <h1 className='text-3xl font-semibold flex items-center'>
            Fierzio.gg
          </h1>
          
        </div>

        <div className="flex justify-center">
          <ul>
            <li className='text-2xl pb-2 font-semibold'>Tournaments</li>
            <li>View tournaments</li>
            <li>Streams</li>
            <li>Game List</li>
            <li>Suggest a game</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <ul>
            <li className='text-2xl pb-2 font-semibold'>Legal</li>
            <li>Terms and conditions</li>
            <li>Privacy policy</li>
            <li>Prize distribution</li>
            
          </ul>
        </div>

        
        <div className='flex justify-center'>
          <ul>
            <li className='text-2xl pb-2 font-semibold'>Contact</li>
            <li>support@fierzio.com</li>
            <li>Help center</li>
            <li>Chat with an agent</li>
          </ul>
        </div>
      </footer>
    </main>
  )
}

export default Footer