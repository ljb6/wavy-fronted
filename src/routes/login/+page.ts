import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';

export async function load({ fetch }) {
	const res = await fetch('http://localhost:8080/auth/check', {
		credentials: 'include' // token
	});

	if (res.status === 401) {
		throw redirect(302, '/login');
	} else {
        throw redirect(302, '/dashboard');
    }
}