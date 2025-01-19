
export const Hero = () => {
    return (
        <>
            <div className="mt-10 mb-10 pb-10 w-screen">   
                <div className="flex flex-row justify-center items-center max-w-screen-xl px-12 mx-auto lg:gap-8 xl:gap-0 ">
                    <div className="p-4 flex flex-col justify-center items-center max-w-[600px]">
                        <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Bring My Bling</h1>
                        <p className="bg-white bg-opacity-70 p-4 rounded-lg max-w-2xl mb-2 sm:mb-6 font-light text-justify text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Connect with travelers from your city heading to Dubai and get your favorite luxury items delivered without the hassle of shipping costs.</p>                   
                        <a href="#" className="relative h-72 w-full hidden md:flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                            <div className="basis-2/3 flex flex-col gap-4 justify-center pl-8 z-10">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
                                    "Where did you buy this?"
                                </h5>
                                <h5 className="bg-blue-500 text-5xl font-bold p-2 text-white rounded-lg text-center">FROM DUBAI</h5>
                            </div>
                            <div className="relative basis-1/3 h-full overflow-hidden">
                                <img
                                className="absolute inset-0 w-full h-full object-cover"
                                src="/bmb-women.png"
                                alt="My cap is from Dubai"
                                />
                            </div>
                        </a>
                        <blockquote className="bg-white bg-opacity-70 p-4 rounded-lg mt-2 sm:mt-4 mb-6 sm:mb-8 text-xl text-center italic font-semibold text-gray-900">
                            <p>"Whether you're a traveler or a shopper, BringMyBling bridges the gap and makes international shopping effortless."</p>
                        </blockquote>
                        <a href="#" className="mt-4 px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                            Find Travelers
                        </a> 
                    </div>          
                </div>
            </div>
        </>
    )
}