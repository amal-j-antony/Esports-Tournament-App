import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'


function Home() {
    const carouselImages = [
        {
            url: "https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: "image1"
        },
        {
            url: "https://images.unsplash.com/photo-1573676564862-0e57e7eef951?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: "image2"
        },
        {
            url: "https://images.unsplash.com/photo-1656926208217-8e933d05160f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: "image3"
        }
    ]
    return (
        <>
            <Header />
            <main className='w-full min-h-screen flex justify-center bg-background'>
                <section className='flex justify-center w-full'>
                    <Carousel carouselImages={carouselImages}/>
                </section>
            </main>
        </>
    )
}

export default Home