import React from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const ModalAdd = (props) => {

    return (
        <div>

            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Create thread</ModalHeader>
                <Form onSubmit={props.submit}>
                <ModalBody>
                    <Col ls={10}>
                            <FormGroup>
                                <Label for="author">author</Label>
                                <Input  value={props.value.author} onChange={props.onChangeHandler} type="text" name="author" id="author"
                                       placeholder="author"/>
                            </FormGroup>
                        </Col>
                        <Col ls={10}>
                            <FormGroup>
                                <Label for="message">message</Label>
                                <Input value={props.value.message} onChange={props.onChangeHandler} type="text" name="message" id="message"
                                       placeholder="message"/>
                            </FormGroup>
                        </Col>
                        <FormGroup>
                            <Label for="image">File</Label>
                            <Col ls={10}>
                                <Input  onChange={props.filesHandler} type="file" name="image" id="image"/>
                            </Col>
                        </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" color="primary" onClick={props.toggle}>Submit</Button>
                </ModalFooter>
            </Form>
            </Modal>
        </div>
    );

};

export default ModalAdd;