export const handle = async ({ event, resolve }) => {
  event.locals.lang = event.request.headers
    .get("Accept-Language" || "")
    .split(",");
  return resolve(event);
};
