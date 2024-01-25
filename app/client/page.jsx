'use client'

import { useSession } from "next-auth/react"

export default function ClientPage() {
	const {data, status} = useSession();
	console.log({data, status})
	return (
		<div>
			<h1>Client page</h1>
		</div>
	)
}