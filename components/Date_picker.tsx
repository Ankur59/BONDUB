import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { format, subDays, addDays } from "date-fns";
import Entypo from "@expo/vector-icons/Entypo";

const DateNavigator = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to go to the previous day
  const handlePreviousDay = () => {
    const newDate = subDays(selectedDate, 1);
    setSelectedDate(newDate);
    onDateChange(newDate);
  };

  // Function to go to the next day
  const handleNextDay = () => {
    const newDate = addDays(selectedDate, 1);
    setSelectedDate(newDate);
    onDateChange(newDate);
  };

  useEffect(() => {
    const formattedDate = format(selectedDate, "dd-MM-yyyy"); // Format the date
    console.log(formattedDate); // Logs "2025-03-08" format
  }, [selectedDate]);

  return (
    <View
      style={{
        height: 60,
        width: 200,
        backgroundColor: "red",
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <TouchableOpacity
        style={{
          height: "100%",
          width: "20%",
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={handlePreviousDay}
      >
        <Entypo name="chevron-thin-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Date Display */}
      <View
        style={{
          height: "100%",
          width: "60%",
          backgroundColor: "yellow",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          {format(selectedDate, "EEE, dd MMM")}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          height: "100%",
          width: "20%",
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={handleNextDay}
      >
        <Entypo name="chevron-thin-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default DateNavigator;
