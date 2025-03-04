import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign"; 
import AddDoctorModal from "./Modals/AddDoctorModal";
import Doctor_card from "./doctor_card";

const DoctorPage = ({ Doctor_data }) => {
  const [ismodalopen, setismodalopen] = useState(false);
  const close = () => {
    setismodalopen(!ismodalopen);
  };
  return (
    <View style={{ backgroundColor: "yelow", height: "100%", width: "100%" }}>
      <AddDoctorModal onClose={close} visible={ismodalopen} />
      {/* just empty div to maintain spacing */}
      <View
        style={{ height: "6%", width: "100%", backgroundColor: "blue" }}
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
              width: "10%",
              justifyContent: "center",
              marginLeft: "5%",
            }}
          >
            <Text style={{ fontSize: 30 }}>Doctors</Text>
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
            backgroundColor: "re",
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
                  backgroundColor: "re",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#A1A1B0", fontSize: 18 }}>Patients</Text>
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
          {Doctor_data.map((item, index) => {
            return (
              <Doctor_card
                patients={item.numberOfPatients}
                name={item.name}
                date={item.joiningDate}
                key={index}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default DoctorPage;
