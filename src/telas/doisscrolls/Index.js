import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import LV from "../doisscrolls/componente/ListaVertical";
import LH from "../doisscrolls/componente/ListaVertical";


export default function Index(lista,imagens){
    return(
        <View style={estilos.container}>
            <View style={estilos.scrollhorizontal}>
            <FlatList 
                horizontal={true}
                data={lista.imagens}
                renderItem={LH}
                keyExtractor={({imagem}) => imagem}
            />   
            </View>
            <View style={estilos.scrollvertical}>
            <FlatList 
                data={lista.lista}
                renderItem={LV}
                keyExtractor={({nome}) => nome}
            />   
            </View>
        </View>
    )
}
const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#afafaf"
    },
    scrollhorizontal:{
        width: "100%",
        height: "15%"
    },
    scrollvertical:{
        width: "100%",
        height: "70%",
        paddingHorizontal: 4
    }
})