import { createContext, ReactNode, useCallback, useState } from "react";

interface MenuHoverContextModel {
  hovered: string | null;
  handleHover: (item: string) => void;
  handleHoverOut: () => void;
  setIsVisibleMenu: (isVisible: boolean) => void;
  isVisibleMenu: boolean;
}

interface MenuHoverContextProviderProps {
  children: ReactNode;
}

const MenuHoverContext = createContext<MenuHoverContextModel | null>(null);

export function MenuHoverContextProvider({
  children,
}: MenuHoverContextProviderProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);

  const handleHover = useCallback((item: string) => {
    setHovered(item);
  }, []);

  const handleHoverOut = useCallback(() => {
    setHovered(null);
  }, []);

  return (
    <MenuHoverContext.Provider
      value={{
        hovered,
        handleHover,
        handleHoverOut,
        isVisibleMenu,
        setIsVisibleMenu,
      }}>
      {children}
    </MenuHoverContext.Provider>
  );
}

export default MenuHoverContext;
