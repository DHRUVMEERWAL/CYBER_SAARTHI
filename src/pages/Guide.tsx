import { AppBar } from "../components/AppBar"
import  Blog  from "../components/BlogCard"
import { Footer } from "../components/Footer"


export const Guide = () => {
    return <div>
        <AppBar/>
        <div className="grid grid-cols-1 gap-4 content-stretch">
            <Blog/>
        </div>
        <Footer/>
    </div>
}