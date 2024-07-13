import { createContext, useState, useEffect, useContext } from "react";
import debounce from "../utils/debouce";

export enum ViewportEnum {
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  DESKTOP = "DESKTOP",
}

type ViewportContextType = {
  type: ViewportEnum;
};

type ViewportContextProps = {
  children: JSX.Element;
};

const initialStateViewport = () => {
  const { innerWidth } = window;
  if (innerWidth <= MAXIMUM_VIEWPORT_MOBILE) {
    return { type: ViewportEnum.MOBILE };
  } else if (innerWidth <= MAXIMUM_VIEWPORT_TABLET) {
    return { type: ViewportEnum.TABLET };
  } else {
    return { type: ViewportEnum.DESKTOP };
  }
};

const ViewportContext = createContext<ViewportContextType>(
  initialStateViewport()
);

const MAXIMUM_VIEWPORT_MOBILE = 768;
const MAXIMUM_VIEWPORT_TABLET = 1024;

export const ViewportProvider = ({ children }: ViewportContextProps) => {
  const [viewport, setViewport] = useState<ViewportContextType>(
    initialStateViewport()
  );

  const handleResize = debounce(() => {
    const { innerWidth } = window;
    if (innerWidth <= MAXIMUM_VIEWPORT_MOBILE) {
      setViewport({ type: ViewportEnum.MOBILE });
    } else if (innerWidth <= MAXIMUM_VIEWPORT_TABLET) {
      setViewport({ type: ViewportEnum.TABLET });
    } else {
      setViewport({ type: ViewportEnum.DESKTOP });
    }
  }, 500);

  useEffect(() => {
    setViewport(initialStateViewport());

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ViewportContext.Provider value={{ type: viewport.type }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => useContext(ViewportContext);
