import { useState } from 'react';

function AreaSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchArea = () => {
    fetch(`/api/search-area?query=${query}`)
      .then(response => response.json())
      .then(data => setResults(data));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Search Area</h2>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border p-2 rounded w-full mb-4"
        placeholder="Enter area name"
      />
      <button
        onClick={searchArea}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>
      <ul>
        {results.map(area => (
          <li key={area.name} className="mb-2">
            <div className="p-4 border rounded shadow">
              <h3 className="text-xl font-bold">{area.name}</h3>
              <p>Latitude: {area.lat}</p>
              <p>Longitude: {area.lon}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AreaSearch;
