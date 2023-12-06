import { useContext } from "react";
import { FIRST_NAME, LAST_NAME } from "../../constants/name";
import AnimationContext from "../../store/animationContext";
import AnimatedText from "../animatedText";

export default function MainTitle() {
  const animationCtx = useContext(AnimationContext);

  const hovered = animationCtx.menuItemHovered;
  const isTitleAnimationComplete = animationCtx.isTitleAnimationComplete;

  return (
    <div className="xl:text-ResXl lg:text-ResLg md:text-ResMd sm:text-ResSm min-[525px]:text-ResXsm min-[425px]:text-ResXXsm min-[325px]:text-ResXXXsm text-TitleResXXsm font-bold tracking-normal text-center">
      {!isTitleAnimationComplete && (
        <div id="name" className="leading-none">
          <AnimatedText name={FIRST_NAME} isTitle />
          <AnimatedText name={LAST_NAME} isTitle />
        </div>
      )}

      {hovered && (
        <div id="hovered-menu">
          <AnimatedText name={hovered} />
        </div>
      )}
    </div>
  );
}
