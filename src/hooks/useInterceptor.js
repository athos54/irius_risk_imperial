import axios from "axios";
import { useEffect, useState } from "react";
import ErrorModal from "components/ErrorModal/ErrorModal";
export const useInterceptor = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [errorModal, setErrorModal] = useState(null);

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
        setErrorModal(
          <ErrorModal
            errorDescription={error.message}
            close={() => setErrorModal(null)}
          />
        );
        // Here could show an error message
        return Promise.reject(error);
      }
    );
  }, []);

  return { showSpinner, errorModal };
};
