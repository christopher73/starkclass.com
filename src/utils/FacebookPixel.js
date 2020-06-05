import ReactPixel from "react-facebook-pixel";

//const advancedMatching = { em: "some@email.com" }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
ReactPixel.init("1781204738686664", advancedMatching, options);

ReactPixel.pageView(); // For tracking page view
ReactPixel.track(event, data); // For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
ReactPixel.trackSingle("PixelId", event, data); // For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
ReactPixel.trackCustom(event, data); // For tracking custom events
ReactPixel.trackSingleCustom("PixelId", event, data); // For tracking custom events
