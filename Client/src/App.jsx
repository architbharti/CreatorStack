import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Workspace from './Pages/Workspace'
import Dashboard from './Pages/Dashboard'
import ArticleStudio from './Pages/ArticleStudio'
import BlogTitles from './Pages/BlogTitles'
import RemoveBackground from './Pages/RemoveBackground'
import ObjectEraser from './Pages/ObjectEraser'
import ResumeInsights from './Pages/ResumeInsights'
import Community from './Pages/Community'
import ImageStudio from './Pages/ImageStudio'
import { useAuth } from '@clerk/react'
import { useEffect } from 'react'


const App = () => {

const {getToken} = useAuth()

useEffect(()=> {
  getToken().then((token)=>console.log(token))
})

  return (
    <div>
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/ai' element={<Workspace />}>
        <Route index element={<Dashboard />} />
        <Route path='article-studio' element={<ArticleStudio />} />
        <Route path='blog-titles' element={<BlogTitles />} />
        <Route path='image-studio' element={<ImageStudio />} />
        <Route path='remove-background' element={<RemoveBackground />} />
        <Route path='object-eraser' element={<ObjectEraser />} />
        <Route path='resume-insights' element={<ResumeInsights />} />
        <Route path='community' element={<Community />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
