import MainContainer from "../ui/MainContainer";
import ThemeToggle from "../ui/ThemeToggle";

const Header = () => {
  return (
    <header className="shadow-sm bg-gray-100">
      <MainContainer
        className="flex items-center py-4"
        data-theme="color-base-100"
      >
        <div className="flex w-full justify-between items-center">
          <h1 className="text-lg font-bold text-gray-800">
            Where in the world?
          </h1>
          <ThemeToggle />
        </div>
      </MainContainer>
    </header>
  );
};

export default Header;
