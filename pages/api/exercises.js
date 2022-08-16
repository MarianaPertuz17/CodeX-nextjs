const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


export default async function handler(req, res) {
    try{
        const exercise = await prisma.exercise.findMany()
     res.json(exercise)
    }catch(error){
        res.status(400).json({error})
    }
  }
  