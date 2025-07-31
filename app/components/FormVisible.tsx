import React from "react";
import { View } from "react-native";
import Form from "./form";

interface Props {
  onClose: () => void;
}
const FormVisible = (props: Props) => {
  const { onClose } = props;

  return (
    <View className="flex-1">
      <View>
        <Form onCancel={onClose} />
      </View>
    </View>
  );
};

export default FormVisible;
