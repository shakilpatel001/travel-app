import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container text-center py-5">
          <h2 className="text-danger">Something went wrong!</h2>
          <button onClick={() => window.location.reload()} className="btn btn-primary mt-3">
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}