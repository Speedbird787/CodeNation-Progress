// import './App.css';
// import React from 'react';
// import Carousel from './Carousel';
// import Content from './Content';
// import Count from './Counter';
// import Navbar from './Navbar';
// import Jumbotron from './Jumbotron';
// import Footer from './Footer'

// counter challenge app

// function App() {

//     const [count, setCount] = React.useState(0);
  
  
//     return (
//       <div className="App">
//         <Carousel />
//         <Count 
//           value={count} 
//           moreClick={() => setCount(count + 1)}
//           lessClick={() => setCount(count - 1)}
//         />
//         <Content heading="Climate change" />
//         <NavBar/>
//         <Jumbotron/>
//         <Footer />
        
//       </div>
//     );
//   }



// class App extends React.Component {
// function App() {
//   render()
//    { 
//     return (
//     <div>
//     <h1>I'm a class component</h1>
//     <Person />
//     <Person />
//     <Person />
//     </div>
//     );
//     }
//   }
//     const Person = () => {
//     return <p>I'm a functional component</p>;
//     };
  
// export default App;

// class App extends React.Component {
//   render() { return (

//   <div>
//   <h1>I'm a class component</h1> <Person name="Dan" age="34" />
//   <Person name="Stuart" age="30-something" />
//   <Person name="Ben" age="21" />
//   </div>
//   );
// }
//  }
//   const Person = (props) => {
//   return (
  
//   <p> Hi I'm {props.name} and I'm {props.age} </p>
//   );  
// };
//   export default App;

// const App = () => {
//   return (
//     <div>
//     <Job title = "software developer"/> 
//     <Job title = "chef"/> 
//     <Job title = "pilot"/> 
//     </div> 
//   )
// }
// // props = { title: "value"}
// const Job = (props) => {
//   return <h4> my job is: {props.title}</h4>
// }

// export default App;

// class App extends React.Component {
//   render() { return (
//   );
//   <div>
//   <h1>I'm a class component</h1> <Person name="Dan" age="34" />
//   <Person name="Stuart" age="30-something" />
//   <Person name="Ben" age="21" petsName="john" type="dog" />
//   </div>
//     } }
//   Props: {
//   name: Ben,
//   Age: 21, petsName: John, Type: dog
//   }
//   const Person = props => {
//   return (
//   <div>
//   <p>Hi I'm {props.name} and I'm {props.age}</p>
//   <Pet pet={props.petsName} />
//   </div>
//    ); };
//   const Pet = props => {
//     };
//   return <p>Hi my pets name is {props.pet}</p>;
   
// stateHooks

// import react, { useState } from "react"

// const App = () => {

//     const [count, setCount] = useState (0)
//     return (
//         <div> 
//              <h1> hello world</h1>
//              <h4> count: {count} </h4>
//              <button onClick={()=> {setCount (count +1) }})
//         </div>
// )}

// export default App
