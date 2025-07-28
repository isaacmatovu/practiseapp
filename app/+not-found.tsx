import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const Back = () => {
  return (
    <View className="flex-1 justify-center items-center bg-[#A31621]">
      <Link className="text-white" href={"/"}>
        Go back to home{" "}
      </Link>
    </View>
  );
};

export default Back;
