import {
  AriaAttributes,
  FC,
  HTMLAttributes,
} from "react";
// import cn from "classnames";
import { Color, Engine, Gearbox, Model } from "../../lib/datocms";
import cn from "../../utils/className";
import Button from "../button";
import styles from "./customizator.module.scss";

interface Props extends AriaAttributes, HTMLAttributes<Element> {
  part: Engine | Gearbox | Model | Color;
  onClick: VoidFunction;
  isActive: boolean;
  disabled?: boolean;
}

const PartButton: FC<Props> = ({
  part,
  onClick,
  isActive,
  disabled,
  children,
  ...passProps
}) => {
  let hex: string | null = null;
  if ("color" in part) {
    hex = part.color.hex;
  }
  const { name } = part;
  // const ref = useRef<HTMLButtonElement>(null);
  // useLayoutEffect(() => {
  //   if (hex) ref.current?.style.setProperty("--hex", hex);
  // }, [hex]);

  return (
    <Button
      // ref={ref}
      onClick={onClick}
      disabled={disabled}
      clearStyling={Boolean(hex)}
      // style={{ background: hex }}
      className={cn(styles["part-btn"], {
        "btn--active": isActive && !hex,
        [styles["part-btn--active"]]: isActive,
        [styles["part-btn--color"]]: hex,
      })}
      {...passProps}
    >
      {/* {hex ? "" : name} */}
      {children !== undefined ? children : name}
    </Button>
  );
  // }
  // return null;
};

export default PartButton;
