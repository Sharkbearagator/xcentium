import './App.css';
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { Col } from 'react-bootstrap';



const finalCards = [
  {
    id: 'first',
    title: 'First Card',
    image: "https://uc3f02b47015969c22811153a502.previews.dropboxusercontent.com/p/thumb/ABTYMYomy2f6SPM_jqoxPYvM_5VhZET3D3g5SYfjajV72WaqZl0CkL8nTQSe5g8zKABMxaTlNzawQ2tnjrpYck8dXBEa_Flq5DQu4WaY46FnAesRk1DMT_zln7GCAxq317Vc2ceFQhOnSxm7iqsezohjesN2STe9nhEy7BNE57yNOk1nTvrgNmBteg1P0BhyIkEPA12YvMQEkfexxHWsXTUOV4MnZpPseNBFIj6Uwj43nviLrzMGiIoUI0cyKIO9d_pPvNvqslp-QOUG6kH1Xf0XiFINZUKxVqjxrNF6fhm4Sm44HTabRwUH_5b3iCvoKCc2biRY6Ix-X8SOfV6nBAZK3igdMI_L_ljWp9793XcLIw/p.jpeg?size=178x178&size_mode=1" 
  },
  {
    id: 'second',
    title: 'Second Card',
    image:"https://uc18ec214665bc3d4841f7af48ed.previews.dropboxusercontent.com/p/thumb/ABTxZvCHp_S5U1UdavPr1dDfAEW1U3Z__h61yqE_5Pr9I5cwloEAeDyKhtQ4bizogHYA79bv23PAmHPvxGqBg6RqYaUQD1B9imemoi-QEF72whE-yNEWGB3wf2E1y557qpC3DF8tlTxBUpAh_sF7Ron_u5-Te9n8__jpQsVj93GS1YLMaVx0yFJktSGKED3ohvPydx_E7pZ7WLYDomdP0K-bz_bpn_dVF0CHjpCaB22gSHhgB22sVzgr7XJnBN4UrR04hIhr5KVuVAijJoziFgL4P3pwtgYJKlXTvA5k5EeQ8ZazEEFW4DewfNamiLb8Qfny4iCKpZJKoLy-uDtYM7Q_k6zsgJmRjXUeeAEveBkGsA/p.jpeg?size=178x178&size_mode=1"
  },
  {
    id: 'third',
    title: 'Third Card',
    image: "https://uc43e9325415b947015bd5ce74d3.previews.dropboxusercontent.com/p/thumb/ABRlMgh7Cu5ync8SEJPrD2VsIvL_Z53GiUL2vw8v_P53TTmkf0zrwWSosxpdj2X2hPHwRjkUp19yYbxScKclI5xqI00iInvZGdkxxid9NmymKMFt3_CuR2xlSJEw-5elR3_NMGKz0w1XA8n6nMtBmAGASODAAwC8dbsGolzrTt7Xt8tsKoj7H9F0F8P4zC_m6qAUfc7mbc4fLgu_2tov6bLsi5lAlk3PqKdjr63FR175FgI2vGC-MKHb-7aNhTFUT-ejWpoxUrE226cOWZdhhYeWQO5zje4C9y8R9TQnyX-t7UnylmK8taoha5wu3fll6lz36FC38eBUxxt4fhaoUrV2R-xCCDtpOxPo8_xuj2L-6Q/p.jpeg?size=178x178&size_mode=1"
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
      <Container>
        <Row>
        <Navbar bg="light" expand="md">
  <Container>
    <Navbar.Brand href="#home">Homework</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</Row>
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
  <div class="bottom-buffer"></div>
<div class="top-buffer"></div>
<Row>
  <Col>
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
  </Col>
  </Row>
<div class="bottom-buffer"></div>
  <div class="top-buffer"></div>
  <div class="d-flex justify-content-center">
  <Row>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Documentation</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Row>
  </div>
</Container>
  </div>
  );
}
export default App;