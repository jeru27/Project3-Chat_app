import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';


const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="b2c282c7-daa7-4304-adf5-65e412bfc306"
            userName="jelenar"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;
