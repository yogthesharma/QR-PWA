import { useState } from "react";
import "./App.css";
var QRCode = require("qrcode.react");

function App() {
  const [link, setLink] = useState("");

  return (
    <section className="App">
      <h2>QR Maker and Scannar</h2>
      <input
        placeholder="Paste Any Link Here??"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        style={{ padding: "0.5rem 1.5rem", borderRadius: "none" }}
      />
      <br />
      <br />
      <QRCode value={link || `https://www.littleseedsngo.org`} />
    </section>
  );
}

export default App;
