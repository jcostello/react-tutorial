import React from 'react'; 
import Person from './Person'

const PersonList = (props) => (
  props.persons.map(( person, index ) => {
    return <Person key={index}
      name={person.name}
      age={person.age}
      click={() => props.click( index )}
      changed={( event ) => props.changed( event, person.id )} />
  })
);

export default PersonList;
