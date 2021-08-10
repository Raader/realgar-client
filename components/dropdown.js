import { useEffect, useRef, useState } from "react";

const Dropdown = ({ children, content }) => {
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
      {children}
      <div>
        {active ? (
          <div className="absolute bg-white min-w-xl rounded-md mt-1 shadow-lg w-full min-w-min overflow-hidden">
            {content}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
