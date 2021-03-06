function onSubmit() {
    let elementsByName = document.getElementsByName('coupon');
    const savedCoupons = [];
    elementsByName.forEach(item => {
        if (item.checked) {
            savedCoupons.push(+item.value);
        }
    })
    chrome.storage.sync.set({
        coupons: savedCoupons
    }, () => {
        document.getElementById('saveTip').className = '';
        window.setTimeout(() => document.getElementById('saveTip').className = 'hide', 3000)
    });
}

function restoreOptions() {
    chrome.storage.sync.get({coupons: []}, function ({coupons}) {
        document.getElementsByName('coupon').forEach(
            item => {
                if (coupons.includes(+item.value)) {
                    item.checked = true;
                }
            }
        )
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', onSubmit);
