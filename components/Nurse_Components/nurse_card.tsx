import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Entypo from "@expo/vector-icons/Entypo";

const Nurse_Card = ({ name, date}) => {
  const [Status, setStatus] = useState(["Active", "Inactive"]);
  return (
    <View
      style={{
        width: "100%",
        height: "11%",
        padding: 2,
        backgroundColor: "yellw",
        alignItems: "flex-start",
        marginBottom:'1%',
        justifyContent: "space-between",
        borderBottomColor: "#EBEBF1",
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "yelow",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "25%",
            alignItems: "center",
            backgroundColor: "re",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16 }}>{name}</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "25%",
            alignItems: "center",
            backgroundColor: "rd",
            justifyContent: "center",
          }}
        >
          <Picker
            style={{
              height: "80%",
              width: "35%",
              borderRadius: 30,
              fontSize: 15,
              paddingHorizontal: "4%",
              backgroundColor: "#F9F9FB",
            }}
          >
            {Status.map((Item, index) => {
              return <Picker.Item key={index} value={Item} label={Item} />;
            })}
          </Picker>
        </View>
        <View
          style={{
            height: "100%",
            width: "25%",
            alignItems: "center",
            backgroundColor: "rd",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16 }}>{date}</Text>
        </View>
        <TouchableOpacity style={{ marginRight: "5%" }}>
          <Entypo name="dots-three-vertical" size={19} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Nurse_Card;
