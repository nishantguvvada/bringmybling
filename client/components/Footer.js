export const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow w-full flex justify-center items-center">
            <div className="w-[80%] mx-auto p-4 md:py-8">
                <div className="flex flex-col justify-center items-center sm:flex sm:flex-row sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">bmb.</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-4 border-gray-200 sm:my-6 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-center text-gray-500 sm:text-center">© 2025 <a href="#" className="hover:underline">bmb™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}