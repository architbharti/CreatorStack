import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import { clerkMiddleware, getAuth } from '@clerk/express'
import aiRouter from './Routes/airoutes.js'
import connectCloudinary from './configs/cloudinary.js'

const app = express()

await connectCloudinary()

app.use(cors())
app.use(express.json())

// Clerk authentication middleware
app.use(clerkMiddleware())

// Home route
app.get('/', (req, res) => {
    res.send('Server is live')
})

// Protect AI routes
app.use('/api/ai', (req, res, next) => {
    const { isAuthenticated } = getAuth(req)

    if (!isAuthenticated) {
        return res.status(401).json({
            error: 'Unauthorized'
        })
    }

    next()
}, aiRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})

