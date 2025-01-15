import { Footer } from "./Footer"
import { Hero } from "./Hero"
import { Navbar } from "./Navbar"
import { Review } from "./Review"


export const LandingPage = () => {
    return (
        <>
        <div className="h-full w-screen">
            <Navbar/>
            <Hero/>
            <Review/>
            <Footer/>
        </div>
        </>
    )
}