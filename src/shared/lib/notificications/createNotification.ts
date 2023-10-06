import { toast } from 'react-toastify';

export const successNotification = (message: string) =>
  toast.success(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 2000,
    theme: 'light',
  });

export const errorNotification = (message: string) =>
  toast.error(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 2000,
    theme: 'light',
  });
