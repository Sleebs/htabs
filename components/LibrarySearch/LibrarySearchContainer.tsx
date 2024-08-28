import React from "react";
import { ThemedView } from "../ThemedView";
import SearchBar from "@/components/LibrarySearch/SearchBar";
import SearchResultContainer from "./SearchResultContainer";
type Props = {};

const LibrarySearchContainer = (props: Props) => {
  return (
    <ThemedView
      style={{
        width: "80%",
        height: "100%",
        paddingTop: 11,
        gap: 32,
      }}
    >
      <SearchBar />
      <SearchResultContainer />
    </ThemedView>
  );
};

export default LibrarySearchContainer;
