import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>If the problem persists, please contact the site owner.</p>
      <p>The error message was: {error.message}</p>
    </div>
  );
}
