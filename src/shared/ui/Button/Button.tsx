import cn from 'classnames';
interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearence?: 'default' | 'fancy';
}

export const Button = ({
  appearence = 'default',
  className,
  children,
  ...buttonProps
}: ButtonProps) => {
  const styles = {
    default:
      'btn mt-[30px] mx-auto lg:max-0 self-start hover:rounded-bl-lg hover:tracking-widest',
    fancy: 'btn-fancy',
  };

  return (
    <button className={cn(className, styles[appearence])} {...buttonProps}>
      {children}
    </button>
  );
};
