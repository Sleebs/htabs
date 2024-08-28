import React from "react";
import { ThemedView } from "../ThemedView";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemedText } from "../ThemedText";
type Props = {};

const NewsItem = (props: Props) => {
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
        <FontAwesome name='newspaper-o' size={36} color='#FFA71D' />
        <ThemedView
          style={{
            flexDirection: "column",
            backgroundColor: "#8F9BB3",
          }}
        >
          <ThemedText
            style={{
              fontSize: 22,
              overflow: "hidden",
            }}
            numberOfLines={1}
          >
            AS-350 / H125 - flight manual...
          </ThemedText>
          <ThemedText style={{ fontSize: 19, opacity: 0.5 }} numberOfLines={1}>
            PMVR N 17/04
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default NewsItem;
