import Button from "../base/button/Button";
import Logo from "../base/logo/Logo";

function Header() {
  return (
    <header>
      <div className="container m-auto flex justify-between items-center py-4">
        <div>
          <Logo />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" color="black" className="hidden md:block">
            سفارش اینترنتی
          </Button>
          <Button variant="ghost" color="black" className="hidden md:block">
            قوانین سایت
          </Button>
          <Button>ورود</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
