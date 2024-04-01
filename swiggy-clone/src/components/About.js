import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

/** Class based component */
class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent component did mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Class Based Component</h1>
        <h2>This is swiggy clone application</h2>
        <div>
          Logged in user is:
          <UserContext.Consumer>
            {({ loggedInUser }) => <h3 className="inline-block m-2 font-bold">{loggedInUser}</h3>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Sonali"} location={"Bangalore"}></UserClass>
        <UserClass name={"Akriti"} location={"Bhopal"}></UserClass>
      </div>
    );
  }
}

/** Functional Component */
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is swiggy clone application</h2>
//     </div>
//   );
// };

export default About;
