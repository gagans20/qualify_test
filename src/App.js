import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'; 
import Name from './components/Name';
import Heading from './components/Heading';
async function personalData(){
  let response= await fetch("https://randomuser.me/api/");
  let myData= await response.json();
  console.log(myData);
  return myData;
}

export default function App() {

  const[userData, setUserData]= useState({});
  const[userName, setUserName]= useState('');

  function setDetails(){
    console.log(userData);
    setUserName(userData?.name?.first);
  }

  useEffect(()=> {
      async function fetchData() {
      let tempUserData = await personalData();
      setUserData(tempUserData);
    }
    personalData();
  }, [])

  useEffect(setDetails, [userData]);

  return(
    <div>
      <h1>{userName}</h1>
    </div>
  )
}

// function App(props) {

//   const[user,setUser]= React.useState([]);
//   const[userName,setUserName]= React.useState('');

//   React.useEffect(
//   async function fetchData(){
//     let tempUser= await personalData();
//     setUser(tempUser);
//   }
//   ,[]
//   )
//   function setDetails() {
//     console.log(user);
//     setUserName(user?.name?.first);
//   }
//   setDetails();
//   useEffect(setDetails, [user]);
//   return (
//     <div>
//       <p>{userName}</p>
//     </div>
//   );
// }

// export default function App() {
//   const [posts, setPosts] = useState([]);
//   const fetchPost = async () => {
//   const response = await fetch(
//       "https://randomuser.me/api/"
//     );
//    const data = await response.json();
//     setPosts(data);
//   };

//   useEffect(() => {
//     fetchPost();
//   }, []);
//   return (
//     <div className="App">
//     <p> {posts.results[0].cell} </p>
//       <button onClick={fetchPost}> get new joke </button>
//     </div>
//   );
// }

// function App() {

//   function changeName(name) {
//     alert(name);
//     const newName= name;
//   }
//   return(
//   <div>
//   <Heading />
//   <Name />
//   </div>
  
//   )
// }

// export default App;


