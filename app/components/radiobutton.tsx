import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  selected: boolean;
  onPress: () => void;
  label: string;
}

const RadioButton = (props: Props) => {
  const { selected, onPress, label } = props;
  return (
    <>
      <Text className="ml-2 text-xl">{label}</Text>
      <TouchableOpacity
        className={`border rounded-full h-6 w-6 p-5 justify-center items-center  ${
          selected ? "border-blue-600" : "border-gray-400"
        }`}
        onPress={onPress}
      >
        <View
          className={`h-3 w-3 p-3 rounded-full ${
            selected ? "bg-blue-600" : "bg-gray-400"
          }`}
        />
      </TouchableOpacity>
    </>
  );
};

export default RadioButton;
