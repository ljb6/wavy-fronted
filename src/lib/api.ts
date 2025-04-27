export async function registerUser(name: string, email: string, password: string) {
    const resp = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password })
    })
    
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

    return resp.status;
}

export async function changePassword(password: string, new_password: string) {
    const resp = await fetch("http://localhost:8080/private/auth/changepassword", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, new_password }),
        credentials: "include"
    })

    return resp.status;
}

export async function addSubscriberManually(name: string, email: string) {
    const resp = await fetch("http://localhost:8080/private/database/addsub", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
        credentials: "include"
    })

    return resp.status;
}

export async function getSubscribers() {
    const res = await fetch("http://localhost:8080/private/database/getsubs", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    });

    if (!res.ok) {
        throw new Error('Failed to fetch subscribers');
    }

    console.log(res);

    const data = await res.json();
    console.log(data);
    return data;
}

export async function clearSubs() {
    const res = await fetch("http://localhost:8080/private/database/clearsubs", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    });

    if (!res.ok) {
        throw new Error('Failed to clear subscribers');
    }

    const data = await res.json();
    return data;
}