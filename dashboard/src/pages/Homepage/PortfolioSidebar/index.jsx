import { Link } from "react-router-dom";
import {
  FolderGit,
  History,
  Home,
  LayoutGrid,
  LogOut,
  MessageSquareMore,
  Package2,
  PencilRuler,
  User,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const PortfolioSidebar = ({ active, setActive, handleLogout }) => {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-14 flex-col border-r bg-background sm:flex z-50">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  active === "Dashboard"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground"
                }  transition-colors hover:text-foreground md:h-8 md:w-8`}
                onClick={() => setActive("Dashboard")}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  active === "Add Project"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground"
                }  transition-colors hover:text-foreground md:h-8 md:w-8`}
                onClick={() => setActive("Add Project")}
              >
                <FolderGit className="h-5 w-5" />
                <span className="sr-only">Add Project</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Add Project</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  active === "Add Skill"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground"
                }  transition-colors hover:text-foreground md:h-8 md:w-8`}
                onClick={() => setActive("Add Skill")}
              >
                <PencilRuler className="h-5 w-5" />
                <span className="sr-only">Add Skill</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Add Skill</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  active === "Add Uses"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground"
                }  transition-colors hover:text-foreground md:h-8 md:w-8`}
                onClick={() => setActive("Add Uses")}
              >
                <LayoutGrid className="h-5 w-5" />
                <span className="sr-only">Add Uses</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Add Uses</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  active === "Add Timeline"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground"
                }  transition-colors hover:text-foreground md:h-8 md:w-8`}
                onClick={() => setActive("Add Timeline")}
              >
                <History className="h-5 w-5" />
                <span className="sr-only">Add Timeline</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Add Timeline</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  active === "Messages"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground"
                }  transition-colors hover:text-foreground md:h-8 md:w-8`}
                onClick={() => setActive("Messages")}
              >
                <MessageSquareMore className="h-5 w-5" />
                <span className="sr-only">Messages</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Messages</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  active === "Account"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground"
                }  transition-colors hover:text-foreground md:h-8 md:w-8`}
                onClick={() => setActive("Account")}
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Account</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Logout</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Logout</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default PortfolioSidebar;
