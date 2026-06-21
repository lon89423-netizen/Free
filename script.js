// ===== STAR PARTICLES =====
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 5 + 's';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    starsContainer.appendChild(star);
}

// ===== POPUP XEM ẢNH =====
const popupOverlay = document.getElementById('popupOverlay');
const popupImg = document.getElementById('popupImg');
const popupCaption = document.getElementById('popupCaption');
const popupClose = document.getElementById('popupClose');

function openPopup(imgSrc, imgName) {
    popupImg.src = imgSrc;
    popupCaption.textContent = imgName;
    popupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    popupOverlay.classList.remove('active');
    document.body.style.overflow = '';
    popupImg.src = '';
}

popupClose.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', function(e) {
    if (e.target === popupOverlay) {
        closePopup();
    }
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// ===== 10 SẢN PHẨM =====
const products = [
    { name: 'MOD NV INGIS', desc: 'MOD FREE', img: 'https://i.postimg.cc/YqXMX7jZ/Free-Fire-Screenshot-Temp.png',
        link: 'https://vuotnhanh.com/1arD', tag: 'NEW' },
    { name: 'MENU RỜI TIPa', desc: 'menu SÀI IOS 17.18.7.1', img: 'https://i.postimg.cc/cHZLpmW5/IMG-5932.png',
        link: 'https://vuotnhanh.com/cYdZ', tag: 'new' },
    { name: 'MOD KEO ÁNH DƯƠNG', desc: 'ANTIBAN', img: 'https://i.postimg.cc/k4zqnvP2/IMG-5847.jpg',
        link: 'https://vuotnhanh.com/4Ydp', tag: 'new' },
    { name: 'MOD KEO ÁNH DƯƠNG PI TIÊN', desc: 'SIU VIP', img: 'https://i.postimg.cc/HsP4TJVh/IMG-5938.jpg',
        link: 'https://vuotnhanh.com/suVQ', tag: 'NEW' },
    { name: 'BÁN KÍNH', desc: 'FILZA ANTI FREE', img: 'https://i.postimg.cc/NjNmRtL9/IMG-5955.jpg',
        link: 'https://vuotnhanh.com/x1Wt', tag: 'NEW' },
    { name: 'MENU IOS CAO/THẤP', desc: 'CRACK LIVECHU', img: 'https://i.postimg.cc/3xcvgg3y/IMG-5984.png',
        link: 'https://vuotnhanh.com/fpfj', tag: 'NEW' },
    { name: 'ĐANG BẢO TRÌ', desc: '', img: 'https://i.imgur.com/2xYzW8N.png',
        link: 'https://', tag: 'NEW' },
    { name: 'ĐANG BẢO TRÌ', img: 'https://i.imgur.com/3rTpL6Q.png',
        link: 'https://', tag: 'NEW' },
    { name: 'ĐANG BẢO TRÌ', desc: 'ĐANG BẢO TRÌ', img: 'https://i.imgur.com/0sHdV7R.png',
        link: 'https://', tag: 'NEW' },
    { name: 'ĐANG BẢO TRÌ', desc: 'ĐANG BẢO TRÌ', img: 'https://i.imgur.com/9bNcX4F.png',
        link: 'https://', tag: 'NEW' }
];

const list = document.getElementById('productList');
products.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
                <span class="rank">${String(i + 1).padStart(2, '0')}</span>
                <div class="product-img-wrap">
                    <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy"
                         onerror="this.src='https://placehold.co/70x70/1a1a2e/ff2d78?text=${encodeURIComponent(p.name.substring(0,2))}'">
                    <button class="btn-view-img" data-img="${p.img}" data-name="${p.name}">🔍 ẤN XEM ẢNH</button>
                </div>
                <div class="product-info">
                    <div class="product-name">${p.name}</div>
                    <div class="product-desc">📌 ${p.desc}</div>
                </div>
                <span class="product-tag">🏷️ ${p.tag}</span>
                <a href="${p.link}" target="_blank" class="btn-dl">⬇️ TẢI VỀ</a>
            `;
    list.appendChild(card);

    // Gán sự kiện cho nút "ẤN XEM ẢNH"
    const btnView = card.querySelector('.btn-view-img');
    btnView.addEventListener('click', function(e) {
        e.stopPropagation();
        const imgSrc = this.getAttribute('data-img');
        const imgName = this.getAttribute('data-name');
        openPopup(imgSrc, imgName);
    });
});

console.log('%c✨ SHOP FREE LIVECHU %c| %cSiêu Đẹp %c| %cAnti Ban Active %c| %c10 Mục + Xem Ảnh To',
    'color:#ff2d78;font-size:1.2rem;',
    '',
    'color:#ffb800;',
    '',
    'color:#00ff88;',
    '',
    'color:#00d4ff;');