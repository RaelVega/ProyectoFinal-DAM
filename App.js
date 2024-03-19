
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Modal,

} from 'react-native'

const App  = () => {

  const[modalVisible, setModalVisible] = useState(false)

  console.log(modalVisible)

  const nuevaCitaHandler=() => {
    console.log('diste click...')
  }

  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.tituloBold}>AppOnmnt</Text>
      <Text style={styles.titulo}>Administrador de citas</Text>

      <Pressable
        onPress={ nuevaCitaHandler }
        style={styles.btnNuevaCita}
      >
        <Text
          style={styles.btnTextoNuevaCita}
        >Nueva Cita</Text>
      </Pressable>
      
      <Modal
        animationType='slide'
        visible={false}
      >
          <Text>Desde Modal</Text>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  tituloBold: {
    textAlign: 'center',
    fontWeight: '900',
    color: '#2BB5CD',
    fontSize:30,
  },

  titulo: {
    textAlign: 'center',
    fontSize:25,
    color: '#374151',
    fontWeight: '600'
  },

  btnNuevaCita: {
    backgroundColor: '#2BB5CD',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  }
  


})

export default App;
