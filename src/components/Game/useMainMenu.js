import { useState, useCallback } from "react";

export const useMainMenu = () => {
  const [mainMenu, setMainMenu] = useState(true);

  const hideMainMenu = useCallback(() => {
    setMainMenu(false);
  }, []);

  return [mainMenu, setMainMenu, hideMainMenu];
};