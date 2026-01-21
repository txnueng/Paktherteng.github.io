// ข้อมูลสมาชิก 10 คน
const membersData = [
    { name: "นายศิริพงศ์ พลไชย", role: "ประธานนักเรียน", img: "https://via.placeholder.com/200?text=P+1", desc: "", ig: "t1.nuengx", fb: "Siripong Phonchai" },
    { name: "นายเลิศหล้า ภูมลา", role: "สมาชิกพรรค", img: "https://via.placeholder.com/200?text=VP+2", desc: "", ig: "somying.real", fb: "Somying Jingjai" },
    { name: "นางสาวศศิกานต์ คำทอง", role: "สมาชิกพรรค", img: "https://via.placeholder.com/200?text=VP+3", desc: "", ig: "keng_brave", fb: "Keng Klahan" },
    { name: "นางสาวประภัสสร คงมี", role: "สมาชิกพรรค", img: "https://via.placeholder.com/200?text=M+4", desc: "", ig: "suay.sai", fb: "Suay Saisai" },
    { name: "นางสาวรัตนาพร หลอดแก้ว", role: "สมาชิกพรรค", img: "https://via.placeholder.com/200?text=M+5", desc: "", ig: "tae.cool", fb: "Tae Tun" },
    { name: "นางสาวฐิติพร สลับศรี ", role: "สมาชิกพรรค", img: "https://via.placeholder.com/200?text=M+6", desc: "", ig: "dao.den", fb: "Dao Den" },
    { name: "นางสาวอรณิชา พันธ์ศรี", role: "สมาชิกพรรค", img: "https://via.placeholder.com/200?text=M+7", desc: "", ig: "boy.gamer", fb: "Boy Gamer" },
    { name: "นางสาวถาวรีย์ เกษสร", role: "สมาชิกพรรค", img: "https://via.placeholder.com/200?text=M+8", desc: "", ig: "fah.fresh", fb: "Fah Sodsai" },
    { name: "นางสาวธัญญาภรณ์ จำปาโท", role: "สมาชิกพรรค", img: "https://via.placeholder.com/200?text=M+9", desc: "", ig: "kem.sport", fb: "Kem Kangrang" },
    { name: "นางสาวพิมญาดา อินทนนต์", role: "สมาชิกพรรค", img: "https://via.placeholder.com/200?text=M+10", desc: "", ig: "nam.jai", fb: "Nam Jaingam" },
];

// ทำงานเมื่อโหลดหน้าเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.querySelector('.members-container');
    
    // ตรวจสอบว่ามี Container หรือไม่ (เพื่อให้ script นี้ทำงานเฉพาะหน้า members.html)
    if (membersContainer) {
        membersData.forEach((member, index) => {
            const card = document.createElement('div');
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

