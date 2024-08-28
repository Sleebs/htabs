import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  title: String;
  body: String;
};

const SearchItem = (props: Props) => {
  const { title, body } = props;
  return (
    <ThemedView
      style={{
        width: "100%",
        height: 55,
        borderRadius: 16,
        backgroundColor: "#8F9BB3",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ThemedView
        style={{
          width: "90%",
          height: "90%",
          backgroundColor: "#8F9BB3",
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
          overflow: "hidden",
        }}
      >
        <Ionicons name='logo-figma' size={36} color='white' />
        <ThemedView
          style={{
            flexDirection: "column",
            backgroundColor: "#8F9BB3",
          }}
        >
          <ThemedText
            style={{
              fontSize: 15,
              overflow: "hidden",
              lineHeight: 18,
            }}
            numberOfLines={1}
          >
            {title}
          </ThemedText>
          <ThemedText
            style={{ fontSize: 14, opacity: 0.5, lineHeight: 17 }}
            numberOfLines={1}
          >
            {body}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default SearchItem;
