import React from "react";
import { ThemedView } from "../ThemedView";
import { AntDesign } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";

type Props = {
  content: String;
};

const SettingsRedirectListItem = (props: Props) => {
  const { content } = props;
  return (
    <ThemedView
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
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
    </ThemedView>
  );
};

export default SettingsRedirectListItem;
