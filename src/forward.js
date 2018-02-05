import React from 'react'

export function Forward(props) {
    return (
        <ul>
            {props.forward.map(page => 
              <li>{page}</li>      
            )}
        </ul>
    )
}