import { STRAPI } from "$env/static/private";

export async function GET({ params }) {
  const data = await fetch(`${STRAPI}/uploads/${params.file}`);
  const image = await data.blob();
  return new Response(image);
}
