// script.js
// Master Interactive Logic for Shivaji English School & Jr. College

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     1. INJECT AI ASSISTANT GLOBALLY
     ========================================================= */
  const aiHTML = `
    <!-- AI Chat Window -->
    <div id="aiChatWindow" style="display: none; position: fixed; bottom: 85px; right: 20px; width: 350px; background: var(--bg-card); border-radius: 16px; box-shadow: 0 15px 35px rgba(0,0,0,0.2); border: 1px solid var(--border-color); z-index: 2000; flex-direction: column; overflow: hidden; font-family: var(--font-base);">
      
      <div style="background: var(--primary); color: white; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center;">
        <h4 style="color: white; margin: 0; font-family: var(--font-heading);"><i class="fa-solid fa-robot"></i> College AI Assistant</h4>
        <button id="aiCloseBtn" style="background: none; border: none; color: white; cursor: pointer; font-size: 18px;"><i class="fa-solid fa-xmark"></i></button>
      </div>
      
      <div id="aiChatMessages" style="height: 320px; padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; background: var(--bg-page);">
        <div style="background: #e2e8f0; color: #0f172a; padding: 12px; border-radius: 8px; border-bottom-left-radius: 0; align-self: flex-start; max-width: 85%; font-size: 14px;">
          Namaste! I am the Smart AI Assistant for Shivaji English School & Jr. College. Ask me about admissions, timings, or our campus!
        </div>
      </div>
      
      <div style="display: flex; border-top: 1px solid var(--border-color); padding: 12px; background: var(--bg-card);">
        <input type="text" id="aiUserInput" placeholder="Ask a question..." style="flex: 1; padding: 12px; border: 1px solid var(--border-color); border-radius: 8px; outline: none; font-family: var(--font-base); background: var(--bg-page); color: var(--text-main);">
        <button id="aiSendBtn" style="background: var(--accent); color: var(--primary-dark); border: none; padding: 0 18px; margin-left: 10px; border-radius: 8px; cursor: pointer; font-size: 16px; transition: 0.2s;"><i class="fa-solid fa-paper-plane"></i></button>
      </div>

    </div>

    <!-- Floating AI Toggle Button -->
    <button id="aiToggleBtn" style="position: fixed; bottom: 25px; right: 25px; background: var(--accent); color: var(--primary-dark); border: none; border-radius: 50px; padding: 14px 24px; font-weight: 800; font-size: 15px; font-family: var(--font-heading); cursor: pointer; box-shadow: 0 8px 20px rgba(217, 119, 6, 0.4); z-index: 1999; transition: 0.3s;">
      <i class="fa-solid fa-robot"></i> Ask AI
    </button>
  `;
  
  // Insert AI into the page
  document.body.insertAdjacentHTML('beforeend', aiHTML);


  /* =========================================================
     2. AI CHATBOT LOGIC
     ========================================================= */
  const aiToggleBtn = document.getElementById('aiToggleBtn');
  const aiCloseBtn = document.getElementById('aiCloseBtn');
  const aiChatWindow = document.getElementById('aiChatWindow');
  const aiSendBtn = document.getElementById('aiSendBtn');
  const aiUserInput = document.getElementById('aiUserInput');
  const aiChatMessages = document.getElementById('aiChatMessages');

  // Open/Close Chat
  aiToggleBtn.addEventListener('click', () => {
    aiChatWindow.style.display = aiChatWindow.style.display === 'none' ? 'flex' : 'none';
  });
  aiCloseBtn.addEventListener('click', () => aiChatWindow.style.display = 'none');

  // College Knowledge Base
  const schoolInfo = {
    admissions: "Admissions for 2026-27 are open for 5th to 12th standard (Science, Commerce, Arts, and IT).",
    timings: "Office hours are Monday to Saturday, 9:30 AM to 4:30 PM.",
    location: "We are located at Pandur Titha, Taluka Kudal, Sindhudurg, Maharashtra (PIN: 416812).",
    default: "I am programmed to assist with college information. Please contact the main office at +91 (02362) 224-8090 for specific details."
  };

  // Handle Messages
  function sendAiMessage() {
    const text = aiUserInput.value.trim();
    if (!text) return;
    
    // User Message Bubble
    aiChatMessages.innerHTML += `<div style="background: var(--primary); color: white; padding: 12px; border-radius: 8px; border-bottom-right-radius: 0; align-self: flex-end; max-width: 85%; font-size: 14px;">${text}</div>`;
    aiUserInput.value = '';
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;

    // AI Response Delay
    setTimeout(() => {
      const q = text.toLowerCase();
      let reply = schoolInfo.default;
      
      if (q.includes('admission') || q.includes('apply')) reply = `🎓 **Admissions:** ${schoolInfo.admissions}`;
      else if (q.includes('time') || q.includes('hours') || q.includes('open')) reply = `🕒 **Timings:** ${schoolInfo.timings}`;
      else if (q.includes('address') || q.includes('location') || q.includes('where')) reply = `📍 **Location:** ${schoolInfo.location}`;

      // AI Message Bubble
      aiChatMessages.innerHTML += `<div style="background: #e2e8f0; color: #0f172a; padding: 12px; border-radius: 8px; border-bottom-left-radius: 0; align-self: flex-start; max-width: 85%; font-size: 14px;">${reply}</div>`;
      aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    }, 600);
  }

  aiSendBtn.addEventListener('click', sendAiMessage);
  aiUserInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendAiMessage(); });

});
