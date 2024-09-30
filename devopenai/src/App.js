import './App.css';
import ChatMessage from './components/ChatMessage';
import './normal.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: "Start here"
  }, {
    user: "me",
    message: "Start now"
  }]);

  async function handleSubmit(e) {
    e.preventDefault();
    setChatLog([...chatLog, { user: "me", message: `${input}`}])
    setInput("");
  }


  return (
    <div className="App">
      <aside className="leftmenu">
        <div className="left-menu-button">
          Clear
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <form onSubmit={handleSubmit}>
        <div className="chat-input-holder">
          <input 
            rows="1"
             className="chat-input-input" 
             placeholder="Prompt anything here"
             value={input}
            onChange={(e) => setInput(e.target.value)}
          >

          </input>
        </div>
        </form>
      </section>
    </div>
  );
}

// const ChatMessage = ({ message }) => {
//   return (
//     <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
//       <div className="chat-message-center">
//         <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
        
//         </div>
//         <div className="message">
//           {message.message}
//        </div>
//       </div>
//     </div>
//   )
// }

export default App;
