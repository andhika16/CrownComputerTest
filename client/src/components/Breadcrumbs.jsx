import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  if (location.pathname === "/") return null;
  return (
    <nav className="max-w-5xl mx-auto p-4 flex items-center  ">
      <Link to="/" className="text-blue-600 font-serif hover:underline">
        Home
      </Link>

      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <div key={to} className="flex items-center">
            <ChevronRight size={16} className="mx-2" />
            {isLast ? (
              <span className="text-primary font-serif">
                {capitalize(decodeURIComponent(value))}
              </span>
            ) : (
              <Link to={to} className="font-serif text-primary  hover:underline">
                {capitalize(decodeURIComponent(value))}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
