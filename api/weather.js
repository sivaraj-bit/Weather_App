
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  const city =
    typeof req.query.city === "string"
      ? req.query.city.trim()
      : "";

  if (!city) {
    return res.status(400).json({
      message: "Please enter a city name.",
    });
  }

  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    console.error("WEATHER_API_KEY is not configured.");

    return res.status(500).json({
      message: "Weather service is not configured.",
    });
  }

  try {
    const url = new URL(
      "https://api.openweathermap.org/data/2.5/weather"
    );

    url.searchParams.set("q", city);
    url.searchParams.set("appid", apiKey);
    url.searchParams.set("units", "metric");

    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        message:
          response.status === 404
            ? "City not found. Please try another city."
            : response.status === 401
              ? "Weather API key is invalid or not activated."
              : "Unable to fetch weather. Please try again.",
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Weather request failed:", error.message);

    return res.status(502).json({
      message: "Unable to connect to the weather service.",
    });
  }
}
