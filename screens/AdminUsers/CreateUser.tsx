import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {  Button, FormControl, Input, Center, Stack, Select, CheckIcon, WarningOutlineIcon } from 'native-base';
import { getDBConnection, saveItems } from '../../utils/db-service';
import { usuario } from '../../utils/valores';
//import {openDatabase} from '../../database';

const CreateUser = (props:any) => {
  const [formData, setData]:any = React.useState({});
  const [errors, setErrors] = React.useState({});
  const validate:any = ():any => {
    if (formData.name === undefined) {
      setErrors({ 
        ...errors,
        name: 'Name is required'
      });
      return false;
    }else if (formData.doctype === undefined) {
      setErrors({ 
        ...errors,
        doctype: 'doctype is required'
      });
      return false;
    }else if (formData.docNum === undefined) {
      setErrors({ 
        ...errors,
        docNum: 'docNum is required'
      });
      return false;
    }else if (formData.edad === undefined) {
      setErrors({ 
        ...errors,
        edad: 'edad is required'
      });
      return false;
    }else if (formData.email === undefined) {
      setErrors({ 
        ...errors,
        email: 'email is required'
      });
      return false;
    }else if (formData.dirr === undefined) {
      setErrors({ 
        ...errors,
        pass: 'pass is required'
      });
      return false;
    }else if (formData.phone === undefined) {
      setErrors({ 
        ...errors,
        phone: 'phone is required'
      });
      return false;
    }else if (formData.cargo === undefined) {
      setErrors({ 
        ...errors,
        cargo: 'cargo is required'
      });
      return false;
    }else if (formData.team === undefined) {
      setErrors({ 
        ...errors,
        team: 'team is required'
      });
      return false;
    }else if (formData.subRegion === undefined) {
      setErrors({ 
        ...errors,
        subRegion: 'subRegion is required'
      });
      return false;
    }else if (formData.municipio === undefined) {
      setErrors({ 
        ...errors,
        municipio: 'municipio is required'
      });
      return false;
    }else if (formData.microterritorio === undefined) {
      setErrors({ 
        ...errors,
        microterritorio: 'microterritorio is required'
      });
      return false;
    }else if (formData.Ubicacion === undefined) {
      setErrors({ 
        ...errors,
        Ubicacion: 'Ubicacion is required'
      });
      return false;
    }else if (formData.nTerritorio === undefined) {
      setErrors({ 
        ...errors,
        nTerritorio: 'nTerritorio is required'
      });
      return false;
    }else if (formData.divisiongeografica === undefined) {
      setErrors({ 
        ...errors,
        divisiongeografica: 'divisiongeografica is required'
      });
      return false;
    }else if (formData.zona === undefined) {
      setErrors({ 
        ...errors,
        zona: 'zona is required'
      });
      return false;
    }else if (formData.hospital === undefined) {
      setErrors({ 
        ...errors,
        hospital: 'hospital is required'
      });
      return false;
    }

    return true;
};

const saveInfo = async () => {
  try {
    console.log(formData)
    const db = await getDBConnection();
    const rest =  await saveItems(db, formData);
    console.log('res ', rest)
    props.navigation.navigate("AdminUsers",{ update:true })
  } catch (error) {
    console.log('error -> ', error)
  }
 
}
const onSubmit = async () => {
  let validateSesion = validate() ;
  if(validateSesion === true ) return saveInfo()
 
};

console.log('props ',props)
  return (
    <ScrollView style={styles.container}>
      <Text style={ styles.titleSection} >Datos creación de usuario</Text>
      <Stack width="100%">
        <FormControl isRequired isInvalid={'doctype' in errors}>
            <FormControl.Label  _text={{ bold: true }}>Tipo de documento</FormControl.Label>
            <Select accessibilityLabel="Tipo de documento" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, doctype: value }) }
            >
              { usuario.tipoDoc.map( (i:any) => {
                return   <Select.Item label={i.label} value={i.value} />
              } ) }
            
            </Select>
            {'doctype' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>
        <FormControl isRequired isInvalid={'docNum' in errors}>
          <FormControl.Label _text={{ bold: true }}>N° de documento</FormControl.Label>
          <Input 
            placeholder="11111" 
            onChangeText={value => setData({ ...formData, docNum: value })}
          />
          {'docNum' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>
        <FormControl isRequired isInvalid={'name' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }}>Nombres y Apellidos</FormControl.Label>
          <Input type="text" 
            placeholder="Nombre"
            onChangeText={value => setData({ ...formData, name: value })}
          />
          {'name' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>
        <FormControl isRequired isInvalid={'edad' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }}>Edad</FormControl.Label>
          <Input type="text" 
            placeholder="edad"
            keyboardType="numeric"
            onChangeText={value => setData({ ...formData, edad: value })}
          />
          {'edad' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>
        <FormControl isRequired isInvalid={'email' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }}>Correo electrónico</FormControl.Label>
          <Input type='text' 
            placeholder="email"
            onChangeText={value => setData({ ...formData, email: value })}
          />
          {'email' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>
        <FormControl isRequired isInvalid={'dirr' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }}>Dirección de residencia</FormControl.Label>
          <Input type='text' 
            placeholder="Dirrecion"
            onChangeText={value => setData({ ...formData, dirr: value })}
          />
          {'dirr' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>
        <FormControl isRequired isInvalid={'phone' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }}>Celular</FormControl.Label>
          <Input type='text' 
            placeholder="celular"
            keyboardType="numeric"
            onChangeText={value => setData({ ...formData, phone: value })}
           
          />
          {'phone' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>
        <FormControl isRequired isInvalid={'cargo' in errors}>
            <FormControl.Label  _text={{ bold: true }}>Cargo</FormControl.Label>
            <Select accessibilityLabel="Tipo de documento" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} 
              />
            }}
            onValueChange={ value =>setData({ ...formData, cargo: value }) }
            >
              { usuario.cargo.map( (i:any) => {
                return   <Select.Item label={i.label} value={i.value} />
              } ) }
             
            </Select>
            {'cargo' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>
        <FormControl isRequired isInvalid={'team' in errors}>
            <FormControl.Label  _text={{ bold: true }}>Equipo de trabajo</FormControl.Label>
            <Select accessibilityLabel="Tipo de documento" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, team: value }) }
            >
              <Select.Item label="PIC" value="PIC" />
            </Select>
            {'team' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>
        <FormControl isRequired isInvalid={'subRegion' in errors}>
            <FormControl.Label  _text={{ bold: true }}>Subregion</FormControl.Label>
            <Select accessibilityLabel="subRegion" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, subRegion: value }) }
            >
              { usuario.subregion.map( (i:any) => {
                return  <Select.Item label={i.label} value={i.value} />
              } ) }
            </Select>
            {'subRegion' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>
        <FormControl isRequired isInvalid={'municipio' in errors}>
            <FormControl.Label  _text={{ bold: true }}>Municipio</FormControl.Label>
            <Select accessibilityLabel="municipio" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, municipio: value }) }
            >
              <Select.Item label="Municipio" value="municipio" />
            </Select>
            {'municipio' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>
        <FormControl isRequired isInvalid={'microterritorio' in errors}>
            <FormControl.Label  _text={{ bold: true }}>Microterritorio</FormControl.Label>
            <Select accessibilityLabel="microterritorio" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, microterritorio: value }) }
            >
              { usuario.microterritorios.map( (i:any) => {
                return  <Select.Item label={i.label} value={i.value} />
              } ) }
             
            </Select>
            {'microterritorio' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>
        <FormControl isRequired isInvalid={'Ubicacion' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }}>Ubicacion</FormControl.Label>
          <Input type='text' 
            placeholder="Ubicacion"
            onChangeText={value => setData({ ...formData, Ubicacion: value })}
           
          />
          {'Ubicacion' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>
        <FormControl isRequired isInvalid={'nTerritorio' in errors}>
            <FormControl.Label  _text={{ bold: true }}>N. territorio</FormControl.Label>
            <Select accessibilityLabel="nTerritorio" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, nTerritorio: value }) }
            >
               { usuario.numeroTerritorio.map( (i:any) => {
                return  <Select.Item label={i.label} value={i.value} />
              } ) }
            </Select>
            {'nTerritorio' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>
        <FormControl isRequired isInvalid={'divisiongeografica' in errors}>
            <FormControl.Label  _text={{ bold: true }}>Division geografica</FormControl.Label>
            <Select accessibilityLabel="Division geografica" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5}
              
              />
            }}
            onValueChange={ value =>setData({ ...formData, divisiongeografica: value }) }
            >
              { usuario.divisionGeografica.map( (i:any) => {
                return  <Select.Item label={i.label} value={i.value} />
              } ) }
              
            </Select>
            {'divisiongeografica' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>
        <FormControl isRequired isInvalid={'zona' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }}>Zona</FormControl.Label>
          <Input type='text' 
            placeholder="zona"
            onChangeText={value => setData({ ...formData, zona: value })}
           
          />
          {'zona' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>
        <FormControl isRequired isInvalid={'hospital' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }}>hospital</FormControl.Label>
          <Input type='text' 
            placeholder="hospital"
            onChangeText={value => setData({ ...formData, hospital: value })}
           
          />
          {'hospital' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>
        <Button onPress={onSubmit} mt="5" padding={4} backgroundColor="#FF6708" borderRadius={10} marginBottom={10}>
            Crear usuario
        </Button>
      </Stack>
    </ScrollView>
  )
}

export default CreateUser

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