import { notifications } from '@/assets/dummyNotiofications'
import React from 'react'
import { MdClear } from 'react-icons/md'

function UserNotifications() {
  return (
    <>
      <main className='p-10 flex flex-col  w-full h-full'>
        <div className='flex gap-10 items-center pb-10'>
          <h1 className="text-3xl font-bold ">Notifications</h1>
          {/* <h1 className='text-xl bg-accent py-3 px-4 rounded-xl' >7</h1> */}
        </div>

        <section className='flex flex-col gap-5'>
          {
            notifications.slice(0, 7).map((item, index) => (
              <div className='grid grid-cols-2 rounded-2xl border p-5 border-zinc-600'>
                <div key={index + "ppp"} className="flex flex-col gap-2 text-2xl ">
                  <h1></h1>
                  <h1 className='font-bold'>{item.title}</h1>
                  <h1 className='text-lg'>{item.message}</h1>
                </div>
                <div className="grid grid-cols-4 gap-5 items-center justify-center">
                  {item.priority == "low" && <h1 className='border w-20 text-center rounded p-2 text-green-500 border-green-500' >{item.priority}</h1>}
                  {item.priority == "medium" && <h1 className='border w-20 text-center rounded p-2 text-yellow-500 border-yellow-500' >{item.priority}</h1>}
                  {item.priority == "high" && <h1 className='border w-20 text-center rounded p-2 text-red-500 border-red-500' >{item.priority}</h1>}
                  {item?.action?.label && <button className='bg-[#1d1d1d] p-3 rounded-xl cursor-pointer hover:bg-accent-foreground duration-500'>{item?.action?.label}</button>}
                  <button className="flex justify-center p-3 font-bold w-10 hover:bg-accent-foreground duration-500 rounded-lg cursor-pointer bg-[#1d1d1d]"><MdClear /></button>
                </div>
              </div>
            ))
          }
        </section>
      </main>
    </>
  )
}

export default UserNotifications