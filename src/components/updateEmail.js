import { useState } from "react";
import { updateEmail,login } from "../utils/utils";

const UpdateEmail = ({setter}) => {
    const [username,setUsername] =useState();
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();
    const [newemail,setnewEmail] =useState();

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log("executing update email request")
        await updateEmail(username,newemail,password,setter);
    }

    return (
        <form onSubmit={submitHandler}>
            <input onChange={(event) => setUsername(event.target.value)} />
            <input onChange={(event) => setEmail(event.target.value)} />
            <input onChange={(event) => setPassword(event.target.value)} />
            <button onClick={submitHandler}>updateEmail</button>
            </form>
    )
}

export default UpdateEmail;