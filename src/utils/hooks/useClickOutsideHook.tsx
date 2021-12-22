import React from "react";

const useClickOutsideHook = (handler: () => void) => {
  let domNode = React.useRef<any>();

  React.useEffect(() => {
    let maybeHandler = (event: any) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export default useClickOutsideHook;
