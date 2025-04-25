export async function registerUser(name: string, email: string, password: string) {
    const resp = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password })
    })
    
    console.log(resp.json())

    return resp.status;
}

export async function loginUser(email: string, password: string) {
    const resp = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include"
    })
    
    console.log(resp.json())

    return resp.status;
}

export async function logoutUser() {
    const resp = await fetch("http://localhost:8080/private/auth/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    })
    
    console.log(resp.json())

    return resp.status;
}