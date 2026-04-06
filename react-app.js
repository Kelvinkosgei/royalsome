const { createElement: e, useState } = React;
const { createRoot } = ReactDOM;

function AchievementsGallery() {
  const [achievements] = useState([
    {
      id: 1,
      title: "Top Service Award",
      description: "Recognized for outstanding client support and claims guidance.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 2,
      title: "Growth Milestone",
      description: "Company growth driven by trusted advice and strong client relationships.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 3,
      title: "Community Impact",
      description: "Supporting local businesses and families with accessible coverage solutions.",
      image: "https://images.unsplash.com/photo-1496284045406-d3e0b918d62d?auto=format&fit=crop&w=900&q=80"
    }
  ]);

  return e(
    "section",
    { className: "section-pad muted-bg" },
    e(
      "div",
      { className: "container" },
      e("p", { className: "eyebrow center" }, "Achievements"),
      e("h2", { className: "gradient-text center" }, "Company achievements and milestones"),
      e(
        "div",
        { className: "achievements-grid" },
        achievements.map((item) =>
          e(
            "article",
            { key: item.id, className: "achievement-card" },
            e("img", { src: item.image, alt: item.title }),
            e(
              "div",
              { className: "achievement-body" },
              e("h3", null, item.title),
              e("p", null, item.description)
            )
          )
        )
      )
    )
  );
}

function mountReactApp() {
  const achievementsRoot = document.getElementById("achievements-root");
  if (achievementsRoot && ReactDOM && React) {
    createRoot(achievementsRoot).render(e(AchievementsGallery));
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountReactApp);
} else {
  mountReactApp();
}
