import React from "react";
import { StyleSheet, Image, View, Text, FlatList } from "react-native";

export default function Itens({lista}){
    return(
        <View style={estilos.viewItens}>
            <Text style={estilos.titulo}>Filmes</Text>
            {lista.map(({nome, imagem}) =>{
                    return (
                        <View key={nome} style={estilos.item}>
                            <Image source={imagem} style={estilos.imagem} />
                            <Text style={estilos.texto}>{nome}</Text>
                        </View>
                    )
                }
            )}
        </View>
    )
}
const estilos = StyleSheet.create({
    viewItens:{
        paddingHorizontal: 10,
    },titulo : {
        color:"#464646",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
    },
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