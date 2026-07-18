import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <>
            <main className='w-full flex justify-center items-center fixed top-0 z-12 backdrop-blur' >
                {/* <img src="https://images.unsplash.com/photo-1761998066478-821bf52c2849?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="inset-0 absolute h-full  object-cover w-full -z-1" /> */}
                <section className='w-9/10 flex justify-between items-center ' >
                    <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784259725/FIERZIO.gg_1_-Photoroom_rzzi4f.png" className='h-25' alt="" />
                    <ul className="flex font-bold ">
                        <li className='text-xl cursor-pointer hover:bg-accent p-5 rounded-2xl duration-500' >Tournaments</li>
                        <li className='text-xl cursor-pointer hover:bg-accent p-5 rounded-2xl duration-500' >Leaderboard</li>
                        <li className='text-xl cursor-pointer hover:bg-accent p-5 rounded-2xl duration-500' >Clans</li>
                        <li className='text-xl cursor-pointer hover:bg-accent p-5 rounded-2xl duration-500' >Community</li>
                        <Link to={"/login"} className='text-xl cursor-pointer hover:bg-accent p-5 rounded-2xl duration-500' >Login</Link>
                        <Link to={"/register"} className='text-xl cursor-pointer border border-accent-foreground hover:bg-accent p-5 rounded-2xl duration-500' >Sign Up</Link>
                    </ul>
                </section>

            </main>
        </>
    )
}

export default Header