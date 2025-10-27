import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import BoardContainer from "./BoardContainer";

export default function GameContainer() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    const handlePlay = (nextSquares: string[]) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((_, moveIndex) => {
        let description = moveIndex > 0 ? "State #" + moveIndex : "Game start";
        return (
            <Pressable style={styles.historyButton} key={moveIndex} onPress={() => jumpTo(moveIndex)}>
                <Text style={styles.historyLabel}>{description}</Text>
            </Pressable>
        )
    })

    return (
        <View style={styles.container}>
            <BoardContainer xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            <View>
                <Text style={styles.historyTitle}>Previous States</Text>
                {moves}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        gap: 40,
    },
    historyTitle: {
        fontSize: 24,
        textAlign: "center",
    },
    historyButton: {
        backgroundColor: "lavenderblush",
        margin: 5,
        padding: 5,
        borderWidth: 1,
        paddingHorizontal: 20,
    },
    historyLabel: {
        fontSize: 20,
        textAlign: "center"
    }
})