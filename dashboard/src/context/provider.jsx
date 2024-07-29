import DashboardContext from "./context";
import useStatesAndActions from "./useStatesandActions";
const DashboardProvider = ({ children }) => (
  <DashboardContext.Provider value={useStatesAndActions()}>
    {children}
  </DashboardContext.Provider>
);

export default DashboardProvider;
