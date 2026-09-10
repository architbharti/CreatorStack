import React from 'react'
import { useState } from 'react'
import { Edit, Hash, Image, Sparkles, Loader2 } from 'lucide-react'

const ImageStudio = () => {

  const imageStyle = [
    'Realistic',
    'Ghibli style',
    'Anime style',
    'Cartoon style',
    'Pixel art',
    'Fantasy style',
    '3D style',
    'Cyberpunk style',
    'portrait style'
  ]

  const [selectedStyle, setSelectedStyle] = useState('Realistic')
  const [input, setInput] = useState('')
  const [publish, setPublish] = useState(false)
  const [generatedImage, setGeneratedImage] = useState('')
  const [generatedDescription, setGeneratedDescription] = useState('')
  const [enhancedPrompt, setEnhancedPrompt] = useState('')
  const [originalPrompt, setOriginalPrompt] = useState('')

  // Missing states
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [imageLoading, setImageLoading] = useState(false)

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
          <Sparkles className='w-6 text-[#E43D12]' />

          <h1 className='text-xl font-semibold text-[#171717]'>
            AI Image Generator
          </h1>
        </div>

        <p className='mt-6 text-sm font-medium text-[#171717]'>
          Describe Your Image
        </p>

        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          rows={4}
          className='w-full p-2.5 px-3 mt-2 outline-none text-sm rounded-md border border-[#D8D2CA] bg-[#FFFEFC] focus:border-[#E43D12] transition'
          placeholder='Describe what you want to see in the image..'
          required
        />

        {/* Tips */}
        <div className='mt-3 p-3 bg-[#FFF4E2] border border-[#F4D08B] rounded-md'>
          <p className='text-xs text-[#9A6500] font-medium'>
            💡 Tips for better results:
          </p>

          <p className='text-xs text-[#A56D0A] mt-1'>
            • Be specific: "young boy, 8 years old, playing soccer in a green park"
          </p>

          <p className='text-xs text-[#A56D0A]'>
            • Include details: colors, actions, setting, lighting
          </p>

          <p className='text-xs text-[#A56D0A]'>
            • Avoid vague terms like "nice" or "good"
          </p>
        </div>

        <p className='mt-5 text-sm font-medium text-[#171717]'>
          Style
        </p>

        <div className='mt-4 flex gap-2.5 flex-wrap'>

          {
            imageStyle.map((item) => (
              <span
                onClick={() => setSelectedStyle(item)}
                className={`text-xs px-4 py-1.5 border rounded-full cursor-pointer transition ${
                  selectedStyle === item
                    ? 'bg-[#FFF0EA] text-[#E43D12] border-[#F4B5A4]'
                    : 'text-[#6B6863] border-[#D8D2CA] hover:border-[#E43D12] hover:text-[#E43D12]'
                }`}
                key={item}
              >
                {item}
              </span>
            ))
          }

        </div>

        {/* Publish toggle */}
        <div className='my-6 flex items-center gap-2'>

          <label className='relative cursor-pointer'>
            <input
              type="checkbox"
              onChange={(e) => setPublish(e.target.checked)}
              checked={publish}
              className='sr-only peer'
            />

            <div className='w-9 h-5 bg-[#D6D0C8] rounded-full peer-checked:bg-[#E43D12] transition'>
            </div>

            <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4'>
            </span>
          </label>

          <p className='text-sm text-[#514C47]'>
            Make this image public
          </p>

        </div>

        <button
          type="submit"
          disabled={loading}
          className='w-full flex justify-center items-center gap-2 bg-[#E43D12] hover:bg-[#D93616] text-white px-4 py-2.5 mt-6 text-sm rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition'
        >

          {loading ? (
            <>
              <Loader2 className='w-5 animate-spin' />
              Generating...
            </>
          ) : (
            <>
              <Image className='w-5' />
              Generate Image
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
      <div className='w-full max-w-lg p-5 bg-[#FFFDFC] rounded-xl flex flex-col border border-[#E6E0D8] min-h-96 shadow-[0_6px_20px_rgba(23,23,23,0.04)]'>

        <div className='flex items-center gap-3'>

          <div className='w-10 h-10 rounded-lg bg-[#FFF0EA] flex items-center justify-center'>
            <Image className='w-5 h-5 text-[#E43D12]' />
          </div>

          <h1 className='text-xl font-semibold text-[#171717]'>
            Generated Image
          </h1>

        </div>

        <div className='flex-1 overflow-y-auto'>

          {loading ? (

            <div className='flex justify-center items-center h-full'>
              <div className='text-center'>

                <Loader2 className='w-8 h-8 animate-spin text-[#E43D12] mx-auto mb-2' />

                <p className='text-[#6B6863] text-sm'>
                  Generating your image...
                </p>

              </div>
            </div>

          ) : generatedImage ? (

            <div className='pt-4 text-center'>

              <div className='relative'>

                {imageLoading && (
                  <div className='absolute inset-0 flex items-center justify-center bg-[#F5F1EA] rounded-lg'>

                    <Loader2 className='w-8 h-8 animate-spin text-[#E43D12]' />

                  </div>
                )}

                <img
                  src={generatedImage}
                  alt="AI Generated"
                  className='w-full max-w-md mx-auto rounded-lg shadow-md border border-[#E6E0D8]'
                  onLoad={() => setImageLoading(false)}
                  onError={() => {
                    setImageLoading(false)
                    setError('Failed to load generated image')
                  }}
                />

              </div>


              {originalPrompt && (
                <div className='mt-3 p-2.5 bg-[#FFF0EA] rounded-lg text-left'>

                  <h4 className='font-semibold text-xs mb-1 text-[#E43D12]'>
                    Your Prompt:
                  </h4>

                  <p className='text-xs text-[#B54229]'>
                    {originalPrompt}
                  </p>

                </div>
              )}


              {enhancedPrompt && (
                <div className='mt-2 p-2.5 bg-[#FFF4E2] rounded-lg text-left'>

                  <h4 className='font-semibold text-xs mb-1 text-[#9A6500]'>
                    Enhanced Prompt:
                  </h4>

                  <p className='text-xs text-[#A56D0A]'>
                    {enhancedPrompt}
                  </p>

                </div>
              )}


              {generatedDescription && (
                <div className='mt-3 p-3 bg-[#F5F1EA] rounded-lg text-left'>

                  <h3 className='font-semibold text-sm mb-2 text-[#171717]'>
                    AI Analysis:
                  </h3>

                  <p className='text-sm text-[#6B6863] whitespace-pre-wrap'>
                    {generatedDescription}
                  </p>

                </div>
              )}


              <div className='mt-4 flex gap-2 justify-center'>

                <button
                  onClick={() => {
                    setGeneratedImage('')
                    setImageLoading(false)
                    onSubmitHandler({ preventDefault: () => {} })
                  }}
                  className='px-4 py-2 bg-[#FFF0EA] border border-[#F4B5A4] text-[#E43D12] text-sm rounded-lg hover:bg-[#FFE3DA] transition-colors'
                >
                  🔄 Regenerate
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedImage)
                    alert('Image URL copied to clipboard!')
                  }}
                  className='px-4 py-2 bg-[#FFF4E2] border border-[#F4D08B] text-[#9A6500] text-sm rounded-lg hover:bg-[#FFEBCD] transition-colors'
                >
                  📋 Copy URL
                </button>

              </div>

            </div>

          ) : (

            <div className='flex justify-center items-center h-full'>

              <div className='text-sm flex flex-col items-center gap-5 text-[#AAA39B] text-center'>

                <Image className='w-9 h-9' />

                <p>
                  Describe an image and click "Generate Image" to get started
                </p>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default ImageStudio

