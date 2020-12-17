import React, { useState, useEffect } from 'react';
import classNames from 'classnames'
import { Flex, Spacer, Box, Text, Button, ButtonGroup, Spinner  } from '@chakra-ui/react';
import Answers from './Answers.js'


const Cuestionario = () => {

	const API_URL = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium';

	


	useEffect(() => {

		fetch(API_URL)
			.then(res => res.json())
			.then(data => {

				console.log(data.results)
				setQuestions(data.results);


			});

	}, []);


	const [questions, setQuestions] = useState([]);

	console.log(questions)

	// const mixAns = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

	const handleAnswer = (answer) => {

		// esto es un comentario

	}


	return (

		<Flex
			w='430px'
			h='500px'
			justify='center'
			align='center'
			direction='column'
			borderRadius='24px'>

			<Box position='absolute' top='145px'>

				{/* <Text color='white' mb='10px' align='center'> GABY Y EMA  </Text> */}

				<Text color='white'>


					PREGUNTAS N°: 1



				</Text>

			</Box>

			<Box>


			{ questions.length  ?

							<Text color='white'
 
								dangerouslySetInnerHTML={{ __html:  questions[0].question }}
								align='center'
								position='relative'
								top='-10px'
								mx='10px'>
			
			
			
							</Text>
			 	: null
			 
			 
			 }


			</Box>

			<Flex
				w='400px'
				direction='column'
				mt={5}
				position='relative'
				top='60px'
				w='380px' >




				{questions.length ?
					<Flex direction='column' >
						<Answers style={{ width: '300px' }} correctAnswer={questions[0].correct_answer} />
						<Answers style={{ width: '300px' }} incorrectAnswers1={questions[0].incorrect_answers[0]} />
						<Answers style={{ width: '300px' }} incorrectAnswers2={questions[0].incorrect_answers[1]} />
						<Answers style={{ width: '300px' }} incorrectAnswers3={questions[0].incorrect_answers[2]} />
					</Flex>

					: (


						<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
						/>
					)

				}

			</Flex>

		</Flex >


	)
}


export default Cuestionario

