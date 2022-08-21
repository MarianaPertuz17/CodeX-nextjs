import { prisma } from '../../../db.js';

export default async function handler(req, res) {

  try {
    const solutions = await prisma.solution.findMany({
      where: {
        exerciseId: parseInt(req.query.id)
      }
    })
    console.log(solutions)
    res.json(solutions)
  } catch(error) {
    console.log(error, 'err')
    res.status(400).json({error})
  }
}

