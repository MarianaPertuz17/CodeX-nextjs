import Stripe from 'stripe';
import { buffer } from 'micro';
import { prisma } from '../../db.js';
// import { useUser } from '@auth0/nextjs-auth0';

export const config = {
  api: {
    bodyParser: false,
  }
};

export default async function webhookHandler (req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  // const { user } = useUser();

  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;

    let event;

    try {
      if (!sig || !webhookSecret) return;

      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (error) {
      console.log(`Webhook error: ${error.message}`);
      return res.status(400).send(`Webhook error: ${error.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      console.log('pi', event.data.object.payment_intent);
      await prisma.user.update({
        where: {
          authId: event.data.object.metadata.authUserId,
        },
        data: {
          stripeId: event.data.object.payment_intent,
        },
      });
    }

    if (event.type === 'payment_intent.succeeded') {
      console.log(event.data.object.id, `PAYMENT SUCCESS!!!`);
      await prisma.user.update({
        where: {
          stripeId: event.data.object.id,
        },
        data: {
          paidUser: true,
        },
      });
      
    }

    res.status(200).send();
  }
}