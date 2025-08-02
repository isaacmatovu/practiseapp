import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import EditForm from "../components/EditForm";
import Form from "../components/form";
import { useBooksQuery } from "../services/Fetch";
import { useDeleteBookQuery } from "../services/delete";

interface Book {
  id: string;
  title: string;
  completed: boolean;
}

const operations = () => {
  const { data, isLoading, error } = useBooksQuery();
  const { mutate: DeleteBook } = useDeleteBookQuery();
  const [displayfrom, setDisplayForm] = useState(false);
  const [displayEditForm, setDisplayEditForm] = useState<boolean>(false);
  const [editbook, setEditBook] = useState<Book | null>(null);
  if (error) {
    return <Text className="text-red-500 text-2xl">An error occured</Text>;
  }
  console.log(data);

  const handleDisplay = () => {
    setDisplayForm(true);
  };

  const handleEditDisplayForm = (item: Book) => {
    setDisplayEditForm(true);
    setEditBook(item);
  };

  const handleCloseEditForm = () => {
    setDisplayEditForm(false);
  };

  return (
    <SafeAreaView className="flex-1">
      {displayfrom && <Form onCancel={() => setDisplayForm(false)} />}
      {displayEditForm && editbook && (
        <EditForm book={editbook} onClose={handleCloseEditForm} />
      )}
      <Button text="add book" onPress={handleDisplay} />

      {isLoading ? (
        <ActivityIndicator size="large" color={"green"} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="border-2 border-green-600 w-full rounded-3xl mb-3 pl-8 py-10 h-[100px] max-w-[300px]">
              <View className="flex-row gap-3">
                <View>
                  <Text className="text-black">{item.title}</Text>
                </View>
                <Text className="text-black pl-10">
                  {item.completed ? "man" : "invalid"}
                </Text>
              </View>
              <View>
                <Button text="delete" onPress={() => DeleteBook(item.id)} />
                <Button
                  text="edit"
                  onPress={() => handleEditDisplayForm(item)}
                />
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {},
});
export default operations;
