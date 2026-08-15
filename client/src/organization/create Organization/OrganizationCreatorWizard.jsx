import SideBar from '@/common/components/SideBar'
import { button, errorStyle, inputStyle } from '@/data/universalStyles'
import React, { useState } from 'react'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { FaArrowLeft, FaFileArrowUp } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createOrganizationAPI } from '@/services/organizationMethods'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthProvider'

function OrganizationCreatorWizard() {
    const [previewLogo,setPreviewLogo] = useState("")
    const navigate = useNavigate()
    const {user} = useAuth()
   
    const organizationSchema = z.object({
        oName: z.string().min(1, 'Name cannot be empty'),
        oDescription: z.string().optional(),
        oLogo: z.file().mime(['image/png','image/jpeg']).optional()
    })

    const methods = useForm({
        resolver: zodResolver(organizationSchema),
        defaultValues: {
            oName: "",
            oDescription: "",
            oLogo: undefined
        }
    })

    

    const onSubmit = async () => {
        
        console.log(methods.formState.errors);
        const orgData = methods.getValues()
        const formData = new FormData()
        formData.append("oName",orgData.oName)
        formData.append('oDescription',orgData.oDescription)
        formData.append('oLogo',orgData.oLogo)
        const result = await createOrganizationAPI(formData)
        console.log(result);
        toast(`Organization created successfully`)
        navigate(`/organization/${user.userID}/home`)
    }

    const logoPreviewSetup = (img) => {
        if(!methods?.formState?.errors?.oLogo?.message ){
            const imgURL = URL.createObjectURL(img)
            setPreviewLogo(imgURL)
        }
    }

    return (
        <>
            <main className="grid grid-cols-7 gap-1">
                <SideBar currentType={'dashboard'} currentTab={"organization"} />
                <section className="col-span-6 bg-card p-10">
                    
                    <form onSubmit={methods.handleSubmit(onSubmit,
                        (errors) => console.log(errors)
                    )} className="grid grid-cols-2 gap-5 p-10 justify-center bg-[#1d1d1d] border rounded-2xl w-3/4 mx-auto ">
                        <Link to={`/organization/none`} className='flex items-center gap-2 ' ><FaArrowLeft /> Back</Link>
                        <h1 className='col-span-2 text-center text-3xl font-bold'>Create Organiation</h1>

                        <label className='text' htmlFor="">Enter Organiation Name</label>
                        <input {...methods.register("oName")} className={inputStyle} type="text" />
                        {methods.formState.errors.oName?.message && <h1 className={errorStyle}>{methods.formState.errors.oName.message}</h1>}

                        <label className='text' htmlFor="">Enter Organiation Description</label>
                        <textarea {...methods.register("oDescription")} className={inputStyle} type="text" />
                        {methods.formState.errors.oDescription?.message && <h1 className={errorStyle}>{methods.formState.errors.oDescription.message}</h1>}
                        <label htmlFor="uploadImg" className='col-span-2 grid grid-rows-[3fr_1fr] gap-5 justify-center cursor-pointer'>
                            {previewLogo? <img src={previewLogo} className='h-50 rounded-xl w-50 object-cover' alt="" /> : <FaFileArrowUp className='text-5xl mx-auto' />}
                            <h1 className='font-bold'>Upload Organization logo</h1>
                        </label>
                        <Controller
                            control={methods.control}
                            name={'oLogo'}
                            render={({ field }) => (
                                <input onChange={(e) => {
                                    field.onChange(e.target.files[0])
                                    logoPreviewSetup(e.target.files[0])
                                }}
                                    id='uploadImg' 
                                    type='file'
                                    hidden />
                            )}
                        />
                        
                        {
                            methods.formState.errors.oLogo?.message && <h1 className={errorStyle}>Invalid file uploaded</h1>
                        }
                        <div className="col-span-2 flex justify-center">
                            <button type='submit' className={button}>Create Organization</button>
                        </div>

                    </form>
                </section>
            </main>
        </>
    )
}

export default OrganizationCreatorWizard



// const [orgData, setOrgData] = useState({
//         oName: '',
//         oDescription: "",
//         oLogo: ""
//     })
//     const [errors,setError] = useState({
//         oName: null,
//             oDescription: null,
//             oLogo: null
//     })
//     console.log(orgData);


//     const handleInput = (e) => {
//         if (e.target.name == "oLogo") {
//             setOrgData({ ...orgData, [e.target.name]: e.target.files[0] })
//         } else {
//             setOrgData({ ...orgData, [e.target.name]: e.target.value })
//         }
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const { oName, oDescription, oLogo } = orgData
//         const errors = {
//             oName: null,
//             oDescription: "",
//             oLogo: ''
//         }
//         if (!oName) {
//             errors.oName = "Name cannot be empty"
//         }
//         if(!oLogo.type.startsWith('image/')){
//             errors.oLogo = 'Uploaded file must be an image'
//         }
//         setError(errors)
//     }