import React, { useState, useEffect } from 'react'
import { Heart, Users, MessageCircle, Plus, Loader2 } from 'lucide-react'
import { useUser } from '@clerk/react'
import Markdown from 'react-markdown'

const Community = () => {
  const { user } = useUser()

  const [posts, setPosts] = useState([])
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    type: 'general',
    tags: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchPosts = async () => {
    setLoading(false)
  }

  const handleLikePost = async (postId) => {
    console.log('Like post:', postId)
  }

  const handleCreatePost = async (e) => {
    e.preventDefault()

    if (!newPost.title.trim() || !newPost.content.trim()) {
      setError('Please provide both title and content')
      return
    }
  }

  useEffect(() => {
    if (user) {
      fetchPosts()
    }
  }, [user])

  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6 bg-[#F5F1EA]'>

      {/* Header */}
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-xl bg-[#FFF0EA] border border-[#F4B5A4] flex items-center justify-center'>
            <Users className='w-5 h-5 text-[#E43D12]' />
          </div>

          <div>
            <h1 className='text-2xl font-bold text-[#171717]'>
              Community
            </h1>
            <p className='text-sm text-[#6B6863]'>
              Share ideas, creations and inspiration.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowCreatePost(!showCreatePost)}
          className='flex items-center gap-2 bg-[#E43D12] hover:bg-[#D93616] text-white px-4 py-2.5 rounded-xl text-sm font-medium transition'
        >
          <Plus className='w-4 h-4' />
          Create Post
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className='p-3 bg-[#FFF0EA] border border-[#F4B5A4] rounded-xl text-[#C83212] text-sm'>
          {error}
        </div>
      )}

      {/* Create Post */}
      {showCreatePost && (
        <div className='bg-[#FFFDFC] p-5 rounded-2xl border border-[#E6E0D8] shadow-sm'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <h3 className='text-lg font-semibold text-[#171717]'>
                Create New Post
              </h3>
              <p className='text-sm text-[#6B6863] mt-1'>
                Share something with the CreatorStack community.
              </p>
            </div>

            <div className='w-9 h-9 rounded-lg bg-[#FFF4E2] flex items-center justify-center'>
              <Plus className='w-4 h-4 text-[#E43D12]' />
            </div>
          </div>

          <form onSubmit={handleCreatePost} className='space-y-4'>

            <input
              type='text'
              placeholder='Post title...'
              value={newPost.title}
              onChange={(e) =>
                setNewPost({
                  ...newPost,
                  title: e.target.value
                })
              }
              className='w-full p-3 border border-[#E6E0D8] bg-[#F5F1EA] text-[#171717] placeholder:text-[#99938C] rounded-xl outline-none focus:border-[#E43D12] transition'
              required
            />

            <textarea
              placeholder='Share your thoughts...'
              value={newPost.content}
              onChange={(e) =>
                setNewPost({
                  ...newPost,
                  content: e.target.value
                })
              }
              className='w-full p-3 border border-[#E6E0D8] bg-[#F5F1EA] text-[#171717] placeholder:text-[#99938C] rounded-xl h-28 resize-none outline-none focus:border-[#E43D12] transition'
              required
            />

            <div className='flex gap-4'>

              <select
                value={newPost.type}
                onChange={(e) =>
                  setNewPost({
                    ...newPost,
                    type: e.target.value
                  })
                }
                className='p-3 border border-[#E6E0D8] bg-[#F5F1EA] text-[#171717] rounded-xl outline-none'
              >
                <option value='general'>General</option>
                <option value='showcase'>Showcase</option>
                <option value='question'>Question</option>
                <option value='tip'>Tip</option>
              </select>

              <input
                type='text'
                placeholder='Tags (comma-separated)'
                value={newPost.tags}
                onChange={(e) =>
                  setNewPost({
                    ...newPost,
                    tags: e.target.value
                  })
                }
                className='flex-1 p-3 border border-[#E6E0D8] bg-[#F5F1EA] text-[#171717] placeholder:text-[#99938C] rounded-xl outline-none focus:border-[#E43D12] transition'
              />

            </div>

            <div className='flex gap-2'>

              <button
                type='submit'
                className='bg-[#E43D12] hover:bg-[#D93616] text-white px-5 py-2.5 rounded-xl font-medium transition'
              >
                Post
              </button>

              <button
                type='button'
                onClick={() => setShowCreatePost(false)}
                className='bg-[#171717] hover:bg-[#2B2B2B] text-white px-5 py-2.5 rounded-xl font-medium transition'
              >
                Cancel
              </button>

            </div>

          </form>
        </div>
      )}

      {/* Posts */}
      <div className='bg-[#FFFDFC] h-full w-full rounded-2xl overflow-y-scroll p-5 border border-[#E6E0D8] shadow-sm'>

        {loading ? (

          <div className='flex justify-center items-center h-full'>
            <div className='text-center'>

              <div className='w-14 h-14 rounded-2xl bg-[#FFF0EA] flex items-center justify-center mx-auto mb-3'>
                <Loader2 className='w-7 h-7 animate-spin text-[#E43D12]' />
              </div>

              <p className='text-[#6B6863]'>
                Loading community posts...
              </p>

            </div>
          </div>

        ) : posts.length > 0 ? (

          <div className='space-y-4'>

            {posts.map((post, index) => (

              <div
                key={post.id || index}
                className='border border-[#E6E0D8] rounded-2xl p-5 hover:border-[#F4B5A4] transition bg-[#FFFDFC]'
              >

                <div className='flex justify-between items-start mb-3'>

                  <div>
                    <h3 className='font-semibold text-lg text-[#171717]'>
                      {post.title}
                    </h3>
                  </div>

                  <span className='text-xs bg-[#FFF0EA] border border-[#F4B5A4] text-[#E43D12] px-2.5 py-1 rounded-full font-medium'>
                    {post.type}
                  </span>

                </div>

                <div className='prose prose-sm max-w-none mb-4 text-[#4E4A45]'>
                  <Markdown>
                    {post.content}
                  </Markdown>
                </div>

                <div className='flex justify-between items-center text-sm text-[#6B6863]'>

                  <div className='flex gap-5'>

                    <button
                      onClick={() => handleLikePost(post.id)}
                      className='flex items-center gap-1.5 hover:text-[#E43D12] transition'
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          post.liked
                            ? 'fill-[#E43D12] text-[#E43D12]'
                            : ''
                        }`}
                      />

                      {post.likes || 0}
                    </button>

                    <div className='flex items-center gap-1.5'>
                      <MessageCircle className='w-4 h-4' />
                      {post.comments || 0}
                    </div>

                  </div>

                  <span>
                    {new Date(post.created_at).toLocaleDateString()}
                  </span>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className='flex justify-center items-center h-full'>

            <div className='text-center'>

              <div className='w-16 h-16 rounded-2xl bg-[#FFF0EA] border border-[#F4B5A4] flex items-center justify-center mx-auto mb-4'>
                <Users className='w-7 h-7 text-[#E43D12]' />
              </div>

              <h3 className='text-lg font-semibold text-[#171717]'>
                No posts yet
              </h3>

              <p className='text-sm text-[#6B6863] mt-1'>
                Be the first to share something!
              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  )
}

export default Community
