export default function Loader({ fullScreen = false }) {
  if (fullScreen) {
    return (
      <div className="loader-fullscreen">
        <div className="loader-spinner" />
      </div>
    );
  }
  return <div className="loader-spinner" />;
}
