import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Danger Will Robinson!</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
