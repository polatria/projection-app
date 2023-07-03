export default function Statusbar() {
  return (
    <footer className="statusbar">
      <div className="statusbar-left">
        <div className="badge badge-success">1</div>
        <div className="badge">2</div>
        <div className="badge badge-warning">3</div>
        <p className="text-based-content">This is a status bar.</p>
      </div>
      <div className="statusbar-right">
        <div className="badge badge-primary">1</div>
        <div className="badge badge-secondary">2</div>
        <div className="badge">3</div>
      </div>
    </footer>
  );
}