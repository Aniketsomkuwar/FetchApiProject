import { useRouteError } from "react-router-dom";



const ErrorPage = () => {

    const err = useRouteError();
    console.log(err);


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4 text-red-600">
                Oops! Something went wrong
            </h1>
            <p className="text-lg text-gray-700">
                Error: {err.status} - {err.statusText}
            </p>
        </div>
    );
}

export default ErrorPage;