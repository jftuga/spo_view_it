chrome.webRequest.onBeforeRequest.addListener(
    function(info) {
            return {redirectUrl: info.url.replace("action=default","action=view")};
        },

        {urls: ["https://*.sharepoint.com/*sourcedoc=*action=*"]},
        ["blocking"]
);
