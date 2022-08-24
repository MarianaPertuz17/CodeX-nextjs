import { useUser } from '@auth0/nextjs-auth0';
import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import Image from 'next/image';
import codeInterviewIcon from '../../public/assets/images/code_interview.jpg';
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Purchase () {

  const { user } = useUser();
  const { query } = useRouter();

  if (query.error === 'duplicate') {
    toast.error('Already purchased', {
      position: "top-center",
      autoClose: 7000,
      closeOnClick: true,
      pauseOnHover: true
    });
    query.error = '';
  }

  if (user) {
    return (
      <div className={styles.container}>
        <ToastContainer />
        <NavBar />
        <div className={styles.payment}>
          <div className={styles.paymentHeader}>Subscribe to unlock all the exercises:</div>
          <div className={styles.paymentBackground}>
            <form action={`/api/checkout/${user.sub}`} method="POST" className={styles.paymentFlex}>
              <div className={styles.price}>
                <span className={styles.oldPrice}>$20</span>
                <span className={styles.newPrice}>$10</span>
              </div>
              <div className={styles.featureList}>
                <div className={styles.featureListItem}>
                  <svg height={40} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>Get access to all the exercises</div>
                </div>
                <div className={styles.featureListItem}>
                  <svg height={40} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>Prepare for your coding interview</div>
                </div>
                <div className={styles.featureListItem}>
                  <svg height={40} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>Maximize your odds of getting hired</div>
                </div>
              </div>
              <div className={styles.codeInterview} >
                <Image src={codeInterviewIcon} alt="Coding interview icon" className={styles.codeInterviewIcon} />
              </div>
              <button className={styles.paymentButton} type="submit" role="link">Buy Now</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}