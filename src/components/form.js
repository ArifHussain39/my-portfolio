import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    return (
        <Form >
            <Form.Group style={formStyle} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group style={formStyle} className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group style={formStyle} className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button style={formStyle} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

const formStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
};

export default BasicExample;