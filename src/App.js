import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { Col } from 'react-bootstrap';
import {Jumbotron} from 'reactstrap';
import './App.css';



const finalCards = [
  {
    id: 'first',
    title: 'First Card',
    image: "data:image/jpeg;base64,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" 
  },
  {
    id: 'second',
    title: 'Second Card',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GycIvmlJ0PCBGixa5vMkN-l2U3xMoaYndMoz1mSvvlme-hke1ruVx8Ot5L0pnMuK4XI&usqp=CAU"
  },
  {
    id: 'third',
    title: 'Third Card',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn6Zn5aIMrGnHO3uwmYpSpIx4Vp6_n3syIVBErEvzOFvILZlyTyjuadfL-MjWVpLQ9waY&usqp=CAU"
  }
]

function App() {
  const [cards, updateCards] = useState(finalCards)

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCards(items);
  }
  return (
    <div className="App">
      <Container fluid='xl'>
        <Row className='bothnav'>
  <Container fluid  className='d-flex justify-content-center'>
  <Navbar bg expand="md">
    <Navbar.Brand href="#home" id='title'>Homework</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" id='home'>Home</Nav.Link>
        <Nav.Link href="#link" id='link'>Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
</Navbar>
</Container>
</Row>
<Container fluid>
<Row>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17b9f30ccb1%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17b9f30ccb1%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22289.71875%22%20y%3D%22221.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17b9f30ccb3%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17b9f30ccb3%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23282c34%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22251.96875%22%20y%3D%22221.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17b9f30ccb4%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17b9f30ccb4%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%2320232a%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22278.3203125%22%20y%3D%22221.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </Row>
  </Container>
  <div class="bottom-buffer"></div>
<div class="top-buffer"></div>
<Container fluid>
<Row>
  <Col>
  <Jumbotron fluid id='cardjumbotron'>
  <DragDropContext onDragEnd={handleOnDragEnd}>
    <Droppable droppableId='cards'>
      {(provided) => (
  <ul className='cards' {...provided.droppableProps} ref={provided.innerRef}>
    {cards.map(({id, image, title}, index) =>{
    return(
      <Draggable key={id} draggableId={id} index={index}>
        {(provided)=> (
      <li className='listitem' {...provided.draggableProps} ref={provided.innerRef}>
        <div className= 'image' {...provided.dragHandleProps}>
          <img  src={image} alt=''/>
        </div>
        <p>
          {title}
        </p>
      </li>
        )}
      </Draggable>
    );
})}
{provided.placeholder}
  </ul>
)}
  </Droppable>
  </DragDropContext>
      </Jumbotron>
  </Col>
  </Row>
  </Container>
  <Container fluid>
      <Jumbotron id='johndoe'fluid  className='d-flex justify-content-center'>
        <Row>
        <Col>
      <Card id='card' style={{ width: '18rem' }}>
  <Card.Body id="cardbody">
    <Card.Title>Download Today!</Card.Title>
    <Card.Text>
      Lorem Ipsum
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '18rem' }} id='card'>
  <Card.Img variant="top" src="data:image/jpeg;base64,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" />
  <Card.Body id="cardbody">
    <Card.Title>John Doe</Card.Title>
    <Card.Subtitle>Important Person</Card.Subtitle>
    <Card.Text>
Here is what he thinks of us.
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '18rem' }} id='card'>
  <Card.Body id="cardbody">
    <Card.Title>News</Card.Title>
    <Card.Text>
Read some news about us.
    </Card.Text>
    <Button variant="primary">Click Here</Button>
  </Card.Body>
</Card>
</Col>
</Row>
      </Jumbotron>
      </Container>
  <Row className='bothnav'>
  <Navbar bg  fixed="bottom">
  <Container fluid>
      <Nav className="me-auto" className='d-flex justify-content-center'>
        <Nav.Link href="#home" id='home'>Home</Nav.Link>
        <Nav.Link href="#link" id='link'>Link</Nav.Link>
      </Nav>
      </Container>
</Navbar>
  </Row>
</Container>
  </div>
  );
}
export default App;