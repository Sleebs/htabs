import React from "react";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import SearchItem from "./SearchItem";

type Props = {};

const SearchResultContainer = (props: Props) => {
  return (
    <ThemedView style={{ width: "100%", paddingTop: 11, gap: 32 }}>
      <ThemedView
        style={{ flexDirection: "row", gap: 24, alignItems: "baseline" }}
      >
        <ThemedText style={{ fontSize: 24, fontWeight: 500, color: "#09A4EA" }}>
          Quick Search
        </ThemedText>
        <ThemedView
          style={{
            borderRadius: 16,
            borderColor: "#09A4EA",
            borderWidth: 1,
          }}
        >
          <ThemedText
            style={{
              color: "#09A4EA",
              paddingHorizontal: 13,
              alignSelf: "center",
              fontSize: 16,
            }}
          >
            more
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={{ flexDirection: "column", gap: 14 }}>
        <SearchItem title='AS-350 / H125' body='AIRBUS Helicopters' />
        <SearchItem title='AS-350 / H125' body='AIRBUS Helicopters' />
        <SearchItem title='AS-350 / H125' body='AIRBUS Helicopters' />
      </ThemedView>
    </ThemedView>
  );
};

export default SearchResultContainer;
