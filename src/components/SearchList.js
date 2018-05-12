import React from 'react';

const SearchList = (props) => {
  if(Boolean(props.list) === true){
    const searchListItem = props.list.map((person, index) => {
      return <li id="li-border" key={index}>
              <h3>Result #{index+1}</h3>
              <p>FirstName: {person.FirstName}</p>
              <p>LastName: {person.LastName}</p>
              <p>Address: {person.Address}</p>
              <p>City: {person.City}</p>
              <p>State: {person.State}</p>
            </li>
    });

    return (
      <ul>{searchListItem}</ul>
    );
  } else {
    return <h1>No Results Found</h1>
  }
};

export default SearchList;