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