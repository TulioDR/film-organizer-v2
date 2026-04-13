import { useState } from "react";
import ToggleDropdownButton from "./ToggleDropdownButton";
import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import { useClerk, useUser } from "@clerk/nextjs";
import NavDropdownOption from "./NavDropdownOption";
import { useRouter } from "next/router";

type Props = {};

export default function NavDropdown({}: Props) {
   const { isLoaded, isSignedIn } = useUser();
   const router = useRouter();
   const { signOut } = useClerk();
   const [isOpen, setIsOpen] = useState(false);

   const toggleIsOpen = () => setIsOpen((prev) => !prev);
   const logIn = () => router.push("/auth");
   const logOut = async () => signOut();
   const goToUserSettings = () => router.push("/account");

   return (
      <div className="relative mr-4 2xl:mr-16">
         <ToggleDropdownButton
            isOpen={isOpen}
            onClick={toggleIsOpen}
            isLoaded={isLoaded}
         />
         {isOpen && (
            <div
               style={{ borderRadius: STANDARD_RADIUS }}
               className="absolute top-full right-0 translate-y-1 border border-border-light dark:border-border-dark flex flex-col w-64 bg-white dark:bg-black p-4"
            >
               {isSignedIn ? (
                  <>
                     <NavDropdownOption
                        icon="person"
                        text="Profile"
                        onClick={goToUserSettings}
                     />
                     <NavDropdownOption
                        icon="logout"
                        text="Log out"
                        onClick={logOut}
                     />
                  </>
               ) : (
                  <NavDropdownOption
                     icon="login"
                     text="Log In / Sign In"
                     onClick={logIn}
                  />
               )}
            </div>
         )}
      </div>
   );
}
