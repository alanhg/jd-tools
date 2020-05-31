/**
 * 每日免费点击3次
 */

// 点击事件
const e = document.createEvent("MouseEvents");
e.initEvent("click", true, true);

function startPlay() {

// 摇一摇按钮
    const btn = document.getElementsByClassName('rewardBoxBot J_ping')[0];

// 点击摇一摇按钮
    btn.dispatchEvent(e);

// 延迟再点击2次
    window.setTimeout(() => {
        [...Array(2)].forEach(() => {
                if (isFreeDead()) {
                    return;
                }
                const replayBtn = document.getElementsByClassName('rewardBtn J_ping')[0];
                replayBtn.dispatchEvent(e);
            }
        )
    }, 5000);
}

function isFreeDead() {
    const res = document.getElementsByClassName('shakeNumGray');
    if (res.length > 0) {
        alert('免费次数用完了！');
    }
    return res.length > 0;
}

if (!isFreeDead()) {
    startPlay();
}
