import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1">
      <ImageBackground
        resizeMode="cover"
        className="w-full h-full flex-1 justify-center"
        source={require("../../assets/images/iced-coffee.png")}
      >
        <Text className="text-6xl text-white font-bold justify-center text-center bg-[rgba(0,0,0,0.5)]">
          Coffee shoper!
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
  },
});
