import Logo from "./logo";

function Footer() {
  return (
    <footer className="bg-[rgb(99,60,35)] flex flex-col items-start py-16 px-26 font-serif text-white gap-15">
      <div className="flex items-center justify-between gap-20">
        <div className="flex flex-col items-center justify-center gap-4 w-[20%]">
          <Logo />
          <div className="w-[85%]">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-2xl">
            <h3>Quick Links</h3>
          </div>
          <div className="list-none">
            <li>Home</li>
            <li>Explore</li>
            <li>My Order</li>
            <li>Account</li>
            <li>Contact</li>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-2xl">
            <h3>Contact Us</h3>
          </div>
          <div className="list-none">
            <li>+234 901 183 8106</li>
            <li>hello@chucksKitchen.com</li>
            <li>123 Taste Blvd, Lagos, Nigeria</li>
          </div>
        </div>
        <div className="list-none">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>LinkenIn</li>
          <li>Instagram</li>
        </div>
      </div>

      <div>&copy; 2026 Lift Media. All Rights Reserved</div>
    </footer>
  );
}

export default Footer;
