import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import type { People } from "./people";

export function PoepleCard({ poeple }: { poeple: People }) {
    return (
        <Card className="w-full w-1/2">
            <CardHeader>
                <CardTitle>Nom du personnage</CardTitle>
                <CardDescription>{poeple.name}</CardDescription>
                <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}