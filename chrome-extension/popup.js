document.getElementById('summarize').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: getPageText
    }, (results) => {
      const text = results[0].result.substring(0, 2000);
      document.getElementById('result').innerText = 'Summary (demo): ' + text.substring(0, 300) + '...\n\n[Replace with AI API call for real summary]';
    });
  });
});

document.getElementById('prompt').addEventListener('click', () => {
  document.getElementById('result').innerText = 'AI Prompt generated from page:\n"Analyze this content and extract 5 key insights, then suggest 3 content ideas."';
});

function getPageText() {
  return document.body.innerText;
}
