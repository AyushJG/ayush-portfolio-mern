import { useState } from "react";

const useStatesAndActions = () => {
  const [active, setActive] = useState("");

  const state = {
    active,
  };

  const actions = {
    setActive,
  };

  return [state, actions];
};

export default useStatesAndActions;
