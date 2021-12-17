// track clicks and identify category, action and label of click

// identify categories
var categoryMap = {
    "#/": "Home",
    "#/scan": "Scan",
    "#/explore": "Explore"
};

// identify actions
var actionMap = {
    "Trace Your Coffee": "Trace Coffee Button - click",
    "See a Journey": "See a Journey Button - click",
    "Explore": "Explore Button - click",
    "Learn More": "Learn More Link - click",
    "Don't see the camera?": "Don't See The Camera Link - click",
    "Still here": "Still Here Button - click",
};

var getSiteSection = function (hash) {
    return hash.split('/')[2]
};

// tracks any button and sends back category, action, label based off categoryMap and actionMap
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click' , (e) => {
        var label = e.target.innerText;
        var category = categoryMap[window.location.hash] || getSiteSection(window.location.hash);
        var action = actionMap[label]
        // return window._analytics.trackEvent(category, action, label)
        return console.log({category, action, label})
    });
});

// tracks "camera not working" button only because object is a div and not a button
var cameraErrBtn = document.querySelector('.sc-camera-not-working-btn');
if(!!cameraErrBtn) {
    cameraErrBtn.addEventListener('click' , (e) => {
        var label = e.target.innerText;
        var category = categoryMap[window.location.hash]
        var action = actionMap[label]
        return console.log({category, action, label})
})
};

// track language change selector
document.getElementById('language').addEventListener('change' , function() {
    var appLanguage = this.value 
    // window._analytics.sendEvent("Navigation", `Language Selection ${appLanguage} Button - click`)
    return console.log({category: "Navigation", action: `Language Selection ${appLanguage} Button - click`});
});

// track social share button clicks
_analytics.onEvent("click" , ".sb-social-share__item" , function() {
    var platformName = this.getAttribute('aria-label');
    if(this.hasAttribute('aria-label')) {
        return console.log({category: "Result Detail Page" , action: `Journey ${platformName} Share Link - click`})
    } else {
        return console.log({category: "Result Detail Page" , action: "Journey Email Share Link - click"})
    }
});

// track footer button clicks
_analytics.onEvent("click" , ".footer-link" , function(e) {
    var linkName = e.target.innerHTML;
    return console.log({category: "Navigation" , action: `${linkName} Link - click`})
});
// track back link clicks
_analytics.onEvent("click" , ".sb-subnav-breadcrumbIcon" , function(e) {
    return console.log({category: "Navigation" , action: "Back Link - click"})
});