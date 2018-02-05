import React from 'react'

export function Back(props) {
        return  (
            <ul> 
             {props.back.map((page) => 
               <li>{page}</li>    
             )}
            </ul>
        )
}


// {props.groceries.map((grocery) => //why is this groceries not grocery, when was this defined? 
//     <GroceryListItem key={grocery.toString()} grocery={grocery} />
//   )}