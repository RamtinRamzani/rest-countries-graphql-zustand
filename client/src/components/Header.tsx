import MainContainer from "../ui/MainContainer";

const Header = () => {
  return (
    <header className="shadow-sm">
      <MainContainer className="flex items-center py-4">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-lg font-bold text-primary-800">
            Where in the world?
          </h1>
          <div className="text-sm font-semibold text-primary-500 flex gap-2">
            <span>🌙</span>
            <span>Dark Mode</span>
          </div>
        </div>
      </MainContainer>
    </header>
  );
};

export default Header;
