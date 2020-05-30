/**
 * 每日免费点击3次
 */

// 点击事件
const e = document.createEvent("MouseEvents");
e.initEvent("click", true, true);

// 摇一摇按钮
const btn = document.getElementsByClassName('rewardBoxBot J_ping')[0];

// 点击摇一摇按钮
btn.dispatchEvent(e);

// 延迟再点击2次
window.setTimeout(() => {
    [...Array(2)].forEach(() => {
            const replayBtn = document.getElementsByClassName('rewardBtn J_ping')[0];
            replayBtn.dispatchEvent(e);
        }
    )
}, 1000);
