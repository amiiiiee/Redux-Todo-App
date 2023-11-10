import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addData, removeData } from "../Redux/todoSlice";
import { useNavigate } from "react-router-dom";

const Todu = () => {
  const navigate=useNavigate();
  const textRef = useRef(null);
  const dispatch = useDispatch();
  const textLists = useSelector((state) => state.todo.data);

  const AddBtn = () => {
    const textSaveRef = textRef.current.value;
    dispatch(addData({ name: textSaveRef }));
    textRef.current.value = "";
    console.log(textLists);
  };
  const removeBtn = (id) => {
    dispatch(removeData(id));
  };
  return (
    <div>
      <Container>
        <h1 className="border p-2 m-2 bg-light ">Todo App</h1>
        <br />
        <hr />
        <br />
        <div style={{ marginLeft: "250px" }}>
          <Form.Control
            ref={textRef}
            size="lg"
            type="text"
            style={{ width: "600px", textAlign: "center" }}
            placeholder="Add Todo......."
          />
        </div>
        <Button className="m-4" variant="dark" onClick={AddBtn}>
          Add
        </Button>
        <br />
        {textLists.map((item) => (
          <div key={item.id} className="border p-1 m-1  ">
            <h5><u>{item.text}</u></h5>
            <Button onClick={()=>navigate(`/edit/${item.id}`)}>Edit</Button>
            <Button
              onClick={() => removeBtn(item.id)}
              className="bg-danger m-2"
            >
              Delete
            </Button>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Todu;
