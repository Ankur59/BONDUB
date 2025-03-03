import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

// const NurseCard = ({ name, accountStatus, dateCreated }) => {
//   return (
//     <View style={{ flexDirection: "row", padding: 10, borderBottomWidth: 1 }}>
//       <Text style={{ flex: 1 }}>{name}</Text>
//       <View style={{ flex: 1 }}>
//         {/* Empty view for dropdown */}
//         <View style={{ height: 30, backgroundColor: "#f0f0f0" }} />
//       </View>
//       <Text style={{ flex: 1 }}>{dateCreated}</Text>
//     </View>
//   );
//

const NursesPage = () => {
  return (
    <View style={{ backgroundColor: "yellow", height: "100%", width: "100%" }}>
      {/* just empty div to maintain spacing */}
      <View
        style={{ height: "6%", width: "100%", backgroundColor: "ble" }}
      ></View>
      <View
        style={{
          height: "7%",
          width: "100%",
          backgroundColor: "rd",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "10%",
            justifyContent: "center",
            marginLeft: "5%",
          }}
        >
          <Text style={{ fontSize: 30 }}>Nurses</Text>
        </View>
        {/* Add Button */}
        <View
          style={{
            height: "100%",
            width: "15%",
            backgroundColor: "gren",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: "70%",
              width: "60%",
              backgroundColor: "white",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height: "100%",
                width: "30%",
                backgroundColor: "rd",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="plus" size={24} color="black" />
            </View>
            <View
              style={{
                height: "100%",
                width: "70%",
                backgroundColor: "ble",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 17 }}>Add New</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NursesPage;
