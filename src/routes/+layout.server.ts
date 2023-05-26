import type { Category, HomePage } from "../types/types";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({
  locals: { locale, LL },
  params,
}) => {
  const homepageData = await fetch(
    `http://127.0.0.1:1337/api/homepage?locale=${params.lang}&populate=deep,4`
  );

  const categoryData = await fetch(
    `http://127.0.0.1:1337/api/categories?locale=${params.lang}&populate=deep`
  );
  const categories = await categoryData.json();
  const homePage = await homepageData.json();

  return {
    locale,
    categories: categories.data as Category[],
    homePage: homePage.data as HomePage,
  };
};
