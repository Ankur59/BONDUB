import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Entypo from "@expo/vector-icons/Entypo";

const Attendence_Card = ({ name, role, status, Login, Logout }) => {
  const [Status, setStatus] = useState(["Active", "Inactive"]);
  return (
    <View
      style={{
        width: "100%",
        height: "14%",
        padding: 2,
        backgroundColor: "yelow",
        alignItems: "flex-start",
        justifyContent: "space-between",
        borderBottomColor: "#EBEBF1",
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "ble",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "19%",
            alignItems: "center",
            backgroundColor: "rd",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 17 }}>{name}</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "16.5%",
            alignItems: "center",
            backgroundColor: "rd",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 17 }}>{role}</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "20%",
            alignItems: "center",
            backgroundColor: "re",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: "75%",
              width: "45%",
              backgroundColor: status == "Present" ? "#F9F9FB" : "#FFF7F7",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
              borderWidth: 1,
              borderColor: status == "Present" ? "#E6E6EA" : "#FEEAEA",
            }}
          >
            <Text
              style={{
                fontSize: 17,
                color: status == "Present" ? "#66667A" : "#DE2A29",
              }}
            >
              {status}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: "100%",
            width: "22.9%",
            alignItems: "center",
            backgroundColor: "rd",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 17 }}>{Login}</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "20%",
            alignItems: "center",
            backgroundColor: "ed",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 17 }}>{Logout}</Text>
        </View>
        <TouchableOpacity style={{ position: "absolute", right: 0,marginRight:'2%' }}>
          <Entypo name="dots-three-vertical" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Attendence_Card;
