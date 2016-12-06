chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create('../html/index.html', {
        'bounds': {
            'width': 500,
            'height': 600
        }
    });
});