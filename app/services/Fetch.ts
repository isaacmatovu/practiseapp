import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Books {
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async (): Promise<Books[]> => {
  const baseUrl = "http://192.168.0.173:3000";
  const response = await axios.get(`${baseUrl}/books`);
  return response.data;
};

export const useBooksQuery = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: fetchData,
  });
};
