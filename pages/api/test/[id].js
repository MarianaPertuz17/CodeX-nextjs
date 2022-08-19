import prisma from '../client';

export default async function handler(req, res) {
    try{
        const test = await prisma.test.findMany({
            where: {
                exerciseId: parseInt(req.query.id)
            }
        })
     res.json(test)
    }catch(error){
        res.status(400).json({error})
    }
  }