
import PropTypes from "prop-types"; // Import PropTypes
import { toPng } from "html-to-image"; // Screenshot library
import { toast } from "react-toastify";

const ShareDashboard = ({ dashboardRef }) => {
  const handleShare = async () => {
    if (!dashboardRef.current) {
      toast.error("No dashboard found to capture.");
      return;
    }

    try {
      // Capture the image as a PNG
      const dataUrl = await toPng(dashboardRef.current, { quality: 1.0 });

      // Create a downloadable link for the image
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "dashboard-screenshot.png";
      link.click();

      // Optional: Share using the browser's share API
      const blob = await fetch(dataUrl).then((res) => res.blob());
      const file = new File([blob], "dashboard.png", { type: "image/png" });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Weather Dashboard",
          text: "Check out this weather dashboard!",
        });
      } else {
        toast.info("Screenshot downloaded. Share it manually.");
      }
    } catch (error) {
      console.error("Error capturing or sharing dashboard:", error);
      toast.error("Failed to capture and share the dashboard.");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
    >
      Share Dashboard
    </button>
  );
};

// Define PropTypes for the component
ShareDashboard.propTypes = {
  dashboardRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element), // Validate that it's a DOM element reference
  }).isRequired,
};

export default ShareDashboard;
