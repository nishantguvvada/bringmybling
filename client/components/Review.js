export const Review = () => {
    return (
    <div className="w-full flex justify-center items-center border-t-1 shadow mt-8 pt-8">
        <div className="p-10 flex justify-center items-center w-[80%]">
            <article className="md:gap-4 md:grid md:grid-cols-3">
                <div>
                    <div className="flex items-center mb-6">
                        <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""/>
                        <div className="ms-4 font-medium dark:text-white">
                            <p>Janani Mahalakshmi</p>
                            <div className="flex items-center text-sm text-gray-500">
                                New Delhi
                            </div>
                        </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li className="flex items-center"><svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15V9m4 6V9m4 6V9m4 6V9M2 16h16M1 19h18M2 7v1h16V7l-8-6-8 6Z"/>
                            </svg>Abu Dhabi</li>
                        <li className="flex items-center"><svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>3 nights December 2024</li>
                    </ul>
                </div>
                <div className="col-span-2 mt-6 md:mt-0">
                    <div className="flex justify-between items-start mb-5">
                        <div className="pe-4">
                            <footer>
                                <p className="mb-2 text-sm text-gray-500">Reviewed: <time dateTime="2022-01-20 19:00">January 20, 2025</time></p>
                                <p className="mb-2 text-sm text-gray-500">By: <time dateTime="2022-01-20 19:00">Jane Doe</time></p>
                            </footer>
                            <h4 className="mt-4 text-xl text-justify font-bold text-gray-900">"Janani Made My Dubai Purchase Easy and Hassle-Free!"</h4>
                        </div>
                        <p className="bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">8.7</p>
                    </div>
                    <p className="mb-2 text-justify text-gray-500">"I had a fantastic experience with Janani as my traveler! From the moment we connected, she was professional, friendly, and extremely reliable. She kept me updated throughout her trip to Dubai, sent pictures of the item I requested, and ensured everything was handled with care. The delivery was on time, and my item arrived in perfect condition. What stood out most was her attention to detail and how approachable she was, which made the entire process smooth and stress-free. I highly recommend Sarah to anyone looking for a trustworthy traveler. This platform is a game-changer for luxury shopping!"</p>
                    <aside className="flex items-center mt-3">
                        <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                            </svg>
                            Helpful
                        </a>
                        <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 group ms-5">
                            <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M11.955 2.117h-.114C9.732 1.535 6.941.5 4.356.5c-1.4 0-1.592.526-1.879 1.316l-2.355 7A2 2 0 0 0 2 11.5h3.956L4.4 16a1.779 1.779 0 0 0 3.332 1.061 24.8 24.8 0 0 1 4.226-5.36l-.003-9.584ZM15 11h2a1 1 0 0 0 1-1V2a2 2 0 1 0-4 0v8a1 1 0 0 0 1 1Z"/>
                            </svg>
                            Not helpful
                        </a>
                    </aside>
                </div>
            </article>
        </div>
    </div>
    )
}