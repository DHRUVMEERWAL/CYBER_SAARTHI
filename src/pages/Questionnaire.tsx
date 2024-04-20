import { AppBar } from "../components/AppBar";
// import { QuestionCard } from "../components/QuestionCard";
import { Footer } from "../components/Footer";
import Quiz from "../components/Quiz";

export const Questionnaire = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <AppBar/>
            <div className="flex-1 mt-10 px-10">
                <Quiz/>
            </div>
            <div className="mt-56">
                <Footer/>
            </div>
        </div>
    );
};
