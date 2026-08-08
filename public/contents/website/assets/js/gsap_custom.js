// Lenis ইনিশিয়ালাইজেশন
const lenis = new Lenis({
  duration: 1.5, // স্ক্রল স্পিড (০ এর বেশি হতে হবে)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // স্মুথ ইজিং ফাংশন
  smoothWheel: true,
  wheelMultiplier: 1, 
  touchMultiplier: 2,
  infinite: false,
});

// ScrollTrigger এর সাথে Lenis কানেক্ট করা
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);



/**
 * ======================= PREMIUM GSAP PARALLAX =====================
 */
gsap.utils.toArray('.parallax').forEach((el) => {
  const speed = parseFloat(el.dataset.speed) || 1; // Default speed 1

  gsap.fromTo(el, 
    { 
      y: (speed * 50) // শুরু হবে একটু নিচ থেকে
    }, 
    {
      y: -(speed * 100), // শেষ হবে উপরে গিয়ে
      ease: "none", // প্যারাল্যাক্সে ইজিং "none" রাখলে স্ক্রলের সাথে পারফেক্ট সিঙ্ক হয়
      scrollTrigger: {
        trigger: el,
        start: "top bottom", // যখন এলিমেন্টের মাথা স্ক্রিনের নিচে আসবে
        end: "bottom top",   // যখন এলিমেন্টের তলা স্ক্রিনের উপরে চলে যাবে
        scrub: 1.5,          // 'true' এর বদলে 1.5 দিলে স্ক্রল থামানোর পর এলিমেন্টটি খুব স্মুথলি থামবে
        invalidateOnRefresh: true // উইন্ডো রিসাইজ করলে ক্যালকুলেশন ঠিক রাখবে
      }
    }
  );
});


const snakeRoot = document.querySelector(".snake-icon-root");
const ballBox = document.querySelector(".ball-3d-box");

if (snakeRoot) {
    // ১. সাপের মতো স্মুথ টাইমলাইন (কাঁপুনি রোধের জন্য)
    // আমরা সরাসরি x পজিশনকে টাইমলাইনে ভাগ করে দিচ্ছি
    const snakeTL = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 2, // ২ দিলে মুভমেন্ট অনেক লাক্সারি এবং স্মুথ হয়
            invalidateOnRefresh: true
        }
    });

    // ১০টি ধাপে ঢেউ তৈরি করা (আঁকাবাঁকা মুভমেন্ট)
    for (let i = 0; i <= 10; i++) {
        snakeTL.to(snakeRoot, {
            x: i % 2 === 0 ? 350 : -350, // ডানে ৩৫০, বামে ৩৫০
            rotationZ: i % 2 === 0 ? 35 : -35, // মুভমেন্টের দিকে কাত হওয়া
            duration: 1,
            ease: "sine.inOut" // এটি কাঁপুনি বা জার্কিং বন্ধ করে
        });
    }

    // ২. ফ্লোটিং ইফেক্ট (আইকনটি সবসময় হালকা বাতাসে ভাসবে)
    gsap.to(snakeRoot, {
        y: "+=15",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}

/**
 * ৩. ৩ডি বলের মাউস ইন্টারঅ্যাকশন
 */
if (ballBox) {
    ballBox.addEventListener("mousemove", (e) => {
        const rect = ballBox.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(ballBox, {
            rotationY: x * 110,
            rotationX: -y * 110,
            scale: 1.1,
            // ডাইনামিক শ্যাডো (প্রিমিয়াম টাচ)
            boxShadow: `${-x * 40}px ${-y * 40}px 60px rgba(0,0,0,0.4)`,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto"
        });
    });

    ballBox.addEventListener("mouseleave", () => {
        gsap.to(ballBox, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            duration: 1.2,
            ease: "elastic.out(1, 0.3)"
        });
    });
}

// উইন্ডো রিসাইজ করলে ক্যালকুলেশন আপডেট করা
window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});








//******************************************** */
//=======================  mouse cursor pointer animation 
window.addEventListener("click", (e) => {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    document.getElementById("cursor-ripple-container").appendChild(ripple);

    // Ripple position set kora
    gsap.set(ripple, {
        left: e.clientX,
        top: e.clientY,
        width: 0,
        height: 0,
        opacity: 1
    });

    // Wave animation
    gsap.to(ripple, {
        width: 100,
        height: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => ripple.remove() // Kaaj shesh hole delete
    });
});






