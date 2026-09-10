import React, { useState } from 'react'
import { FileText, Sparkles, Loader2 } from 'lucide-react'
import Markdown from 'react-markdown'

const ResumeInsights = () => {

  const [resumeText, setResumeText] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [focusAreas, setFocusAreas] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [review, setReview] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }

  return (
    <div className='h-full overflow-y-auto p-6 flex items-start flex-wrap gap-4 text-[#171717]'>

      {/* left column */}
      <form
        onSubmit={onSubmitHandler}
        className='w-full max-w-lg p-5 bg-[#FFFDFC] rounded-xl border border-[#E6E0D8] shadow-[0_6px_20px_rgba(23,23,23,0.04)]'
        action=""
      >

        <div className='flex items-center gap-3'>

          <div className='w-10 h-10 rounded-lg bg-[#FFF0EA] flex items-center justify-center'>
            <Sparkles className='w-5 h-5 text-[#E43D12]' />
          </div>

          <h1 className='text-xl font-semibold text-[#171717]'>
            Resume Review
          </h1>

        </div>


        <p className='mt-6 text-sm font-medium text-[#171717]'>
          Resume Text
        </p>

        <textarea
          onChange={(e) => setResumeText(e.target.value)}
          value={resumeText}
          rows={4}
          className='w-full p-2.5 px-3 mt-2 outline-none text-sm rounded-md border border-[#D8D2CA] bg-[#FFFEFC] focus:border-[#E43D12] transition'
          placeholder='Paste your resume content here...'
          required
        />


        <p className='mt-5 text-sm font-medium text-[#171717]'>
          Job Description (Optional)
        </p>

        <textarea
          onChange={(e) => setJobDescription(e.target.value)}
          value={jobDescription}
          rows={3}
          className='w-full p-2.5 px-3 mt-2 outline-none text-sm rounded-md border border-[#D8D2CA] bg-[#FFFEFC] focus:border-[#E43D12] transition'
          placeholder='Paste job description to get targeted feedback...'
        />


        <p className='mt-5 text-sm font-medium text-[#171717]'>
          Focus Areas (Optional)
        </p>

        <input
          onChange={(e) => setFocusAreas(e.target.value)}
          value={focusAreas}
          type="text"
          className='w-full p-2.5 px-3 mt-2 outline-none text-sm rounded-md border border-[#D8D2CA] bg-[#FFFEFC] focus:border-[#E43D12] transition'
          placeholder='e.g. skills, experience, formatting (comma-separated)'
        />

        <p className='text-xs text-[#6B6863] font-light mt-1'>
          Leave blank for general review
        </p>


        <button
          type="submit"
          disabled={loading}
          className='w-full flex justify-center items-center gap-2 bg-[#E43D12] hover:bg-[#D93616] text-white px-4 py-2.5 mt-6 text-sm rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition'
        >

          {loading ? (
            <>
              <Loader2 className='w-5 animate-spin' />
              Reviewing...
            </>
          ) : (
            <>
              <FileText className='w-5' />
              Review Resume
            </>
          )}

        </button>


        {error && (
          <div className='mt-3 p-3 bg-[#FFF0EA] border border-[#F4B5A4] rounded-lg text-[#C93618] text-sm'>
            {error}
          </div>
        )}

      </form>


      {/* Right column */}
      <div className='w-full max-w-lg p-5 bg-[#FFFDFC] rounded-xl flex flex-col border border-[#E6E0D8] min-h-96 max-h-[600px] shadow-[0_6px_20px_rgba(23,23,23,0.04)]'>

        <div className='flex items-center gap-3'>

          <div className='w-10 h-10 rounded-lg bg-[#FFD3DB] flex items-center justify-center'>
            <FileText className='w-5 h-5 text-[#D6536D]' />
          </div>

          <h1 className='text-xl font-semibold text-[#171717]'>
            Analysis Results
          </h1>

        </div>


        <div className='flex-1 overflow-y-auto'>

          {loading ? (

            <div className='flex justify-center items-center h-full'>

              <div className='text-center'>

                <Loader2 className='w-8 h-8 animate-spin text-[#E43D12] mx-auto mb-2' />

                <p className='text-[#6B6863] text-sm'>
                  Analyzing your resume...
                </p>

              </div>

            </div>

          ) : review ? (

            <div className='prose prose-sm max-w-none text-[#514C47] pt-4'>
              <Markdown>
                {review}
              </Markdown>
            </div>

          ) : (

            <div className='flex justify-center items-center h-full'>

              <div className='text-sm flex flex-col items-center gap-5 text-[#AAA39B] text-center'>

                <FileText className='w-9 h-9' />

                <p>
                  Provide resume text and click "Review Resume" to get started
                </p>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default ResumeInsights

