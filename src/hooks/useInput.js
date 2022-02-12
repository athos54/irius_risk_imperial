import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const clear = () => {
    onChange({ target: { value: "" } });
  };
  return {
    value,
    onChange,
    clear,
  };
};

export default useInput;
