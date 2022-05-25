import '../index.css';
import { Form, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
function Popup() {
  
  const [cookies, setCookie] = useCookies(['popup']);

  const closePopup = (event) => {
    event.preventDefault();
    setCookie('popup', false);
  }

  useEffect(() => {
    if(typeof(cookies.popup) === 'undefined'){
      setCookie('popup', true);
    }
  }, [])
  
  useEffect(() => {
    if (cookies.popup==="true"){
      document.body.style.overflowY = 'hidden';
    }
    else if (cookies.popup==="false"){
      document.body.style.overflowY = 'scroll';
    }
  }, [cookies.popup])
  
  let style={display: (cookies.popup==="true")? 'flex':'none'};

  return (
    <div className="Popup" style={style}>
      <div className='Popup_Window'>
        <Button variant="link" className='Popup_Close' onClick={closePopup}>
          <img src="/xmark-solid.svg"/>
        </Button>
        <p><b>
          Thank you for visiting the fake store!<br/>
          Would you like to subscribe to the fake newsletters?<br/></b>
        </p>
        <Form onSubmit={closePopup}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check required type="checkbox" label="I Agree to fake terms and conditions" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Popup;