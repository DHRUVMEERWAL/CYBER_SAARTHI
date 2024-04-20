import { SetStateAction, useState } from 'react';

export const QuestionCard = () => {
    const [selectedChoice, setSelectedChoice] = useState("");

    const choices = [
        "A method where an attacker sends infected emails to get personal information.",
        "The process of deleting unnecessary emails.",
        "A type of software that protects your email.",
        "Sending emails to fish."
    ];

    // Function to handle choice selection
    const handleChoiceChange = (event: { target: { id: SetStateAction<string>; }; }) => {
        setSelectedChoice(event.target.id); // Set selected choice based on the input's id
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='bg-white rounded-md pb-2 shadow-lg w-full'>
                <p className='bg-orange-400 px-4 py-3 text-white font-bold rounded-t-md'>Question. What is a phishing attack?</p>
                <div className='flex flex-col w-full gap-3 pt-3 pb-2 px-2'>
                    {choices.map((label, index) => {
                        const choiceId = `Choice ${index + 1}`;
                        return (
                            <div key={index} className='relative w-full bg-gray-100 rounded-lg p-1 hover:bg-gray-200'>
                                <input 
                                    type='radio' 
                                    id={choiceId}
                                    name='choices' 
                                    checked={selectedChoice === choiceId}
                                    onChange={handleChoiceChange}
                                    className='appearance-none cursor-pointer'
                                />
                                <label 
                                    htmlFor={choiceId}
                                    className={`pl-4 w-full py-2 cursor-pointer select-none transition-all duration-200 
                                                ${selectedChoice === choiceId ? 'text-teal-600 font-bold' : 'text-gray-800'}`}
                                >
                                    {String.fromCharCode(65 + index)}. {label}
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div className='w-full flex flex-row justify-end px-2 pt-1'>
                    <button className='bg-stone-900 w-full rounded-md py-2 text-white font-bold hover:bg-stone-700 transition-all duration-300'>Submit</button>
                </div>
                <div className="p-4 w-full">
                    <div className="flex justify-between mb-1 text-gray-500">
                        <span className="text-base font-normal">Completed</span>
                        <span className="text-sm font-semibold text-gray-900">3/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-orange-500 h-2.5 rounded-full" style={{width: '60%'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
