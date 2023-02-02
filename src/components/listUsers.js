import { useState } from "react";
import { listUsers, login } from "../utils/utils";

const ListUsers = ({setter,userList}) => {
    const [username,setUsername] =useState();
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log("executing list users request")
        await listUsers(username,email,password,setter);
    }

    return (
        <form onSubmit={submitHandler}>
            <button onClick={submitHandler}>List Users</button>
            {userList.map((item,index) => 
                <p>{item.username} {item.email}</p>
            )}
        </form>
    )
}

export default ListUsers;