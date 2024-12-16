import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleClose = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { hasError, error } = this.state;

    return (
      <>
        {hasError && (
          <Modal show={hasError} onHide={this.handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Error Occurred</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                <strong>Error Details:</strong>
              </p>
              <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word", fontSize: "1.5rem", color: "red" }}>
                {error?.toString()}
              </pre>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        {this.props.children}
      </>
    );
  }
}

export default ErrorBoundary;
