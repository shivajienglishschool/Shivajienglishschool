document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     1. INJECT GLOBALS (Settings, Drawer, AI)
     ========================================================= */
  const globalHTML = `
    <!-- Mobile Side Drawer -->
    <div id="mobileDrawer" class="mobile-drawer">
      <button class="close-drawer" onclick="toggleDrawer()"><i class="fa-solid fa-xmark"></i></button>
      <a href="home.html" class="drawer-link"><i class="fa-solid fa-house"></i> Home</a>
      <a href="academics.html" class="drawer-link"><i class="fa-solid fa-book"></i> Academics</a>
      <a href="toppers.html" class="drawer-link"><i class="fa-solid fa-trophy"></i> Toppers</a>
      <a href="gallery.html" class="drawer-link"><i class="fa-solid fa-images"></i> Gallery</a>
      <a href="events.html" class="drawer-link"><i class="fa-solid fa-calendar"></i> Events</a>
      <a href="tour.html" class="drawer-link"><i class="fa-solid fa-video"></i> Campus Tour</a>
      <a href="contact.html" class="drawer-link"><i class="fa-solid fa-envelope"></i> Contact</a>
      <a href="index.html" class="drawer-link" style="color:#ef4444; border:none; margin-top:20px;"><i class="fa-solid fa-right-from-bracket" style="color:#ef4444;"></i> Logout</a>
    </div>

    <!-- Settings Modal -->
    <div class="settings-modal" id="settingsModal">
      <div class="settings-content">
        <div class="settings-head">
          <h3><i class="fa-solid fa-sliders"></i> Preferences & Settings</h3>
          <button style="background:none;border:none;font-size:20px;cursor:pointer;" onclick="toggleSettings()"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="setting-row">
          <label><i class="fa-solid fa-language"></i> Language / भाषा</label>
          <p>Switch entire website between English and Marathi</p>
          <div class="setting-options">
            <button class="set-btn active">English</button>
            <button class="set-btn">मराठी</button>
          </div>
        </div>
        <div class="setting-row">
          <label><i class="fa-solid fa-moon"></i> Dark Mode / नाईट मोड</label>
          <p>Comfortable night reading palette</p>
          <div class="setting-options">
            <button class="set-btn" id="darkModeToggle" onclick="toggleDarkMode()"><i class="fa-solid fa-circle-half-stroke"></i> Toggle Dark Mode</button>
          </div>
        </div>
        <div class="settings-footer">
          <button class="set-btn"><i class="fa-solid fa-rotate-left"></i> Reset</button>
          <button class="set-btn active" onclick="toggleSettings()"><i class="fa-solid fa-check"></i> Done</button>
        </div>
      </div>
    </div>

    <!-- Floating AI Toggle Button -->
    <button id="aiToggleBtn" style="position: fixed; bottom: 25px; right: 25px; background: var(--accent); color: var(--primary-dark); border: none; border-radius: 50px; padding: 14px 24px; font-weight: 800; font-size: 15px; cursor: pointer; box-shadow: 0 8px 20px rgba(217, 119, 6, 0.4); z-index: 1999;"><i class="fa-solid fa-robot"></i> Ask AI</button>
  `;
  
  document.body.insertAdjacentHTML('beforeend', globalHTML);

  // Global Logic Handlers
  window.toggleDrawer = function() {
    const drawer = document.getElementById('mobileDrawer');
    drawer.classList.toggle('open');
  };

  window.toggleSettings = function() {
    const modal = document.getElementById('settingsModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
  };

  window.toggleDarkMode = function() {
    document.documentElement.classList.toggle('dark-theme');
    const isDark = document.documentElement.classList.contains('dark-theme');
    document.getElementById('darkModeToggle').classList.toggle('active', isDark);
  };
});
