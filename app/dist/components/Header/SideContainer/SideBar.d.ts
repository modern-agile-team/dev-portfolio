/// <reference types="react" />
interface SideBarProps {
    mainTitle: string;
    sideBarItems: string;
    isClickedSideBarIcon: boolean;
    setIsClickedSideBarIcon: (clickedSideBarIcon: boolean) => void;
}
declare const SideBar: ({ mainTitle, sideBarItems, isClickedSideBarIcon, setIsClickedSideBarIcon }: SideBarProps) => JSX.Element;
export default SideBar;
