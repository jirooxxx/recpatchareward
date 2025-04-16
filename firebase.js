const tg = window.Telegram?.WebApp;
if (!tg || !tg.initDataUnsafe || !tg.initDataUnsafe.user) {
  streakInfo.innerText = "Please open this app inside Telegram to use the streak feature.";
  claimBtn.style.display = "none";
  return;
}
console.log("Telegram Web App initialized successfully", tg.initDataUnsafe.user);
