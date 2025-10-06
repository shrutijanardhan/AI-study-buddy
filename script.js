const API_KEY = "";
document.getElementById("generateBtn").addEventListener("click", async () => {
  const topic = document.getElementById("topic").value.trim();
  const output = document.getElementById("output");

  if (!topic) {
    output.innerText = "Please enter a topic.";
    return;
  }

  output.innerText = "⏳ Generating study plan...";

  const prompt = `
You are an AI study guide. The user wants to study "${topic}".
Create a clear, actionable study plan with 3 sections:
1. Key subtopics to learn
2. Recommended order
3. Practical exercises or mini projects
Keep it short and structured.
`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    output.innerText = data.choices[0].message.content;
  } catch (err) {
    output.innerText = "⚠️ Error fetching study plan. Check console.";
    console.error(err);
  }
});
