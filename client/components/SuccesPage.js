export const SuccessPage = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-48 w-96 border-2 shadow rounded-xl">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                    <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Purchase successfull!</p>
                <p className="text-sm">You may close the screen.</p>
            </div>
        </>
    )
}