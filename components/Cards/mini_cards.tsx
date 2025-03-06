import { View, Text } from "react-native";
import React from "react";

interface PatientCardProps {
  Name: string;
  ward: number;
  bed: number;
  condition: string;
}

const Mini_Cards: React.FC<PatientCardProps> = ({
  Name,
  ward,
  bed,
  condition,
}) => {
  return (
    <View
      style={{
        width: "100%",
        height: "34%",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBEBF1",
        borderLeftColor: "#EBEBF1",
        borderLeftWidth: 1,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "bue",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            height: "100%",
            width: "20%",
            backgroundColor: "re",
            marginLeft: "1%",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#2A2A32", fontSize: 14 }}>{Name}</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "25%",
            alignItems: "center",
            backgroundColor: "re",
            justifyContent: "center",
          }}
        >
          <Text>{ward}</Text>
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
          <Text style={{fontSize:14}}>{bed}</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "25%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rd",
          }}
        >
          {" "}
          <View
            style={{
              height: "60%",
              width: "60%",
              backgroundColor: condition == "Critical" ? "#FFF3F3" : "#E5FEF6",
              borderWidth: 1,
              borderColor: condition == "Critical" ? "#FDDCDC" : "#B2EEDB",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 6,
              marginVertical:'10%'
            }}
          >
            <Text style={{ color: condition == "Critical" ? "red" : "green" }}>
              {condition}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Mini_Cards;
