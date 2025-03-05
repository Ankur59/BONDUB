import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Nurse_Card from "./nurse_card";
import Button from "../Particles/Button";
import AddNurseModal from "./Modal/AddNurse";

const NursesPage = ({ Nurse_Data }) => {
  const [ismodalopen, setismodalopen] = useState(false);
  const close = () => {
    setismodalopen(!ismodalopen);
  };
  return (
    <View style={{ backgroundColor: "yelow", height: "100%", width: "100%" }}>
      <AddNurseModal onClose={close} visible={ismodalopen} />
      {/* just empty div to maintain spacing */}
      <View
        style={{ height: "6%", width: "100%" }}
      ></View>
      <View
        style={{
          height: "7%",
          width: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "99%",
            backgroundColor: "rd",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: "100%",
              width: "18%",
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
              backgroundColor: "geen",
              alignItems: "flex-end",
              marginRight: "5%",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                height: "70%",
                width: "65%",
                backgroundColor: "white",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                borderWidth: 1,

                borderColor: "#E6E6EA",
              }}
              onPress={() => close()}
            >
              <View
                style={{
                  height: "90%",
                  width: "80%",
                  backgroundColor: "ble",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "20%",
                    backgroundColor: "yellw",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AntDesign name="plus" size={17} color="black" />
                </View>
                <View
                  style={{
                    height: "100%",
                    width: "90%",
                    backgroundColor: "ble",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 15, marginRight: "7%" }}>
                    Add New
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          height: "87%",
          width: "100%",
          backgroundColor: "re",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "60%",
            width: "90%",
            backgroundColor: "rd",
            marginTop: "4%",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#EBEBF1",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "10%",
              padding: 10,
              backgroundColor: "yelow",
              alignItems: "flex-start",
              borderBottomColor: "#EBEBF1",
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                width: "90%",
                height: "100%",
                backgroundColor: "yellw",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "25%",
                  alignItems: "center",
                  backgroundColor: "rd",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#A1A1B0", fontSize: 18 }}>Name</Text>
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
                <Text style={{ color: "#A1A1B0", fontSize: 18 }}>
                  Account Status
                </Text>
              </View>
              <View
                style={{
                  height: "100%",
                  width: "25%",
                  alignItems: "center",
                  backgroundColor: "rd",
                  justifyContent: "center",
                  marginRight: "5%",
                }}
              >
                <Text style={{ color: "#A1A1B0", fontSize: 18 }}>
                  Date Created
                </Text>
              </View>
            </View>
          </View>
          {Nurse_Data.map((item, index) => {
            return (
              <Nurse_Card name={item.name} date={item.createdAt} key={index} />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default NursesPage;
