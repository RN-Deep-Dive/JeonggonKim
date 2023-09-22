import {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Calculator from './src/Calculator';

export default function App() {
  const [input, setInput] = useState(0);
  const [currentOperator, setCurrentOperator] =useState(null);
  const [result, setResult] = useState(null);
  const [tempInput, setTempInput] = useState(null);
  const [tempOperator, setTempOperator] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
