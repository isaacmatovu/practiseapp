import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface form {
  title: string;
  completed: boolean;
}

const addData = async (FormData: form) => {
  const baseUrl = "http://192.168.0.173:3000";
  const response = await axios.post(`${baseUrl}/books`, FormData);
  return response.data;
};

export const useAddBooksQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
};
