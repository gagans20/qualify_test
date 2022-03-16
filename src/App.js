import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'; 
import Name from './components/Name';
import Heading from './components/Heading';
import moment from 'moment';


// export default () => {
//   const [person, setPerson] = useState(null);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(async () => {
//     const response = await fetch("https://randomuser.me/api/");
//     const data = await response.json();
//     const [item] = data.results;
//     setPerson(item);
//     // setLoading(false);
//   }, []);

//   // return { data, loading };
//   return (
//     <div>
//       <Name name={person && {person.name.first}} />
//       {/* <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button> */}
//       {person&&<div>{person.name.first} {person.name.last}</div>}
//       {person&&<div>{person.login.username}</div>}
//     </div>
//   );
// };

export default function App() {

  const[userData, setUserData]= useState({});
  const[fullName, setFullName]= useState('');
  const[image, setImage]= useState('');
  const[userName, setUserName]=useState("");
  const[email, setEmail]=useState('');
  const[gender, setGender]=useState('');
  const[dob, setDob]=useState('');
  const[cell, setCell]=useState('');
  const[add, setAdd]=useState('');
  const[isEdit, setIsEdit]=useState(false);

<<<<<<< HEAD
  
  async function personalData(){
    let response= await fetch("https://randomuser.me/api/");
    let myData= await response.json();
    //console.log(myData);
    return myData;
=======
  function setDetails(){
    console.log(userData);
    setUserName(userData?.name?.first);
>>>>>>> 2c1403998e177eb747ec4c5d1e92751e5dd683aa
  }
  

  useEffect(()=> {
      async function fetchData() {
      let tempUserData = await personalData();
      //console.log(tempUserData);
      setUserData(tempUserData);
    }
    fetchData();
  }, [])

  async function setDetails(){
    console.log(userData);
    setFullName(userData.results[0].name.title+" "+userData.results[0].name.first+" "+userData.results[0].name.last);
    setImage(userData.results[0].picture.large);
    setUserName(userData.results[0].login.username);
    setEmail(userData.results[0].email);
    setGender(userData.results[0].gender);
    setDob(moment(userData.results[0].dob.date).format('DD-MM-YYYY'));
    setCell(userData.results[0].cell);
    setAdd(userData.results[0].location.street.number+", "+userData.results[0].location.street.name+", "+userData.results[0].location.city+", "+userData.results[0].location.state+", "+userData.results[0].location.country+", "+userData.results[0].location.postcode);

  }

  useEffect(setDetails, [userData]);

  return(
    <div>
      <Heading fullName={fullName} image={image} edit="Edit" />
      <Name id="USERNAME" value= {userName}  edit="Edit"/>
      <Name id="DATE OF BIRTH" value= {dob} edit="Edit"/>
      <Name id="GENDER" value= {gender}  edit="Edit"/>
      <Name id="CONTACT NO." value= {cell} edit="Edit"/>
      <Name id="EMAIL" value= {email} edit="Edit"/>
      <Name id="ADDRESS" value= {add}  edit="Edit"/>
    </div>
  )
}

// export default function App() {

//   const[userData, setUserData]= useState({});
//   const[userName, setUserName]= useState('');

//   function setDetails(){
//     console.log(userData);
//     setUserName(userData?.name?.first);
//   }

//   useEffect(()=> {
//       async function fetchData() {
//       let tempUserData = await personalData();
//       setUserData(tempUserData);
//     }
//     personalData();
//   }, [])

//   useEffect(setDetails, [userData]);
//   //console.log(userData?.name?.first);
//   return(
//     <div>
//       {userData &&<div>{userData?.name?.first}</div>}
//     </div>
//   )
// }




