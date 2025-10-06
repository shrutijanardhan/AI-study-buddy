export default async function handler(req, res) {
  try {
    // In Vercel's environment, need to await req.json() properly
    const body = (await req.json) ? await req.json() : req.body;
    const topic = body?.topic;

    if (!topic) {
      return res.status(400).json({ error: "Missing topic" });
    }

    const prompt = `
You are an AI study guide. The user wants to study "${topic}".
Create a clear, actionable study plan with 3 sections:
1. Key subtopics to learn
2. Recommended order
3. Practical exercises or mini projects
Keep it short and structured.
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();

    // Debugging logs
    console.log("OpenAI response:", data);

    const message = data?.choices?.[0]?.message?.content;
    if (!message) {
      return res.status(500).json({ error: "No message from OpenAI", data });
    }

    return res.status(200).json({ content: message });
  } catch (err) {
    console.error("Server Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
