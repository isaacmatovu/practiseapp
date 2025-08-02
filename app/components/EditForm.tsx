import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Button from "./Button";
import RadioButton from "./radiobutton";

interface Book {
  title: string;
  completed: boolean;
}
interface Props {
  onClose: () => void;
  book: Book;
}
const EditForm = (props: Props) => {
  const { onClose, book } = props;
  const [editForm, setEditForm] = useState<Book>({
    title: book.title,
    completed: book.completed,
  });

  const handleRadioChange = (newValue: boolean) => {
    setEditForm((prev) => ({ ...prev, completed: newValue }));
  };
  return (
    <View className="absolute inset-0 z-50 bg-[rgba(0,0,0,0.5)] justify-center items-center">
      <View className="bg-white rounded-md w-72 h-72 p-6">
        <View className="flex-row gap-x-4 justify-center items-center">
          <Text>Name</Text>
          <TextInput
            className="border border-gray-400 w-40 h-10"
            placeholder="enter title"
            onChangeText={(text) =>
              setEditForm((prev) => ({ ...prev, title: text }))
            }
            value={editForm.title}
          />
        </View>
        <Text>choose </Text>
        <Text className="mb-2">Status</Text>
        <View className="flex-col mb-4 justify-start items-start gap-2">
          <RadioButton
            label="Completed"
            selected={editForm.completed}
            onPress={() => handleRadioChange(true)}
          />
          <RadioButton
            label="Not Completed"
            selected={!editForm.completed}
            onPress={() => handleRadioChange(false)}
          />
        </View>
        {/* <Button text="save" onPress={} /> */}
        <Button text="cancel" onPress={onClose} />
      </View>
    </View>
  );
};

export default EditForm;
