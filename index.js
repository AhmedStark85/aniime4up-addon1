
const { addonBuilder } = require("stremio-addon-sdk");

const builder = new addonBuilder({
  id: "org.aniime4up.stremio",
  version: "1.0.0",
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
  idPrefixes: ["tt"],
});

builder.defineCatalogHandler(({ type, id }) => {
  if (type === "series" && id === "aniime4up_all") {
    return Promise.resolve({
      metas: [
        {
          id: "tt1000001",
          type: "series",
          name: "Naruto Shippuden",
          poster: "https://anime4up.cam/wp-content/uploads/Naruto-Shippuden.jpg",
          background: "https://anime4up.cam/wp-content/uploads/Naruto-Shippuden.jpg"
        },
        {
          id: "tt1000002",
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
        title: "مشاهدة مباشرة",
        url: `https://anime4up.cam/anime/${id}/`
      }
    ]
  });
});

module.exports = builder.getInterface();
