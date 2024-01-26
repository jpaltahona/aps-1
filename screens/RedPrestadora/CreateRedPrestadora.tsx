import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {  Button, FormControl, Input, Center, Stack, Select, CheckIcon, WarningOutlineIcon } from 'native-base';
import { getDBConnection, saveRed } from '../../utils/db-service';
//import {openDatabase} from '../../database';

const CreateRedPrestadora = (props:any) => {
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

const saveInfo = async () => {
  try {
    console.log(formData)
    const db = await getDBConnection();
    const rest =  await saveRed(db, formData);
    console.log('res ', rest)
    props.navigation.goBack()
  } catch (error) {
    console.log('error -> ', error)
  }
 
}
const onSubmit = async () => {
  validate() ;
  saveInfo()
};

console.log('props ',props)
  return (
    <ScrollView style={styles.container}>
      <Text style={ styles.titleSection} >Datos diligenciamiento de la ficha</Text>
      <Stack width="100%">
        <FormControl isRequired isInvalid={'name' in errors} >
          <FormControl.Label _text={{ bold: true }}>Nombre completo de quien diligencia la ficha</FormControl.Label>
          <Input type="text" 
            placeholder="Nombre"
            onChangeText={value => setData({ ...formData, name: value })}
           
          />
          {'name' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={'doctype' in errors} style={{ marginTop: 16 }}>
            <FormControl.Label  _text={{ bold: true }}>Tipo de documento</FormControl.Label>
            <Select accessibilityLabel="Tipo de documento" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, doctype: value }) }
            >
              <Select.Item label="C.C" value="CC" />
              <Select.Item label="Tarjeta de identidad" value="Ti" />
              <Select.Item label="Pasaporte" value="PS" />
            </Select>
            {'doctype' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'docNum' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }}>N° de documento</FormControl.Label>
          <Input 
            placeholder="11111" 
            onChangeText={value => setData({ ...formData, docNum: value })}
           
          />
          {'docNum' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'divisiongeografica' in errors} style={{ marginTop: 16 }}>
            <FormControl.Label  _text={{ bold: true }}>Division geografica</FormControl.Label>
            <Select accessibilityLabel="Division geografica" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5}
              
              />
            }}
            onValueChange={ value =>setData({ ...formData, divisiongeografica: value }) }
            >
              <Select.Item label="Centro Poblado" value="centroPoblado" />
            </Select>
            {'divisiongeografica' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'dirr' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }}>Dirección</FormControl.Label>
          <Input type='text' 
            placeholder="Dirrecion"
            onChangeText={value => setData({ ...formData, dirr: value })}
           
          />
          {'dirr' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>

        <View style={{ marginTop: 20 }}>
          <Text style={ styles.titleSection} >Identificacion del integrante que recibe la visita</Text>
        </View>

        <FormControl isRequired isInvalid={'rol' in errors} >
            <FormControl.Label  _text={{ bold: true }}>Rol del que recibe la visita</FormControl.Label>
            <Select accessibilityLabel="Rol del que recibe la visita" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5}
              
              />
            }}
            onValueChange={ value =>setData({ ...formData, rol: value }) }
            >
              <Select.Item label="Jefe" value="jefe" />
            </Select>
            {'rol' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'nameDos' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }}>Nombre completo de quien diligencia la ficha</FormControl.Label>
          <Input type="text" 
            placeholder="Nombre completo"
            onChangeText={value => setData({ ...formData, nameDos: value })}
           
          />
          {'nameDos' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={'doctypeDos' in errors} style={{ marginTop: 16 }}>
            <FormControl.Label  _text={{ bold: true }}>Tipo de documento</FormControl.Label>
            <Select accessibilityLabel="Tipo de documento" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, doctypeDos: value }) }
            >
              <Select.Item label="C.C" value="CC" />
              <Select.Item label="Tarjeta de identidad" value="Ti" />
              <Select.Item label="Pasaporte" value="PS" />
            </Select>
            {'doctypeDos' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'docNumDos' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }}>N° de documento</FormControl.Label>
          <Input 
            placeholder="11111" 
            onChangeText={value => setData({ ...formData, docNumDos: value })}
           
          />
          {'docNumDos' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'genero' in errors} style={{ marginTop: 16 }}>
            <FormControl.Label  _text={{ bold: true }}>Identidad de genero</FormControl.Label>
            <Select accessibilityLabel="Tipo de documento" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, genero: value }) }
            >
              <Select.Item label="Femenino" value="Femenino" />
              <Select.Item label="masculino" value="masculino" />
            </Select>
            {'genero' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'phone' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }}>celuar</FormControl.Label>
          <Input type='text' 
            placeholder="celular"
            onChangeText={value => setData({ ...formData, phone: value })}
           
          />
          {'phone' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>

        <Button onPress={onSubmit} mt="5" padding={4} backgroundColor="#FF6708" borderRadius={10} marginBottom={10}>
            Crear red prestadora
        </Button>
      </Stack>
    </ScrollView>
  )
}

export default CreateRedPrestadora

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  titleSection: {
    color: '#F26811',
    marginBottom: 20,
    fontWeight: '700'
  }
})