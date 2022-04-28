import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Index from './src/telas/index/Index';
import mock from "./mock/Lista"
export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
        <Index {...mock}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
