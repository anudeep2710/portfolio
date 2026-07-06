const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));

function setHeaderState() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 18);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle?.addEventListener("click", () => {
    const isOpen = nav?.classList.toggle("is-open") || false;
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav?.classList.remove("is-open");
        navToggle?.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav?.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        navToggle?.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
    }
});

const sections = Array.from(document.querySelectorAll("main section[id]"));
const activeObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
        });
    },
    { rootMargin: "-45% 0px -48% 0px", threshold: 0 }
);

sections.forEach((section) => activeObserver.observe(section));

const canvas = document.getElementById("signal-canvas");
const ctx = canvas?.getContext("2d");
let width = 0;
let height = 0;
let nodes = [];
let rafId = null;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function resizeCanvas() {
    if (!canvas || !ctx) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.max(24, Math.min(72, Math.round(width / 22)));
    nodes = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: index % 7 === 0 ? 2.6 : 1.6,
        tone: index % 5
    }));
}

function drawSignalMap() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "rgba(246, 248, 244, 0.62)");
    gradient.addColorStop(1, "rgba(233, 239, 231, 0.86)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
            const b = nodes[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distance = Math.hypot(dx, dy);
            if (distance < 150) {
                ctx.strokeStyle = `rgba(29, 96, 77, ${0.12 * (1 - distance / 150)})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
        }
    }

    nodes.forEach((node) => {
        const colors = [
            "rgba(29, 96, 77, 0.78)",
            "rgba(184, 74, 50, 0.72)",
            "rgba(45, 93, 159, 0.66)",
            "rgba(201, 144, 47, 0.7)",
            "rgba(21, 24, 19, 0.52)"
        ];
        ctx.fillStyle = colors[node.tone];
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();

        if (!reducedMotion) {
            node.x += node.vx;
            node.y += node.vy;
            if (node.x < -20) node.x = width + 20;
            if (node.x > width + 20) node.x = -20;
            if (node.y < -20) node.y = height + 20;
            if (node.y > height + 20) node.y = -20;
        }
    });

    if (!reducedMotion) {
        rafId = window.requestAnimationFrame(drawSignalMap);
    }
}

if (canvas && ctx) {
    resizeCanvas();
    drawSignalMap();
    window.addEventListener("resize", () => {
        if (rafId) window.cancelAnimationFrame(rafId);
        resizeCanvas();
        drawSignalMap();
    });
}

console.log("Anudeep Batchu portfolio: recruiter-first evidence room.");
