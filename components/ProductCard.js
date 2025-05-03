import styles from '@/styles/ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <img 
        src={product.image} 
        alt={product.title} 
        className={styles.productImage}
      />
      <h3 className={styles.productTitle}>{product.title}</h3>
      <p className={styles.productPrice}><a href='#'>Signin</a>  or create an account to see pricing   <span>&#10084;</span></p>
    </div>
  );
}