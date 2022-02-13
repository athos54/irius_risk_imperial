import React from "react";
import "./ErrorBoundary.scss";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-boundary">
          <img
            src="assets/starship_maintenance.png"
            alt="starship maintenance"
          />
          <h1>Something went wrong.</h1>
          <p>This is an error boundary example</p>
          <p>
            This page is only to test the error boundary component, and this
            error has been produced on purpose
          </p>
          <p>Your starship is under maintenance</p>
          <p>
            You can continue using app clicking{" "}
            <a href={window.location.origin}>here</a>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
