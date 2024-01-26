import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import { ChatContextProvider } from "./components/chat/ChatContext";
ReactDOM.render(
    <ChatContextProvider>
        <App />
    </ChatContextProvider>,
    document.querySelector('#root'))
