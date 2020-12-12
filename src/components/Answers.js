import React, {useState, useEffect} from 'react';
import classNames from 'classnames' 
import { Flex, Spacer, Box, Text, Button, ButtonGroup } from '@chakra-ui/react';


const Buttons = ({correctAnswer, incorrectAnswers1, incorrectAnswers2, incorrectAnswers3}) => 
  (

        <Flex
              
                  as='button' 
              h='35px' 
              mt={3}
              direction='row' 
              align='center' 
              justify='center'  
              bg='gray.300' 
                transition="0.5s" 
                borderRadius='10px'
                _hover ={{ transform: 'scale(1.1)', 
                       bg: 'orange.400' }}
                _focus ={{ outline : '0' }}
                _active={{ transform: 'translateY(4px)'  }} >

              

          <Text>{correctAnswer}</Text>
          <Text>{incorrectAnswers1}</Text>
          <Text>{incorrectAnswers2}</Text>
          <Text>{incorrectAnswers3}</Text>

          

        </Flex>



)


export default Buttons; 
