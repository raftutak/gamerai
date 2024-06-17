import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CircleUserIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 flex h-24 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
          prefetch={false}
        >
          {/* <Package2Icon className="h-6 w-6" /> */}
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          href="#"
          className="text-foreground transition-colors hover:text-foreground text-2xl"
          prefetch={false}
        >
          <strong>GamerAI</strong>
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          Areny
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          Czempioni
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          Ataki
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          FAQ
        </Link>
      </nav>

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial"></form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUserIcon className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Moje konto</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ustawienia</DropdownMenuItem>
            <DropdownMenuItem>Wsparcie</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Wyloguj</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
