import { useRef } from "react";

export const useAutoFocus = () => {
  const ref = useRef([]);

  const bindRefByIndex = index => element => (ref.current[index] = element);

  const handleAutoFocus = (index, maxLength) => {
    const isLastIndex = index === ref.current.length - 1;
    const isValueMaxLength = ref.current[index].value.length === maxLength;

    if (!isLastIndex && isValueMaxLength) ref.current[index + 1].focus();
  };

  return {
    bindRefByIndex,
    handleAutoFocus,
  };
};
