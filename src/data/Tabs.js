import {
  Home,
  Film,
  MessageCircle,
  Search,
  Bell,
  PlusSquare,
  User
} from "lucide-react";

const tabs = [
  { name: "Home", href: "/home", icon: Home },
  { name: "Reels", href: "/reels", icon: Film },
  { name: "Search", href: "/search", icon: Search },
  { name: "Create", action: "modal", href: "/create", icon: PlusSquare },
  { name: "Messages", href: "/messages", icon: MessageCircle },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Profile", href: "/profile", icon: User },
];

export default tabs;
