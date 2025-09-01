import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "./ui/button";
import { AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
          <div className="text-center max-w-md">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Bir Hata Oluştu
              </h1>
              <p className="text-muted-foreground">
                Beklenmeyen bir hata meydana geldi. Lütfen sayfayı yenileyin ve tekrar deneyin.
              </p>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-left">
                <h3 className="font-semibold text-destructive mb-2">Hata Detayları:</h3>
                <pre className="text-xs text-destructive overflow-auto">
                  {this.state.error.message}
                </pre>
              </div>
            )}
            
            <div className="space-y-4">
              <Button
                onClick={() => window.location.reload()}
                variant="default"
                size="lg"
              >
                Sayfayı Yenile
              </Button>
              
              <Button
                onClick={() => this.setState({ hasError: false })}
                variant="outline"
                size="lg"
              >
                Tekrar Dene
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}