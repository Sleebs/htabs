import React from "react";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  expandible?: boolean;
  body: string;
};

const FilterModalButton = (props: Props) => {
  const { expandible, body } = props;
  return (
    <ThemedView
      style={{
        backgroundColor: "#8F9BB36B",
        opacity: 0.49,
        borderRadius: 16,
      }}
    >
      <ThemedView
        style={{
          paddingHorizontal: 13,
          paddingVertical: 1,
          flexDirection: "row",
          gap: 4,
        }}
      >
        <ThemedText>{body}</ThemedText>
        {expandible ? (
          <MaterialIcons name='expand-more' size={24} color='white' />
        ) : null}
      </ThemedView>
    </ThemedView>
  );
};

export default FilterModalButton;
