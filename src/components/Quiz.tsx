import { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';

// Define a TypeScript interface for the question structure
interface QuestionType {
    questionText: string;
    options: string[];
    answer: string;
}


const Quiz = () => {
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedChoice, setSelectedChoice] = useState<string>("");
    const [score, setScore] = useState<number>(0);
    const [completed, setCompleted] = useState<boolean>(false);

    // Fetch questions from the backend
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get<QuestionType[]>('https://backend.dhruvmeerwal19.workers.dev/Questions');
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    const handleChoiceChange = (choice: string) => {
        setSelectedChoice(choice);
    };

    const handleSubmit = () => {
        if (selectedChoice === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedChoice("");
        } else {
            setCompleted(true);
        }
    };

    if (completed) {
        return (
            <div className='result'>
                <div className='bg-white rounded-md shadow-lg w-full p-4'>
                    <p className='bg-orange-400 px-4 py-6 text-white font-bold rounded-t-md'>Quiz Completed!</p>
                    <p className='bg-gray-200 px-4 py-6 text-black font-bold rounded-b-md'>Score: {score} / {questions.length}</p>
                </div>
            </div>
        );
    }

    return (
        <div className='quiz'>
            {questions.length > 0 ? (
                <>
                    <Question
                        questionText={questions[currentQuestionIndex].questionText}
                        options={questions[currentQuestionIndex].options}
                        selectedChoice={selectedChoice}
                        correctAnswer={questions[currentQuestionIndex].answer}
                        onChoiceChange={handleChoiceChange}
                        disabled={!!selectedChoice}
                    />
                    <button
                        onClick={handleSubmit}
                        className='submit-button bg-stone-900 w-full rounded-md py-2 mt-4 text-white font-bold hover:bg-stone-700 transition-all duration-300'
                        disabled={!selectedChoice}
                    >
                        {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                    </button>
                    <div className="p-4 w-full">
                    <div className="flex justify-between mb-1 text-gray-500">
                        <span className="text-base font-normal">Completed</span>
                        <span className="text-sm font-semibold text-gray-900">{currentQuestionIndex} / {questions.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-orange-500 h-2.5 rounded-full transition-all delay-250" style={{width: `${(currentQuestionIndex / questions.length) * 100}%`}}></div>
                    </div>
                </div>
            
                </>
            ) : (
                
                <div role="status" className="mt-6 max-w-screen animate-pulse">
                    <div className="h-2.5 px-4 py-3 bg-gray-200 rounded-full w-48 mb-4"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-6"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-6"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-6"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-12"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-4"></div>
                    <span className="sr-only">Loading...</span>
                </div>

            )}
        </div>
    );
};

export default Quiz;
