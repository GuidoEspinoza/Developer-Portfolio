'use client'

import { Component, ErrorInfo, ReactNode } from 'react';
import { UI_TEXT_CONSTANTS } from '@/app/constants/ui-text-constants';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(UI_TEXT_CONSTANTS.errorBoundaryConsole, error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-[#0d1224]">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">{UI_TEXT_CONSTANTS.errorBoundaryTitle}</h2>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-600"
            >
              {UI_TEXT_CONSTANTS.errorBoundaryButton}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;