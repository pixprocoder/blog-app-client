import { Navbar } from "@/components/layout/Navbar"


function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default AppLayout