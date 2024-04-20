interface QuestionProps {
    questionText: string;
    options: string[];
    selectedChoice: string;
    correctAnswer: string;
    onChoiceChange: (choice: string) => void;
    disabled: boolean;
}

const Question = ({ questionText , options, selectedChoice, correctAnswer, onChoiceChange, disabled }: QuestionProps) => {
    return (
        <div className='bg-white rounded-md shadow-lg w-full p-4 '>
            <p className='bg-orange-400 px-4 py-3 text-white font-bold rounded-t-md'>{questionText}</p>
            <div className='flex flex-col gap-3 pt-3'>
                {options.map((option, index) => {
                    let optionStyle = 'bg-gray-100 hover:bg-gray-200';
                    let icon = null;
                    if (disabled) {
                        if (option === correctAnswer) {
                            optionStyle = 'bg-green-200';
                            icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6 ms-4 fill-current text-green-600"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>;
                        } else if (option === selectedChoice) {
                            optionStyle = 'bg-red-200';
                            icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-6 w-6 ms-4 fill-current text-red-600"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>;
                        }
                    }

                    return (
                        <label key={index} className={`flex items-center p-2 ${optionStyle} rounded-lg cursor-pointer`}>
                            <input 
                                type='radio'
                                name='choices'
                                value={option}
                                checked={selectedChoice === option}
                                onChange={() => onChoiceChange(option)}
                                className='mr-2'
                                disabled={disabled}
                            />
                            
                            {option}
                            {icon}
                        </label>
                    );
                })}
            </div>
            
        </div>
    );
};

export default Question;
