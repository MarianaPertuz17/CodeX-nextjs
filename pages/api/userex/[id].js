const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


export default async function handler(req, res) {
    try{
        const solver = await prisma.user.findUnique({
            where: {
                id: parseInt(req.query.id)
            }
        })
     res.json(solver)
    }catch(error){
        res.status(400).json({error})
    }
  }
  

