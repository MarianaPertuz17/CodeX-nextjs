const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


export default async function handler(req, res) {
    try{
        const test = await prisma.test.findUnique({
            where: {
                id: parseInt(req.query.id)
            }
        })
     res.json(test)
    }catch(error){
        res.status(400).json({error})
    }
  }