import React from "react";
import { ThemedView } from "../ThemedView";
import { AntDesign } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";
import { Pressable } from "react-native";

type Props = {
  content: String;
  onPress?: Function;
};

const SettingsRedirectListItem = (props: Props) => {
  const { content, onPress } = props;
  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
      onPress={() => (onPress ? onPress() : null)}
    >
      <ThemedText
        style={{
          fontSize: 24,
          fontWeight: 500,
          lineHeight: 29,
          color: "#8F9BB3",
        }}
      >
        {content}
      </ThemedText>
      <AntDesign name='right' size={12} color='#8F9BB3' />
    </Pressable>
  );
};

export default SettingsRedirectListItem;
