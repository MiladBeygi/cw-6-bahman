import React from "react";
import useHttp from "../../Hooks/useHttp";
import Button from "../Buttons/Buttons";

function Card(props) {
    const { isLoading, error, sendRequest: deleteRequest } = useHttp();
    const deleteClickHandler = (e) => {
        const deletedId = e.target.parentElement.parentElement.parentElement.id;
        // console.log(deletedId);
        deleteRequest({
            url: `https://63d2513e06556a0fdd3930ff.mockapi.io/data/${deletedId}`,
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            // body: e,
        }, (data) => {
            // console.log(data);
            props.onDelete(data);
        })
    }
    const editClickHandler = (e) => {
        const deletedId = e.target.parentElement.parentElement.parentElement.id;
        // console.log(deletedId);
        props.onEdit(deletedId);
    }
    return <div className="card flex flex-col items-start justify-around bg-slate-200 rounded-xl h-[250px]" id={props.id}>
        <h1 className="text-xl px-[10px] ">{props.title}</h1>
        <h3 className="text-sm px-[10px] text-sky-600 text-left">{props.description}</h3>
        <p className="text-xs px-[10px] overflow-y-auto h-[50px] text-left">{props.fullDescription}</p>
        <div className="flex justify-center w-full">
            <div><Button onClick={editClickHandler} className='text-xl mx-2 rounded-xl bg-sky-500 px-[10px]'>Edit Item</Button></div>
            <div><Button onClick={deleteClickHandler} className='text-xl bg-slate-500 mx-2 rounded-xl px-[10px]'>Delete Item</Button></div>


        </div>
    </div>
}
export default Card;