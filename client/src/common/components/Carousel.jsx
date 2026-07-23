import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { carouselImages } from '@/data/heroCarousel'
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';


function Carousel() {
    const [carouselCurrent, setCarouselCurrent] = useState(0)
    const [carouselPrev, setCarouselPrev] = useState(null)
    const [carouselDirection, setCarouselDirection] = useState("")
    const navigate = useNavigate()
    const handleCarousel = (operation) => {
        if (operation == "increment") {
            setCarouselDirection("next")
            setCarouselPrev(carouselCurrent)
            setCarouselCurrent(prev => (prev + 1) % carouselImages.length)
        }

        if (operation == "decrement") {
            setCarouselDirection("prev")
            setCarouselPrev(carouselCurrent)
            setCarouselCurrent(prev => (prev - 1 + carouselImages.length) % carouselImages.length)
        }
    }

    const handleCarouselDirection = (index) => {

        if (carouselDirection == "prev") {
            if (carouselCurrent == index) {
                return "w-full absolute inset-0 animate__animated animate__fadeInLeft duration-1000"
            } else if (carouselPrev == index) {
                return "absolute inset-0 animate__animated animate__fadeOutRight duration-1000"
            } else {
                return "hidden"
            }
        } else {
            if (carouselCurrent == index) {
                return "w-full absolute inset-0 animate__animated animate__fadeInRight duration-1000"
            } else if (carouselPrev == index) {
                return "absolute inset-0 animate__animated animate__fadeOutLeft duration-1000"
            } else {
                return "hidden"
            }
        }
    }

    useEffect(()=>{
       const timer = setTimeout(()=>{
            handleCarousel("increment")
        },10000)

        return () => clearTimeout(timer)
    })
    return (
        <>
            <main className='w-full h-[80vh] flex justify-center relative overflow-hidden'>
                {
                    carouselImages.map((item, index) => (
                        <div
                            onAnimationEnd={() => setCarouselPrev(null)} key={item.id} className={handleCarouselDirection(index)}>
                            <img className='w-full h-[80vh] object-cover' src={item.url} alt="" />
                            <div className="absolute inset-0 w-full h-full bg-[rgb(0,0,0,0.5)] grid grid-cols-2">                                
                                    <div className='justify-self-center self-center mt-15'>
                                        <img src={item.gameThumbnail} className='w-80 justify-self-center self-center rounded-2xl' alt="" />     
                                        <Button onClick={()=>navigate("/login")} className='mt-5 w-full p-9 text-xl cursor-pointer duration-500 hover:bg-card text-white bg-accent-foreground'>Play now</Button> 
                                    </div>                         
                            </div>
                        </div>
                    ))
                }
                {/* next slide to the right */}
                <div onClick={() => handleCarousel("increment")} className='absolute right-0 px-10 h-full flex items-center hover:backdrop-blur-2xl duration-500 cursor-pointer' >
                    <MdKeyboardArrowRight className='  text-5xl font-bold  z-2' />
                </div>
                {/* next slide to the left */}
                <div onClick={() => handleCarousel("decrement")} className='absolute left-0 px-10 h-full flex items-center hover:backdrop-blur-2xl duration-500 cursor-pointer' >
                    <MdKeyboardArrowLeft className='  text-5xl font-bold  z-2' />
                </div>
            </main>
        </>
    )
}

export default Carousel