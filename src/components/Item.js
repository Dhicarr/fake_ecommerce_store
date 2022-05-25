import '../index.css';

function Item(props) {
  return (
    <div className="Item">
      <div className='Item_Select_Background'>
        <div className='Item_Select_Box_Wrapper'>
          <div className='Item_Select_Box'>
            <p>{props.item_info.description}</p>
          </div>
        </div>
      </div>
      <div className='Item_Detail_Wrapper'>
        <div className='Item_Category'>{props.item_info.category}</div>
        <div className='Item_Title'>{props.item_info.title}</div>
        <div className='Item_Price'>${props.item_info.price}</div>
      </div>
      <img className='Item_Image' src={props.item_info.image} alt="product"></img>
    </div>
  );
}

export default Item;