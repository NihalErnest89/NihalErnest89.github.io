import './HudOverlay.css';

export default function HudOverlay() {
  return (
    <div className="hud-overlay" aria-hidden="true">
      {/* Top-left corner */}
      <div className="hud-corner hud-corner--tl">
        <div className="hud-corner-bracket" />
        <div className="hud-corner-lines">
          <span className="hud-corner-line hud-corner-line--h" />
          <span className="hud-corner-line hud-corner-line--v" />
        </div>
        <div className="hud-corner-data">
          <span className="hud-corner-label">SOFTWARE ENGINEER</span>
        </div>
      </div>

      {/* Top-right corner */}
      <div className="hud-corner hud-corner--tr">
        <div className="hud-corner-bracket" />
        <div className="hud-corner-lines">
          <span className="hud-corner-line hud-corner-line--h" />
          <span className="hud-corner-line hud-corner-line--v" />
        </div>
        <div className="hud-corner-data hud-corner-data--right">
          <span className="hud-corner-label">NIHAL ERNEST</span>
        </div>
      </div>

      {/* Bottom-left corner */}
      <div className="hud-corner hud-corner--bl">
        <div className="hud-corner-bracket" />
        <div className="hud-corner-lines">
          <span className="hud-corner-line hud-corner-line--h" />
          <span className="hud-corner-line hud-corner-line--v" />
        </div>
        <div className="hud-corner-data">
          <span className="hud-corner-label">BAY AREA, CA · 37.3230°N 122.0455°W</span>
        </div>
      </div>

      {/* Bottom-right corner */}
      <div className="hud-corner hud-corner--br">
        <div className="hud-corner-bracket" />
        <div className="hud-corner-lines">
          <span className="hud-corner-line hud-corner-line--h" />
          <span className="hud-corner-line hud-corner-line--v" />
        </div>
        <div className="hud-corner-data hud-corner-data--right">
          <span className="hud-corner-label">M.S. COMPUTER SCIENCE · UCSC</span>
        </div>
      </div>

      {/* Scan line */}
      <div className="hud-scan-line" />
    </div>
  );
}
