// تشغيل الأغنية، القلوب التفاعلية، والتمرير السلس للرسالة عند الضغط على زرار البداية
const startBtn = document.getElementById("startBtn");
if (startBtn) {
    startBtn.addEventListener("click", function() {
        const messageSection = document.getElementById("message");
        if (messageSection) {
            messageSection.scrollIntoView({
                behavior: "smooth"
            });
        }

        // تشغيل الموسيقى
        const bgMusic = document.getElementById("bgMusic");
        if (bgMusic) {
            bgMusic.play().catch(error => {
                console.log("المتصفح منع التشغيل التلقائي للصوت:", error);
            });
        }

        // تفجير قلوب فورية في الشاشة أول ما يدوس على الزرار!
        for (let i = 0; i < 20; i++) {
            setTimeout(createClickHeart, i * 100);
        }
    });
}

// دالة خاصة لعمل قلوب كثيرة عند الضغط
function createClickHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("floating-heart");

    // توزيع عشوائي في عرض الشاشة من مكان ما المستخدم ضغط
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// التفاعل السحري: إظهار الصور أوتوماتيكياً بالتدريج واحدة ورا التانية كل 3 ثواني
const triggerCard = document.getElementById("revealTriggerBtn");
const hiddenMemoriesBox = document.getElementById("hiddenMemoriesBox");

if (triggerCard && hiddenMemoriesBox) {
    triggerCard.addEventListener("click", function() {
        // إظهار الصندوق المخفي
        hiddenMemoriesBox.classList.add("show");

        // التمرير التلقائي برفق للصور الجديدة
        hiddenMemoriesBox.scrollIntoView({
            behavior: "smooth"
        });

        // تغيير نص الزرار بعد الضغط
        const titleElem = triggerCard.querySelector("h3");
        if (titleElem) {
            titleElem.innerHTML = "أم لارين الغالية ❤️ (تتفتح الذكريات ببطء...)";
        }

        // جلب جميع الكروت المخفية أوتوماتيكياً
        const animatedCards = hiddenMemoriesBox.querySelectorAll(".memory-card-animated");

        // حلقة تكرارية لظهور الصور بفارق 3 ثواني لكل صورة
        animatedCards.forEach((card, index) => {
            const delay = 300 + (index * 3000); // 3 ثواني بين كل صورة والأخرى

            setTimeout(() => {
                card.classList.add("visible");

                setTimeout(() => {
                    card.classList.add("show-text");
                }, 400);

            }, delay);
        });
    });
}

// دالة توليد القلوب المتحركة بشكل دوري في الخلفية
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "♡";
    heart.classList.add("floating-heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);