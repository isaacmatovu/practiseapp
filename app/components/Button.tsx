import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  text: string;
  onPress: () => void;
}

const Button = (props: Props) => {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-green-500 px-8 py-4 rounded-lg border-2 border-blue-400"
    >
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
