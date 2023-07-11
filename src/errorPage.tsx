import {Result} from "antd";
import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <Result
                status="500"
                title="Oops!"
                subTitle="Sorry, an unexpected error has occurred."
                extra={<p>{error.statusText || error.message}</p>}
            />
        </div>
    );
}
