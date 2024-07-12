import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SidebarContextProvider from "./contexts/SidebarContext";
import ChatContextProvider from "./contexts/ChatContext";
import LoginContextProvider from "./contexts/LoginContext";
import SubmitContextProvider from "./contexts/SubmitContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginContextProvider>
    <ChatContextProvider>
      <SubmitContextProvider>
        <SidebarContextProvider>
          <App />
        </SidebarContextProvider>
      </SubmitContextProvider>
    </ChatContextProvider>
  </LoginContextProvider>
);
