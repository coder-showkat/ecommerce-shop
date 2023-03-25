import { toast } from "react-toastify";


const notifySuccess = (notification) => {
    toast.success(notification, {
      theme: "dark",
      position: toast.POSITION.TOP_LEFT,
      autoClose: 2000,
    });
  };

  const notifyWarning = (notification) => {
    toast.warn(notification, {
        theme: 'dark',
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000
    })
  }

  const notifyError = (notification) => {
    toast.error(notification, {
        theme: 'dark',
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000
    })
  }

  export { notifySuccess, notifyWarning, notifyError };

