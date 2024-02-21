import React from 'react';
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

//** Creating heading using JS */
const heading1 = document.createElement("h2");
heading1.innerHTML = "Hello again from Java Script!!";
const root1 = document.getElementById("jsroot");
root1.appendChild(heading1);

/** Creating react element using react.createElement */
// const heading = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1" }, [
//         React.createElement("h1", { className: "heading" }, "I am an h1 tag"),
//         React.createElement("h2", { className: "heading1" }, "I am an h2 tag")
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", { className: "heading" }, "I am an h1 tag"),
//         React.createElement("h2", { className: "heading1" }, "I am an h2 tag")
//     ])
// ]);
const HeaderCommponent = () => (
    <div id='header'>
        <div className='logo'>
            <FontAwesomeIcon icon={faHouse} />
        </div>
        <div className='search-container'>
            <input type='text' placeholder="Search.." name="search"></input>
            <button type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
        <div className='user-icon'>
            <FontAwesomeIcon icon={faUser} />
        </div>
    </div>
)

const Title = () => (
    <h1 className='heading' tabIndex='1'>Hello from JSX!!</h1>
)

const HeadingComponent = () => (
    <div id='container'>
        <HeaderCommponent></HeaderCommponent>
        <Title></Title>
        {/* <Title/> 
        {Title()} */}
        <h2>Using functional component</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);