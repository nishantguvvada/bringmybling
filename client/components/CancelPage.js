import Link from 'next/link';

export const CancelPage = () => {
    return (
        <>
            <div className="py-8 px-4 mx-auto max-w-screen-xl">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">!</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900">Payment cancelled.</p>
                    <p className="mb-4 text-lg font-light text-gray-500">Payment has been cancelled. If the amount is debited from your account, you&apos;ll be refunded in 3 business days.</p>
                    <Link href="/" className="text-white bg-purple-600 rounded p-2">Back to Homepage</Link>
                </div>
            </div>
        </>
    )
}