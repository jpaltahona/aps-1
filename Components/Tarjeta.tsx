import React from 'react'
import { Box, Heading, Text, HStack, Stack } from "native-base";

const Tarjeta = () => {
    return <Box 
        rounded="lg" 
        overflow="hidden" 
        borderColor="coolGray.200" 
        
        minWidth="1/2"
        borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        }} 
        _web={{
            shadow: 2,
            borderWidth: 0
        }} 
        _light={{
            backgroundColor: "gray.50"
        }}
    >
      
      <Stack p="4" space={3}>
        <Stack space={2} divider={<Text>s</Text>}>
          <Text fontSize="13"  color="#282524">
          Título
          </Text>
        
        </Stack>
      
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="flex-start" direction="column">
          <Text fontSize="13"  color="#282524">
          2022
          </Text>
            <Text fontSize="20"  color="#282524" _dark={{ color: "warmGray.200"}} fontWeight="700">
              61.03%
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
}
export default Tarjeta