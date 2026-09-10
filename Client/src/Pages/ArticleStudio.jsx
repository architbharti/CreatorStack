import React, { useState } from 'react'
import { Edit, Sparkles, Loader2 } from 'lucide-react'
import { useAuth } from '@clerk/react'
import Markdown from 'react-markdown'

const ArticleStudio = () => {

  const articleLength = [
    { length: 500, text: 'Short (500 - 800 words)' },
    { length: 1200, text: 'Medium (800 - 1200 words)' },
    { length: 1500, text: 'Long (1200+ words)' }
  ]

  const [selectedLength, setSelectedLength] = useState(articleLength[0])
  const [input, setInput] = useState('')
  const [generatedArticle, setGeneratedArticle] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { getToken } = useAuth()

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    if (!input.trim()) {
      setError('Please enter a topic for the article')
      return
    }

    setLoading(true)
    setError('')
    setGeneratedArticle('')

    try {

      const token = await getToken()

      const response = await fetch(
        'http://localhost:3000/api/ai/article-studio',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            prompt: input,
            length: selectedLength.length
          })
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate article')
      }

      setGeneratedArticle(data.article || data.content || data.result || '')

    } catch (error) {
      setError(error.message || 'Failed to generate article.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='h-full overflow-y-auto p-6 flex items-start flex-wrap gap-5 text-[#171717]'>

      {/* LEFT COLUMN */}
      <form
        onSubmit={onSubmitHandler}
        className='w-full max-w-lg p-5 bg-[#FFFDFC] rounded-xl border border-[#E6E0D8] shadow-[0_6px_20px_rgba(23,23,23,0.04)]'
      >

        <div className='flex items-center gap-3'>

          <div className='w-10 h-10 rounded-lg bg-[#FFF0EA] flex items-center justify-center'>
            <Sparkles className='w-5 h-5 text-[#E43D12]' />
          </div>

          <h1 className='text-xl font-semibold text-[#171717]'>
            Article Configuration
          </h1>

        </div>


        <p className='mt-6 text-sm font-medium text-[#171717]'>
          Article Topic
        </p>

        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type='text'
          className='w-full p-2.5 px-3 mt-2 outline-none text-sm rounded-md border border-[#D8D2CA] bg-[#FFFEFC] focus:border-[#E43D12] transition'
          placeholder='The future of artificial intelligence is...'
          required
        />


        <p className='mt-5 text-sm font-medium text-[#171717]'>
          Article Length
        </p>

        <div className='mt-4 flex gap-3 flex-wrap'>

          {articleLength.map((item, index) => (

            <span
              onClick={() => setSelectedLength(item)}
              className={`text-xs px-4 py-1.5 border rounded-full cursor-pointer transition
                ${
                  selectedLength.text === item.text
                    ? 'bg-[#FFF0EA] text-[#E43D12] border-[#F4B5A4]'
                    : 'text-[#6B6863] border-[#D8D2CA] hover:border-[#E43D12]'
                }`}
              key={index}
            >
              {item.text}
            </span>

          ))}

        </div>


        <button
          type='submit'
          disabled={loading}
          className='w-full flex justify-center items-center gap-2 bg-[#E43D12] hover:bg-[#D93616] text-white px-4 py-2.5 mt-7 text-sm rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition'
        >

          {loading ? (
            <>
              <Loader2 className='w-5 animate-spin' />
              Generating...
            </>
          ) : (
            <>
              <Edit className='w-5' />
              Generate article
            </>
          )}

        </button>


        {error && (
          <div className='mt-3 p-3 bg-[#FFF0EA] border border-[#F4B5A4] rounded-lg text-[#C93618] text-sm'>
            {error}
          </div>
        )}

      </form>


      {/* RIGHT COLUMN */}
      <div className='w-full max-w-lg p-5 bg-[#FFFDFC] rounded-xl flex flex-col border border-[#E6E0D8] min-h-96 max-h-[600px] shadow-[0_6px_20px_rgba(23,23,23,0.04)]'>

        <div className='flex items-center gap-3'>

          <div className='w-10 h-10 rounded-lg bg-[#FFE8DF] flex items-center justify-center'>
            <Edit className='w-5 h-5 text-[#E43D12]' />
          </div>

          <h1 className='text-xl font-semibold text-[#171717]'>
            Generated article
          </h1>

        </div>


        <div className='flex-1 overflow-y-auto'>

          {loading ? (

            <div className='flex justify-center items-center h-full'>

              <div className='text-center'>

                <Loader2 className='w-8 h-8 animate-spin text-[#E43D12] mx-auto mb-2' />

                <p className='text-[#6B6863] text-sm'>
                  Generating your article...
                </p>

              </div>

            </div>

          ) : generatedArticle ? (

            <div className='prose prose-sm max-w-none text-[#514C47] pt-5'>

              <Markdown>
                {generatedArticle}
              </Markdown>

            </div>

          ) : (

            <div className='flex justify-center items-center h-full'>

              <div className='text-sm flex flex-col items-center gap-5 text-[#AAA39B]'>

                <Edit className='w-9 h-9' />

                <p>
                  Enter a topic and click "Generate article" to get started
                </p>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default ArticleStudio
