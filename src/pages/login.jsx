import AsideScreen from "../components/asideScreen";
import LoginScreen from "../components/loginScreen";

function Login() {
  return (
    <div className="flex md:gap-60 items-center justify-center md:justify-start md:px-40">
          <AsideScreen />
          <LoginScreen/>
    </div>
  );
}

export default Login;
