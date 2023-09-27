import { ToggleTheme } from "./toggle-theme";

const Header = () => {
  return (
    <header className="absolute top-4 right-4">
      <ToggleTheme />
    </header>
  );
};

export default Header;
