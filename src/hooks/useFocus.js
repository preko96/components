import { useState } from "react";

export default function useFocus() {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  return { focused, onFocus, onBlur };
}
