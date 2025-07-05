export default async function handler(req, res) {
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

  const data = await response.json();
  res.status(200).json(data);
}
