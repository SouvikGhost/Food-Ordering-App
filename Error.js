import { useRouteError } from "react-router-dom"
const Error =()=>{
    const err = useRouteError();
    return (
        <div>
            <h2>{err.status}:{err.statusText}</h2>
            <h3>{err.error.message}</h3>
        </div>
    )
}
export default Error;