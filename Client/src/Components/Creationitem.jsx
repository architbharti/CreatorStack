import React, { useState } from 'react'
import Markdown from 'react-markdown'

const Creationitem = ({ item }) => {

  const [expanded, setExpanded] = useState(false)

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className='p-4 max-w-5xl text-sm bg-[#FFFDFC] border border-[#E6E0D8] rounded-lg cursor-pointer hover:border-[#D9D1C7] hover:shadow-[0_6px_20px_rgba(23,23,23,0.05)] transition-all duration-200'
    >

      {/* Header */}
      <div className='flex justify-between items-center gap-4'>

        <div className='min-w-0'>
          <h2 className='text-[#171717] font-medium truncate'>
            {item.prompt}
          </h2>

          <p className='text-[#6B6863] text-xs mt-1'>
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>

        <button
          className='bg-[#FFF0EA] border border-[#F4B5A4] text-[#E43D12] px-4 py-1 rounded-full text-xs font-medium shrink-0'
          onClick={(e) => e.stopPropagation()}
        >
          {item.type}
        </button>

      </div>


      {/* Expanded Content */}
      {expanded && (
        <div className='mt-4 border-t border-[#E6E0D8] pt-4'>

          {item.type === 'image' ? (

            <div>
              <img
                src={item.content}
                alt='Generated content'
                className='mt-1 w-full max-w-md rounded-lg border border-[#E6E0D8]'
              />
            </div>

          ) : (

            <div className='max-h-[500px] overflow-y-auto text-sm text-[#514C47] leading-6'>

              <div className='reset-tw'>
                <Markdown>
                  {item.content}
                </Markdown>
              </div>

            </div>

          )}

        </div>
      )}

    </div>
  )
}

export default Creationitem
