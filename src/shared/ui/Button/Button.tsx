interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = ({ children, ...buttonProps }: ButtonProps) => (
  <button
    className="btn mt-[30px] mx-auto lg:max-0 self-start hover:rounded-bl-lg hover:tracking-widest"
    {...buttonProps}
  >
    {children}
  </button>
);
