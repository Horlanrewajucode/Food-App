import Logo from "./logo";
import NavBar from "./navBar";

function Header() {
  return (
    <header className="py-2 md:py-0 flex items-center justify-between px-8 md:p-40">
          <Logo />
          <NavBar/>
    </header>
  );
}

export default Header;
