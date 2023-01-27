import React, { useEffect, useState } from "react";
import useHttp from "../../Hooks/useHttp";
import useForceUpdate from '../../Hooks/forceUpdate';
function AddPart(props) {

    const forceUpdate = useForceUpdate();
    // let editFlag = props.editingMode;
    // const { isLoading, error, sendRequest: sendCard } = useHttp();
    // const [editingCard, setEditingCard] = useState(props.editingObj);
    // const editingCard = props.editingObj;

    const [card, setCard] = useState({ title: '', description: '', fullDescription: '' });
    useEffect(() => {
        setCard(props.editingObj);
        // console.log(editingCard);
        forceUpdate();
    }, [props.editingObj])
    // if (editFlag) {
    //     setEditingCard(props.editingObj);
    //     editFlag = !editFlag;
    // }
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
        props.addData(card);
        setCard({ title: '', description: '', fullDescription: '' });
    }
    const editButtonHandler = (e) => {
        props.editData(card);
        setCard({ title: '', description: '', fullDescription: '' });
    }
    return <div className="w-2/4 bg-slate-300 rounded-md h-[200px] sticky top-[20px]">
        <div>
            <h1 className="text-2xl text-left px-3 text-sky-700">Edit/Add</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
            <label className="text-left w-full pl-[25px]" htmlFor="title">Title</label>
            {/* editingCard.title !== "" ? editingCard.title : */}
            <input value={card.title} onChange={titleChangehandler} id="title" className="w-11/12 px-2 rounded-md" placeholder="Title" />
        </div>
        <div className="flex flex-col items-center">
            <label className="text-left w-full pl-[25px]" htmlFor="description">Description</label>
            {/* editingCard.description !== '' ? editingCard.description :  */}
            <input value={card.description} onChange={descriptionChangehandler} id="description" className="w-11/12 px-2 rounded-md" placeholder='Description' />
        </div>
        <div className="flex flex-col items-center">
            <label className="text-left w-full pl-[25px]" htmlFor="full-description">Full Description</label>
            {/* editingCard.fullDescription !== '' ? editingCard.fullDescription :  */}
            <input value={card.fullDescription} onChange={fDescriptionChangehandler} id="full-description" className="w-11/12 px-2 rounded-md" placeholder="Full Description" />
        </div>
        <div className="flex justify-end p-2 relative">
            <button onClick={editButtonHandler} className="text-xl bg-sky-500 px-[10px] mx-2 rounded-xl absolute bottom-[-45px]">Edit</button>
            <button onClick={addButtonHandler} className="text-xl bg-slate-500 px-[10px] mx-2 rounded-xl absolute bottom-[-45px] right-[65px]">Add</button>
        </div>
        {/* {console.log(card)} */}
        {/* {console.log(props.editingObj)} */}
        {/* {console.log(card)} */}
    </div>
}
export default AddPart;