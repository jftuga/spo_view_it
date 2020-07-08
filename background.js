chrome.webRequest.onBeforeRequest.addListener(
    function(info) {
            const re1 = /(action=.*?(&|$))/i;
            const re2 = /(mobileredirect=.*?(&|$))/i;
            const re3 = /&$/;

            url1 = info.url.replace(re1,"");
            url2 = url1.replace(re2,"");
            url3 = url2.replace(re3,"");
            //console.log(url3);

            return {redirectUrl: url3 + "&DefaultItemOpen=1&Action=View"};
        },

        {urls: ["https://*.sharepoint.com/*sourcedoc=*action=*"]},
        ["blocking"]
);
