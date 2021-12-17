// function getPageType() {
//     var hashWord = window.location.hash.substr(2);
//     if(hashWord === "") return "Home";
//     return hashWord.charAt(0).toUpperCase() + hashWord.slice(1);
// }

// sets any other page of the site as "Other"
function getPageType() {
    return categoryMap = {
        "#/": "Home",
        "#/scan": "Scan",
        "#/explore": "Explore"
    }[location.hash] || "Other";
}

// tracks any button and sends back category, action, label based off categoryMap and actionMap
_analytics.onEvent("click", "button", function() {
    var buttonText = this.innerText || "N/A";
    _analytics.trackEvent(getPageType(), buttonText + " Button - click");
});

// tracks "camera not working" button only because object is a div and not a button
_analytics.onEvent("click" , ".sc-camera-not-working-btn" , function () {
    _analytics.trackEvent("Scan", "Don't See The Camera Link - click")
})

// track language change selector
_analytics.onEvent("change", "#language", function() {
    _analytics.trackEvent("Navigation", "Language Selection - click", this.value);
});

// track footer button clicks
_analytics.onEvent("click", ".footer-link", function() {
    var href = this.getAttribute("href");
    _analytics.trackEvent("Navigation", "Footer Link - click", href);
});

// track back link clicks
_analytics.onEvent("click" , ".sb-subnav-breadcrumbIcon" , function() {
    _analytics.trackEvent("Navigation", "Back Link - click");
});

// track social share button clicks
_analytics.onEvent("click" , ".sb-social-share__item" , function() {
    var platformName = this.getAttribute('aria-label');
    if (!!platformName) {
        return _analytics.trackEvent({category: "Result Detail Page" , action: `Journey ${platformName} Share Link - click`})
    }
    return _analytics.trackEvent({category: "Result Detail Page" , action: "Journey Email Share Link - click"})
});

