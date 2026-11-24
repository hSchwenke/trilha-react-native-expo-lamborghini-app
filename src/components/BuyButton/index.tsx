import React from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";
import { CarModel } from "../CardView/props";

interface BuyButtonProps {
  car?: CarModel | null;
  onPress?: () => void;
}

export default function BuyButton({ car, onPress }: BuyButtonProps) {
  const handlePress = () => {
    if (onPress) {
      onPress();
      return;
    }

    if (car) {
      Alert.alert(
        "Interesse Registrado! 🏎️",
        `Você selecionou o ${car.carName} (${car.releaseYear}) por ${car.price}.\n\nNossa equipe exclusiva entrará em contato para agendar seu test-drive!`,
        [{ text: "Excelente", style: "default" }]
      );
    } else {
      Alert.alert(
        "Interesse Registrado! 🏎️",
        "Obrigado pelo seu interesse na linha Lamborghini! Entraremos em contato.",
        [{ text: "OK", style: "default" }]
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <AntDesign
        name="shoppingcart"
        size={24}
        color="white"
        style={styles.icon}
      />
      <Text style={styles.buttonText}>Buy This</Text>
    </TouchableOpacity>
  );
}
