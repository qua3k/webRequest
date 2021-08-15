// Demo of exactly what webRequest has access to with Manifest v3
// Add service worker that listens before each request
chrome.webRequest.onBeforeRequest.addListener(
    // Log URLs to console
    (u) => {console.log(u.url);},
    // Filter by certain URLs
    {urls: ["<all_urls>"]}
  );