import { useState, useEffect, useMemo } from 'react';
import './App.css';
import AddPart from './Components/AddPart/AddPart';
import Card from './Components/Card/Card';
import CardContainer from './Components/CardContainer/CardContainer';
import useHttp from './Hooks/useHttp';




function App() {
  const [newObj, setNewObj] = useState({});
  const [tasks, setTasks] = useState([]);
  const [editingObj, setEditingObj] = useState();
  const [editinMode, setEditingMode] = useState(false);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();



  function transformTasks(data) {
    setTasks(data);
    // const loadedTasks = [];

    // for (const taskKey in data) {
    //   loadedTasks.push({ id: data[taskKey].id, title: data[taskKey].title, description: data[taskKey].description, fullDescription: data[taskKey].fullDescription });
    // }

    // setTasks(loadedTasks);
  }

  useEffect(() => {
    fetchTasks({ url: 'https://63d2513e06556a0fdd3930ff.mockapi.io/data' }, transformTasks);
  }, [fetchTasks, newObj]);




  const addDataHandler = (e) => {
    // console.log(e);
    fetchTasks({
      url: 'https://63d2513e06556a0fdd3930ff.mockapi.io/data',
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: e,
    }, (data) => {
      // console.log('hi');
      // setTasks(...tasks, e);
      setNewObj(e);
      // return ((prevState) => {
      //   return [...prevState, data];
      // })
    })

    // fetch('https://63d2513e06556a0fdd3930ff.mockapi.io/data', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    //   body: JSON.stringify(e),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //     setNewObj(e);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
    // console.log('from app');
    // console.log(e);

  }
  const cardDeletHandler = (e) => {
    setNewObj(e);
    // console.log('from app');
    // console.log(e);
  }
  const cardEditHandler = (e) => {
    // console.log('from app');
    // console.log(e);
    setEditingObj(tasks.filter((el) => el.id === e));
    setEditingMode(true);
  }
  return (
    <div className="App flex w-11/12 mx-[auto] my-2">
      <CardContainer>
        {tasks.map((el, index) => <Card key={index} title={el.title} id={el.id} description={el.description} fullDescription={el.fullDescription} onDelete={cardDeletHandler} onEdit={cardEditHandler} />)}
      </CardContainer>
      <AddPart addData={addDataHandler} editingObj={editingObj} editingMode={editinMode} />
      {/* {console.log(tasks)}
      {console.log(newObj)} */}
      {/* {console.log(editingObj)} */}
    </div>
  );
}

export default App;
