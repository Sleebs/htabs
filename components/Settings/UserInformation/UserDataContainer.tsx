import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Pressable, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = { name: string; city: string; description: string };

const UserDataContainer = (props: Props) => {
  const { name, city, description } = props;

  const press = () => {
    console.log("clicked");
  };
  return (
    <ThemedView style={style.mainContainer}>
      <ThemedView style={style.secondaryContainer}>
        <ThemedView style={style.userDescriptionContainer}>
          <ThemedText style={style.name}>{name}</ThemedText>
          <ThemedText style={style.city}>{city}</ThemedText>
        </ThemedView>
        <ThemedText style={style.description}>{description}</ThemedText>
      </ThemedView>
      <ThemedView style={style.editContainer}>
        <Link href={"/editPage"} asChild>
          <Pressable onPress={press}>
            <ThemedView style={[style.bubble, style.semiround]}>
              <ThemedText>edit</ThemedText>
            </ThemedView>
          </Pressable>
        </Link>
        <Pressable onPress={press}>
          <ThemedView style={[style.bubble, style.round]}>
            <ThemedText>...</ThemedText>
          </ThemedView>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
};

export default UserDataContainer;
const style = StyleSheet.create({
  mainContainer: { gap: 21 },
  secondaryContainer: { gap: 10 },
  userDescriptionContainer: { gap: 5 },
  name: { fontSize: 18, lineHeight: 21, fontWeight: 500 },
  city: { fontSize: 16, lineHeight: 19, fontWeight: 400, color: "#8F9BB3" },
  description: { fontSize: 16, lineHeight: 19, fontWeight: 500 },
  editContainer: { flexDirection: "row", gap: 31 },
  bubble: {
    backgroundColor: "#444D65",
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  semiround: {
    borderRadius: 31,
    width: 147,
  },
  round: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.1,
    height: Dimensions.get("window").width * 0.1,
  },
});
