import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-rich-black bg-stars text-white">
      <h1 className="text-antonio-md font-semibold">Oops!</h1>
      <p className="text-base">Something went wrong</p>
      <p className="text-2xl">{error.status | error.message}</p>
      <Link to="/">
        <button className="bg-turquoise px-14 py-4 transition-colors duration-200 hover:bg-gray">
          Go back home
        </button>
      </Link>
    </div>
  );
}
