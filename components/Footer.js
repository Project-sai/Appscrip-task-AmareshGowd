import styles from '@/styles/Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <div className={styles.newsletter}>
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.emailInput}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contactColumn}>
          <h3>CONTACT US</h3><br />
          <p>+44 221 133 5380</p><br />
          <p>customercare@mettamuse.com</p><br />

          <h3 className={styles.currencyTitle}>CURRENCY</h3>
          <div className={styles.currency}><br />
            <strong>USD</strong><br />
            <p>Transactions will be completed in Euros and a currency reference is available on home.</p>
          </div>
        </div>
      </div>

      <div className={styles.footerColumns}>
        <div className={styles.column}>
          <h3>mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.footerRightColumn}>
          <div className={styles.social}>
            <h3>FOLLOW US</h3>
            <div className={styles.socialIcons}>
              <span><FaFacebook /></span>
              <span><FaInstagram /></span>
              <span><FaTwitter /></span>
            </div>
          </div>

          <div className={styles.paymentMethods}>
            <h3>mettā muse ACCEPTS</h3>
            <div className={styles.paymentIcons}>
              <span><FaCcVisa /></span>
              <span><FaCcMastercard /></span>
              <span><FaCcPaypal /></span>
              <span><FaCcApplePay /></span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomFooter}>
        <div className={styles.copyright}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}