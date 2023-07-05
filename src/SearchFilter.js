import React, { useState, useEffect } from 'react';

const SearchFilter = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://ddic.hgsinteractive.com/api/resource-search?page=1&_limit=8'
      );
      const responseData = await response.json();

      if (Array.isArray(responseData)) {
        setData(responseData);
      } else {
        setData([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchFilter;
