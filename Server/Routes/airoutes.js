import express from 'express';
import { auth } from '../middlewares/auth.js';
import { 
    generateArticle,
    generateBlogTitles,
    generateImages,
    removeBackground,
    removeObject,
    reviewResume,
    getDashboardData,
    getUserCreations,
    resetUsage
} from '../Controllers/aiControllers.js';
import { upload } from "../configs/multer.js"

const aiRouter = express.Router();

// AI Generation endpoints
aiRouter.post("/article-studio", auth, generateArticle);
aiRouter.post("/generate-blog-titles", auth, generateBlogTitles);
aiRouter.post("/image-studio", auth, generateImages);
aiRouter.post("/remove-background", auth, removeBackground);
aiRouter.post("/object-eraser", auth, removeObject);
aiRouter.post("/resume-insights", auth, reviewResume);

// Dashboard and user data endpoints
aiRouter.get("/dashboard", auth, getDashboardData);
aiRouter.get("/creations", auth, getUserCreations);

// Development only endpoints
aiRouter.post("/reset-usage", auth, resetUsage);

export default aiRouter;