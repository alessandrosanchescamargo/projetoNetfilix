import React from "react";
import { FlatList } from "react-native";
import Item from "./componente/Item";
import Topo from "./componente/Topo";

export default function Index(lista){
    return (
            <FlatList 
                data={lista.lista}
                renderItem={Item}
                keyExtractor={({nome}) => nome}
                ListHeaderComponent = {Topo}
            />   
        
    )
}
