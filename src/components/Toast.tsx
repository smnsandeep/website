import React, { useState, useEffect } from "react";

type ToastProps = {
  toastData: ToastData;
  callback?: () => void;
};

// Make a toast with a message, duration, and callback
const Toast: React.FC<ToastProps> = ({ toastData, callback }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(true);

    const timer = setTimeout(() => {
      setShowToast(false);
      if (callback) callback();
    }, (toastData.duration || 2000) - 300);

    return () => {
      clearTimeout(timer);
    };
  }, [toastData.duration, callback]);

  return (
    <div
      className={`${
        showToast ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 ease-in-out fixed bottom-10 right-10 bg-white dark:bg-gray-800 p-4 rounded-md shadow-md`}
    >
      <p className="text-gray-600 dark:text-white text-sm">
        {toastData.message}
      </p>
    </div>
  );
};

export default Toast;

