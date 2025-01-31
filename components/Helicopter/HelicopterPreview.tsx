import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Pressable } from "react-native";

type Props = {};

const HelicopterPreview = (props: Props) => {
  const [bookMark, updateBookmark] = useState<Boolean>(false);
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
          overflow: "hidden",
          alignItems: "center",
          gap: 10,
        }}
      >
        <FontAwesome6 name='helicopter' size={36} color='#96D454' />
        <ThemedView
          style={{
            flexDirection: "column",
            backgroundColor: "#8F9BB3",
            flex: 1,
          }}
        >
          <ThemedText
            style={{
              fontSize: 15,
              overflow: "hidden",
            }}
            numberOfLines={1}
          >
            AS-350 B3e / H125
          </ThemedText>
          <ThemedText style={{ fontSize: 14, opacity: 0.5 }} numberOfLines={1}>
            Garmin 500 Txi step 2 - MPVK - ...
          </ThemedText>
        </ThemedView>
        <Pressable onPress={() => updateBookmark(!bookMark)}>
          <ThemedView style={{ padding: 10, backgroundColor: "transparent" }}>
            {bookMark ? (
              <FontAwesome name='bookmark' size={24} color='white' />
            ) : (
              <FontAwesome name='bookmark-o' size={24} color='white' />
            )}
          </ThemedView>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
};

export default HelicopterPreview;
