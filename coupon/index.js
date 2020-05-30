// 5,10,20,40,50
let coupons = document.getElementsByClassName('full-coupon-list')[0].children;

const fiveRMB = 0;
const tenRMB = 1;
const twentyRMB = 2;
const fortyRMB = 3;
const fiftyRMB = 4;

// 选中想领取的券类型
const selectedCoupon = [fiveRMB];

// 点击事件
const e = document.createEvent("MouseEvents");
e.initEvent("click", true, true);

// 每隔一秒去检查目标券领取状态，如果可以领取则点击
let interval = window.setInterval(() => {
        if (selectedCoupon.length === 0) {
            window.clearInterval(interval);
        }
        selectedCoupon.forEach(idx => {
            let btn = coupons[idx].getElementsByClassName('full-coupon-btn')[0];
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
    },
    2000
);
