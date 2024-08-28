import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import NewsItem from "./NewsItem";

type Props = {};

export default function NewsCollapsibleContainer(props: Props) {
  return (
    <ThemedView style={{ width: "80%", paddingTop: 11, gap: 32 }}>
      <ThemedView
        style={{ flexDirection: "row", gap: 24, alignItems: "baseline" }}
      >
        <ThemedText style={{ fontSize: 24, fontWeight: 500, color: "#FFA71D" }}>
          News
        </ThemedText>
        <ThemedView
          style={{
            borderRadius: 16,
            borderColor: "#FFA71D",
            borderWidth: 1,
          }}
        >
          <ThemedText
            style={{
              color: "#FFA71D",
              paddingHorizontal: 13,
              alignSelf: "center",
              fontSize: 16,
            }}
          >
            show less
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </ThemedView>
  );
}
