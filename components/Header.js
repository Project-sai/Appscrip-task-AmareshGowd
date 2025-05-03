
import { useState } from 'react';
import styles from '@/styles/Header.module.css';

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topHeader}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.centerText}>LOGO</div>
        <div className={styles.icons}>
          <span className={styles.icon}>🔍</span>
          <span className={styles.icon}>🛒</span>
          <span className={styles.icon}>👤</span>
        </div>
      </div>

      <nav className={styles.navContainer}>
        <div 
          className={styles.hamburger} 
          onClick={() => setShowNav(!showNav)}
        >
          &#9776;
        </div>
        <div className={`${styles.navLinks} ${showNav ? styles.show : ''}`}>
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </div>
      </nav>
      
      <section className={styles.productSection}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>
    </header>
  );
}