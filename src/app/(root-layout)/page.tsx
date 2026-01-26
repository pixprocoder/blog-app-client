import { authClient } from "@/lib/auth-client"

async function page() {
    const session = await authClient.getSession()
    console.log("session", session)
    return (
        <div>page </div>
    )
}

export default page