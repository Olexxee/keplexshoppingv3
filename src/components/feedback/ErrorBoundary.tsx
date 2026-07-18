import React, { Component, type ErrorInfo } from "react";
import { Result } from "./Result";
import { Button } from "../ui/actions/button/Button";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onReset?: () => void;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="p-4">
          <Result
            status="error"
            title="Something went wrong"
            subTitle={
              this.state.error?.message || "An unexpected error occurred"
            }
            extra={
              <Button onClick={this.handleReset} variant="primary">
                Try again
              </Button>
            }
          />
        </div>
      );
    }

    return this.props.children;
  }
}

// ErrorBoundary with retry
interface ErrorBoundaryWithRetryProps extends Props {
  maxRetries?: number;
}

export class ErrorBoundaryWithRetry extends Component<
  ErrorBoundaryWithRetryProps,
  State & { retries: number }
> {
  constructor(props: ErrorBoundaryWithRetryProps) {
    super(props);
    this.state = { hasError: false, retries: 0 };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  handleRetry = () => {
    const { maxRetries = 3 } = this.props;
    if (this.state.retries >= maxRetries) {
      this.setState({
        hasError: false,
        error: undefined,
        retries: 0,
      });
      return;
    }

    this.setState({
      hasError: false,
      error: undefined,
      retries: this.state.retries + 1,
    });
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4">
          <Result
            status="error"
            title="Something went wrong"
            subTitle={
              this.state.error?.message || "An unexpected error occurred"
            }
            extra={
              <Button onClick={this.handleRetry} variant="primary">
                {this.state.retries < (this.props.maxRetries || 3)
                  ? `Retry (${this.state.retries + 1}/${this.props.maxRetries})`
                  : "Reset"}
              </Button>
            }
          />
        </div>
      );
    }

    return this.props.children;
  }
}
