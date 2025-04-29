import { redirect } from '@sveltejs/kit';

export async function load({ fetch }) {
	const res = await fetch('http://localhost:8080/auth/check', {
		credentials: 'include' // token
	});
	console.log(res);
	if (res.status == 200) {
        throw redirect(301, "/dashboard");
    }
}