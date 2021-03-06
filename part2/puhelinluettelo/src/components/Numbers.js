import React from 'react'
import Person from './Person'

const Numbers = (props) => {
    return(
        <ul>
        {props.personsToShow.map(person =>
          <li key={person.id}>
            <Person name={person.name} 
                    number={person.number} 
                    id={person.id}
                    handler={props.handler}/>
          </li>
          
        )}
      </ul>
    )
}

export default Numbers