import SettingsRedirectListItem from "@/components/Settings/SettingsRedirectListItem";
import LoginStatusContainer from "@/components/Settings/UserInformation/LoginStatusContainer";
import UserDataContainer from "@/components/Settings/UserInformation/UserDataContainer";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

type Props = {};

const editAccount = (props: Props) => {
  return (
    <ThemedView style={style.main_container}>
      <ThemedView style={style.container}>
        <UserDataContainer
          name='HEULS Jeremy'
          city='Location, City'
          description={content}
        />

        <LoginStatusContainer />
      </ThemedView>
    </ThemedView>
  );
};

export default editAccount;

const style = StyleSheet.create({
  main_container: {
    minHeight: "100%",
    width: "100%",
    alignItems: "center",
    gap: 32,
    paddingTop: 25,
  },
  container: {
    width: "80%",
    height: "100%",
    paddingTop: 11,
    gap: 32,
    justifyContent: "space-between",
  },
});

const content: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.";
