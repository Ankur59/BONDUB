import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./Form.style";

const Input_BOX = ({
  name,
  change,
  place,
  title,
  security,
  rightIcon,
}: {
  name: string;
  change: (e: string) => void;
  place: string;
  title: string;
  security: boolean;
  rightIcon?: React.ReactNode;
}) => {
  const [focus, setfocus] = useState(false);
  return (
    <View style={styles.input}>
      <View style={styles.header}>
        <Text style={styles.header_txt}>{title}</Text>
      </View>
      <View style={styles.Text_input_prnt}>
        <View style={styles.Text_input}>
          <TextInput
            value={name}
            onChangeText={(e) => change(e)}
            placeholder={place}
            secureTextEntry={security}
            placeholderTextColor="#D3D3DA"
            style={[focus ? styles.focused_main : styles.main]}
            onFocus={() => setfocus(true)}
            onBlur={() => setfocus(false)}
          />
          {rightIcon && (
            <View style={{ paddingRight: 10, position: "absolute", right: 0 }}>
              {rightIcon}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Input_BOX;
