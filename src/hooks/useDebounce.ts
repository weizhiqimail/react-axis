import { useEffect, useState } from 'react';

function useDebounce(value: any, delay = 30) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounceValue;
}

export default useDebounce;
