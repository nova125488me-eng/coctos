// نسخه اولیه: بعداً این قسمت به API و Telegram Mini App متصل می‌شود.
const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}

function scrollToPlans() {
  document.getElementById("plans").scrollIntoView({behavior:"smooth"});
}

document.getElementById("accountBtn").addEventListener("click", () => {
  // TODO: اتصال به حساب کاربر، موجودی و اطلاعات ربات
  if (tg?.showPopup) {
    tg.showPopup({
      title: "CACTUS VPN",
      message: "پنل کاربری در نسخه بعدی به ربات تلگرام متصل می‌شود.",
      buttons: [{type:"ok"}]
    });
  } else {
    alert("پنل کاربری در نسخه بعدی به ربات تلگرام متصل می‌شود.");
  }
});

document.querySelectorAll(".plan-card button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("در نسخه نهایی، این دکمه مستقیماً به خرید و موجودی حساب در ربات متصل می‌شود.");
  });
});
