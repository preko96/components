import { useState } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);
  return { hovered, onMouseEnter, onMouseLeave };
}
