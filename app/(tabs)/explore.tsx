import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import MenuImages from "../components/MenuImages";
import { MenuItems } from "../components/MenuItems";

const separatorCom = (
  <View className="h-1 bg-slate-500 w-2/4 max-w-[300px] mx-auto mb-3" />
);
const headerComp = (
  <Text className="text-3xl text-red-700">lets shop here</Text>
);
const footerComp = (
  <Text className="text-green-800 text-3xl mx-auto">End of list </Text>
);

const Explore = () => {
  return (
    <View>
      <FlatList
        data={MenuItems}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer} //styles the parent of the flatlist
        ItemSeparatorComponent={separatorCom}
        ListFooterComponentStyle={styles.footer}
        ListHeaderComponent={headerComp}
        ListFooterComponent={footerComp}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex-row w-full max-w-[600px] h-[100px] mb-3 border-2 border-blue-700 rounded-3xl overflow-hidden mx-auto">
            {/* styles.row */}
            <View className="w-[65%] py-3 pl-[10px] pr-[5px] flex-grow">
              {/* styles.menuTextRow */}
              <Text className="text-lg underline">{item.title}</Text>
              {/* menuitemTitle */}
              <Text>{item.description}</Text>
              {/* menuitemtext */}
            </View>
            <Image
              className="w-[100px] h-[100px]"
              source={MenuImages[item.id - 1]}
            />
            {/* styles.menuImage */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 50,
    paddingHorizontal: 12, //PADDING ON THE LEFT AND RIGHT
  },
  footer: {
    marginHorizontal: "auto",
  },
});

export default Explore;
