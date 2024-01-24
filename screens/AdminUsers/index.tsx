import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Table, Row,  } from 'react-native-reanimated-table';
import { Input} from "native-base";
import { getDBConnection, getTodoItems } from '../../utils/db-service';
import HeaderApp from '../../Components/HeaderApp';

const AdminUsers = (props:any) => {
  const [tableData, setTableData] = useState({
    tableHead: ['#', 'NOMBRES Y APELLIDOS', 'MICROTERRITORIO', 'UBICACION', 'N. TERRITORIO'],
    widthArr: [40, 170, 150, 120, 120 ],
    tableData: []
  })

  const initializateServices = async () => {
    try {
      const db = await getDBConnection();
      let query = `SELECT id, name, microterritorio, Ubicacion, nTerritorio 
      FROM  usuarios;`;
      const listItem = await getTodoItems(db, query)
      
      const arrayDeValores = listItem.map((objeto:any) => Object.values(objeto).reverse());
 
      setTableData({
        ...tableData, 
        tableData: arrayDeValores
      })
    } catch (error) {
      console.log('error ', error)
    }
  }


  useEffect( () => {
   initializateServices()
  }, [] )

  return (
    <>
      <HeaderApp />
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  marginBottom: 17  }}>
          <Text style={styles.titleSection}>Administración de Usuarios</Text> 
          <TouchableOpacity style={{ backgroundColor: '#FF6708', width: 35, height: 35, borderRadius: 50, padding: 0, justifyContent: 'center', alignItems: 'center' }} onPress={ () => props.navigation.navigate('CreateUser') }>
            <Text style={{ color: '#fff', fontSize: 20, margin: 0, fontWeight: '800' }}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 17 }}>
          <Input placeholder="Busca por: N° Documento o nombre" w="100%" onChangeText={(e) => console.log(e)} />
        </View>

        <ScrollView horizontal={true}>
          <View style={{  borderWidth: 1, borderColor: '#EDEDED', borderRadius: 8, height: 'auto'}}>
            <Table borderStyle={{borderWidth: 0, borderColor: '#EDEDED'}}>
              <Row 
                data={tableData.tableHead} 
                widthArr={tableData.widthArr} 
                style={styles.header} 
                textStyle={styles.text}
              />
              
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 0, borderColor: '#ffffff'}}>
                {
                  tableData.tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={tableData.widthArr}
                      textStyle={styles.text}
                      style={{ borderBottomWidth: 1, borderColor: '#EDEDED', height: 40 }}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </>
   
)
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingTop: 10, backgroundColor: '#fff' },
  header: { height: 40, backgroundColor: '#FFFFFF', borderWidth: 0 },
  text: { textAlign: 'center', fontWeight: '500', color: '#000' },
  dataWrapper: { marginTop: -1 , padding: 4},
  row: { height: 40, backgroundColor: '#F9F9F9', borderRadius: 8 },
  titleSection: { color: '#27285B', fontSize: 18, fontWeight: '800'}
});

export default AdminUsers