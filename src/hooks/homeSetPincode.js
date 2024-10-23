import axios from "axios";
import { useState, useRef, useCallback } from "react";

const useFetchProducts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cache = useRef({}); // Cache to store results of previous requests
  const debounceTimeout = useRef(null); // Ref for debounce timeout

  const fetchData = useCallback((pinCode) => {
    return new Promise((resolve, reject) => {
      // Return cached data if available
      if (cache.current[pinCode]) {
        resolve(cache.current[pinCode]);
        return;
      }

      // Clear any existing timeout to debounce the API call
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      // Set a timeout to delay the API call
      debounceTimeout.current = setTimeout(async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `http://13.61.33.202/api/v2/home-screen?device=1&pincode=${pinCode}`,
            {
              timeout: 5000, // Set a 5-second timeout for the request
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );

          if (response) {
            const data = response.data;
            cache.current[pinCode] = data; // Store the result in cache
            setLoading(false);
            resolve(data);
          } else {
            throw new Error("Failed to fetch");
          }
        } catch (error) {
          setError(error.message);
          setLoading(false);
          reject(error);
        }
      }, 300); // 300ms delay for debounce
    });
  }, []);

  return { loading, error, fetchData };
};

export default useFetchProducts;
