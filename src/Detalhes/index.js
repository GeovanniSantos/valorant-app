import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Detalhes(props) {
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
                    <Text style={{ color: "#FFF" }}>X</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>{props.personagem.displayName}</Text>
                <Text style={styles.sinopse}>Descrição:</Text>
                <Text style={styles.descricao}>{props.personagem.description}</Text>
                <Image style={styles.foto} source={{ uri: props.personagem.fullPortrait }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    modalContainer: {
        height: "80%",
        backgroundColor: "#121212",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    btnVoltar: {
        alignItems: "center",
        width: 40,
        backgroundColor: "#E52246",
        padding: 10,
    },
    titulo: {
        textAlign: "center",
        color: "#FFF",
        padding: 10,
        fontSize: 30,
        fontWeight: "bold"
    },
    sinopse: {
        color: "#FFF",
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 10
    },
    descricao: {
        color: "#FFF",
        marginLeft: 10,
        marginRight: 10
    },
    foto: {
        height: 300,
        marginTop: 20,
    }
})