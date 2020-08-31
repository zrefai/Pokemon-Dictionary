import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { normalizeFont, normalizeUIW } from "../../styles/styleConfig";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { styles } from "./pokemonTypeStyles";

const PokemonTypeContainer = styled(View, styles.typeContaner)``;
const PokemonTypeBackground = styled(View, styles.typeBackground)``;
const PokemonTypeText = styled(Text, styles.typeText)``;

const PokemonType = ({ type }) => {
  const typeColor = (type) => {
    switch (type) {
      case "grass":
        return "#438C30";
      case "fire":
        return "#D93023";
      case "water":
        return "#2C6EB0";
      case "normal":
        return "#BCB5B3";
      case "electric":
        return "#EB9538";
      case "fire":
        return "#EB4770";
      case "fighting":
        return "#6D2A0F";
      case "rock":
        return "#A28841";
      case "ground":
        return "#D2B160";
      case "flying":
        return "#5F7DD7";
      case "bug":
        return "#88952F";
      case "poison":
        return "#833581";
      case "dark":
        return "#472E1D";
      case "ghost":
        return "#5860AA";
      case "ice":
        return "#5FD1F4";
      case "steel":
        return "#8E8E9C";
      case "dragon":
        return "#7D6AD5";
      case "fairy":
        return "#ECA4EC";
    }
  };

  const renderPokemonType = (pokemonType, key) => {
    return (
      <PokemonTypeBackground
        key={key}
        style={{
          backgroundColor: typeColor(pokemonType.name),
        }}
      >
        <PokemonTypeText>{pokemonType.name.toUpperCase()}</PokemonTypeText>
      </PokemonTypeBackground>
    );
  };

  return (
    <PokemonTypeContainer>
      {type
        ? type.map((type, index) => {
            return renderPokemonType(type.type, index);
          })
        : undefined}
    </PokemonTypeContainer>
  );
};

export default PokemonType;