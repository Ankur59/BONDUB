import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Dash_styles from "./Styles/Dashboard.style";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Cards from "./Cards/Cards";
import { patients } from "../Data/patients";
import Small from "./Cards/Small_Card";
import nursesdata from "../Data/nurse";
import doctors_data from "../Data/Doctors";

interface Patient {
  name: string;
  locality: string;
  wardNumber: number;
  numBeds: number;
  condition: string;
  category?: string;
}

const Dashboard_comp = () => {
  const [data, setdata] = useState("Overview");
  const [beds, setbeds] = useState([1, 2, 3, 4]);
  const [doctors, setdoctors] = useState(doctors_data);
  const [nurses, setnurses] = useState(nursesdata);
  const [wards, setwards] = useState([1, 2, 3]);
  const [Patients_data, setpatients] = useState(patients);
  const [count, setcount] = useState(0);
  const [Critical, setCritical] = useState<Patient[]>([]);
  const [patient_week, setpatient_week] = useState([]);

  useEffect(() => {
    const criticalPatients = Patients_data.filter(
      (p) => (p.category || "").toLowerCase() === "critical"
    );
    setcount(criticalPatients.length);
    setCritical(criticalPatients);
  }, [Patients_data]);

  const check_ward = () => {
    return !(
      doctors.length === 0 ||
      wards.length === 0 ||
      nurses.length === 0 ||
      beds.length === 0
    );
  };

  return (
    <View style={Dash_styles.parent}>
      {data === "Overview" && (
        <View style={{ height: "100%", width: "100%", backgroundColor: "ble" }}>
          {/* Empty View */}
          <View
            style={{
              height: "4%",
              width: "100%",
              backgroundColor: "yellw",
              marginLeft: "7%",
            }}
          />
          {/*  */}
          <View
            style={{
              height: "5%",
              width: "100%",
              backgroundColor: "yellw",
              marginLeft: "5%",
              justifyContent: "flex-end",
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "500" }}>
              Hospital Overview
            </Text>
          </View>
          <View
            style={{
              height: "15%",
              backgroundColor: "rd",
              width: "100%",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <View
              style={{
                height: "99%",
                width: "94%",
                backgroundColor: "pnk",
                marginLeft: "3%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 35,
                  width: 35,
                  position: "absolute",
                  right: -5,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    right: 0,
                    backgroundColor: "white",
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: "#E6E6EA",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AntDesign name="right" size={20} color="black" />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: 35,
                  width: 35,
                  position: "absolute",
                  left: -5,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: "#E6E6EA",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AntDesign name="left" size={20} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{ height: "92%", width: "18.4%", marginLeft: "2%" }}>
                <Small
                  height={"100%"}
                  width={"100%"}
                  heading="General Ward"
                  critical_count={count}
                  type={3}
                  noview={true}
                  total_count={50}
                  used={patients.length}
                  source={Critical}
                  show_vacant={false}
                  count={doctors.length}
                />
              </View>
              <View style={{ height: "92%", width: "18.4%", marginLeft: "1%" }}>
                <Small
                  height={"100%"}
                  width={"100%"}
                  heading="Male Ward"
                  critical_count={count}
                  type={3}
                  noview={true}
                  total_count={50}
                  used={patients.length}
                  source={Critical}
                  show_vacant={false}
                  count={doctors.length}
                />
              </View>{" "}
              <View style={{ height: "92%", width: "18.4%", marginLeft: "1%" }}>
                <Small
                  height={"100%"}
                  width={"100%"}
                  heading="Female Ward"
                  critical_count={count}
                  type={3}
                  noview={true}
                  total_count={50}
                  used={patients.length}
                  source={Critical}
                  show_vacant={false}
                  count={doctors.length}
                />
              </View>{" "}
              <View style={{ height: "92%", width: "18.4%", marginLeft: "1%" }}>
                <Small
                  height={"100%"}
                  width={"100%"}
                  heading="Isolation Ward"
                  critical_count={count}
                  type={3}
                  noview={true}
                  total_count={50}
                  used={patients.length}
                  source={Critical}
                  show_vacant={false}
                  count={doctors.length}
                />
              </View>{" "}
              <View style={{ height: "92%", width: "18.4%", marginLeft: "1%" }}>
                <Small
                  height={"100%"}
                  width={"100%"}
                  heading="Special Room"
                  critical_count={count}
                  type={3}
                  noview={true}
                  total_count={50}
                  used={patients.length}
                  source={Critical}
                  show_vacant={false}
                  count={doctors.length}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              height: "73%",
              alignSelf: "flex-end",
              width: "100%",
              backgroundColor: "rd",
              flexDirection: "row",
            }}
          >
            {/* Biggest card parent */}
            <View
              style={{
                height: "100%",
                width: "55%",
                backgroundColor: "yelow",
                justifyContent: "flex-start",
              }}
            >
              <View
                style={{
                  height: "99%",
                  width: "90%",
                  marginLeft: "9%",
                  alignItems: "center",
                  marginTop: "1%",
                }}
              >
                <Cards
                  height={"100%"}
                  width={"100%"}
                  content={patients.length}
                  heading="Total Patients"
                  source={Patients_data}
                  icons={
                    <MaterialCommunityIcons
                      name="bed-outline"
                      size={17}
                      color="#A1A1B0"
                    />
                  }
                  check={check_ward()}
                  warning="Add doctors, nurses, wards & beds first to start adding patients "
                  count={patients.length}
                  critical_count={count}
                />
              </View>
            </View>

            {/* Small cards area parent */}
            <View
              style={{ height: "102%", width: "40%", backgroundColor: "yelow" }}
            >
              <View
                style={{
                  height: "50%",
                  width: "100%",
                  backgroundColor: "ed",
                  marginTop: "1%",
                }}
              >
                <View
                  style={{
                    height: "51%",
                    width: "100%",
                    marginBottom: "1%",
                    backgroundColor: "rd",
                    alignItems: "center",
                  }}
                >
                  <Small
                    height={"92%"}
                    width={"98%"}
                    heading="Emergency"
                    icons={<AntDesign name="bells" size={17} color="#A1A1B0" />}
                    critical_count={count}
                    type={1}
                    check={check_ward()}
                    source={Critical}
                    count={Critical.length}
                  />
                </View>

                <View
                  style={{
                    height: "47%",
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      height: "90%",
                      width: "48%",
                      backgroundColor: "yelow",
                      borderRadius: 8,
                      marginLeft: "1%",
                      position: "absolute",
                      left: 0,
                    }}
                  >
                    <Small
                      height={"92%"}
                      width={"100%"}
                      heading="Nurses"
                      icons={
                        <MaterialCommunityIcons
                          name="clipboard-plus"
                          size={17}
                          color="#A1A1B0"
                        />
                      }
                      critical_count={count}
                      check={true}
                      type={2}
                      source={Critical}
                      count={nurses.length}
                    />
                  </View>
                  <View
                    style={{
                      height: "90%",
                      width: "48%",
                      backgroundColor: "yelow",
                      borderRadius: 8,
                      marginRight: "1%",
                      position: "absolute",
                      right: 0,
                    }}
                  >
                    <Small
                      height={"92%"}
                      width={"100%"}
                      heading="Doctors"
                      icons={
                        <Fontisto name="stethoscope" size={17} color="black" />
                      }
                      check={true}
                      critical_count={count}
                      type={2}
                      source={Critical}
                      count={doctors.length}
                    />
                  </View>
                </View>
              </View>

              <View
                style={{
                  height: "50%",
                  width: "100%",
                  backgroundColor: "ble",
                }}
              >
                <View
                  style={{
                    height: "51%",
                    width: "100%",
                    marginBottom: "1%",
                    backgroundColor: "rd",
                    alignItems: "center",
                  }}
                >
                  <Small
                    height={"92%"}
                    width={"98%"}
                    heading="Beds"
                    icons={
                      <MaterialCommunityIcons
                        name="bed-outline"
                        size={17}
                        color="#A1A1B0"
                      />
                    }
                    critical_count={count}
                    type={3}
                    total_count={50}
                    used={patients.length}
                    source={Critical}
                    show_vacant={true}
                    count={doctors.length}
                  />
                </View>

                <View
                  style={{
                    height: "45%",
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "re",
                  }}
                >
                  <View
                    style={{
                      height: "90%",
                      width: "48%",
                      backgroundColor: "yelow",
                      borderRadius: 8,
                      marginLeft: "1%",
                      position: "absolute",
                      left: 0,
                    }}
                  >
                    <Small
                      height={"92%"}
                      width={"100%"}
                      heading="Patients this week"
                      icons={
                        <AntDesign name="bells" size={17} color="#A1A1B0" />
                      }
                      critical_count={count}
                      type={2}
                      check={check_ward()}
                      warning="Add doctors, nurses, wards & beds first to start adding patients "
                      source={Critical}
                      count={patient_week.length}
                    />
                  </View>
                  <View
                    style={{
                      height: "90%",
                      width: "48%",
                      backgroundColor: "yelow",
                      borderRadius: 8,
                      marginRight: "1%",
                      position: "absolute",
                      right: 0,
                    }}
                  >
                    <Small
                      height={"92%"}
                      width={"100%"}
                      heading="Wards"
                      icons={
                        <MaterialCommunityIcons
                          name="bed-outline"
                          size={17}
                          color="#A1A1B0"
                        />
                      }
                      critical_count={count}
                      type={2}
                      check={true}
                      source={wards}
                      count={wards.length}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Dashboard_comp;
