import AsideScreen from "../components/asideScreen";
import SignUpScreen from "../components/signUpScreen";

export default function Account() {
  return (
    <div className="flex md:gap-60 items-center justify-center md:justify-start md:px-40">
      <AsideScreen />
      <SignUpScreen/>
    </div>
  );
}
