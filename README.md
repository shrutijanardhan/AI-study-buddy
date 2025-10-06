📚 AI Study Buddy

An AI-powered study guide that helps you plan your learning journey.  
Enter a topic and get a personalized, structured study plan with key subtopics, order, and mini projects.

Features
- Generates AI study plans using GPT-4o-mini  
- Simple UI (HTML + CSS + JS)  
- Secure backend (serverless function) — API key is safe  
- Hosted on [Vercel](https://vercel.com)

Tech Stack
- Frontend: HTML, CSS, JavaScript  
- Backend: Serverless API (Vercel)  
- AI Model: OpenAI GPT-4o-mini  

Setup

1. Clone the repo
git clone https://github.com/yourusername/ai-study-buddy.git
cd ai-study-buddy

2.OPENAI_API_KEY = your_api_key_here

3.Install Vercel CLI if not installed:
npm i -g vercel
vercel login
vercel
Then deploy:
vercel --prod
