export function isRouteActivate(currentUrl: string, urlsForCheck: string[]): boolean {
  let routeString = currentUrl;

  if (routeString.indexOf('?') !== -1) {
    routeString = routeString.split('?')[0];
  }

  const routeArray = routeString.split('/');

  return urlsForCheck?.every((element) => routeArray.includes(element));
}
