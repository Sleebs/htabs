import ClauseSetting from "@/components/Settings/ClauseSetting";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

type Props = {};

const termsAndConditions = (props: Props) => {
  return (
    <ThemedView
      style={{
        minHeight: "100%",
        width: "100%",
        alignItems: "center",
        gap: 32,
        paddingTop: 25,
      }}
    >
      <ScrollView>
        <ThemedView style={{ width: "90%", paddingTop: 11, gap: 32 }}>
          <ClauseSetting title={title} body={body} />
          <ClauseSetting title={title} body={body} />
          <ClauseSetting title={title} body={body} />
          <ClauseSetting title={title} body={body} />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

export default termsAndConditions;

const title = "Clause 1";
const body =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetraClause 1";
