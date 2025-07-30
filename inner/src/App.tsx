import { useEffect, useState, type ChangeEvent } from "react";
import Jen from "./jen";

interface Results {
  id: number;
  title: string;
  body: string;
}

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setresults] = useState<Results[]>([]);
  const [error, setError] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [debounced, setdounced] = useState("");
  const [Data, setData] = useState<string>("");

  const handleData = (childData: string) => {
    setData(childData);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setdounced(input);
    }, 1000);

    return () => clearInterval(timer);
  }, [input]);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?q=${debounced}`
        );
        const data = await response.json();
        setresults(data);
      } catch {
        setError("couldnt fetch");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [debounced]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  if (loading) {
    return <p>loading....</p>;
  }

  return (
    <>
      <input
        type="text"
        placeholder="search thing"
        onChange={handleChange}
        value={input}
      />
      <div>
        {results?.map((item) => (
          <div key={item.id}>
            <h1>{item.id}</h1>
            <h1>{item.body}</h1>
            <h1>{item.title}</h1>
          </div>
        ))}
        <Jen handleData={handleData} />
        {Data}
      </div>
    </>
  );
}

export default App;
