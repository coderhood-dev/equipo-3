import React, {useState, useEffect} from 'react';
import {Cuestionario} from './components'
import { Flex, Spacer, Box, Text } from '@chakra-ui/react'



function App() {




  return (


      
      <Flex align='center' justify='center' w='430px' h='500px' bg='white' direction = 'column' borderRadius='24px' >
        <Box position = 'absolute' top='50px' left='480px'   > 


          <Text >
            FILM QUIZ
          </Text>



        </Box>

        
        <Cuestionario />
          
      </Flex>
        
  );
}

export default App;
