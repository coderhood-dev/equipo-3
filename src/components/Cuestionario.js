import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Spinner  } from '@chakra-ui/react';
import Answers from './Answers.js'


const Cuestionario = () => {

	const API_URL = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium';

	


	useEffect(() => {

		fetch(API_URL)
			.then(res => res.json())
			.then(data => {

				console.log(data.results)
				setQuestions(data.results);
				setCorrectAnswer(data.results[1].correctAnswer)
				setIncorrectAnswers(data.results[1].incorrectAnswers)			

			});

	}, []);


	const [questions, setQuestions] = useState([]);
	const [correctAnswer, setCorrectAnswer] = useState('')
	const [incorrectAnswers, setIncorrectAnswers] = useState([])


	console.log({correctAnswer})
	console.log({incorrectAnswers})


	

	// const handleAnswer = (answer) => {

	// 	// esto es un comentario

	// }


	return (

		// questions.length > 0 ? 

		<Flex
			w='430px'
			h='500px'
			justify='center'
			align='center'
			direction='column'
			borderRadius='24px'
			borderWidth='10px'
			borderColor='#c3c3c3'>

			<Box position='absolute' top='130px' mb={2}>

				{/* <Text color='white' mb='10px' align='center'> GABY Y EMA  </Text> */}

				<Text color='white'>


					PREGUNTA N°: 1



				</Text>

			</Box>

			<Flex  
				align='center'
				justify='center'
				mt='40px'>


			{ questions.length  ?

							<Text color='white'
 
								dangerouslySetInnerHTML={{ __html:  questions[0].question }}
								align='center'
								position='relative'
								top='20px'
								mx='10px'>
			
			
			
							</Text>
			 	: null
			 
			 
			 }


			</Flex >

			<Flex
				w='400px'
				direction='column'
				mt={5}
				position='relative'
				top='60px'
				mb='25px'
				// eslint-disable-next-line react/jsx-no-duplicate-props
				w='380px' >




				{questions.length ?
					<Flex direction='column' >
						<Answers style={{ width: '300px' }} correctAnswer={questions[0].correct_answer.replace(/&quot|&#039|&ldquo|&rdquo|;|&hellip;/g, '')} />
						<Answers style={{ width: '300px' }} incorrectAnswers1={questions.length ? questions[0].incorrect_answers[0].replace(/&quot|&#039|&ldquo|&rdquo|;|&hellip;/g, '') : null } />
						<Answers style={{ width: '300px' }} incorrectAnswers2={questions.length ? questions[0].incorrect_answers[1].replace(/&quot|&#039|&ldquo|&rdquo|;|&hellip;/g, '') : <Text>''</Text> } />
						<Answers style={{ width: '300px' }} incorrectAnswers3={questions.length ? questions[0].incorrect_answers[2].replace(/&quot|&#039|&ldquo|&rdquo|;|&hellip;/g, '') : null } />
					</Flex>

					: (
						
						<Flex
						
							align='center'
							justify='center'

						
						>	

							<Spinner
								
								thickness="4px"
								speed="0.65s"
								emptyColor="gray.200"
								color="blue.500"
								size="xl"
							/>




						</Flex>

					)

				}

			</Flex>

		</Flex >

		// : (

		// 	<Flex
						
		// 		align='center'
		// 		justify='center'>	

		// 		<Spinner
					
		// 			thickness="4px"
		// 			speed="0.65s"
		// 			emptyColor="gray.200"
		// 			color="blue.500"
		// 			size="xl"
		// 		/>




		// 	</Flex>

		// )

	  
	)

}


export default Cuestionario

