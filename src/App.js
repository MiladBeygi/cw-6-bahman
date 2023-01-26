import { useState, useEffect } from 'react';
import './App.css';
import AddPart from './Components/AddPart/AddPart';
import Card from './Components/Card/Card';
import CardContainer from './Components/CardContainer/CardContainer';
import useGetData from './Hooks/useGetData';
import useSendData from './Hooks/UseSendData';



function App() {
  const [newObj, setNewObj] = useState({});
  // const sendData = useSendData;
  const myArray = useGetData('https://63d2513e06556a0fdd3930ff.mockapi.io/data');
  const sendedData = useSendData('https://63d2513e06556a0fdd3930ff.mockapi.io/data', newObj);
  // useEffect(() => {
  // }, [newObj])


  const addDataHandler = (e) => {
    setNewObj(e);
    // sendedData("https://63d2513e06556a0fdd3930ff.mockapi.io/data", e);
    // console.log('from app');
    // console.log(e);

  }
  return (
    <div className="App flex w-11/12 mx-[auto] my-2">
      <CardContainer>
        {myArray.map((el, index) => <Card key={index} title={el.title} description={el.description} fullDescription={el.fullDescription} />)}
      </CardContainer>
      <AddPart addData={addDataHandler} />
      {/* {console.log(myArray)} */}
    </div>
  );
}

export default App;
