import PixelBlast from '@/components/ui/PixelBlast'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import z from 'zod';



function Register() {
    const [view, setView] = useState(false)
    const [viewConfirm, setViewConfirm] = useState(false)
    const [registerData, setRegistrationData] = useState({
        username: "",
        password: "",
        confirm: "",
        email: "",
        agreement: false,
    })
    const [errors,setErros] = useState({})
    console.log(errors.email);
    
    console.log(registerData);


    const handleInputChange = (e, value) => {
        if (value == "agreement") {
            setRegistrationData({
                ...registerData,
                [value]: e.target.checked
            })
        } else {
            setRegistrationData({
                ...registerData,
                [value]: e.target.value
            })
        }
    }

    const registerSchema = z.object({
        username: z.string().trim().min(3,"Username must be a min of 3 charachters long"),
        password: z.string().min(8,"Password must be minimum 8 charachter long"),
        confirm: z.string(),
        email: z.email("Invalid email"),
        agreement:z.literal(true ,{error: "Please accept the agreement to continue"})
    }).refine(data => data.password === data.confirm ,{
        message: "Passwords do not match",
        path: ["confirm"]
    })

    const validate = () => {
        const result = registerSchema.safeParse(registerData)
        if(!result.success){
            const tree = z.treeifyError(result.error)
            console.log(tree.properties);
            setErros(tree.properties)
        }
        
    }
    return (
        <>
            <div className='' style={{ width: '1080px', height: '1080px', position: 'relative' }}>
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
            <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784428720/FIERZIO.gg_3_-Photoroom_npjprr.png" className='w-140 fixed left-1/7 top-1/7' alt="" />
            <main className='w-full h-screen flex justify-end items-center fixed top-0 right-30'>
                <section className='bg-card p-10 w-1/4 flex flex-col gap-5 rounded-3xl'>
                    <div className="flex justify-end w-full">
                        <Link to={"/"} className='border p-2 rounded-xl cursor-pointer' ><AiFillHome /></Link>
                    </div>
                    <h1 className='text-4xl font-bold text-center'>Create account</h1>
                    <input value={registerData.username} onChange={(e) => handleInputChange(e, "username")} type="text" placeholder='Enter username' className='p-3 bg-[rgba(255,255,255,0.1)] rounded-xl w-full' />
                    {errors?.username?.errors[0] && <h1>{errors.username.errors[0]}</h1> }
                    <input value={registerData.email} onChange={(e) => handleInputChange(e, "email")} type="email" placeholder='Enter email' className='p-3 bg-[rgba(255,255,255,0.1)] rounded-xl w-full' />
                    {errors?.email?.errors[0] && <h1 className='text-red-500' >Error: {errors.email.errors[0]}</h1> }
                    <div className='relative w-full'>
                        <input value={registerData.password} onChange={(e) => handleInputChange(e, "password")} type={view ? "text" : "password"} placeholder='Enter Password' className='p-3 bg-[rgba(255,255,255,0.1)] rounded-xl w-full' />
                        {
                            view ? <Eye onClick={() => setView(!view)} className='absolute right-3 top-1/4' />
                                : <EyeOff onClick={() => setView(!view)} className='absolute right-3 top-1/4' />
                        }

                    </div>
                    {errors?.password?.errors[0] && <h1 className='text-red-500' >Error: {errors.password.errors[0]}</h1> }
                    <div className='relative w-full'>
                        <input value={registerData.confirm} onChange={(e) => handleInputChange(e, "confirm")} type={viewConfirm ? "text" : "password"} placeholder='Confirm Password' className='p-3 bg-[rgba(255,255,255,0.1)] rounded-xl w-full' />
                        {
                            view ? <Eye onClick={() => setViewConfirm(!viewConfirm)} className='absolute right-3 top-1/4' />
                                : <EyeOff onClick={() => setViewConfirm(!viewConfirm)} className='absolute right-3 top-1/4' />
                        }
                    </div>
                    {errors?.confirm?.errors[0] && <h1 className='text-red-500' >Error: {errors.confirm.errors[0]}</h1> }
                    <div className=''>
                        <input onChange={(e) => handleInputChange(e, "agreement")} className='' type="checkbox" name="" id="" />
                        <span className='ps-3 text-center'>I accept the terms and conditions and privacy policy</span>
                    </div>
                    {errors?.agreement?.errors[0] && <h1 className='text-red-500' >Error: {errors.agreement.errors[0]}</h1> }
                    <button onClick={validate} className='bg-red-900 p-3 rounded-xl text-center' >Create Account</button>
                    <Link to={"/register"} className='border p-2 rounded-xl text-sm cursor-pointer bg-[rgba(255,255,255,0.1)] flex justify-center items-center' >Already have an account? Log in <ArrowRight /></Link>
                </section>
            </main>
        </>
    )
}

export default Register