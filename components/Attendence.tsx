import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import DateNavigator from "./Date_picker";
import { format } from "date-fns";
import AttendanceData from "../Data/Attendence";
import Attendence_Card from "./Attendence_card";

const Attendence = ({}) => {
  const [ismodalopen, setismodalopen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [Atten_date, setatten_data] = useState(AttendanceData);
  const [mapping_data, setmappingdata] = useState<
    {
      id: number;
      name: string;
      role: string;
      date: string;
      status: string;
      inTime: string;
      outTime: string;
    }[]
  >([]);
  //
  useEffect(() => {
    const formattedDate = format(selectedDate, "dd-MM-yyyy"); // Format the date
    const filtered = Atten_date.filter(
      (item) => item.date === formattedDate.toString()
    );
    setmappingdata(filtered);
  }, [selectedDate]);
  //
  const close = () => {
    setismodalopen(!ismodalopen);
  };
  console.log(mapping_data);
  return (
    <View style={{ backgroundColor: "yelow", height: "100%", width: "100%" }}>
      {/* just empty div to maintain spacing */}
      <View
        style={{ height: "6%", width: "100%"}}
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
              width: "24%",
              backgroundColor:'rd',
              justifyContent: "center",
              marginLeft: "5%",
            }}
          >
            <Text style={{ fontSize: 30 }}>Attendance</Text>
          </View>
          <DateNavigator onDateChange={setSelectedDate} />
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
                  width: "20%",
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
                  width: "20%",
                  alignItems: "center",
                  backgroundColor: "rd",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#A1A1B0", fontSize: 18 }}>Role</Text>
              </View>
              <View
                style={{
                  height: "100%",
                  width: "20%",
                  alignItems: "center",
                  backgroundColor: "rd",
                  justifyContent: "center",
                  marginRight: "5%",
                }}
              >
                <Text style={{ color: "#A1A1B0", fontSize: 18 }}>Status</Text>
              </View>
              <View
                style={{
                  height: "100%",
                  width: "20%",
                  alignItems: "center",
                  backgroundColor: "rd",
                  justifyContent: "center",
                  marginRight: "5%",
                }}
              >
                <Text style={{ color: "#A1A1B0", fontSize: 18 }}>
                  Login-Time
                </Text>
              </View>
              <View
                style={{
                  height: "100%",
                  width: "20%",
                  alignItems: "center",
                  backgroundColor: "rd",
                  justifyContent: "center",
                  marginRight: "5%",
                }}
              >
                <Text style={{ color: "#A1A1B0", fontSize: 18 }}>
                  Logout-Time
                </Text>
              </View>
            </View>
          </View>
          {mapping_data.map((item, index) => {
            return (
              <Attendence_Card
                Login={item.inTime}
                Logout={item.outTime}
                name={item.name}
                role={item.role}
                status={item.status}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Attendence;
