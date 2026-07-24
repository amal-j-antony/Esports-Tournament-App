import { ArrowLeftCircle, ArrowRight, Eye, EyeDashedIcon, EyeOff, HomeIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PixelBlast from '@/components/ui/PixelBlast'
import { AiFillHome } from "react-icons/ai";
import z, { email } from 'zod';
import { loginToAccountAPI } from '@/services/accountMethods';
import { toast } from 'react-toastify';

function Login() {
    const navigate = useNavigate()
    const [view, setView] = useState(false)
    const [errors,setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e, value) => {
        setUserData({
            ...userData,
            [value]: e.target.value
        })
    }

    const loginSchema = z.object({
        email: z.email("Invalid Email"),
        password: z.string().min(1,"Password cannot be empty")
        
    })

    const validate = () => {
        const result = loginSchema.safeParse(userData)
        console.log(result);
        if(result.success){
            accountLogin()
            
        }else{
            const tree = z.treeifyError(result.error)
            console.log("tree",tree);
            setErrors(tree.properties)
        }
        
    }

    const accountLogin = async () => {
        const result = await loginToAccountAPI(userData)
        console.log(result);
        if(result.status === 200){
            toast.success("Login successful")
            navigate("/dashboard/popular")
        }else{
            toast.error("Something went wrong")
        }
        
    }

    return (
        <>
            <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
                <PixelBlast
                    variant="square"
                    pixelSize={4}
                    color="#a03116"
                    patternScale={2}
                    patternDensity={1}
                    enableRipples
                    rippleSpeed={0.3}
                    rippleThickness={0.1}
                    rippleIntensityScale={1}
                    speed={0.5}
                    transparent
                    edgeFade={0.25}
                />
            </div>
            <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784428720/FIERZIO.gg_3_-Photoroom_npjprr.png" className='w-140 absolute left-1/7 top-1/7' alt="" />
            <main className='w-full h-screen flex justify-end items-center fixed top-0 right-30'>
                <section className='bg-card p-10 w-1/4 flex flex-col gap-5 rounded-3xl'>
                    <div className="flex justify-end w-full">
                        <Link to={"/"} className='border p-2 rounded-xl cursor-pointer' ><AiFillHome /></Link>
                    </div>

                    <h1 className='text-4xl font-bold text-center'>Welcome Back</h1>
                    <input value={userData.email} onChange={(e) => handleInputChange(e, "email")} type="email" placeholder='Enter email' className='p-3 bg-[rgba(255,255,255,0.1)] rounded-xl w-full' />
                    {
                        errors?.email?.errors[0] && <h1 className='text-yellow-500'>{errors?.email?.errors[0]}</h1>
                    }
                    <div className='relative w-full'>
                        <input value={userData.password} onChange={(e) => handleInputChange(e, "password")} type={view ? "text" : "password"} placeholder='Enter Password' className='p-3 bg-[rgba(255,255,255,0.1)] rounded-xl w-full' />
                        {
                            view ? <Eye onClick={() => setView(!view)} className='absolute right-3 top-1/4' />
                                : <EyeOff onClick={() => setView(!view)} className='absolute right-3 top-1/4' />
                        }
                    </div>
                    {
                        errors?.password?.errors[0] && <h1 className='text-yellow-500'>{errors?.password?.errors[0]}</h1>
                    }

                    <button onClick={() => validate()} className='bg-red-900 p-3 rounded-xl cursor-pointer text-center' >Log In</button>
                    <Link to={"/register"} className='border p-2 rounded-xl text-sm cursor-pointer bg-[rgba(255,255,255,0.1)] flex justify-center items-center' >Dont have an account? Sign up Now <ArrowRight /></Link>
                </section>
            </main>
        </>
    )
}

export default Login

// old
//  <video src="/711fb935f9_dark-souls-3-inspired-campfire.mp4" className='fixed top-0 w-full h-screen object-cover' autoPlay muted loop ></video>
//             <main className='h-screen flex justify-end items-center z-2 container'  >
//                 <section className='flex flex-col justify-center items-center backdrop-blur-xl border p-10 rounded-xl gap-5'>
//                     <div className="flex justify-start w-full">
//                         <Link to={"/"} className='border p-2 rounded-xl cursor-pointer' >Back to home</Link>
//                     </div>
//                     <h1 className="text-4xl font-bold">
//                         Welcome back
//                     </h1>
//                     <input type="text" placeholder='Enter Username' className='bg-[rgba(255,255,255,0.1)] p-3 rounded-xl w-full' />
//                     <div className='relative w-full'>
//                         <input type={view ? "text" : "password"} placeholder='Enter Password' className='p-3 bg-[rgba(255,255,255,0.1)] rounded-xl w-full' />
//                         {
//                             view ? <Eye onClick={() => setView(!view)} className='absolute right-3 top-1/4' />
//                                 : <EyeOff onClick={() => setView(!view)} className='absolute right-3 top-1/4' />
//                         }
//                     </div>
//                     <button className='bg-slate-500 flex-1 p-3 rounded-xl w-full cursor-pointer' >Login</button>
//                     <Link to={"/"} className='border p-2 rounded-xl cursor-pointer bg-[rgba(255,255,255,0.1)] flex items-center' >Dont have an account? Sign up Now <ArrowRight/></Link>
//                 </section>
//             </main>

