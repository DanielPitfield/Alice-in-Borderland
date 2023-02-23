import SubNavPeople from "../components/SubNavPeople";
import SubNavSuites from "../components/SubNavSuites";

export type NavbarItem = {
  name: string;
  path?: string;
  subItem?: React.ReactNode;
};

export const NavbarItems: NavbarItem[] = [
  { name: "Suites", subItem: <SubNavSuites /> },
  { name: "People", subItem: <SubNavPeople /> },
  { name: "Cards", path: "/cards" },
];
