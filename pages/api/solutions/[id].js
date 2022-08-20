import { prisma } from '../../../db.js';

export default async function handler(req, res) {
  try {
    const solutions = await prisma.test.findMany({
      where: {
        exerciseId: parseInt(req.query.id)
      }
    })
    res.json(test)
  } catch(error) {
    res.status(400).json({error})
  }
}