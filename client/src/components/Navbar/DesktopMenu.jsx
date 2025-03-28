import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const DesktopMenu = ({ menu }) => {
  const [isHover, setIsHover] = useState(false);

  const onToggleHover = () => {
    setIsHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: 15,
      transition: {
        duration: 0.5,
      },
      display: "none",
    },
  };

  // Checking if menu has submenu
  const hasSubMenu = menu?.subMenu?.length > 0;

  return (
    <motion.li
      className="group/link"
      onHoverStart={onToggleHover}
      onHoverEnd={onToggleHover}
    >
      <span className="flex-center text-xl hover:underline hover:underline-offset-8 decoration-[#FF4081] gap-1 px-3 py-1 cursor-pointer hover:bg-black/5 rounded-lg">
        <Link to={menu.path}>{menu.name}</Link>
        {hasSubMenu && (
          <ChevronDown className="group-hover/link:rotate-180 duration-200" />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-7 ${menu.gridCols === 3
              ? "grid-cols-3"
              : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
              }`}
          >
            {menu?.subMenu?.map((subMenu, i) => (
              <Link to={subMenu.path}>
                <div key={i} className="cursor-pointer">
                  <div className="flex-center gap-x-4 group/menubox">
                    <div className="px-2">
                      <h6 className="font-medium">{subMenu?.name}</h6>
                      <p className="text-sm text-gray-400">{subMenu?.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};

export default DesktopMenu;