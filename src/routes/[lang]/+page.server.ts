import type { Gallery, Promos } from "../../types/types.js";

export const load = async ({ params }) => {
  const promoData = await fetch(
    `http://127.0.0.1:1337/api/promos?locale=${params.lang}&populate=deep`
  );
  const galleryData = await fetch(
    `http://127.0.0.1:1337/api/galleries?populate=deep`
  );
  const gallery = await galleryData.json();
  const promos = await promoData.json();
  return {
    promos: promos.data as Promos[],
    gallery: gallery.data[0] as Gallery,
  };
};
