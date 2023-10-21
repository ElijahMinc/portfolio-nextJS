export const Header = ({ logo, children, rightHeaderContent, mobile }) => {
  return (
    <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center backdrop-blur-xl">
      <div className="w-full flex lg:flex-row justify-between items-center">
        <div className="max-w-[200px]">
          {/* Logo */}
          {logo}
        </div>
        {children}

        <div className="hidden xl:flex ml-24">{rightHeaderContent}</div>

        {mobile}
      </div>
    </header>
  );
};
