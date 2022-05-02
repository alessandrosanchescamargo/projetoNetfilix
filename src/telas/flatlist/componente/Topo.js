import React from "react";
import { StyleSheet, Image, View } from "react-native";
import top from "../../../../assets/topo.png";

export default function Topo(){
    return(
        <View>
            <Image source={top}  style={estilos.imagem}/>
        </View>
    )
}
const estilos = StyleSheet.create({
    imagem:{
        width: "100%"
    }
})