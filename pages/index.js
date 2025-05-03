import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';
import styles from '@/styles/Home.module.css';
import Footer from '@/components/Footer';

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return {
    props: { products },
  };
}

export default function Home({ products }) {
  const [sortOption, setSortOption] = useState('Recommended');
  const [showFilter, setShowFilter] = useState(true);

  return (
    <>
      <Head>
        <title>Shop Smart | Appscrip</title>
        <meta name="description" content="Browse smart deals on our product list using filters." />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.topBar}>
          <div className={styles.leftInfo}>
            <span className={styles.resultCount}>{products.length} Items</span>
            <button 
              className={styles.toggleFilterBtn}
              onClick={() => setShowFilter(!showFilter)}
            >
              {showFilter ? 'Hide Filter' : 'Show Filter'}
            </button>
          </div>
          <select 
            className={styles.recommendDropdown}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option>Recommended</option>
            <option>Newest First</option>
            <option>Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className={styles.listingContent}>
          {showFilter && <FilterSidebar />}
          
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}