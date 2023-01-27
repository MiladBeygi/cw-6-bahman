import React, { useState } from "react";
import useHttp from "../../Hooks/useHttp";
function AddPart(props) {
    // const { isLoading, error, sendRequest: sendCard } = useHttp();

    const [card, setCard] = useState({ title: '', description: '', fullDescription: '' });
    const titleChangehandler = (e) => {
        setCard((prevState) => {
            return { ...prevState, title: e.target.value }
        })
    };
    const descriptionChangehandler = (e) => {
        setCard((prevState) => {
            return { ...prevState, description: e.target.value }
        })
    };
    const fDescriptionChangehandler = (e) => {
        setCard((prevState) => {
            return { ...prevState, fullDescription: e.target.value }
        })
    };
    const addButtonHandler = (e) => {
        // console.log(card)
        // sendCard({
        //     url: 'https://63d2513e06556a0fdd3930ff.mockapi.io/data',
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        //     body: JSON.stringify(card),
        // }, (data) => { console.log(data) })
        props.addData(card);
        setCard({ title: '', description: '', fullDescription: '' });
    }
    return <div className="w-2/4 bg-slate-300 rounded-md h-[200px] sticky top-[20px]">
        <div>
            <h1 className="text-2xl text-left px-3 text-sky-700">Edit/Add</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
            <label className="text-left w-full pl-[25px]" htmlFor="title">Title</label>
            <input value={card.title} onChange={titleChangehandler} id="title" className="w-11/12 px-2 rounded-md" placeholder="Title" />
        </div>
        <div className="flex flex-col items-center">
            <label className="text-left w-full pl-[25px]" htmlFor="description">Description</label>
            <input value={card.description} onChange={descriptionChangehandler} id="description" className="w-11/12 px-2 rounded-md" placeholder="Description" />
        </div>
        <div className="flex flex-col items-center">
            <label className="text-left w-full pl-[25px]" htmlFor="full-description">Full Description</label>
            <input value={card.fullDescription} onChange={fDescriptionChangehandler} id="full-description" className="w-11/12 px-2 rounded-md" placeholder="Full Description" />
        </div>
        <div className="flex justify-end p-2 relative">
            <button className="text-xl bg-sky-500 px-[10px] mx-2 rounded-xl absolute bottom-[-45px]">Edit</button>
            <button onClick={addButtonHandler} className="text-xl bg-slate-500 px-[10px] mx-2 rounded-xl absolute bottom-[-45px] right-[65px]">Add</button>
        </div>
        {/* {console.log(card)} */}
    </div>
}
export default AddPart;