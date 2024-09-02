import { ThemedView } from "@/components/ThemedView";
import { Dimensions, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import User from "@/types/user";

type Props = {};

const editPage = (props: Props) => {
  const [user, updateUser] = useState<User>();
  const updateName = (newName: string) => {
    if (!user) return;
    let newUser = user;
    newUser.name = newName;
    updateUser(newUser);
  };
  const updateSurname = (surname: string) => {
    if (!user) return;
    let newSurname = user;
    newSurname.surname = surname;
    updateUser(newSurname);
  };
  const updateEmail = (email: string) => {
    if (!user) return;
    let newEmail = user;
    newEmail.email = email;
    updateUser(newEmail);
  };
  //   const updateCompanyCode = (companyCode: string) => {
  //     if (!user) return;
  //     let newCompanyCode = user;
  //     newCompanyCode.email = companyCode;
  //     updateUser(newCompanyCode);
  //   };
  //   const updateCompanyCode = (companyCode: string) => {
  //     if (!user) return;
  //     let newCompanyCode = user;
  //     newCompanyCode.email = companyCode;
  //     updateUser(newCompanyCode);
  //   };
  const updateLicenseType = (licenseType: string) => {
    if (!user) return;
    let newLicense = user;
    newLicense.email = licenseType;
    updateUser(newLicense);
  };

  return (
    <ThemedView style={style.main_container}>
      <ThemedView style={style.container}>
        <ThemedView style={[style.horizzontal, style.fullW, { gap: 12 }]}>
          <TextInput
            value={user ? user.name : ""}
            onChangeText={updateName}
            style={[style.inputBox, { flex: 1 }]}
            placeholder={user ? user.name : "name"}
            placeholderTextColor={"white"}
            numberOfLines={1}
          />
          {/* name*/}
          <TextInput
            value={user ? user.surname : ""}
            onChangeText={updateSurname}
            style={[style.inputBox, { flex: 1 }]}
            placeholder={user ? user.surname : "surname"}
            placeholderTextColor={"white"}
            numberOfLines={1}
          />
          {/* surname*/}
        </ThemedView>
        <ThemedView
          style={{
            minHeight: "80%",
            maxHeight: 500,
            gap: 12,
          }}
        >
          <TextInput
            value={user ? user.email : ""}
            onChangeText={updateName}
            style={[style.inputBox, { flex: 1 }]}
            placeholder={user ? user.email : "email"}
            placeholderTextColor={"white"}
            numberOfLines={1}
            inputMode='email'
          />
          <TextInput
            value={user ? `user.phone` : ""}
            onChangeText={updateName}
            style={[style.inputBox, { flex: 1 }]}
            placeholder={user ? `user.phone` : "phone"}
            placeholderTextColor={"white"}
            numberOfLines={1}
          />
          <TextInput
            value={user ? user.company_code : ""}
            onChangeText={updateName}
            style={[style.inputBox, { flex: 1 }]}
            placeholder={user ? user.company_code : "company code"}
            placeholderTextColor={"white"}
            numberOfLines={1}
          />
          <TextInput
            value={user ? user.license_type : ""}
            onChangeText={updateName}
            style={[style.inputBox, { flex: 1 }]}
            placeholder={user ? user.license_type : "license type"}
            placeholderTextColor={"white"}
            numberOfLines={1}
          />
          <ThemedView
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <ThemedView
              style={{
                gap: 17,
                // height: "100%",
                // width: "60%",
                flex: 2,
              }}
            >
              <ThemedText>Date of Birth</ThemedText>
              <ThemedView style={{ flexDirection: "row", gap: 17 }}>
                <TextInput
                  value={user ? `user.birth_date.getDay` : ""}
                  onChangeText={updateName}
                  style={[style.inputBox, { flex: 1 }]}
                  placeholder={user ? `user.license_type` : "DD"}
                  placeholderTextColor={"white"}
                  numberOfLines={1}
                  keyboardType='numeric'
                />
                <TextInput
                  value={user ? `user.birth_date.getMonth` : ""}
                  onChangeText={updateName}
                  style={[style.inputBox, { flex: 1 }]}
                  placeholder={user ? `user.license_type` : "MM"}
                  placeholderTextColor={"white"}
                  numberOfLines={1}
                  keyboardType='numeric'
                />
                <TextInput
                  value={user ? `user.birth_date.getFullYear` : ""}
                  onChangeText={updateName}
                  style={[style.inputBox, { flex: 1 }]}
                  placeholder={user ? `user.license_type` : "YYYY"}
                  placeholderTextColor={"white"}
                  numberOfLines={1}
                  keyboardType='numeric'
                />
              </ThemedView>
            </ThemedView>
            <ThemedView style={{ flex: 1, gap: 17 }}>
              <ThemedText>Flight Hours</ThemedText>
              <ThemedView style={style.inputBox}>
                <ThemedText>{user ? `user.flight_hours` : "0"}</ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>
          <ThemedView style={[style.horizzontal, { gap: 31 }]}>
            <ThemedView style={[style.semiround, style.bubble]}>
              <ThemedText>save</ThemedText>
            </ThemedView>
            <ThemedView style={[style.round, style.bubble]}>
              <ThemedText>...</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default editPage;
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
    paddingTop: 11,
    gap: 12,
  },
  horizzontal: { flexDirection: "row" },
  fullW: { width: "100%" },
  halfW: { width: "50%" },
  inputBox: {
    borderRadius: 8,
    paddingHorizontal: 6,
    backgroundColor: "#8F9BB3",
    opacity: 0.7,
    fontSize: 16,
    lineHeight: 19,
    height: 48,
  },
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
