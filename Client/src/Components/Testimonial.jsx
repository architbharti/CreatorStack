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
            rating: 4,
        },
    ]

    return (
        <div className='px-4 sm:px-10 lg:px-20 xl:px-32 py-24 bg-[#EBE9E1]'>

            {/* Heading */}
            <div className='text-center'>
                <p className='text-[#E43D12] text-xs font-semibold tracking-[0.3em] uppercase mb-3'>
                    Creator Stories
                </p>

                <h2 className='text-[#171717] text-4xl sm:text-[42px] font-bold'>
                    Loved by Creators
                </h2>

                <p className='text-[#6B6863] max-w-lg mx-auto mt-3 text-sm sm:text-base'>
                    Don't just take our word for it. Here's what our users are saying.
                </p>
            </div>


            {/* Testimonials */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 max-w-6xl mx-auto'>

                {dummyTestimonialData.map((testimonial, index) => (

                    <div
                        key={index}
                        className='relative p-7 bg-[#FFFDFC] border border-[#E6E0D8] rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_24px_rgba(23,23,23,0.05)]'
                    >

                        {/* Decorative number */}
                        <span className='absolute top-5 right-6 text-xs font-semibold tracking-widest text-[#C9C3BA]'>
                            0{index + 1}
                        </span>


                        {/* Stars */}
                        <div className='flex items-center gap-1'>
                            {Array(5).fill(0).map((_, index) => (
                                <img
                                    key={index}
                                    src={
                                        index < testimonial.rating
                                            ? assets.star_icon
                                            : assets.star_dull_icon
                                    }
                                    className='w-4 h-4'
                                    alt='rating'
                                />
                            ))}
                        </div>


                        {/* Quote */}
                        <p className='text-[#514C47] text-sm leading-6 my-6'>
                            "{testimonial.content}"
                        </p>


                        {/* Divider */}
                        <div className='h-px bg-[#E6E0D8] mb-5' />


                        {/* User */}
                        <div className='flex items-center gap-4'>

                            <div className='relative'>
                                <img
                                    src={testimonial.image}
                                    className='w-12 h-12 object-cover rounded-full border-2 border-[#FFFDFC]'
                                    alt={testimonial.name}
                                />

                                {/* Accent */}
                                <span
                                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#FFFDFC] ${
                                        index === 0
                                            ? 'bg-[#FFA2B6]'
                                            : index === 1
                                                ? 'bg-[#FFB11D]'
                                                : 'bg-[#E43D12]'
                                    }`}
                                />
                            </div>

                            <div className='text-sm'>
                                <h3 className='font-semibold text-[#171717]'>
                                    {testimonial.name}
                                </h3>

                                <p className='text-xs text-[#6B6863] mt-0.5'>
                                    {testimonial.title}
                                </p>
                            </div>

                        </div>

                    </div>

                ))}

            </div>


            {/* Bottom editorial accent */}
            <div className='flex justify-center mt-14'>
                <div className='flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#6B6863]'>
                    <span className='w-10 h-px bg-[#171717]' />
                    Real people. Real experiences.
                    <span className='w-10 h-px bg-[#171717]' />
                </div>
            </div>

        </div>
    )
}

export default Testimonial
