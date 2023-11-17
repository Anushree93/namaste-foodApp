import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const errorInfo = useRouteError();
  console.log(errorInfo);

  return (
    <div>
      <h1>Ooops!! wrong URL entered!!</h1>
      <h3> {errorInfo.status}{" "}{errorInfo.error.message}</h3>
    </div>
  );
};

export default ErrorComponent;
