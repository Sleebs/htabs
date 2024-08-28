import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemedView } from "../ThemedView";
import { TextInput } from "react-native";
import { ThemedText } from "../ThemedText";
import FilterModalButton from "./FilterModalButton";

type Props = {};

const SearchBar = (props: Props) => {
  const [text, onChangeText] = React.useState("");
  return (
    <ThemedView style={{ width: "100%" }}>
      <ThemedView style={{ gap: 15 }}>
        <ThemedView
          style={{
            width: "100%",
            height: 48,
            backgroundColor: "#8F9BB3",
            borderRadius: 8,
            paddingHorizontal: 10,
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <FontAwesome name='search' size={24} color='white' />
          <TextInput
            value={text}
            placeholder='search here'
            placeholderTextColor={"white"}
            style={{ color: "white", width: "100%" }}
          />
        </ThemedView>
        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <FilterModalButton body='All' />
          <FilterModalButton body='Brand' expandible={true} />
          <FilterModalButton body='Model' expandible={true} />
          <FilterModalButton body='Other' />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default SearchBar;
