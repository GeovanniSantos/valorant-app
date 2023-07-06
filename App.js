import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";

import api from "./src/services/api";
import Personagens from "./src/Personagens";

export default function App() {

  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAgentes = async () => {
      api.get('v1/agents?isPlayableCharacter=true&language=pt-BR').then(response => {
        const dados = response.data.data;
        dados.sort((a, b) => a.displayName.localeCompare(b.displayName));
        //console.log(dados);
        setPersonagens(dados)
        setLoading(false)
      })
    }
    loadAgentes();
  }, []);

  if(loading) {
    return(
    <View style={styles.loading}>
      <ActivityIndicator color="#121212" size={60} />
    </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={personagens}
          keyExtractor={item => item.uuid}
          renderItem={({ item }) => <Personagens data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3"
  },
  loading: {
    alignItems: "center", 
    justifyContent: "center", 
    flex: 1
  }
})