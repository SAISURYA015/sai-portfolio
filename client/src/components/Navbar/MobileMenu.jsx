import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const onToggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const closeMenu = () => {
    setIsOpen(false);  // Close the menu when a menu item is clicked
    setClicked(null);  // Reset clicked submenu
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: "0",
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="z-[999] relative" onClick={onToggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "120%" }}
        className="fixed left-40 right-0 md:left-[550px] md:right-0 top-16 z-[999] h-auto overflow-y-auto rounded-bl-3xl bg-[#000] text-white p-6 backdrop-blur shadow-md shadow-[#000]"
      >
        <ul>
          {Menus?.map(({ name, subMenu, path }, i) => {
            const hasSubMenu = subMenu?.length > 0;
            const isClicked = clicked === i;
            return (
              <li key={name}>
                <Link to={path}> <span
                  className="flex-center-between cursor-pointer hover:bg-white/5 rounded-md p-4 relative"
                  onClick={() => {
                    setClicked(isClicked ? null : i)
                    if (!hasSubMenu) closeMenu();
                  }}
                >
                  {name}
                  {/* {path && (<Link to={path} className="">{name}</Link>)} */}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"}`}
                    />
                  )}
                </span>
                </Link>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu?.map(({ name, icon: Icon, path }) => (
                      <li
                        key={name}
                        className="flex-center p-2 cursor-pointer hover:bg-white/5 rounded-md gap-x-2"
                      >
                        <Icon className="text-red-500" size={16} />
                        <Link to={path} onClick={closeMenu} ><span>{name}</span></Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileMenu; 