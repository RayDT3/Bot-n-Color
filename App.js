import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#f5f5f5'); // Color de fondo inicial

  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Cambio de Color de Fondo</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => changeColor('#FF5733')}>
          <Text style={styles.buttonText}>Rojo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeColor('#33FF57')}>
          <Text style={styles.buttonText}>Verde</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeColor('#3357FF')}>
          <Text style={styles.buttonText}>Azul</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeColor('#FFFF33')}>
          <Text style={styles.buttonText}>Amarillo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeColor('#33FFFF')}>
          <Text style={styles.buttonText}>Cyan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeColor('#FF33FF')}>
          <Text style={styles.buttonText}>Magenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    padding: 15,
    margin: 10,
    width: '40%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default App;
