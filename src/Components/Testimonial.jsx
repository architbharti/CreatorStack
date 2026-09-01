import React from 'react'
import { assets } from '../assets/assets'

const Testimonial = () => {
    const dummyTestimonialData = [
        {
            image: "src/assets/5ed6bbd8-5038-48e1-bb93-ea14fe624f15.jpg",
            name: 'Lakshita Raj',
            title: 'Marketing Director, Cystra',
            content: 'CreatorStack.ai has made my content workflow so much faster. I can write articles, generate images, and come up with blog titles without jumping between different tools. Everything being in one place is a huge plus.',
            rating: 5,
        },
        {
            image: "src/assets/4bb71892-7259-4abe-8f07-8e66040f2b9d.jpg",
            name: 'Aditya Bharti',
            title: 'Video Editor, Vigilante',
            content: 'I have tried a lot of AI tools, but I really like how simple CreatorStack.ai feels. The image generation and background removal work really well, especially when I need quick results. It saves me a lot of time.',
            rating: 4,
        },
        {
            image: "src/assets/1744405742110.jpg",
            name: 'Kanav Kapoor',
            title: 'Sr. SDE, Atlassian',
            content: 'CreatorStack.ai is becoming my go-to toolkit for everyday creative tasks. Whether I’m working on an article, editing an image, or brainstorming ideas, I can get things done quickly without using multiple websites.',
            rating: 4 ,
        },
    ]

    return (
        <div className='px-4 sm:px-20 xl:px-32 py-24'>
            <div className='text-center'>
                <h2 className='text-slate-700 text-[42px] font-semibold'>Loved by Creators</h2>
                <p className='text-gray-500 max-w-lg mx-auto'>Don't just take our word for it. Here's what our users are saying.</p>
            </div>
            <div className='flex flex-wrap mt-10 justify-center'>
                {dummyTestimonialData.map((testimonial, index) => (
                    <div key={index} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer'>
                        <div className="flex items-center gap-1">
                           {Array(5).fill(0).map((_ , index)=>(<img key={index} src={index < testimonial.rating ? assets.star_icon : assets.star_dull_icon} className='w-4 h-4' alt='testimonial' />))} 
                        </div>
                        <p className='text-gray-500 text-sm my-5'>"{testimonial.content}"</p>
                        <hr className='mb-5 border-gray-300' />
                        <div className='flex items-center gap-4'>
                            <img src={testimonial.image} className='w-12 object-contain rounded-full' alt='' />
                            <div className='text-sm text-gray-600'>
                                <h3 className='font-medium'>{testimonial.name}</h3>
                                <p className='text-xs text-gray-500'>{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial
