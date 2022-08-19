import prisma from '../client';

export default async function handler(req, res) {
    try{
        const solver = await prisma.user.findUnique({
            where: {
                authId: req.query.id
            }
        })
     res.json(solver)
    }catch(error){
        res.status(400).json({error})
    }
  }
  

