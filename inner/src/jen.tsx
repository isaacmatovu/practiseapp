import { useState } from "react";

interface Props {
  handleData: (data: string) => void;
}

export default function Jen(props: Props) {
  const { handleData } = props;
  const [name, setname] = useState<string>("isaac");
  const handleChange = () => {
    setname("gogos");
    handleData(name);
  };

  return (
    <div>
      <h1>hen</h1>
      <button onClick={handleChange}>send data</button>
    </div>
  );
}


