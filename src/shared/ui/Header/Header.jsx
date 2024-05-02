import { useCursor } from '@/shared/hooks';

export const Header = ({ logo, children, rightHeaderContent, mobile }) => {
  const { mouseLeaveHandle, mouseEnterHandle } = useCursor();

  return (
    <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[80px] lg:h-[100px] flex items-center lg:backdrop-blur-xl">
      <div className="w-full flex lg:flex-row justify-between items-center">
        <div className="max-w-[200px]">
          {/* Logo */}
          {logo ? (
            logo
          ) : (
            <h4 onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle}>
              Ilya P.
            </h4>
          )}
        </div>
        {children}

        <div className="hidden xl:flex ml-24">{rightHeaderContent}</div>

        {mobile}
      </div>
    </header>
  );
};
