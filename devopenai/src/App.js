import './App.css';
import ChatMessage from './components/ChatMessage';
import './normal.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);

  function clear() {
    setChatLog([]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let newLog = ([...chatLog, { user: "me", message: `${input}`}])
    setInput("");
    setChatLog(newLog);

    const messages = newLog.map((message) => message.message).join("\n")
    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages
      })
    });
    const data = await response.json();
    setChatLog([...newLog, { user: "gpt", message: `${data.message}`}])
    console.log(data.message);
  }


  return (
    <div className="App">
      <aside className="leftmenu">
        <div className="left-menu-button" onClick={clear}>
          Clear
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input 
              rows="1"
              className="chat-input-input" 
              placeholder="Prompt anything here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            >
          </input>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
