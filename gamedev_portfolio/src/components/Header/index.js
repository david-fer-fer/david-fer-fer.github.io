import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";
import {Link} from "react-router-dom";

const Header = ({ handleWorkScroll, handleExperienceScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
                <Link to={"/"}>
                    <h1 className="font-medium p-2 laptop:p-0 link">
                        {name}
                    </h1>
                </Link>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleExperienceScroll}>Experience</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (

                      <Link to={"/blog"}>
                        <Button >Blog</Button>
                      </Link>
                  )}
                  {showResume && (

                      <Link to={"/resume"}>
                          <Button classes="first:ml-1">
                             Resume
                          </Button>
                      </Link>
                  )}

                  <Button
                    onClick={() => window.open("mailto:davidfdez225@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                    <Link to={"/"}>
                        <Button>
                            Home
                        </Button>
                    </Link>
                  {showBlog && (
                      <Link to={"/blog"}>
                          <Button>
                              Blog
                          </Button>
                      </Link>
                  )}
                  {showResume && (
                    <Link to={"/resume"}
                    >
                        <Button classes="first:ml-1">
                            Resume
                        </Button>
                    </Link>
                  )}

                  <Button
                    onClick={() => window.open("mailto:davidfdez225@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
          <Link to={"/"}>
              <h1 className="font-medium p-2 laptop:p-0 link">
                  {name}
              </h1>
          </Link>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
              <Button onClick={handleExperienceScroll}>Experience</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
                <Link to={"/blog"}>
                    <Button>
                        Blog
                    </Button>
                </Link>
            )}
            {showResume && (
                <Link to={"/resume"}
                >
                    <Button classes="first:ml-1">
                        Resume
                    </Button>
                </Link>
            )}

            <Button onClick={() => window.open("mailto:davidfdez225@gmail.com")}>
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
              <Link to={"/"}>
                  <Button>
                      Home
                  </Button>
              </Link>
            {showBlog && (
                <Link to={"/blog"}>
                    <Button>
                        Blog
                    </Button>
                </Link>
            )}
            {showResume && (
                <Link to={"/resume"}>
                    <Button>
                        Resume
                    </Button>
                </Link>
            )}

            <Button onClick={() => window.open("mailto:davidfdez225@gmail.com")}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
