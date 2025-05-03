
import styles from '@/styles/FilterSidebar.module.css';

export default function FilterSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.filterContent}>
      <div className={styles.filterGroup}>
        <label className={styles.summary}>
          <span>CUSTOMIZABLE</span>
          <input type="checkbox" />
        </label>
        
      </div>

        <details open>
          <summary>IDEAL FOR</summary>
          <div className={styles.dropdownContent}>
            <div className={styles.selectAll}>All</div>
            <div className={styles.unselectLink}>Unselect all</div>
            <div className={styles.checkboxGroup}>
              <label><input type="checkbox" /> Men</label>
              <label><input type="checkbox" /> Women</label>
              <label><input type="checkbox" /> Baby & Kids</label>
            </div>
          </div>
        </details>

        <details>
          <summary>OCCASION</summary>
          <div className={styles.dropdownContent}>
            <div className={styles.selectAll}>All</div>
            <div className={styles.unselectLink}>Unselect all</div>
            <div className={styles.checkboxGroup}>
              <label><input type="checkbox" /> Casual</label>
              <label><input type="checkbox" /> Formal</label>
              <label><input type="checkbox" /> Party</label>
              <label><input type="checkbox" /> Gym</label>
            </div>
          </div>
        </details>

        <details>
          <summary>WORK</summary>
          <div className={styles.dropdownContent}>
            <div className={styles.selectAll}>All</div>
            <div className={styles.unselectLink}>Unselect all</div>
            <div className={styles.checkboxGroup}>
              <label><input type="checkbox" /> Office</label>
              <label><input type="checkbox" /> Work From Home</label>
              <label><input type="checkbox" /> Business Travel</label>
            </div>
          </div>
        </details>

        <details>
          <summary>FABRIC</summary>
          <div className={styles.dropdownContent}>
            <div className={styles.selectAll}>All</div>
            <div className={styles.unselectLink}>Unselect all</div>
            <div className={styles.checkboxGroup}>
              <label><input type="checkbox" /> Cotton</label>
              <label><input type="checkbox" /> Polyester</label>
              <label><input type="checkbox" /> Wool</label>
              <label><input type="checkbox" /> Silk</label>
            </div>
          </div>
        </details>

        <details>
          <summary>SEGMENT</summary>
          <div className={styles.dropdownContent}>
            <div className={styles.selectAll}>All</div>
            <div className={styles.unselectLink}>Unselect all</div>
            <div className={styles.checkboxGroup}>
              <label><input type="checkbox" /> Premium</label>
              <label><input type="checkbox" /> Regular</label>
              <label><input type="checkbox" /> Budget</label>
            </div>
          </div>
        </details>

        <details>
          <summary>SUITABLE FOR</summary>
          <div className={styles.dropdownContent}>
            <div className={styles.selectAll}>All</div>
            <div className={styles.unselectLink}>Unselect all</div>
            <div className={styles.checkboxGroup}>
              <label><input type="checkbox" /> Summer</label>
              <label><input type="checkbox" /> Winter</label>
              <label><input type="checkbox" /> All Season</label>
            </div>
          </div>
        </details>

        <details>
          <summary>RAIN MATERIALS</summary>
          <div className={styles.dropdownContent}>
            <div className={styles.selectAll}>All</div>
            <div className={styles.unselectLink}>Unselect all</div>
            <div className={styles.checkboxGroup}>
              <label><input type="checkbox" /> Waterproof</label>
              <label><input type="checkbox" /> Water Resistant</label>
              <label><input type="checkbox" /> Quick Dry</label>
            </div>
          </div>
        </details>

        <details>
          <summary>PATTERN</summary>
          <div className={styles.dropdownContent}>
            <div className={styles.selectAll}>All</div>
            <div className={styles.unselectLink}>Unselect all</div>
            <div className={styles.checkboxGroup}>
              <label><input type="checkbox" /> Solid</label>
              <label><input type="checkbox" /> Printed</label>
              <label><input type="checkbox" /> Striped</label>
              <label><input type="checkbox" /> Checked</label>
            </div>
          </div>
        </details>
      </div>
    </aside>
  );
}