import React from "react";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
type Props = {};

const HeaderProfileSettings = (props: Props) => {
  return (
    <Link href={"/UserSettings"} asChild>
      <Pressable>
        <ThemedView style={style.container}>
          <FontAwesome6 name='user' size={24} color='white' />
          <ThemedText>user</ThemedText>
        </ThemedView>
      </Pressable>
    </Link>
  );
};

export default HeaderProfileSettings;
const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    // backgroundColor: "red",
  },
  text: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: 500,
  },
});
