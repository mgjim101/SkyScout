import { useEffect, useState, useRef } from "react";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import weatherService from "./services/weatherService ";
import ShareDashboard from "./components/ShareDashboard"; // Import the ShareDashboard component
import { ToastContainer, toast } from "react-toastify";
import { SignedIn, SignedOut, useClerk } from "@clerk/clerk-react"; // Import useClerk for sign-out
import Login from "./Login"; // Import your Login component
import "react-toastify/dist/ReactToastify.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App() {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const dashboardRef = useRef(null); // Ref for the dashboard
  const { signOut } = useClerk(); // Access Clerk's signOut function

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

    try {
      const data = await weatherService.getFormattedWeatherData({
        ...query,
        units,
      });
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      setWeather(data);
    } catch (error) {
      toast.error(`Failed to fetch weather data: ${error.message}`);
    }
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    return weather.temp <= threshold
      ? "from-cyan-600 to-blue-700"
      : "from-yellow-600 to-orange-700";
  };

  return (
    <>
      {/* Show the app only for signed-in users */}
      <SignedIn>
        <div
          ref={dashboardRef} // Attach ref to the dashboard container
          className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1>Welcome to SkyScout</h1>
            {/* Sign Out Button */}
            <button
              onClick={() => signOut()}
              style={{
                padding: "0.5rem 1rem",
                background: "#ff5555",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Sign Out
            </button>
          </div>
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} setUnits={setUnits} />
          {weather && (
            <>
              <TimeAndLocation weather={weather} />
              <TempAndDetails weather={weather} units={units} />
              <Forecast title="3 Hour Step Forecast" data={weather.hourly} />
              <Forecast title="Daily Forecast" data={weather.daily} />
            </>
          )}
          <ShareDashboard dashboardRef={dashboardRef} /> {/* Use the component */}
          <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
        </div>
      </SignedIn>

      {/* Show the login page for signed-out users */}
      <SignedOut>
        <Login /> {/* Replace this with your custom Login component or Clerk's SignIn */}
      </SignedOut>
    </>
  );
}

export default App;
