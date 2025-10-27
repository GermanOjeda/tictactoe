import GameContainer from "@/containers/GameContainer";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <GameContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "honeydew",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
