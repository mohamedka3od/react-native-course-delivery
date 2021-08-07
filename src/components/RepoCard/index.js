import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";
// import logo from "../../../assets/logo.png";
import { InfoContainer } from "../InfoContainer";
import { limitTextLength } from "../../utils";
function RepoCard({
  imageSrc,
  title,
  description,
  issuesNumber,
  starsNumber,
  providerName,
  numberOfLines,
  onPress
}) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <Image style={styles.image} source={{ uri: imageSrc }}></Image>
        <View style={styles.rightView}>
          <Text style={styles.title} numberOfLines={1}>
            {limitTextLength(20, title)}
          </Text>
          <Text style={styles.desc} numberOfLines={numberOfLines}>
            {limitTextLength(34, description)}
          </Text>
        </View>
      </View>
      <View style={styles.infoCardsContainer}>
        <InfoContainer
          iconName={"star"}
          iconSize={16}
          iconColor={"#f8b703"}
          text={starsNumber}
        />
        <InfoContainer
          iconName={"alert"}
          iconSize={16}
          iconColor={"#dd1212"}
          text={issuesNumber}
        />
        <InfoContainer
          iconName={"logo-github"}
          iconSize={16}
          iconColor={"#000000"}
          text={providerName}
        />
      </View>
    </Pressable>
  );
}

export { RepoCard };
