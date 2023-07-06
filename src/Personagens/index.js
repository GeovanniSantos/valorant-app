import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";

import Detalhes from "../Detalhes"

export default function Personagens({ data }) {

    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.displayName}</Text>

                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
                        <Text style={styles.botaoTexto}>SOBRE</Text>
                    </TouchableOpacity>
                </View>

                <Image
                    source={{ uri: data.displayIcon }}
                    style={styles.capa}
                />
                
            </View>

            <Modal transparent={true} animationType="slide" visible={visibleModal}>
                <Detalhes personagem={data} voltar={() => setVisibleModal(false)}/>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        margin: 15,
        elevation: 2,
        borderRadius: 20,
        overflow: 'hidden'
    },
    capa: {
        height: 300,
        zIndex: 2
    },
    titulo: {
        padding: 15,
        fontSize: 22,
        fontWeight: "bold"
    },
    areaBotao: {
        alignItems: "flex-end",
        marginTop: -50,
        marginBottom: 10,
        marginRight: 15,
        zIndex: 9
    },
    botao: {
        width: 65,
        backgroundColor: "#3CB371",
        opacity: 1,
        padding: 8,
        borderRadius: 15,
        elevation: 5
    },
    botaoTexto: {
        color: "#FFF",
        textAlign: "center"
    }
})