import { createContext, ReactNode, useCallback, useState } from "react";

interface AnimationContextModel {
  menuItemHovered: string | null;
  handleMenuItemHover: (item: string) => void;
  handleMenuItemHoverOut: () => void;
  setIsVisibleMenu: (isVisible: boolean) => void;
  isVisibleMenu: boolean;
}

interface AnimationContextProviderProps {
  children: ReactNode;
}

const AnimationContext = createContext<AnimationContextModel | null>(null);

export function AnimationContextProvider({
  children,
}: AnimationContextProviderProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);

  const handleHover = useCallback((item: string) => {
    setHovered(item);
  }, []);

  const handleHoverOut = useCallback(() => {
    setHovered(null);
  }, []);

  return (
    <AnimationContext.Provider
      value={{
        menuItemHovered: hovered,
        handleMenuItemHover: handleHover,
        handleMenuItemHoverOut: handleHoverOut,
        isVisibleMenu,
        setIsVisibleMenu,
      }}>
      {children}
    </AnimationContext.Provider>
  );
}

export default AnimationContext;
