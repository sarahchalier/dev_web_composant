import UserNav from "./user-nav"

export function Header() {
    return (
        <header className="flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">My first react app</h1>
            <nav>
                <UserNav />
            </nav>
        </header>
    )
}