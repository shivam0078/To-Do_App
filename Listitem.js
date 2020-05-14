import React from 'react';
import './ListItem.css';
//import {FlipMove} from 'react-flip-move';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function Listitem(props)
{
	const items=props.items;
	const listitems=items.map(item =>
	{
     return <div className="list" key="item.key">
     <p>
	 <input type="text" id={item.key} 
	 value={item.text} onChange={(e)=>
	 props.setUpdate(e.target.value,item.key)
	 
	}/>
     

     <span onClick={()=> props.deleteItem(item.key)}> 
	 <FontAwesomeIcon className="faicons" icon="trash"/></span>
     </p>
     </div>
	});
	return (
		<div>
  
		{listitems}

		</div>
		)
}
export default Listitem;
