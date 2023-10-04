import { FC, ReactElement } from "react";

const MaineProvider: FC<{ children: ReactElement }> = ({ children }) => (
  <>{children}</>
);

export default MaineProvider;
