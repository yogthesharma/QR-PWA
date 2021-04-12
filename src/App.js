import { useState } from "react";
import "./App.css";
import QrReader from "react-qr-reader";
var QRCode = require("qrcode.react");

function App() {
  const [scan, setScan] = useState(false);
  const [link, setLink] = useState("");

  const handleScan = (data) => {
    if (data !== null) alert(data);
  };
  const handleError = (err) => {
    console.error(err);
  };

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

      {/* qr reader */}
      <br />
      <br />

      <button onClick={() => setScan(!scan)}>
        {!scan ? "Start Scan" : "Stop Scan"}
      </button>
      {scan && (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          className="qrReader"
        />
      )}
    </section>
  );
}

export default App;
