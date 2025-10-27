import { Pressable, StyleSheet } from "react-native";

type Props = {
    value: string
    handleClick: () => void;
}

export default function Square({value, handleClick }: Readonly<Props>) {
    return <Pressable style={styles.button} onPress={handleClick}>{value}</Pressable>
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderWidth: 1,
        backgroundColor: "cornsilk",
        alignItems: "center",
        fontSize: 40,
    }
})