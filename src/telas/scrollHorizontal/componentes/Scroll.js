import React from "react";
import { StyleSheet, Image, View, Text, ScrollView } from "react-native";

export default function Scroll({lista}){
    return(
        <ScrollView>
        <View style={estilos.viewItens}>
            
            {lista.map(({imagem}) =>{
                    return (
                        <View key={imagem} style={estilos.itens}>
                            <Image source={imagem} style={estilos.imagem} />
                        </View>
                    )
                }
            )}
        </View>
        </ScrollView>
    )
}
const estilos = StyleSheet.create({
viewItens:{
    flexDirection: "row"
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