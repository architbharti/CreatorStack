import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/react'

const ToolShowcase = () => {

  const navigate = useNavigate()
  const { user } = useUser()

  return (
    <div className='px-4 sm:px-10 lg:px-20 xl:px-32 my-24'>

      <div className='text-center'>
        <h2 className='text-[#171717] text-[42px] font-semibold'>
          Powerful AI Tools
        </h2>

        <p className='text-[#6B6863] max-w-lg mx-auto mt-2 text-sm leading-6'>
          Everything you need to create, enhance, and optimize your content
          with cutting-edge AI technology.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto'>

        {
          AiToolsData.map((tool, index) => {

            const Icon = tool.Icon

            return (
              <div
                key={index}
                className='p-6 rounded-xl bg-[#FFFDFC] border border-[#E6E0D8] shadow-[0_8px_25px_rgba(23,23,23,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(23,23,23,0.10)] transition-all duration-300 cursor-pointer'
                onClick={() => user && navigate(tool.path)}
              >

                {/* Tool Icon */}
                <Icon
                  className='w-12 h-12 text-white rounded-xl p-2'
                  style={{
                    background: `linear-gradient(135deg, ${tool.bg.from}, ${tool.bg.to})`
                  }}
                />

                {/* Title */}
                <h3 className='mt-6 mb-3 text-lg font-semibold text-[#171717]'>
                  {tool.title}
                </h3>

                {/* Description */}
                <p className='text-[#6B6863] text-sm leading-6'>
                  {tool.description}
                </p>

              </div>
            )
          })
        }

      </div>

    </div>
  )
}

export default ToolShowcase