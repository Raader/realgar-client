import { useEffect, useRef, useState } from "react";

const Dropdown = ({ children, label }) => {
  const [active, setActive] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref && !ref.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.documentElement.addEventListener("click", handler);
    return () => document.documentElement.removeEventListener("click", handler);
  }, [ref]);

  return (
    <div
      className="relative"
      onClick={() => setActive((prev) => !prev)}
      ref={ref}
    >
      {label}
      <div>
        {active ? (
          <div className="absolute bg-white min-w-xl rounded-md shadow-lg min-w-full overflow-hidden z-10 origin-top-right right-0 border">
            {children}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
