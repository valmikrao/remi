import Stripe from 'stripe';
require('dotenv').config()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            console.log(req.body)
           const name = req.body.name;
           
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                      price_data: {
                        currency: 'usd',
                        product_data: {
                          name: name,
                          images: ['https://www.aleemrehmtulla.com/img/aleem/portugal.png'],
                        },
                        unit_amount: 2000,
                      },
                      quantity: 1,
                    },
                  ],
                  mode: 'payment',
                  success_url: 'https://example.com/success',
                  cancel_url: 'https://example.com/cancel',
              });
          
              res.status(200).json({ user: session.url})
              
          } catch (err) {
            res.status(500).json({ message: err.message });
            res.status(200).json({ user: "hi"})
          }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  