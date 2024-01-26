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
import { getDBConnection, createTable } from './utils/db-service';
import RedPrestadora from './screens/RedPrestadora';
import CreateRedPrestadora from './screens/RedPrestadora/CreateRedPrestadora';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeApp" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="AdminUsers" component={AdminUsers} options={{ headerShown: false }} />
      <Tab.Screen name="RedPrestadora" component={RedPrestadora} options={{ headerShown: false }} />
     
    </Tab.Navigator>
  );
} 



function App(): React.JSX.Element {
  const [loading, setLoading] = useState(true);

  async function dbSetp(){
    try {
      const db = await getDBConnection();
      await createTable(db,'users');
      await createTable(db,'redPrestadora');
    
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
          <Stack.Screen name="CreateRedPrestadora" component={CreateRedPrestadora} options={{ headerShown: true, }} />
          
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
