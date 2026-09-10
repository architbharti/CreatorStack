import sql from "../configs/db.js"

export  const getUserCreations = async (req , res)=>{
    try{
        const {userId} = req.auth(

            await sql SELECT * FROM creations WHERE user_id = $(user_id) ORDER BY 
        )
    }
}