import React from "react";
import { Route, Link, useHistory } from "react-router-dom";

//Several versions of MyComponent

//Here with no properties passed as in
//<Route exact "/" component = { MyComponent } />
const MyComponent = () => {
  return (
    <Link to="/">Lets go home</Link>
  )
}

//This is where we passed in a property via 
//<Route exact "/" component = { MainView } />
const MyComponent = ({someProperty}) => {
  return (
    <h1>{someProperty}</h1>
  )
}

//Passed in parameter from path (props) as in 
//<Route path="/updatechef/:id" render={(props) => <UpdateChef {...props} />} />
const MyComponent = (properties) => {
  const { id } = properties.match.params;
  return (
    <Link to="/">Lets go home</Link>
  )
}

//And finally using poth props and params like
//<Route path="/updatechef/:id" render={(props) => <UpdateChef someProperty={someProperty} {...props} />} />
const MyComponent = (properties) => {
  const { id } = properties.match.params;
  const { someProperty } = properties;
  return (
    <Link to="/">Lets go home</Link>
  )
}