# Deployment & Monetization Guide

## Web App to Vercel
1. vercel.com → Import GitHub repo
2. Framework: Other / Static
3. Root directory: web-app
4. Deploy

## Add Real AI
In script.js, replace mock with:
```js
const res = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_KEY || 'your-key'}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4o-mini',
    messages: [{role: 'user', content: `Repurpose this content into professional LinkedIn post, concise X thread, Instagram caption, and email newsletter:\n\n${input}` }]
  })
});
const data = await res.json();
const output = data.choices[0].message.content;
// Split and display
```

## Stripe Integration
- Create product on Stripe
- Use Stripe Checkout hosted page
- Redirect after payment to unlock unlimited

## Chrome Extension
1. Chrome → Extensions → Developer mode → Load unpacked → select chrome-extension folder
2. For store: Package and upload to Chrome Web Store ($5 one-time)
3. Monetize via backend subscription or in-app purchase link

## Growth
- SEO: Add blog pages with AI-generated content on niches
- Post on X, Reddit, IndieHackers
- Affiliate links in footer

AI agents can auto-post, reply to comments, generate new variations.
