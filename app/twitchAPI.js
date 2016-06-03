export const protocol = "https";
export const apiURI = "api.twitch.tv/kraken";

export function buildUrl(protocol,uri) {
  return protocol + '://' + uri + '/' + Array.prototype.slice.apply(arguments, [2]).join('/');
}
