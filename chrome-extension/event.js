let count = 0;
const alarmInfo = {
    delayInMinutes: 1,
    periodInMinutes: 1
};

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    console.dir(sender);
    if (message.type === 'couponAlarm') {
        chrome.alarms.clearAll();

        chrome.alarms.create('couponAlarm', alarmInfo);

        chrome.alarms.onAlarm.addListener(function (alarm) {
            console.log(`第${count + 1}次`);
            chrome.storage.sync.get({coupons: []}, function ({coupons}) {
                chrome.runtime.sendMessage({coupons: coupons});
            });
        });
        sendResponse({
            type: 'started'
        })
    }
});
