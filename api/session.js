export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.openai.com/v1/real-time-session", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-realtime-preview",
        modalities: ["audio", "text"],
        instructions: "You provide mental health assistance, companionship, and advice.",
      }),
    });

    const text = await response.text(); // get full raw response (success or error)
    console.log("🔄 OpenAI Response Text:", text);

    if (!response.ok) {
      console.error("❌ OpenAI Error:", text);
      return res.status(response.status).json({ error: text });
    }

    const data = JSON.parse(text);
    res.status(200).json(data);
  } catch (err) {
    console.error("💥 Unexpected Error in /api/session:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
