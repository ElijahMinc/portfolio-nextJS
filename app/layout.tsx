import 'nprogress/nprogress.css'; //styles of nprogress
import '@shared/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

const ApplicationLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default ApplicationLayout;
