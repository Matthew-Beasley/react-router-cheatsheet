// Bring in react pieces
import React from "react";
import { Route, Link, useHistory } from "react-router-dom";
// Bring in your conponent (view)
import MainView from "MainView";
import MyComponent from "./MyComponent";


const App = () => {
  // You can navigate programatically using the history object
  const history = useHistory();

  const myNavFunction = (aVariable) => {
    history.push("/MyComponent"); // push to a hard coded location
    //or
    history.push(aVariable) // use a variable for dynamic location
  }

  return (
    <div id="app-root">

      {/* You can navigate with a Link which behaves exactly like an anchor
      // Links also display like anchor tags (underlined text) */}
      <Link to="/MyComponent">Let's go to MyComponent!</Link>

      {/* Button to call myNaveFuncio*/}
      <input value="navigate" onClick={(ev => myNavFunction(ev))} />

      {/* These are the Routes
      This is the simplest form. You can't pass properties using this, just the component name 
      Note exact keyword preventing "/" from matching on others that start with "/" like 
      "/mycomponent" */}
      <Route exact path="/" component={MyComponent} //Just pretending MyComponent is our home view here for "/" example

      {/*By using "render" method properties can be passed to the component 
      the same as we would with a regular component without the Route*/}
      <Route path="/mycomponent" render={() => <MyComponent someProperty={someProperty} />} />

      {/* By passing "props" in the render method we can retrieve properties from the path, 
      in this case :id */}
      <Route path="/mycomponent/:id" render={(props) => <MyComponent {...props} />} />

      {/* And finally we can pass both regular properties and props from the path at the same time */}
      <Route path="/mycomponent/:id" render={(props) => <MyComponent someProperty={someProperty} {...props} />} 
    </div>
  )
}
