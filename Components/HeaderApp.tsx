import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Avatar } from 'native-base';
import { Menu, HamburgerIcon, Box, Pressable, Center, NativeBaseProvider } from "native-base";

const HeaderApp = () => {
  return (
    <View style={styles.header}>
     
        <Image source={require('../assets/img/Logo.png')} style={styles.logo} />
        <Box w="45%" alignItems="center">
          <Menu w="190" trigger={triggerProps => {
          return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                 <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        
        <Text style={{ color: '#212121', fontWeight: '700', marginRight: 16 }}>Laura Lopez</Text>
        <Avatar bg="green.500" width={8} height={8} source={{
        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      }}>
          AJ
      </Avatar>
      </View>
                </Pressable>;
        }}>
            <Menu.Item>Cerrar Sesion</Menu.Item>
          </Menu>
        </Box>
     
    </View>
  )
}

export default HeaderApp

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    height: 50,
    backgroundColor: '#ffffff',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 2
  },
  logo: {
    width: 40,
    resizeMode: 'contain',
  }
})