import { useState, useEffect } from 'react';
import { getLoadsheddingStatuses, searchArea } from '../services/api';
import LoadsheddingStatus from '../components/LoadsheddingStatus';
import SearchBar from '../components/SearchBar';
import styles from './index.module.css';

const Home = () => {
  const [statuses, setStatuses] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const data = await getLoadsheddingStatuses();
        setStatuses(data);
      } catch (error) {
        console.error('Error fetching loadshedding statuses:', error);
      }
    };

    fetchStatuses();
  }, []);

  const handleSearch = async (query) => {
    try {
      const results = await searchArea(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching area:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ZETDC Loadshedding Status</h1>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.grid}>
        {searchResults.length > 0
          ? searchResults.map((status) => (
              <LoadsheddingStatus key={status.id} status={status} />
            ))
          : statuses.map((status) => (
              <LoadsheddingStatus key={status.id} status={status} />
            ))}
      </div>
    </div>
  );
};

export default Home;
