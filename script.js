// ข้อมูลสมาชิก 10 คน
const membersData = [
    { name: "นายศิริพงศ์ พลไชย", role: "ประธานพรรค", img: "Memberr11.png", desc: "เต็งหนึ่ง", ig: "t1.nuengx", fb: "Siripong Phonchai" },
    { name: "นายเลิศหล้า ภูมลา", role: "สมาชิกพรรค", img: "1769235664301.jpg", desc: "ก้าน", ig: "babiilx2lo4xs", fb: "Láloxs Kx" },
    { name: "นางสาวศศิกานต์ คำทอง", role: "สมาชิกพรรค", img: "1769241603934.jpg", desc: "มาย", ig: "mymind_melody", fb: "Sasikan Khamthong" },
    { name: "นางสาวประภัสสร คงมี", role: "สมาชิกพรรค", img: "Ttn.jpg", desc: "มะปราง", ig: "babygirl3ystt", fb: "Maprang Pps" },
    { name: "นางสาวรัตนาพร หลอดแก้ว", role: "สมาชิกพรรค", img: "Mmr.jpg", desc: "ไอด้า", ig: "_lluvvida", fb: "Rattanaphon Lotkaeo" },
    { name: "นางสาวฐิติพร สลับศรี ", role: "สมาชิกพรรค", img: "Screenshot_20260124_132020_Drive.jpg", desc: "ขิม", ig: "kim_mmmt", fb: "Titiporn  Salubsri" },
    { name: "นางสาวอรณิชา พันธ์ศรี", role: "สมาชิกพรรค", img: "แตงโม แต่งโหดแล้ว.jpg", desc: "แตงโม", ig: "monlelasandia", fb: "Onnicha" },
    { name: "นางสาวถาวรีย์ เกษสร", role: "สมาชิกพรรค", img: "ถาวรีย์(ไออุ่น).jpg", desc: "ไออุ่น", ig: "tainunsnaffle_", fb: "AI UN" },
    { name: "นางสาวธัญญาภรณ์ จำปาโท", role: "สมาชิกพรรค", img: "มะปราง(4-1).jpg", desc: "มะปราง", ig: "maprangmaq", fb: "Thanyapron Champato" },
    { name: "นางสาวพิมญาดา อินทนนต์", role: "สมาชิกพรรค", img: "ออกัส4-1.jpg", desc: "ออกัส", ig: "268.9a", fb: "Pimyada Intanon" },
];

// ทำงานเมื่อโหลดหน้าเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.querySelector('.members-container');
    
    // ตรวจสอบว่ามี Container หรือไม่ (เพื่อให้ script นี้ทำงานเฉพาะหน้า members.html)
    if (membersContainer) {
        membersData.forEach((member, index) => {
            const card = document.createElement('div');
card.classList.add('member-card', 'reveal');
            card.classList.add('member-card');
            card.setAttribute('onclick', `openModal(${index})`);
            card.innerHTML = `
                <img src="${member.img}" alt="${member.name}" class="member-img">
                <div class="member-info">
                    <h4>${member.name}</h4>
                    <p>${member.role}</p>
                </div>
            `;
            membersContainer.appendChild(card);
        });
    }
});

// Modal Logic
const modal = document.getElementById('memberModal');
if (modal) {
    const closeBtn = document.querySelector('.close-btn');

    window.openModal = function(index) {
        const member = membersData[index];
        document.getElementById('modal-img').src = member.img;
        document.getElementById('modal-name').innerText = member.name;
        document.getElementById('modal-role').innerText = member.role;
        document.getElementById('modal-desc').innerText = `"${member.desc}"`;
        document.getElementById('modal-ig').innerText = member.ig;
        document.getElementById('modal-fb').innerText = member.fb;
        modal.style.display = "flex";
    }

    closeBtn.onclick = function() { modal.style.display = "none"; }
    window.onclick = function(event) { if (event.target == modal) modal.style.display = "none"; }
}

