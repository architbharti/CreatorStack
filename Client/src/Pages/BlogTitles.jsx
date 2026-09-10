import React, { useState } from 'react'
import { Sparkles, Hash, Loader2 } from 'lucide-react'
import Markdown from 'react-markdown'

const BlogTitles = () => {

  const blogCategories = [
    'General',
    'Technology',
    'Business',
    'Health',
    'Lifestyle',
    'Travel',
    'Education',
    'Entertainment',
    'Food'
  ]

  const [selectedCategory, setSelectedCategory] = useState('General')
  const [input, setInput] = useState('')
  const [generatedTitles, setGeneratedTitles] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }

  return (
    <div className='h-full overflow-y-auto p-6 flex items-start flex-wrap gap-4 text-[#171717]'>

      {/* Left Column */}
      <form
        onSubmit={onSubmitHandler}
        className='w-full max-w-lg p-5 bg-[#FFFDFC] rounded-xl border border-[#E6E0D8] shadow-[0_6px_20px_rgba(23,23,23,0.04)]'
      >

        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-lg bg-[#FFF0EA] flex items-center justify-center'>
            <Sparkles className='w-5 h-5 text-[#E43D12]' />
          </div>

          <h1 className='text-xl font-semibold text-[#171717]'>
            AI Title Generator
          </h1>
        </div>

        <p className='mt-6 text-sm font-medium text-[#171717]'>
          Keyword
        </p>

        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type='text'
          className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-[#D8D2CA] bg-[#FFFEFC] focus:border-[#E43D12] transition'
          placeholder='The future of artificial intelligence is ..'
          required
        />

        <p className='mt-4 text-sm font-medium text-[#171717]'>
          Category
        </p>

        <div className='mt-5 flex gap-3 flex-wrap'>

          {blogCategories.map((item) => (
            <span
              onClick={() => setSelectedCategory(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer transition ${
                selectedCategory === item
                  ? 'bg-[#FFF0EA] text-[#E43D12] border-[#F4B5A4]'
                  : 'text-[#6B6863] border-[#D8D2CA] hover:border-[#E43D12] hover:text-[#E43D12]'
              }`}
              key={item}
            >
              {item}
            </span>
          ))}

        </div>

        <br />

        <button
          type='submit'
          disabled={loading}
          className='w-full flex justify-center items-center gap-2 bg-[#E43D12] hover:bg-[#D93616] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition'
        >
          {loading ? (
            <>
              <Loader2 className='w-5 animate-spin' />
              Generating...
            </>
          ) : (
            <>
              <Hash className='w-5' />
              Generate Title
            </>
          )}
        </button>

        {error && (
          <div className='mt-3 p-3 bg-[#FFF0EA] border border-[#F4B5A4] rounded-lg text-[#C93618] text-sm'>
            {error}
          </div>
        )}

      </form>


      {/* Right Column */}
      <div className='w-full max-w-lg p-5 bg-[#FFFDFC] rounded-xl flex flex-col border border-[#E6E0D8] min-h-96 shadow-[0_6px_20px_rgba(23,23,23,0.04)]'>

        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-lg bg-[#FFD3DB] flex items-center justify-center'>
            <Hash className='w-5 h-5 text-[#D6536D]' />
          </div>

          <h1 className='text-xl font-semibold text-[#171717]'>
            Generated Titles
          </h1>
        </div>

        <div className='flex-1 overflow-y-auto'>

          {loading ? (
            <div className='flex justify-center items-center h-full'>
              <div className='text-center'>
                <Loader2 className='w-8 h-8 animate-spin text-[#E43D12] mx-auto mb-2' />
                <p className='text-[#6B6863] text-sm'>
                  Generating blog titles...
                </p>
              </div>
            </div>
          ) : generatedTitles ? (
            <div className='prose prose-sm max-w-none text-[#514C47] pt-4'>
              <Markdown>
                {generatedTitles}
              </Markdown>
            </div>
          ) : (
            <div className='flex justify-center items-center h-full'>
              <div className='text-sm flex flex-col items-center gap-5 text-[#AAA39B] text-center'>
                <Hash className='w-9 h-9' />
                <p>
                  Enter a topic and click "Generate Title" to get started
                </p>
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  )
}

export default BlogTitles
