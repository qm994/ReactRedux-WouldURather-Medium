import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class ErrorPage extends Component {
    render() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Something went wrong...</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Cannot find what u are looking for...</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

export default ErrorPage;