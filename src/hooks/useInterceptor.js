import axios from "axios";
import { useEffect, useState } from "react";

export const useInterceptor = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    axios.interceptors.request.use(
      function (config) {
        setShowSpinner(true);
        return config;
      },
      function (error) {
        setShowSpinner(false);
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
      function (response) {
        setShowSpinner(false);
        return response;
      },
      function (error) {
        setShowSpinner(false);
        // Here could show an error message
        return Promise.reject(error);
      }
    );
  }, []);

  return { showSpinner };
};
