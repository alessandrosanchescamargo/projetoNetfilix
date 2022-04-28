import React from "react";
import {StyleSheet, View, ScrollView} from "react-native";
import Itens from "./componentes/Itens";
import Topo from "./componentes/Topo";
export default function Index(lista){
    return(
        <ScrollView>
            <Topo/>
            <Itens {...lista} />
        </ScrollView>
    )
}