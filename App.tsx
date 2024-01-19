import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,  Text, View,} from 'react-native';
import { NativeBaseProvider } from "native-base";
import Home from './screens/Home';
import Auth from './screens/Auth';
import AdminUsers from './screens/AdminUsers';
import CreateUser from './screens/AdminUsers/CreateUser';
import { getDBConnection } from './utils/db-service';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeApp" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="AdminUsers" component={AdminUsers} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}



function App(): React.JSX.Element {
  const [loading, setLoading] = useState(true);

  async function dbSetp(){
    try {
      const db = await getDBConnection();
      const horarios = await getTodoItems(db,'horarios');
      const rutas = await getTodoItems(db,'rutas');
      const paraderosAndRutasQuery = await getTodoItems(db,'paraderosAndRutas');

      if(horarios=== null){
        await createTable(db, 'horarios');
        await saveHorarios(db, horariosTwo)
      }else{
          await deleteTable(db, 'horarios')
          await createTable(db, 'horarios');
          await saveHorarios(db, horariosTwo)
      }

      if(rutas=== null){
        await createTable(db, 'rutas');
        await saveTodoItems(db, listRutas)
      }else{
        await deleteTable(db, 'rutas')
        await createTable(db, 'rutas');
        await saveTodoItems(db, listRutas)
      }

      if(paraderosAndRutasQuery=== null){
        await createTable(db, 'paraderosAndRutas');
        await saveTodoParaderosYRutas(db, paraderosAndRutas);
      }else{
        await deleteTable(db, 'paraderosAndRutas')
        await createTable(db, 'paraderosAndRutas');
        await saveTodoParaderosYRutas(db, paraderosAndRutas);
      }
        
        setLoading(false)
    
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(  () => {
    dbSetp();
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
          <Stack.Screen name="CreateUser" component={CreateUser} options={{ headerShown: true, }} />
          </Stack.Navigator> 
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
