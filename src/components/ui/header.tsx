import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "../logo_conatiner";
import { NavigationRoutes } from "../navigation_routes";
import { NavLink } from "react-router";
import ProfileContainer from "../profile_conatiner";
import ToggleContainer from "./toggle_container";


const Header = () => {
  const { userId } = useAuth();
  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4 w-full">
          {/* logo section */}
          <LogoContainer />

          {/* navigation section */}
          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/genrate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
              >
                Take an Interview
              </NavLink>
            )}
          </nav>

          
          <div className="ml-auto flex gap-6 items-center">
               {/* profile sectio */}
               <ProfileContainer/>

               {/* Mobile toggle section */}
               <ToggleContainer/>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
