import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface Book {
  title: string;
  completed: boolean;
}

const deleteData = async (id: string): Promise<Book[]> => {
  const url = "http://192.168.0.173:3000";
  const response = await axios.delete(`${url}/books/${id}`);
  return response.data;
};

export const useDeleteBookQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
};
