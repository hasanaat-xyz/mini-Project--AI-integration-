import React, { useState } from "react";
import axios from "axios";

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");

  const askGemini = async () => {
    try {
      const res = await axios.post("http://localhost:5000/ask", { prompt });
      setReply(res.data.reply);
    } catch (err) {
      setReply("❌ Error: " + (err.response?.data?.error?.message || err.message));
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>💬 Gemini AI Web App</h1>
      <textarea
        rows="4"
        cols="50"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask Gemini something..."
      />
      <br />
      <button onClick={askGemini}>Ask</button>
      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        <strong>🤖 Reply:</strong>
        <p>{reply}</p>
      </div>
    </div>
  );
}

export default App;
