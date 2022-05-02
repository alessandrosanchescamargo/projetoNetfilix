import React from "react";
import { TouchableOpacity, Text, StyleSheet, ImageBackground } from "react-native";

export default function Home({navigation}){
    return (
        <>
            <TouchableOpacity onPress={() => {navigation.navigate("Scroll Vertical")}} style={estilos.botao}>
                <Text style={estilos.texto}>Scroll Vertical</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Scroll Horizontal")}} style={estilos.botao}>
                <Text style={estilos.texto}>Scroll Horizontal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Flat List")}} style={estilos.botao}>
                <Text style={estilos.texto}>Flat List</Text>
            </TouchableOpacity>
        </>
    )
}
const estilos = StyleSheet.create({
    botao:{
        marginTop: 5,
        marginBottom: 5,
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: "#000",
        alignItems: "center"
    },
    texto:{
        color: "#fff"
    }
})