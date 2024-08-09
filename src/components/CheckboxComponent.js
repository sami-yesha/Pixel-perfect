'use client'
import { useState } from 'react';
import styles from './CheckboxComponent.module.css';

const CheckboxComponent = () => {
  const [selectedPages, setSelectedPages] = useState([]);

  const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];

  const toggleSelect = (page) => {
    if (selectedPages.includes(page)) {
      setSelectedPages(selectedPages.filter(p => p !== page));
    } else {
      setSelectedPages([...selectedPages, page]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedPages.length === pages.length) {
      setSelectedPages([]);
    } else {
      setSelectedPages(pages);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.item} onClick={toggleSelectAll}>
        <span>All pages</span>
        <input
          type="checkbox"
          checked={selectedPages.length === pages.length}
          readOnly
        />
      </div>
      <hr className={styles.divider} />
      {pages.map(page => (
        <div
          key={page}
          className={`${styles.item} ${selectedPages.includes(page) ? styles.selected : ''}`}
          onClick={() => toggleSelect(page)}
        >
          <span>{page}</span>
          <input
            type="checkbox"
            checked={selectedPages.includes(page)}
            readOnly
          />
        </div>
      ))}
      <hr className={styles.divider} />
      <button className={styles.doneButton}>Done</button>
    </div>
  );
};

export default CheckboxComponent;
