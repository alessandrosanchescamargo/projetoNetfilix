import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

export default function Itens({lista}){
    return(

        <View style={estilos.viewItens}>
            <Text style={estilos.titulo}>Filmes</Text>
            {lista.map(({imagem}) =>{
                    return (
                        <View key={imagem} style={estilos.itens}>
                            <Image source={imagem} style={estilos.imagem} />
                        </View>
                    )
                }
            )}
        </View>
    )
}
const estilos = StyleSheet.create({
    viewItens:{
        flexDirection: "row"
    },titulo : {
        color:"#464646",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
    },
    itens:{
        paddingVertical: 70,
        paddingHorizontal: 1
    },
    texto: {
        fontSize: 14,
        lineHeight: 24,
        marginLeft: 5,
        color: "#464646"
    },
    
})