let selectedCoupon = [];

function startPlay(coupons) {
    selectedCoupon = selectedCoupon.length === 0 ? coupons : selectedCoupon;
    // 点击事件
    const e = document.createEvent("MouseEvents");
    e.initEvent("click", true, true);

    let couponsElements = document.getElementsByClassName('full-coupon-list')[0].children;

    if (selectedCoupon.length === 0) {
        alert('没有需要抢的券了！')
        return;
    }
    selectedCoupon.forEach(idx => {
        let btn = couponsElements[idx].getElementsByClassName('full-coupon-btn')[0];
        let content = btn.textContent;
        if (content === '领取') {
            btn.dispatchEvent(e);
            // 确认领取
            document.getElementsByClassName('btn-wrap btn-wrap-1 J_ping')[0].dispatchEvent(e);
            // 关闭确认框
            document.getElementsByClassName('close fr')[0].dispatchEvent(e);
            selectedCoupon.pop();
        }
    })
}

function startAlarm() {
    chrome.runtime.sendMessage({type: "couponAlarm"}, function (response) {
        console.log(response);
    });
}

/**
 * 定时器发起抢券
 */
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        startPlay(request.coupons);
    }
);

window.setTimeout(() => startAlarm(), 20000)

