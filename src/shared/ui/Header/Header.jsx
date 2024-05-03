export const Header = ({ logo, children, rightContent, mobile }) => {
  return (
    <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[80px] lg:h-[100px] flex items-center lg:backdrop-blur-xl">
      <div className="w-full flex lg:flex-row justify-between items-center">
        <div className="max-w-[200px]">
          {/* Logo */}
          {logo}
        </div>
        {children}

        <div className="hidden xl:flex ml-24">{rightContent}</div>

        {mobile}
      </div>
    </header>
  );
};
