const [query, setQuery] = useState("");
const [results, setResults] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const debouncedQuery = useDebouncedValue(query, 300);

const requestId = useRef(0);

useEffect(() => {
  if (!debouncedQuery) {
    setResults([]);
    setLoading(false);
    return;
  }

  const controller = new AbortController();
  const currentRequest = ++requestId.current;

  const fetchResults = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `/api/search?q=${encodeURIComponent(debouncedQuery)}`,
        { signal: controller.signal },
      );

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      const data = await res.json();

      // Prevent stale updates
      if (currentRequest === requestId.current) {
        setResults(data);
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err);
      }
    } finally {
      if (currentRequest === requestId.current) {
        setLoading(false);
      }
    }
  };

  fetchResults();

  return () => {
    controller.abort();
  };
}, [debouncedQuery]);
