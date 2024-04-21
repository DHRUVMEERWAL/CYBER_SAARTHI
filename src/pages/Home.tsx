import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div>
            <AppBar />
            <div className="flex flex-col justify-center md:flex-row h-full min-h-screen ">
                <div className="flex flex-col justify-center p-4 ">
                    <h2 className="mx-2 text-left text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl sm: max-w-md sm:mt-32 underline decoration-sky-500">
                        Cyber Saarthi: Navigating Digital Safety Together
                    </h2>
                    <div className="mx-2 my-4 text-left text-md font-light tracking-tight text-gray-900 max-w-2xl">
                        Your trusted guide in the <span className="underline decoration-pink-500 font-semibold">digital realm.</span> Our mission is to <span className="underline decoration-pink-500 font-semibold">empower you</span> with the knowledge and tools needed to navigate the ever-evolving landscape of <span className="underline decoration-pink-500 font-semibold">cyber threats.</span> At <span className="underline decoration-pink-500 font-semibold">Cyber Saarthi,</span> we provide clear, actionable insights to <span className="underline decoration-pink-500 font-semibold">safeguard your personal and professional information</span> against cyber risks. <span className="underline decoration-pink-500 font-semibold">Join us</span> on the journey towards a safer digital future.
                    </div>
                </div>
                <div className="hidden size-7/12 items-center md:flex md-w-auto md:items-center">
                    <img className="w-full h-auto max-w-md xl:max-w-none" src="public/hero_2.jpg" alt="" />
                </div>
            </div>
            <Footer />
        </div>

    );
};
