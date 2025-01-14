import "./styles.css";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";
import UseCustomHook from "./components/UseCustomHook";

import { Provider } from "./context/Context";
import List from "./components/UseContext/List";  
import Group from "./components/misc/Group";
import Input from "./components/UseContext/Input";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <UseState />

        <UseEffect />

        <UseRef />

        <Provider> 
          <Group>
            <Input />
            <List />
          </Group>
        </Provider>

        <UseReducer />

        <UseMemo />

        <UseCallback />

        <UseCustomHook />
      </div>
    </div>
  );
}
