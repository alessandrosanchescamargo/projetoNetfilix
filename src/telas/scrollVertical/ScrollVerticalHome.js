import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Index from "./Index"
import mock from "../../../mock/Lista"

export default function ScrollVertical(){
    return(
        <>
            <Index {...mock}/>
        </>
    )
}