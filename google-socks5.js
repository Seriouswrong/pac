// Auto-generated PAC from FoxyProxy JSON rules (googlepattern.json)
// Proxy: SOCKS5 127.0.0.1:10808
// Matches are host-based and use shell-style wildcards (shExpMatch).
//
// Enhancements:
//  - For any pattern like "*.example.com", includes "example.com" too (root domain).
//  - Adds broad Google coverage (google.* and common Google properties).
//  - Adds Google ads/measurement domains so ad/tracking requests go through the proxy.
//
// FAIL-CLOSED CHANGE:
//  - For any matched host, we return ONLY the proxy (no "; DIRECT").
//    If the local proxy is down, those requests will fail instead of going direct.

var PROXY_ONLY = "SOCKS5 127.0.0.1:10808; SOCKS 127.0.0.1:10808";
var DIRECT = "DIRECT";

var PATTERNS = [
  "*.chatgpt.com",
  "chatgpt.com",
  "openai.com",
  "*.openai.com",
  "oaistatic.com",
  "*.oaistatic.com",
  "*.oaistatic.com",
  "*.featuregates.org",
  "featuregates.org",
  "statsigapi.net",
  "*statsigapi.net",
  "*.statsig.com",
  "statsig.com",
  "*.ifconfig.me",
  "ifconfig.me",
  "chatgpt.livekit.cloud",
  "livekit.cloud",
  "rum.browser-intake-datadoghq.com",
  "o33249.ingest.sentry.io", 
  "*.1e100.net",
  "*.2mdn.net",
  "*.ad.doubleclick.net",
  "*.adclick.g.doubleclick.net",
  "*.ads.google.com",
  "*.adservice.google.com",
  "*.analytics.google.com",
  "*.api.gfiber.com",
  "*.blogger.com",
  "*.blogspot.*",
  "*.csp.withgoogle.com",
  "*.doubleclick.net",
  "*.fiber.google.com",
  "*.firebaseapp.com",
  "*.firebaseio.com",
  "*.g.co",
  "*.g.doubleclick.net",
  "*.gfiber.com",
  "*.gfiber.speedtestcustom.com",
  "*.ggpht.com",
  "*.google-analytics.com",
  "*.google.*",
  "*.google.com",
  "*.googleads.g.doubleclick.net",
  "*.googleadservices.com",
  "*.googleanalytics.com",
  "*.googleapis.com",
  "*.googlefiber.net",
  "*.googlesyndication.com",
  "*.googletagmanager.com",
  "*.googletagservices.com",
  "*.googleusercontent.com",
  "*.googlevideo.com",
  "*.gstatic.com",
  "*.gvt1.com",
  "*.gvt2.com",
  "*.lh3.googleusercontent.com",
  "*.m.youtube.com",
  "*.maps.googleapis.com",
  "*.pagead2.googlesyndication.com",
  "*.recaptcha.net",
  "*.s.ytimg.com",
  "*.securepubads.g.doubleclick.net",
  "*.speedtestcustom.com",
  "*.ssl.google-analytics.com",
  "*.stats.g.doubleclick.net",
  "*.tpc.googlesyndication.com",
  "*.www.googletagmanager.com",
  "*.youtube-nocookie.com",
  "*.youtube.com",
  "*.youtube.googleapis.com",
  "*.youtubei.googleapis.com",
  "*.ytimg.com",
  "1e100.net",
  "2mdn.net",
  "ad.doubleclick.net",
  "adclick.g.doubleclick.net",
  "ads.google.com",
  "adservice.google.com",
  "analytics.google.com",
  "api.gfiber.com",
  "blogger.com",
  "blogspot.*",
  "csp.withgoogle.com",
  "doubleclick.net",
  "fiber.google.com",
  "firebaseapp.com",
  "firebaseio.com",
  "g.co",
  "g.doubleclick.net",
  "gfiber.com",
  "gfiber.speedtestcustom.com",
  "ggpht.com",
  "google-analytics.com",
  "google.*",
  "google.com",
  "googleads.g.doubleclick.net",
  "googleadservices.com",
  "googleanalytics.com",
  "googleapis.com",
  "googlefiber.net",
  "googlesyndication.com",
  "googletagmanager.com",
  "googletagservices.com",
  "googleusercontent.com",
  "googlevideo.com",
  "gstatic.com",
  "gvt1.com",
  "gvt2.com",
  "lh3.googleusercontent.com",
  "m.youtube.com",
  "maps.googleapis.com",
  "pagead2.googlesyndication.com",
  "recaptcha.net",
  "s.ytimg.com",
  "securepubads.g.doubleclick.net",
  "speedtestcustom.com",
  "ssl.google-analytics.com",
  "stats.g.doubleclick.net",
  "tpc.googlesyndication.com",
  "www.googletagmanager.com",
  "youtube-nocookie.com",
  "youtube.com",
  "youtube.googleapis.com",
  "youtubei.googleapis.com",
  "*.start.me",
  "start.me",
  "app.pretty-prompt.com",
  "*.pretty-prompt.com",
  "pretty-prompt.com",
  "nzbgeek.info",
  "ytimg.com"
];

function FindProxyForURL(url, host) {
  host = (host || "").toLowerCase();

  // Don't proxy obvious local stuff
  if (!host || host === "localhost" || isPlainHostName(host)) {
    return DIRECT;
  }

  // If the host is a literal IPv4 address, don't proxy private/local ranges
  if (/^(\d{1,3}\.){3}\d{1,3}$/.test(host)) {
    if (isInNet(host, "127.0.0.0", "255.0.0.0") ||
        isInNet(host, "10.0.0.0",  "255.0.0.0") ||
        isInNet(host, "192.168.0.0","255.255.0.0") ||
        isInNet(host, "172.16.0.0","255.240.0.0")) {
      return DIRECT;
    }
  }

  // Match host against patterns (FAIL-CLOSED: proxy only)
  for (var i = 0; i < PATTERNS.length; i++) {
    if (shExpMatch(host, PATTERNS[i])) {
      return PROXY_ONLY; // <- no DIRECT fallback
    }
  }

  return DIRECT;
}





