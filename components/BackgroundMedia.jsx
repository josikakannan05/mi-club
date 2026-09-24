export default function BackgroundMedia({ imgSrc = "/images/kt1.jpg", overlayBg = "rgba(255, 255, 255, 0.12)" }) {
  return (
    <div className="fixed inset-0 w-full h-screen -z-10 overflow-hidden pointer-events-none">
      <img
        src={imgSrc}
        alt="Background"
        className="w-full h-full object-cover object-center block"
      />
      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{ backgroundColor: overlayBg }}
      />
    </div>
  );
}
