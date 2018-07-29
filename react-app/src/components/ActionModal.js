import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Col,
    Row
} from 'reactstrap';

import '../css/main.css';

class ActionModal extends Component {
    state = {
        modal: false,
        action: '',
        user: '',
        ageRange: '',
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    ageRange(age) {
        switch(age) {
            case "All Ages":
                return 0;
            case "0-10":
                return 10;
            case "10-18":
                return 18;
            case "18-21":
                return 21;
            default:
                return 22;
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        let isTruth = document.querySelector('input[name="isTruth"]:checked').value === "truth";
        var data = {
              ageRange: this.ageRange(this.state.ageRange),
              action: this.state.action,
              isTruth: isTruth,
              user: this.state.user
            }
        fetch('/api/actions', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(err => console.log(err))
            .then(res => console.log(res));
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                    id="modalBtn"
                    onClick={this.toggle}
                >Add Truth or Dare </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}> Add To Truth or Dare </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <h4> Action </h4>
                                <Input 
                                    type="text"
                                    name="action"
                                    ref="action"
                                    id="action"
                                    placeholder="Truth or Dare"
                                    onChange={ this.handleChange }
                                />
                                <br />
                                <Container>
                                    <Row> 
                                        <Col xs="6">
                                            <Input
                                                type="radio"
                                                value="truth"
                                                name="isTruth"
                                            />
                                            <Label> Truth </Label>
                                        </Col>
                                        <Col xs="6">
                                            <Input 
                                                type="radio"
                                                value="dare"
                                                name="isTruth"
                                            />
                                            <Label> Dare </Label>
                                        </Col>
                                    </Row>
                                </Container>
                                <br />
                                <h4>Age Range</h4>
                                <Input type="select" name="ageRange" onChange={ this.handleChange }>
                                    <option>All Ages</option>
                                    <option>0-10</option>
                                    <option>10-18</option>
                                    <option>18-21</option>
                                    <option>21+</option>
                                </Input>
                                <br />
                                <h4>Username</h4>
                                <Input 
                                    type="text"
                                    name="user"
                                    placeholder="Username is optional"
                                    onChange={ this.handleChange }
                                />
                                <br />
                                <Button
                                    type="submit"
                                    block
                                > Add Truth or Dare </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>   
                </Modal>
            </div>
        );
    }
}

export default ActionModal;