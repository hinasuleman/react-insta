import { useState } from "react";
import { addUser, login } from "../utils/utils";

const AddUser = ({setter}) => {
    const [username,setUsername] =useState();
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log("executing add user request")
        await addUser(username,email,password,setter);
    }

    return (
        <form onSubmit={submitHandler}>
            <input onChange={(event) => setUsername(event.target.value)} />
            <input onChange={(event) => setEmail(event.target.value)} />
            <input onChange={(event) => setPassword(event.target.value)} />
            <button onClick={submitHandler}>Create User</button>
        </form>
    )
}

export default AddUser;