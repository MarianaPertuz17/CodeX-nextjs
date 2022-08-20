import { prisma } from '../../../db.js';

export default async function userHandler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try{
        const solver = await prisma.user.findUnique({
          where: {
            authId: req.query.id
          }
        })
        res.json(solver)
    
      } catch(error) {
        res.status(400).json({error})
      }
      break
    case 'PUT':
      try {

        const {exerciseId} = JSON.parse(req.body);
        console.log(exerciseId, 'exe')
        const newExercise = await prisma.user.update({
          where: {
            authId: req.query.id
          },
          data: {
            solved: {
              push: exerciseId,
            },
          },
        })
        res.status(200).send({res: 'success' , error: false});
      } catch (e) {
        res.status(500).send({res: 'Cound not post exercise', error: true});
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }

}
