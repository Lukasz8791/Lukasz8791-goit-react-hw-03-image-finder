import React, { useState } from 'react';
import SearchBar from './Searchbar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import styles from './App.module.css';

const App = () => {
  const [query, setQuery] = useState('');

  const handleFormSubmit = newQuery => {
    setQuery(newQuery);
  };

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery query={query} />
    </div>
  );
};

export default App;
