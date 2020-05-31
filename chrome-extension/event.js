let count = 0;

function createAlarms() {
    [0, 10, 16, 20, 22].forEach(item => {
        chrome.alarms.create(`couponAlarm_${item}`, {when: new Date().setHours(item)});
    })
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 'couponAlarm') {
        chrome.alarms.clearAll();
        createAlarms();
        chrome.alarms.onAlarm.addListener(function (alarm) {
            console.log(`第${count + 1}次`);
            chrome.tabs.sendMessage(sender.tab.id, {count});
        });
        sendResponse({
            type: 'started'
        })
    }

    if (message.type === 'stopCouponAlarm') {
        chrome.alarms.clearAll();
    }
});
