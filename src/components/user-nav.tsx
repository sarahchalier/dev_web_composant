import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { UserIcon, ContactIcon, MailIcon } from "lucide-react";

export default function UserNav() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <UserIcon className="size-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-4">
                            <ContactIcon className="size-4" />
                            <p className="text-sm">Quentin Danneville</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <MailIcon className="size-4" />
                            <p className="text-sm">quentin.danneville@gmail.com</p>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
