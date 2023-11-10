import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editData } from '../Redux/todoSlice';

const EditTodo = () => {
    const navigate=useNavigate()
    const {id}=useParams();
    const editRef=useRef(null)
    const dispatch=useDispatch();
    const lists=useSelector((state)=>state.todo.data)
    const editList=lists.filter((item)=>item.id==id)
    console.log(editList);
     
    const editSave=(id)=>{
        const saveEditRef=editRef.current.value;
        dispatch(editData({id:id,text:saveEditRef}))
        navigate('/')
    }

  return (
    <div>
        <Container >
        <h1 className="border p-2 m-2 bg-light ">Edit Todo</h1>
        <br />
        <hr />
        <br />
        
          <div style={{ marginLeft: "250px" }}>

        <Form.Control
            ref={editRef}
            size="lg"
            type="text"
            style={{ width: "600px", textAlign: "center" }}
            defaultValue={editList[0].text}           
            
            />
            </div>
       
        <Button onClick={()=>editSave(editList[0].id)} className="m-4" variant="dark" >
          Save
        </Button>
            </Container>
    </div>
  )
}

export default EditTodo
