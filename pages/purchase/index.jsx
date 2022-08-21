// import { dracula } from '@uiw/codemirror-theme-dracula';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import Image from 'next/image';
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import codeInterviewIcon from '../../public/assets/images/code_interview.jpg';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function purchasePage () {

  const { user } = useUser();
  const router = useRouter();

  React.useEffect(() => {
    console.log('PRE-PAYMENT PAGE!', user)
    if (!user) router.push('/api/auth/login')
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  console.log('USER ON PAYMENT PAGE', user)
  if (user) {
    return (
      <div className={styles.container}>
        <NavBar/>
        <div className={styles.payment}>
          <div className={styles.paymentHeader}>Subscribe to unlock all the exercises:</div>
          <div className={styles.paymentBackground}>
            <form action="/api/checkout_sessions" method="POST" className={styles.paymentFlex}>
              <div className={styles.price}>$5/month</div>
              <div className={styles.featureList}>
                <div className={styles.featureListItem}>
                  <svg height={50} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>Get access to all exercises!</div>
                </div>
                <div className={styles.featureListItem}>
                  <svg height={50} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>Prepare for your tech interview!</div>
                </div>
                <div className={styles.featureListItem}>
                  <svg height={50} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>Maximize your odds of getting hired!</div>
                </div>
              </div>
              {/* <image src={codeInterviewIcon} /> */}
              {/* <div className={styles.codeInterviewIcon} /> */}
              <div className={styles.codeInterview} >
                <Image src={codeInterviewIcon} className={styles.codeInterviewIcon} />
              </div>
              <button className={styles.paymentButton} type="submit" role="link">Buy Now</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}