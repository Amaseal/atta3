export const load = async ({ params }) => {
  const categoryData = await fetch(
    `http://127.0.0.1:1337/api/categories?locale=${params.lang}&filters[$or][0][slug]=${params.slug}&filters[$or][1][localizations][slug]=${params.slug}&populate=deep`
  );
  const category = await categoryData.json();
  console.log("Ŗerun", { params }, { category });

  return {
    category: category.data[0],
  };
};
