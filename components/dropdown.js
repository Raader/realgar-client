import { useEffect, useRef, useState } from "react";

const initialAnimation = {
  name: "animate__zoomIn",
  duration: "0.3s",
  speed: "animate__faster",
};

const Dropdown = ({ children, label, className }) => {
  const [active, setActive] = useState(false);
  const [animation, setAnimation] = useState(initialAnimation);
  const ref = useRef();

  const openDropdown = () => {
    setAnimation(initialAnimation);
    setActive(true);
  };

  const closeDropdown = () => {
    setAnimation({ name: "animate__zoomOut", duration: "0.4s" });
    setTimeout(() => {
      setActive(false);
    }, 400);
  };

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeDropdown();
      }
    };
    document.documentElement.addEventListener("click", handler);
    return () => document.documentElement.removeEventListener("click", handler);
  }, [ref]);

  return (
    <div
      className="relative"
      onClick={() => {
        if (active) closeDropdown();
        else openDropdown();
      }}
      ref={ref}
    >
      {label}
      {active ? (
        <div
          className={
            `absolute bg-white min-w-xl rounded-md shadow-lg min-w-full overflow-hidden z-10 origin-top-right right-0 border animate__animated ${animation.name} ${animation.speed}` +
            " " +
            className
          }
          style={{ "--animate-duration": animation.duration }}
        >
          {children}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Dropdown;
