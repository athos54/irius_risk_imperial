import React, { useEffect } from "react";

const ErrorForceComponent = () => {
  useEffect(() => {
    throw new Error("Forced Error");
  }, []);
  return <div>ErrorForceComponent</div>;
};

export default ErrorForceComponent;
