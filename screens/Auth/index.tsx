import React from 'react'
import { Image, Divider  } from "native-base";
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {  Button, FormControl, Input, NativeBaseProvider, Center, Stack } from 'native-base';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Auth = ({navigation}:any) => {
    const [formData, setData]:any = React.useState({});
    const [errors, setErrors] = React.useState({});
    const validate = () => {
        if (formData.name === undefined) {
          setErrors({ 
            ...errors,
            name: 'Name is required'
          });
          return false;
        } else if (formData.pass === undefined) {
          setErrors({ 
            ...errors,
            pass: 'pass is required'
          });
          return false;
        }
    
        return true;
    };

    const onSubmit = () => {
        validate() ? navigation.navigate('Home') : console.log('Validation Failed');
    };
    
    
    return (
      <ScrollView >
        <Image source={{ uri: "https://wallpaperaccess.com/full/317501.jpg"}} alt="Alternate Text"  
          style={{ width: '100%', height: 250 }}
        />
        <Stack style={styles.containerCard} >
            <Text style={{ color: '#757575', fontSize: 16 , fontWeight: '400', marginBottom: 16, fontStyle: 'italic' }}>Sistema integral de información de Atención Primaria</Text>
            <Divider />
            <View style={{ marginVertical: 16 }}>
                <Text style={{ color: '#27285B', fontSize: 24 , fontWeight: '700', marginBottom: 16}}>
                    Bienvenido! Inicia sesión con tu cuenta
                </Text>
                <Text style={{ color: '#757575', fontSize: 16 , fontWeight: '700', marginBottom: 16}}>
                Por favor ingresa tus credenciales para ingresar
                </Text>
            </View>
            <Stack width="100%">
              <FormControl isRequired isInvalid={'name' in errors}>
                  <FormControl.Label _text={{ bold: true }} >Correo electrónico</FormControl.Label>
                  <Input 
                    placeholder="john@ejemplo.com" 
                    onChangeText={value => setData({ ...formData, name: value })}
                    style={styles.inputs}
                  />
                  {'name' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
              </FormControl>

              <FormControl isRequired isInvalid={'pass' in errors} style={{ marginTop: 16 }}>
                  <FormControl.Label _text={{ bold: true }} >Contraseña</FormControl.Label>
                  <Input type="password" 
                    placeholder="Ingresar"
                    onChangeText={value => setData({ ...formData, pass: value })}
                    style={styles.inputs}
                  />
                  {'pass' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
              </FormControl>

              <Button onPress={onSubmit} mt="5" padding={4} backgroundColor="#FF6708" borderRadius={10}>
                  Iniciar sesión
              </Button>
            </Stack>
        </Stack>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      fontSize: 25,
      fontWeight: '500',
    },
    containerCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderTopEndRadius: 16, 
        borderTopLeftRadius: 16,
        position: 'relative',
        bottom: 16,
        height: '90%'
    },
    inputs: {
      height: 45
    },
    labels: {
      color: '#212121',
      fontSize: 14,
      fontWeight: '700'
    }
});

export default Auth

