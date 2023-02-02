import {readCookie, storeCookie} from "../common";

export const login = async (username,email,password,setter,cookie) => {
    console.log(username,email,password,setter);
    try {
        const body = JSON.stringify ({
            username: username,
            email: email,
            password: password
        })
        console.log("body: ", body)
      const response = await fetch("http://localhost:5001/login",
    {
        method:"POST",
        headers: {"Content-Type" : "application/json"},
        body: body
      
    })
const data = await response.json();
console.log(data);
console.log(data.user);
setter(data.user);
console.log(data.token);
storeCookie("jwt_token",data.token,7);


    } catch (error) {
      console.log(error)
    }
}
export const authCheck = async (jwt_token) => {
    try {
       const response = await fetch ("http://localhost:5001/authCheck", {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" :`Bearer ${jwt_token}`
        }
       
    }
    ) 
    console.log(response);
    const data = await response.json();
    console.log("authCheck:",data);
       return data.user;
    } catch (error) {
       console.log(error); 
    }
}

export const addUser = async (username,email,password,setter,cookie) => {
    try {
        const response = await fetch("http://localhost:5001/addUser", {
            method:"POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }
            )
        })
        const data = await response.json();
        console.log(data);
        console.log(data.user);
        setter(data.user);

        storeCookie("jwt_token",data.token,7);
    } catch (error) {
        console.log(error)
    }
}

export const updateEmail = async (username,newemail,password,setter,cookie) => {
    try {
        let jwt_token = readCookie("jwt_token")
        const response = await fetch("http://localhost:5001/updateEmail", {
            method:"PUT",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" :`Bearer ${jwt_token}`
                    },
            body: JSON.stringify({
                username: username,
                email: newemail,
                password: password
            }
            )
        })
        const data = await response.json();
        console.log(data);
        console.log(data.user);
        setter(data.user);

        storeCookie("jwt_token",data.token,7);
    } catch (error) {
        console.log(error)
    }
}

export const listUsers = async (username,email,password,setter,cookie) => {
    try {
        
        let jwt_token = readCookie("jwt_token")
        console.log("listUsers",jwt_token);
        const response = await fetch("http://localhost:5001/listUser", {
            method:"GET",
            headers: {"Content-Type" : "application/json",
                      "Authorization" :`Bearer ${jwt_token}`
        
        }
           
        })
        const data = await response.json();
        console.log(data);
        console.log(data.user);
        setter(data.user);

        storeCookie("jwt_token",data.token,7);
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (jwt_token,username,email,password) => {
    try {
        let jwt_token = readCookie("jwt_token")
        console.log("deleteUser",jwt_token);
       const response = await fetch ("http://localhost:5001/deleteUser", {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" :`Bearer ${jwt_token}`
        },
        
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        }
        )
    })

    console.log(response);
    const data = await response.json();
    console.log("deleteUser:",data);
       return data.user;
    } catch (error) {
       console.log(error); 
    }
}