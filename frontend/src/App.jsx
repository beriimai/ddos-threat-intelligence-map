
import { useState } from "react";
import Globe3D from "./components/ui/3d-globe";
import "./App.css";

const demoThreats = [
  { ip: "198.51.100.24", country: "United States", severity: "HIGH" },
  { ip: "203.0.113.17", country: "Germany", severity: "MEDIUM" },
  { ip: "192.0.2.81", country: "Singapore", severity: "HIGH" },
  { ip: "198.51.100.92", country: "Japan", severity: "LOW" },
];

function App() {
  const [selectedThreat, setSelectedThreat] = useState(null);

  return (
    <main className="dashboard">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">⌁</div>
          <div>
            <h1>AEGIS<span> / THREAT INTELLIGENCE</span></h1>
            <p>GLOBAL NETWORK MONITOR</p>
          </div>
        </div>

        <div className="system-status">
          <span className="status-dot" />
          DEMO MODE
        </div>
      </header>

      <section className="overview">
        <div>
          <p className="eyebrow">SECURITY OPERATIONS CENTER</p>
          <h2>Global Threat Map</h2>
          <p className="subtitle">
            Explore the global threat landscape from one place.
          </p>
        </div>
        <div className="demo-label">SIMULATED DATA · NOT LIVE ATTACKS</div>
      </section>

      <section className="stats-grid">
        <article className="stat-card">
          <p>MONITORED INDICATORS</p>
          <strong>1,284</strong>
          <span>Demo metric</span>
        </article>
        <article className="stat-card">
          <p>HIGH-RISK INDICATORS</p>
          <strong className="red-text">24</strong>
          <span>Demo metric</span>
        </article>
        <article className="stat-card">
          <p>COUNTRIES REPRESENTED</p>
          <strong>38</strong>
          <span>Demo metric</span>
        </article>
        <article className="stat-card">
          <p>FEED CONNECTION</p>
          <strong className="amber-text">OFFLINE</strong>
          <span>No external feeds connected</span>
        </article>
      </section>

      <section className="main-grid">
        <article className="panel globe-panel">
          <div className="panel-heading">
            <div>
              <h3>Global Activity</h3>
              <p>Three-dimensional geographic view</p>
            </div>
            <span className="panel-tag">3D GLOBE</span>
          </div>

          <div className="globe-stage">
            <Globe3D
              markers={[]}
              config={{}}
              className="threat-globe"
              onMarkerClick={(marker) => setSelectedThreat(marker)}
            />
            <div className="globe-caption">
              <span>LATITUDE / LONGITUDE</span>
              <span>MARKERS NOT ADDED YET</span>
            </div>
          </div>

          <div className="legend">
            <span><i className="legend-dot high" /> High risk</span>
            <span><i className="legend-dot medium" /> Medium risk</span>
            <span><i className="legend-dot low" /> Low risk</span>
          </div>
        </article>

        <article className="panel threat-panel">
          <div className="panel-heading">
            <div>
              <h3>Threat Indicators</h3>
              <p>Illustrative sample records</p>
            </div>
            <span className="count-badge">{demoThreats.length}</span>
          </div>

          <div className="threat-list">
            {demoThreats.map((threat) => (
              <button
                className={`threat-row ${
                  selectedThreat?.ip === threat.ip ? "selected" : ""
                }`}
                key={threat.ip}
                onClick={() => setSelectedThreat(threat)}
              >
                <span className={`severity-icon ${threat.severity.toLowerCase()}`}>
                  ●
                </span>
                <span className="threat-info">
                  <strong>{threat.ip}</strong>
                  <small>{threat.country}</small>
                </span>
                <span className={`severity ${threat.severity.toLowerCase()}`}>
                  {threat.severity}
                </span>
              </button>
            ))}
          </div>

          <div className="selected-details">
            <p className="eyebrow">SELECTED INDICATOR</p>
            {selectedThreat ? (
              <>
                <strong>{selectedThreat.ip}</strong>
                <p>Location: {selectedThreat.country}</p>
                <p>Demo severity: {selectedThreat.severity}</p>
              </>
            ) : (
              <p>Select an indicator above to inspect its sample details.</p>
            )}
          </div>

          <p className="disclaimer">
            These IP addresses are documentation examples reserved for illustrative
            use. They do not represent confirmed malicious hosts.
          </p>
        </article>
      </section>

      <footer className="footer">
        <span>AEGIS THREAT INTELLIGENCE</span>
        <span>PROTOTYPE BUILD · EXTERNAL FEEDS NOT CONNECTED</span>
      </footer>
    </main>
  );
}

export default App;
