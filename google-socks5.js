function FindProxyForURL(url, host) {
  // ALL Google services + infrastructure via SOCKS5
  if (host == "google.com" ||
      dnsDomainIs(host, ".google.com") ||        // google.com + subdomains (fiber, accounts, etc.)
      host == "googleusercontent.com" ||
      dnsDomainIs(host, ".googleusercontent.com") ||
      host == "googleapis.com" ||
      dnsDomainIs(host, ".googleapis.com") ||
      host == "gstatic.com" ||
      dnsDomainIs(host, ".gstatic.com") ||
      host == "youtube.com" ||
      dnsDomainIs(host, ".youtube.com") ||
      host == "1e100.net" ||
      dnsDomainIs(host, ".1e100.net") ||
      host == "gvt1.com" ||
      dnsDomainIs(host, ".gvt1.com") ||
      dnsDomainIs(host, ".ggpht.com") ||         // Google photos + static assets
      dnsDomainIs(host, ".googlesyndication.com") || // Google Ads
      dnsDomainIs(host, ".google-analytics.com") ||  // Analytics
      dnsDomainIs(host, ".doubleclick.net")) {     // DoubleClick (ads/tracking)
    return "SOCKS5 127.0.0.1:10808";
  }

  /*
  // whatismyip.com (bare + subdomains) via SOCKS5
  if (host == "whatismyip.com" ||
      dnsDomainIs(host, ".whatismyip.com")) {
    return "SOCKS5 127.0.0.1:10808";
  }
*/

  // Everything else direct
  return "DIRECT";
}


