import './App.css';
import './normal.css';

function App() {
  return (
    <div className="App">
      <aside className="leftmenu">
        <div className="left-menu-button">
          Clear
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-message">
            <div className="chat-message-center">
              <div className="avatar">
              </div>
              <div className="message">
                Prompt here
              </div>
            </div>
            <div className="chat-message chatgpt">
            <div className="chat-message-center">
              <div className="avatar chatgpt">
              </div>
              <div className="message">
                I am the answer
              </div>
            </div>
            </div>
        </div>
        </div>
        <div className="chat-input-holder">
          <input rows="1" className="chat-input-input" placeholder="Prompt anything here">

          </input>
        </div>
      </section>
    </div>
  );
}

export default App;
