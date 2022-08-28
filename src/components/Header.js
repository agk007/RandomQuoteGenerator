import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <nav
          class="
        
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
           
          
          
        "
        >
          <div class="items-center w-full md:items-center md:w-auto">
            <ul
              class="
              m-8
              pt-4
              active:bg-blue
              text-xl
              md:flex
              md:justify-between 
              md:pt-0"
            >
              <li>
                <span class="inline-flex items-baseline">
                  <svg
                    class="self-center w-8 h-7 rounded-full "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <span>
                    {" "}
                    <NavLink  to={"/"}>Home</NavLink>

                    {/* <a
                      className="md:p-4 py-2 block  sm-text-base  "
                      onClick={(e) => {
                        navigate("/");
                      }}
                    >
                      Home
                    </a> */}
                  </span>
                </span>
              </li>

              <li>
                <NavLink  to={"/bookmarks"}>Bookmarks</NavLink>
                {/* <a
                  class="md:p-4 py-2  block hover:text-purple-400"
                  onClick={(e) => {
                    navigate("/bookmarks");
                  }}
                >
                  Bookmarks
                </a> */}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
