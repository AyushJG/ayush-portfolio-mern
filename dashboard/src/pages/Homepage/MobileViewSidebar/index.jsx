import { Link } from "react-router-dom";
import {
  FolderGit,
  History,
  Home,
  LayoutGrid,
  LogOut,
  MessageSquareMore,
  Package2,
  PanelLeft,
  PencilRuler,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileViewSidebar = ({ user, active, setActive, handleLogout }) => {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 max-[900px]:h-[100px]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              className={`group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base`}
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className={`flex items-center gap-4 px-2.5 ${
                active === "Dashboard"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground "
              }`}
              onClick={() => setActive("Dashboard")}
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              className={`flex items-center gap-4 px-2.5 ${
                active === "Add Project"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground "
              }`}
              onClick={() => setActive("Add Project")}
            >
              <FolderGit className="h-5 w-5" />
              Add Project
            </Link>
            <Link
              className={`flex items-center gap-4 px-2.5 ${
                active === "Add Skill"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground "
              }`}
              onClick={() => setActive("Add Skill")}
            >
              <PencilRuler className="h-5 w-5" />
              Add Skill
            </Link>
            <Link
              className={`flex items-center gap-4 px-2.5 ${
                active === "Add Application"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground "
              }`}
              onClick={() => setActive("Add Application")}
            >
              <LayoutGrid className="h-5 w-5" />
              Add Application
            </Link>
            <Link
              className={`flex items-center gap-4 px-2.5 ${
                active === "Profile"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground "
              }`}
              onClick={() => setActive("Account")}
            >
              <User className="h-5 w-5" />
              Account
            </Link>
            <Link
              className={`flex items-center gap-4 px-2.5 ${
                active === "Timeline"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground "
              }`}
              onClick={() => setActive("Add Timeline")}
            >
              <History className="h-5 w-5" />
              Timeline
            </Link>
            <Link
              className={`flex items-center gap-4 px-2.5 ${
                active === "Messages"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground "
              }`}
              onClick={() => setActive("Messages")}
            >
              <MessageSquareMore className="h-5 w-5" />
              Messages
            </Link>
            <Link
              className={
                "flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              }
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex  items-center gap-4 md:grow-0 sm:ml-16 sm:mt-5">
        <img
          src={user && user.avatar && user.avatar.url}
          alt="avatar"
          className="w-20 h-20 rounded-full max-[900px]:hidden"
        />
        <h1 className="text-4xl max-[900px]:text-2xl">
          Welcome back, {user.fullName}
        </h1>
      </div>
    </header>
  );
};

export default MobileViewSidebar;
