import React, { useState, useEffect } from 'react';
import classNames from 'classnames'
import { Flex, Spacer, Box, Text, Button, ButtonGroup } from '@chakra-ui/react';
import Answers from './Answers.js'


const Cuestionario = () => {

	const API_URL = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy';

	const [questions, setQuestions] = useState([]);
	const [correct_answer, setCorrect_answer] = useState('')
	const [incorrect_answers, setIncorrect_answers] = useState([])


	useEffect(() => {

		fetch(API_URL)
			.then(res => res.json())
			.then(data => {

				console.log(data.results)
				setQuestions(data.results);


			});

	}, []);




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

				<Text color='white' mb='10px' align='center'> GABY Y EMA  </Text>

				<Text color='white'>


					PREGUNTAS N°: 1



				</Text>

			</Box>

			<Box>

				<Text

					//dangerouslySetInnerHTML={{ __html: questions[0].question }}
					align='center'
					position='relative'
					top='-10px'
					mx='10px'>



				</Text>

			</Box>

			<Flex
				w='400px'
				direction='column'
				mt={5}
				position='relative'
				top='60px'
				w='380px' >




				{questions.length > 0 ?
					<Flex direction='column' >
						<Answers style={{ width: '300px' }} correctAnswer={questions[0].correct_answer} />
						<Answers style={{ width: '300px' }} incorrectAnswers1={questions[0].incorrect_answers[0]} />
						<Answers style={{ width: '300px' }} incorrectAnswers2={questions[0].incorrect_answers[1]} />
						<Answers style={{ width: '300px' }} incorrectAnswers3={questions[0].incorrect_answers[2]} />
					</Flex>

					: (


						<Text>Cargando</Text>
					)

				}

			</Flex>

		</Flex >


	)
}


export default Cuestionario

