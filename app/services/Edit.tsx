import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface Book {
  id: string;
  title: string;
  completed: boolean;
}

const Editdata = async (book: Book): Promise<Book> => {
  const url = "http://192.168.0.173:3000";
  const response = await axios.put(`${url}/books/${book.id}`, book);
  return response.data;
};

export const useEditQueryBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Editdata,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
};
