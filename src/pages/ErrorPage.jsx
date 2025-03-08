import { useRouteError } from "react-router-dom";



const ErrorPage = () => {

    const err = useRouteError();
    console.log(err);


    return (

        <><h1>Opps Something went wrong <br /> Error : {err.status}</h1></>
    )

}

export default ErrorPage;