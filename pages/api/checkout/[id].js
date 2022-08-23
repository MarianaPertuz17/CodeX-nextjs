const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { prisma } from '../../../db.js';

export default async function handler(req, res) {

  if (req.method === 'POST' && req.query.id) {

    const user = await prisma.user.findUnique({
      where: {
        authId: req.query.id,
      },
    });

    if (!user.stripeId) {
      try {
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              price: 'price_1LZOPQDmuKblFBPnXdsdwe33',
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/purchase/success`,
          cancel_url: `${req.headers.origin}/purchase`,
          metadata: { authUserId: req.query.id }
        });
        res.redirect(303, session.url);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    }
    else {
      res.redirect(`${req.headers.origin}/purchase?error=duplicate`);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}