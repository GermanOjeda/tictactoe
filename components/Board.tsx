import { StyleSheet, Text, View } from "react-native";
import Square from "./Square";

type Props = {
    squares: string[]
    onHandleClick: (index: number) => void;
    winner: string|null
    nextPlayer: string
}

export default function Board({squares, onHandleClick, winner, nextPlayer}: Readonly<Props>) {
    const grid = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ]
    const getStatus = () => {
        return winner ? `Winner: ${winner}` : `Next player: ${nextPlayer}`
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.status}>{getStatus()}</Text>
            </View>
            {grid.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((squareIndex) => (
                        <Square value={squares[squareIndex]} handleClick={() => onHandleClick(squareIndex)}/>
                    ))}
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lemonchiffon",
        borderBlockColor: "black",
        borderWidth: 1,
    },
    row: {
        flexDirection: "row",
        margin: 5,
        gap: 5,
    },
    status: {
        textAlign: "center",
        fontSize: 15,
    }
})