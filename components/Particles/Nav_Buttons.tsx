import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
interface CardsProps {
  value: string;
  state: React.Dispatch<React.SetStateAction<string>>;
  check: string;
  icon: React.ReactElement;
  height?: number | `${number}%`;
  width?: number | `${number}%`;
  padding?: number | `${number}%`;
}
const Buttons = ({ value, state, check, icon, height, width,padding }: CardsProps) => {
  return (
    <View
      style={{
        width: width || "90%",
        height: height || "8%",
        backgroundColor: "rd",
        justifyContent: "center",
        
      }}
    >
      <View
        style={{
          width: "100%",
          height: "86%",
          backgroundColor: "whte",
          paddingVertical: padding || "2%",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: check === value ? "#E5E8FF" : "#FAFAFF",
            borderRadius: 6,
            // borderWidth: 1,
            // borderColor: check === value ? "#3E32E4" : "white",
          }}
          onPress={() => state(value)}
          activeOpacity={0.8}
        >
          <View
            style={{
              width: "90%",
              height: "100%",
              backgroundColor: "rd",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height: "100%",
                width: "24%",
                backgroundColor: "yllow",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </View>
            <View
              style={{
                height: "100%",
                width: "76%",
                backgroundColor: "re",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                  color: check === value ? "#3E32E4" : "black",
                }}
              >
                {value}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Buttons;
