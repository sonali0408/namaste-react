import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
    //console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + " Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/sonali0408");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    //console.log(this.props.name + " Child Render");
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <div>Name: {name}</div>
        <div>Location: {location}</div>
        <div>Contact: xyz@gmail.com</div>
      </div>
    );
  }
}

export default UserClass;
