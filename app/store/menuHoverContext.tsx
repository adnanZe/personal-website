import { createContext, ReactNode, useCallback, useState } from "react";

interface MenuHoverContextModel {
  hovered: string | null;
  handleHover: (item: string) => void;
  handleHoverOut: () => void;
}

interface MenuHoverContextProviderProps {
  children: ReactNode;
}

const MenuHoverContext = createContext<MenuHoverContextModel | null>(null);

export function MenuHoverContextProvider({
  children,
}: MenuHoverContextProviderProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleHover = useCallback((item: string) => {
    setHovered(item);
  }, []);

  const handleHoverOut = useCallback(() => {
    setHovered(null);
  }, []);

  return (
    <MenuHoverContext.Provider value={{ hovered, handleHover, handleHoverOut }}>
      {children}
    </MenuHoverContext.Provider>
  );
}

export default MenuHoverContext;
