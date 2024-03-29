import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ANIMATE_MS_NAME as ANIMATION_DURATION_TITLE,
  ANIMATE_MS_MENU as ANIMATION_DURATION_MENU,
  ANIMATE_MS_HOVER_MENU_DELAY as ANIMATION_DURATION_HOVER_MENU_DELAY,
  ANIMATE_MS_MENU_ITEMS_START as ANIMATION_DURATION_MENU_ITEMS_START,
} from "../_constants/animationSettings";

interface AnimationContextModel {
  menuItemHovered: string | null;
  handleMenuItemHover: (item: string) => void;
  handleMenuItemHoverOut: () => void;
  isVisibleMenu: boolean;
  isTitleAnimationComplete: boolean;
  isMenuItemFinishedAnimation: boolean;
}

interface AnimationContextProviderProps {
  children: ReactNode;
}

const AnimationContext = createContext<AnimationContextModel>({
  menuItemHovered: null,
  handleMenuItemHover: () => {},
  handleMenuItemHoverOut: () => {},
  isVisibleMenu: false,
  isTitleAnimationComplete: false,
  isMenuItemFinishedAnimation: false,
});

export function AnimationContextProvider({
  children,
}: AnimationContextProviderProps) {
  const [menuItemHovered, setMenuItemHovered] = useState<string | null>(null);
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);
  const [isTitleAnimationComplete, setIsTitleAnimationComplete] =
    useState<boolean>(false);
  const [isMenuItemFinishedAnimation, setIsMenuItemFinishedAnimation] =
    useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTitleAnimationComplete(true);
    }, ANIMATION_DURATION_TITLE);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isTitleAnimationComplete) return;
    setIsMenuItemFinishedAnimation(true);

    const timer = setTimeout(() => {
      setIsMenuItemFinishedAnimation(false);
    }, ANIMATION_DURATION_MENU_ITEMS_START);

    return () => clearTimeout(timer);
  }, [isTitleAnimationComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisibleMenu(true);
    }, ANIMATION_DURATION_MENU);

    return () => clearTimeout(timer);
  }, []);

  const handleMenuItemHover = useCallback((item: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setMenuItemHovered(item);
    }, ANIMATION_DURATION_HOVER_MENU_DELAY);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleMenuItemHoverOut = useCallback(() => {
    setMenuItemHovered(null);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  return (
    <AnimationContext.Provider
      value={{
        menuItemHovered,
        handleMenuItemHover,
        handleMenuItemHoverOut,
        isVisibleMenu,
        isTitleAnimationComplete,
        isMenuItemFinishedAnimation,
      }}>
      {children}
    </AnimationContext.Provider>
  );
}

export default AnimationContext;
