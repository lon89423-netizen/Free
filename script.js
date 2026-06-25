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

// ===== MUSIC PLAYER =====
const audio = document.getElementById('audioPlayer');
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

musicBtn.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        musicBtn.classList.remove('playing');
        musicBtn.innerHTML = '🎵 NGHE NHẠC';
    } else {
        audio.play().catch(function(error) {
            console.log('Không thể phát nhạc:', error);
        });
        isPlaying = true;
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = '⏸️ DỪNG NHẠC';
    }
});

audio.addEventListener('ended', function() {
    isPlaying = false;
    musicBtn.classList.remove('playing');
    musicBtn.innerHTML = '🎵 NGHE NHẠC';
});

// ===== 10 SẢN PHẨM =====
const products = [
    { name: 'MOD NV KAPELLA', desc: 'MOD FREE', img: 'https://i.postimg.cc/3rpVFg75/IMG-6090.png',
        link: 'https://vuotnhanh.com/VFnq', tag: 'NEW', category: 'mod' },
    { name: 'MENU RỜI TIPa', desc: 'menu SÀI IOS 17.18.7.1', img: 'https://i.postimg.cc/cHZLpmW5/IMG-5932.png',
        link: 'https://vuotnhanh.com/cYdZ', tag: 'new', category: 'menu' },
    { name: 'MOD NV ALOCK', desc: 'ANTIBAN', img: 'https://i.postimg.cc/MHLzBjjv/IMG-6138.png',
        link: 'https://vuotnhanh.com/BAQh', tag: 'new', category: 'mod' },
    { name: 'MOD KEO ÁNH DƯƠNG PI TIÊN', desc: 'SIU VIP', img: 'https://i.postimg.cc/HsP4TJVh/IMG-5938.jpg',
        link: 'https://vuotnhanh.com/suVQ', tag: 'NEW', category: 'mod' },
    { name: 'BÁN KÍNH', desc: 'FILZA ANTI FREE', img: 'https://i.postimg.cc/NjNmRtL9/IMG-5955.jpg',
        link: 'https://vuotnhanh.com/x1Wt', tag: 'NEW', category: 'file' },
    { name: 'BẢO TRÌ', desc: 'BẢO TRÌ', img: 'https://',
        link: 'https://', tag: 'NEW', category: 'menu' },
    { name: 'SÚNG PHÒNG XÀ DORAEMON', desc: '', img: 'https://i.postimg.cc/Bbcb08D4/IMG-6020.png',
        link: 'https://vuotnhanh.com/0eud', tag: 'NEW', category: 'mod' },
    { name: 'BẢO TRÌ', desc: '', img: 'https://',
        link: 'https://', tag: 'NEW', category: 'menu' },
    { name: 'ĐANG BẢO TRÌ', desc: 'ĐANG BẢO TRÌ', img: 'https://i.imgur.com/0sHdV7R.png',
        link: 'https://', tag: 'NEW', category: 'file' },
    { name: 'ĐANG BẢO TRÌ', desc: 'ĐANG BẢO TRÌ', img: 'https://i.imgur.com/9bNcX4F.png',
        link: 'https://', tag: 'NEW', category: 'file' }
];

const list = document.getElementById('productList');
const filterTabs = document.getElementById('filterTabs');
const itemCount = document.getElementById('itemCount');

function renderProducts(category = 'all') {
    list.innerHTML = '';
    let visibleCount = 0;
    
    products.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.category = p.category;
        
        if (category !== 'all' && p.category !== category) {
            card.classList.add('hidden');
        } else {
            visibleCount++;
            card.classList.add('show');
        }
        
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
        
        const btnView = card.querySelector('.btn-view-img');
        btnView.addEventListener('click', function(e) {
            e.stopPropagation();
            const imgSrc = this.getAttribute('data-img');
            const imgName = this.getAttribute('data-name');
            openPopup(imgSrc, imgName);
        });
    });
    
    itemCount.textContent = `${visibleCount} items`;
}

filterTabs.addEventListener('click', function(e) {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const category = btn.dataset.filter;
    renderProducts(category);
});

renderProducts('all');

console.log('%c✨ SHOP FREE LIVECHU %c| %cSiêu Đẹp %c| %cAnti Ban Active %c| %c10 Mục + Xem Ảnh To + Lọc 3 phần + Nghe Nhạc',
    'color:#ff2d78;font-size:1.2rem;',
    '',
    'color:#ffb800;',
    '',
    'color:#00ff88;',
    '',
    'color:#00d4ff;');