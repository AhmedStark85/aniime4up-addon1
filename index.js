
const { addonBuilder } = require("stremio-addon-sdk");

const builder = new addonBuilder({
  id: "org.aniime4up.stremio",
  version: "1.0.1",
  name: "Aniime4up أنمي",
  description: "إضافة أنمي من موقع anime4up مترجمة للعربية",
  catalogs: [
    {
      type: "series",
      id: "aniime4up_all",
      name: "كل الأنميات",
      genres: ["أكشن", "شونن", "قوى خارقة", "رياضة", "مغامرات"]
    }
  ],
  resources: ["catalog", "stream"],
  types: ["series"],
  idPrefixes: ["anime4up"]
});

builder.defineCatalogHandler(({ type, id }) => {
  if (type === "series" && id === "aniime4up_all") {
    return Promise.resolve({
      metas: [
        {
          id: "naruto-shippuden",
          type: "series",
          name: "Naruto Shippuden",
          poster: "https://anime4up.cam/wp-content/uploads/Naruto-Shippuden.jpg",
          background: "https://anime4up.cam/wp-content/uploads/Naruto-Shippuden.jpg"
        },
        {
          id: "boku-no-hero-academia",
          type: "series",
          name: "My Hero Academia",
          poster: "https://anime4up.cam/wp-content/uploads/MyHero.jpg",
          background: "https://anime4up.cam/wp-content/uploads/MyHero.jpg"
        }
      ]
    });
  }

  return Promise.resolve({ metas: [] });
});

builder.defineStreamHandler(({ id }) => {
  return Promise.resolve({
    streams: [
      {
        title: "مشاهدة على anime4up",
        url: `https://anime4up.cam/anime/${id}/`
      }
    ]
  });
});

module.exports = builder.getInterface();
