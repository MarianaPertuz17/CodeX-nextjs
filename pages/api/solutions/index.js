import { prisma } from '../../../db.js';

export default async function handler(req, res) {
  try {
    const {title, explanation, solution, exerciseId, userId} = JSON.parse(req.body);
    console.log(req.body)
    await prisma.solution.create({
      data: {
        title,
        explanation,
        solution,
        exerciseId,
        userId
      },
    })
    
    res.status(200).send({res: 'success' , error: false});
  } catch (e) {
    // console.log(e, 'er')
    res.status(500).send({res: 'Cound not post solution', error: true});
  }
}