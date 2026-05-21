import { useEffect, useRef, useState } from "react";
// import { useMediaQuery } from "react-responsive";

import s from "./Homepage.module.scss";
import TestComponent3 from "./Cool";

interface Person {
  name: string;
  age: number;
}

const Homepage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const requestId = useRef(0);
  useEffect(() => {
    const currentRequest = requestId.current;
    console.log("currentRequest", currentRequest);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPeople = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/getData", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data.people)) {
          setPeople(data.people);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          console.error("Error fetching people:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={s.container}>
      <div className={s.content}>
        <p>JS Practice</p>

        {error && (
          <div style={{ color: "red" }}>
            <p>Error: {error}</p>
          </div>
        )}

        {!loading &&
          !error &&
          people.length > 0 &&
          people.map((person, index) => (
            <div
              key={person.name + index}
              style={{
                marginBottom: "10px",
                marginTop: "20px",
                display: "flex",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              <p>
                <strong>Name:</strong> {person.name}
              </p>
              <p>
                <strong>Age:</strong> {person.age}
              </p>
            </div>
          ))}

        {!loading && !error && people.length === 0 && (
          <p>No people data found.</p>
        )}
      </div>
      <TestComponent3 as="foo" href="https://example.com" />
    </div>
  );
};

export default Homepage;
