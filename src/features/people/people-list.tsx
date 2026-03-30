import { useEffect, useState } from "react"
import type { People } from "./people"
import { PoepleCard } from "./people-card";
import { Spinner } from "@/components/ui/spinner";

export function PoepleList() {
    const [people, setPoeple] = useState<People[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const swapiUrl = 'https://swapi.dev/api/';

    useEffect(() => {

        const fetchPeople = async () => {
            setIsLoading(true)

            const response = await fetch(`${swapiUrl}people`)
            const data = await response.json()

            setIsLoading(false)
            setPoeple(data.results)
        }

        fetchPeople()
    }, [])

    console.log('people', people);
    console.log('is Loading', isLoading)

    return (
        <div className="flex flex-col w-full justify-center items-center gap-4">
            <h1>Liste des personnages de Star Wars</h1>
            {
                !isLoading ?
                    <div className="flex flex-wrap">
                        {people.map((p: People) => (
                            <PoepleCard key={p.name} poeple={p} />
                        ))
                        }
                    </div>
                    : <Spinner />
            }
        </div>
    )

}