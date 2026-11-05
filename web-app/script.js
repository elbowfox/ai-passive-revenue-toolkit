document.getElementById('generate').addEventListener('click', generatePosts);

function generatePosts() {
  const input = document.getElementById('input').value.trim();
  if (!input) {
    alert('Please paste some content first.');
    return;
  }

  // MOCK GENERATION - Replace with real AI API call (OpenAI/Anthropic)
  // Example real call structure:
  /*
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer YOUR_API_KEY', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: `Repurpose this into LinkedIn, X, Instagram, Email posts:\n\n${input}` }]
    })
  });
  const data = await response.json();
  // parse and display
  */

  // Demo mock based on input length/keywords
  const summary = input.substring(0, 150) + '...';
  document.getElementById('li-text').innerText = `Professional insight: ${summary}\n\nKey takeaways:\n• Point 1 from content\n• Point 2\n• Actionable tip\n\n#AI #ContentMarketing #Productivity`;
  document.getElementById('tw-text').innerText = `Thread: ${summary.split(' ').slice(0, 20).join(' ')}...\n\n1/ Main idea\n2/ Why it matters\n3/ How to apply\n\nWhat do you think? 🚀`;
  document.getElementById('ig-text').innerText = `Carousel idea: ${summary}\n\nSlide 1: Hook\nSlide 2-4: Tips\nSlide 5: CTA\n\n#contentcreator #aitools`;
  document.getElementById('em-text').innerText = `Subject: Quick insights from recent content\n\nHi [Name],\n\nHere's a distilled version:\n${summary}\n\nFull breakdown + action steps inside.\n\nBest,\nYour Name`;

  document.getElementById('output').style.display = 'block';
}

// Hide output initially
document.getElementById('output').style.display = 'none';
