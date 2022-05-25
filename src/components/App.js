import { useEffect, useState, React } from 'react';
import '../index.css';


import Footer from './Footer.js';
import Item from './Item.js';
import NavigationBar from './NavigationBar.js';
import Popup from './Popup.js';

import Shop from "../shop.json";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([Shop]);
  }, []);

  const Items = (props) => {
    if (props.items.length!==0){
      return props.items[0].map(i => <Item item_info={i} key={i.id}/>);
    }
  }
  const mystyle = {
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition:"center",
    backgroundAttachment: "fixed",
    display:'inline-block'
  }
  return (
    <div className="App" style={mystyle}>
      <Popup/>
      <NavigationBar/>
      <div className='welcome_section'>
        <div className='welcome_title_wrapper'>
          <div className='welcome_title'>Welcome to my Store</div>
          <div className='welcome_subtitle'>Enjoy your stay!</div>
        </div>
      </div>
      <div className='items_container' id='products'>
      <Items items={items}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
