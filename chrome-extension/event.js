let count = 0;
const alarmInfo = {
    delayInMinutes: 1,
    periodInMinutes: 1
};

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 'couponAlarm') {
        chrome.alarms.clearAll();
        chrome.alarms.create('couponAlarm', alarmInfo);
        chrome.alarms.onAlarm.addListener(function (alarm) {
            console.log(`第${count + 1}次`);
            chrome.tabs.sendMessage(sender.tab.id, {});
        });
        sendResponse({
            type: 'started'
        })
    }
});
