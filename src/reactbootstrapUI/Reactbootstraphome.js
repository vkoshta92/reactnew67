import React from 'react';
import Button from 'react-bootstrap/Button';
import {Card, Container, Row,Col} from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';


function Reactbootstraphome(){
return(
<div>

<Button variant="primary">Primary</Button>
<Card style={{width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>

    {/* grid */}
    <Container>
<Row>
<Col>first</Col>
<Col>first</Col>
<Col>first</Col>

</Row>
<Row>
<Col border="primary">
    <Card border="primary">
ryrhreh
    </Card>
</Col>
<Col>first</Col>
<Col>first</Col>
<Col>first</Col>
<Col>first</Col>
<Col>first</Col>
</Row>


    </Container>

</div>



)


}

export default Reactbootstraphome