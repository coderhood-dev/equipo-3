import React from 'react';
import {Cuestionario} from './components'
import { Flex, Box, Text } from '@chakra-ui/react'



function App() {




  return (


      
      <Flex align='center' justify='center' w='430px' h='500px' bg='black' direction = 'column' borderRadius='24px' >
        <Box position = 'absolute' top='50px' left='480px'   > 


          <Text  >
            FILM QUIZ
          </Text>



        </Box>

        
        <Cuestionario />
          
      </Flex>
        
  );
}

export default App;
