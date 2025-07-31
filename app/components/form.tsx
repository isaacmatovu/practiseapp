import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useAddBooksQuery } from "../services/add";
import Button from "./Button";
import RadioButton from "./radiobutton";

interface Book {
  title: string;
  completed: boolean;
}

interface FormProps {
  onCancel: () => void;
}
const Form = (props: FormProps) => {
  const { onCancel } = props;

  const [form, setForm] = useState<Book>({
    title: "",
    completed: false,
  });

  const { mutate, isPending, isError } = useAddBooksQuery();

  const handleRadioChange = (newValue: boolean) => {
    setForm((prev) => ({ ...prev, completed: newValue }));
  };

  const handleSubmit = () => {
    mutate(form, { onSuccess: () => onCancel() });
  };

  if (isError) {
    return <Text>Couldnt add book try again</Text>;
  }

  return (
    <View className="absolute inset-0 z-50 justify-center items-center bg-[rgba(0,0,0,0.5)]">
      <View className=" bg-white p-6 rounded-lg w-80 max-w-full">
        <TextInput
          placeholder="Enter a title"
          className="border border-black p-2 mb-4"
          value={form.title}
          onChangeText={(text) => setForm((prev) => ({ ...prev, title: text }))}
        />
        <Text>choose </Text>
        <Text className="mb-2">Status</Text>
        <View className="flex-row mb-4">
          <RadioButton
            label="Completed"
            selected={form.completed}
            onPress={() => handleRadioChange(true)}
          />
          <RadioButton
            label="Not Completed"
            selected={!form.completed}
            onPress={() => handleRadioChange(false)}
          />
        </View>
        <Button text={isPending ? "Adding" : "Add"} onPress={handleSubmit} />
        <Button text="cancel" onPress={onCancel} />
      </View>
    </View>
  );
};

export default Form;
