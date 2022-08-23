import { prisma } from '../../../db.js';

export default async function solutionHandler(req, res) {
  try {
    const solutions = await prisma.solution.findMany({
      where: {
        exerciseId: parseInt(req.query.id)
      }
    })
    res.json(solutions)
  } catch(error) {
    res.status(400).json({error})
  }
}
