import MobileMenu from "@/features/layout/mobile-menu/components/MobileMenu";
import React from "react";
import MobileNavigation from "./MobileNavigation";
import MobileSearchbar from "./MobileSearchbar";
import BottomNavButton from "./BottomNavButton";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { themeActions } from "@/store/slices/theme-slice";
import TopNavButton from "./TopNavButton";
import MobileNavTitle from "./MobileNavTitle";

type Props = {};

export default function Mobile({}: Props) {
   const dispatch = useAppDispatch();
   const handleClick = () => dispatch(themeActions.toggleDarkMode());

   const ball = (
      <div className="h-6 aspect-square bg-black dark:bg-white rounded-full"></div>
   );
   return (
      <>
         <div className="bg-white dark:bg-black flex justify-between border-y border-border-light dark:border-border-dark h-14 fixed top-0 left-0 w-full z-20 px-4 lg:px-32">
            <MobileNavTitle />
            <div className="flex">
               <TopNavButton icon="search" onClick={() => {}} />
               <TopNavButton icon="person" onClick={() => {}} />
               <TopNavButton icon={ball} onClick={handleClick} />
            </div>
         </div>
         <div className="bg-white dark:bg-black flex border-y border-border-light dark:border-border-dark h-14 fixed bottom-0 left-0 w-full z-20 px-4 lg:px-32">
            <BottomNavButton href="/" icon="home" text="home" />
            <BottomNavButton href="/movie" icon="movie" text="movie" />
            <BottomNavButton href="/tv" icon="tv" text="series" />
            <BottomNavButton
               href="/playlists"
               icon="playlist_play"
               text="playlists"
            />
         </div>
      </>
   );
   // return (
   //    <>
   //       <MobileMenu position="topRight" buttonIcon="menu">
   //          <MobileNavigation />
   //       </MobileMenu>
   //       <FixedUIPortal>
   //          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-12 flex items-center justify-center">
   //             <NavTitle />
   //          </div>
   //       </FixedUIPortal>
   //       <MobileMenu position="topLeft" buttonIcon="search">
   //          <MobileSearchbar />
   //       </MobileMenu>
   //    </>
   // );
}
