import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ANIMATE_MS_NAME as ANIMATION_DURATION_TITLE } from "../constants/animationSettings";

interface AnimationContextModel {
  menuItemHovered: string | null;
  handleMenuItemHover: (item: string) => void;
  handleMenuItemHoverOut: () => void;
  setIsVisibleMenu: (isVisible: boolean) => void;
  isVisibleMenu: boolean;
  isTitleAnimationComplete: boolean;
}

interface AnimationContextProviderProps {
  children: ReactNode;
}

const AnimationContext = createContext<AnimationContextModel>({
  menuItemHovered: null,
  handleMenuItemHover: () => {},
  handleMenuItemHoverOut: () => {},
  isVisibleMenu: false,
  setIsVisibleMenu: () => {},
  isTitleAnimationComplete: false,
});

export function AnimationContextProvider({
  children,
}: AnimationContextProviderProps) {
  const [menuItemHovered, setMenuItemHovered] = useState<string | null>(null);
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);
  const [isTitleAnimationComplete, setIsTitleAnimationComplete] =
    useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTitleAnimationComplete(true);
    }, ANIMATION_DURATION_TITLE);

    return () => clearTimeout(timer);
  }, []);

  const handleMenuItemHover = useCallback((item: string) => {
    setMenuItemHovered(item);
  }, []);

  const handleMenuItemHoverOut = useCallback(() => {
    setMenuItemHovered(null);
  }, []);

  return (
    <AnimationContext.Provider
      value={{
        menuItemHovered,
        handleMenuItemHover,
        handleMenuItemHoverOut,
        isVisibleMenu,
        setIsVisibleMenu,
        isTitleAnimationComplete,
      }}>
      {children}
    </AnimationContext.Provider>
  );
}

export default AnimationContext;
