import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-rich-black  bg-stars flex flex-col items-center justify-center text-white gap-4">
      <h1 className='text-antonio-md font-semibold'>Oops!</h1>
        <p className='text-base'>Something went wrong</p>
      <p className='text-2xl'>{error.status | error.message}</p>
      <Link to='/'>
      <button className="bg-turquoise py-4 px-14 hover:bg-gray transition-colors duration-200 ">Go back home</button>
      </Link>
    </div>

  );
}
