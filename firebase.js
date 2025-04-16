async function initApp() {
  const streakInfo = document.getElementById("streak-info");
  const claimBtn = document.getElementById("claim-btn");

  const tg = window.Telegram?.WebApp;
  if (!tg || !tg.initDataUnsafe || !tg.initDataUnsafe.user) {
    console.log("Telegram Web App initialization failed", tg);
    streakInfo.innerText = "Please open this app inside Telegram to use the streak feature.";
    claimBtn.style.display = "none";
    return;
  }

  console.log("Telegram Web App initialized successfully", tg.initDataUnsafe.user);
  tg.ready();

  // Proceed with the rest of the logic...
}
