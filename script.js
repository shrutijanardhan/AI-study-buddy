document.getElementById("generateBtn").addEventListener("click", async () => {
  const topic = document.getElementById("topic").value.trim();
  const output = document.getElementById("output");

  if (!topic) {
    output.innerText = "Please enter a topic.";
    return;
  }

  output.innerText = "⏳ Generating study plan...";

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic }),
    });

    const data = await response.json();

    if (data.content) {
      output.innerText = data.content;
    } else {
      output.innerText = "⚠️ No response. Try again.";
    }
  } catch (err) {
    output.innerText = "⚠️ Error fetching study plan.";
    console.error(err);
  }
});
