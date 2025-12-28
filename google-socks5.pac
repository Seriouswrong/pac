function FindProxyForURL(url, host) {
  // Google domains via SOCKS5
  if (dnsDomainIs(host, ".google.com") ||
      dnsDomainIs(host, ".googleusercontent.com") ||
      dnsDomainIs(host, ".googleapis.com") ||
      dnsDomainIs(host, ".gstatic.com") ||
      dnsDomainIs(host, ".youtube.com") ||
      dnsDomainIs(host, ".1e100.net") ||
      dnsDomainIs(host, ".gvt1.com")) {
    return "SOCKS5 127.0.0.1:10808";
  }

  // whatismyip.com (bare + subdomains) via SOCKS5
  if (host == "whatismyip.com" ||
      dnsDomainIs(host, ".whatismyip.com")) {
    return "SOCKS5 127.0.0.1:10808";
  }

  // Everything else direct
  return "DIRECT";
}


