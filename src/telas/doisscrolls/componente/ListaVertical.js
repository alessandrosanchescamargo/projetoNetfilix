import React from "react";
import { StyleSheet, Image, View, Text, FlatList } from "react-native";

export default function ListaVertical({item : {nome, imagem}}){
    return <View style={estilos.item}>
            <Image source={imagem} style={estilos.imagem} />
            <Text style={estilos.texto}>{nome}</Text>
        </View>
    
}
const estilos = StyleSheet.create({
    item : {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
    },
    texto: {
        fontSize: 14,
        lineHeight: 24,
        marginLeft: 5,
        color: "#464646"
    },
    
})