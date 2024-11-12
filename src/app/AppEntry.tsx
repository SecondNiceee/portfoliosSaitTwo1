
import "./styles/_index.scss";
import { AppRouter } from "./AppRouter";
import BaseProvider from "./providers/BaseProvider";


const AppEntry = () => {
  return (
    <BaseProvider>
      <AppRouter/>
    </BaseProvider>
  );
};

export default AppEntry;
