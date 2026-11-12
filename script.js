const CHAMPIONS_STORAGE_KEY = 'champions_sport_club_db';

const DEFAULT_CHAMPIONS_DATA = {
  members: [
    {
      id: 'MEM-101',
      name: 'Mohamed Salah',
      phone: '+20 100 123 4567',
      dob: '1992-06-15',
      gender: 'Male',
      address: 'Zamalek, Cairo',
      emergencyContact: 'Capt. Gamal Salah (+20 100 999 8888)',
      sport: 'Football',
      regDate: '2024-01-10',
      status: 'Active',
      membershipPlan: 'Annual VIP All-Access'
    },
    {
      id: 'MEM-102',
      name: 'Ahmed Hassan',
      phone: '+20 111 234 5678',
      dob: '1995-03-22',
      gender: 'Male',
      address: 'Heliopolis, Cairo',
      emergencyContact: 'Mona Hassan (+20 111 777 6666)',
      sport: 'Basketball',
      regDate: '2024-01-15',
      status: 'Active',
      membershipPlan: 'Quarterly Basketball & Gym'
    },
    {
      id: 'MEM-103',
      name: 'Fatma El-Zahraa',
      phone: '+20 122 345 6789',
      dob: '1998-08-14',
      gender: 'Female',
      address: 'Maadi, Cairo',
      emergencyContact: 'Tarek Al-Sayed (+20 122 666 5555)',
      sport: 'Swimming',
      regDate: '2024-02-01',
      status: 'Active',
      membershipPlan: 'Monthly Swimming Pro'
    },
    {
      id: 'MEM-104',
      name: 'Mahmoud Al-Masry',
      phone: '+20 106 456 7890',
      dob: '1990-11-05',
      gender: 'Male',
      address: 'Smouha, Alexandria',
      emergencyContact: 'Nader Al-Masry (+20 106 555 4444)',
      sport: 'Gym',
      regDate: '2024-02-12',
      status: 'Active',
      membershipPlan: 'Annual Gym Elite'
    },
    {
      id: 'MEM-105',
      name: 'Nour El-Sherbini',
      phone: '+20 115 567 8901',
      dob: '1996-12-01',
      gender: 'Female',
      address: 'Sporting, Alexandria',
      emergencyContact: 'Atef El-Sherbini (+20 115 444 3333)',
      sport: 'Tennis',
      regDate: '2024-02-20',
      status: 'Active',
      membershipPlan: 'Annual Tennis Gold'
    },
    {
      id: 'MEM-106',
      name: 'Omar Gaber',
      phone: '+20 109 678 9012',
      dob: '1993-04-18',
      gender: 'Male',
      address: 'Dokki, Giza',
      emergencyContact: 'Hoda Gaber (+20 109 333 2222)',
      sport: 'Football',
      regDate: '2023-08-10',
      status: 'Expired',
      membershipPlan: 'Monthly Football'
    },
    {
      id: 'MEM-107',
      name: 'Salma El-Demerdash',
      phone: '+20 128 789 0123',
      dob: '2000-09-30',
      gender: 'Female',
      address: 'New Cairo, Cairo',
      emergencyContact: 'Kareem El-Demerdash (+20 128 222 1111)',
      sport: 'Yoga',
      regDate: '2024-03-05',
      status: 'Active',
      membershipPlan: 'Quarterly Yoga & Wellness'
    },
    {
      id: 'MEM-108',
      name: 'Tarek Hegazy',
      phone: '+20 101 890 1234',
      dob: '1988-07-25',
      gender: 'Male',
      address: 'Sheikh Zayed, Giza',
      emergencyContact: 'Dina Hegazy (+20 101 111 0000)',
      sport: 'Gym',
      regDate: '2023-09-15',
      status: 'Expired',
      membershipPlan: 'Monthly Gym Basic'
    },
    {
      id: 'MEM-109',
      name: 'Farida Osman',
      phone: '+20 112 901 2345',
      dob: '1997-02-14',
      gender: 'Female',
      address: 'Nasr City, Cairo',
      emergencyContact: 'Hisham Osman (+20 112 000 9999)',
      sport: 'Swimming',
      regDate: '2024-03-18',
      status: 'Active',
      membershipPlan: 'Monthly Swimming Pro'
    },
    {
      id: 'MEM-110',
      name: 'Kareem El-Shenawy',
      phone: '+20 120 012 3456',
      dob: '1994-10-10',
      gender: 'Male',
      address: 'Agouza, Giza',
      emergencyContact: 'Ali El-Shenawy (+20 120 888 7777)',
      sport: 'Tennis',
      regDate: '2024-04-02',
      status: 'Active',
      membershipPlan: 'Annual Tennis Gold'
    }
  ],
  activities: [
    {
      id: 'ACT-01',
      name: 'Football (Soccer) Academy',
      sport: 'Football',
      coach: 'Capt. Hossam Ashour',
      facility: 'Pitch A - Main Football Turf',
      schedule: 'Mon, Wed, Fri (17:00 - 19:00)',
      capacity: 30,
      enrolled: 24,
      fee: 1200,
      ageGroup: 'Youth & Adults (14+)'
    },
    {
      id: 'ACT-02',
      name: 'Basketball Development League',
      sport: 'Basketball',
      coach: 'Capt. Tarek Hamed',
      facility: 'Indoor Basketball Arena',
      schedule: 'Tue, Thu, Sat (16:00 - 18:00)',
      capacity: 25,
      enrolled: 18,
      fee: 1000,
      ageGroup: 'All Ages (10+)'
    },
    {
      id: 'ACT-03',
      name: 'Olympic Swimming Team & Academy',
      sport: 'Swimming',
      coach: 'Capt. Rania El-Wany',
      facility: 'Olympic Pool 1',
      schedule: 'Sun, Tue, Thu (08:00 - 10:00 & 18:00 - 20:00)',
      capacity: 20,
      enrolled: 19,
      fee: 1500,
      ageGroup: 'Intermediate to Advanced'
    },
    {
      id: 'ACT-04',
      name: 'Championship Tennis Clinics',
      sport: 'Tennis',
      coach: 'Capt. Mohamed Safwat',
      facility: 'Clay Tennis Court 1',
      schedule: 'Mon, Wed, Sat (15:00 - 17:00)',
      capacity: 15,
      enrolled: 12,
      fee: 1800,
      ageGroup: 'Juniors & Adults'
    },
    {
      id: 'ACT-05',
      name: 'Gym & High Intensity Conditioning',
      sport: 'Gym',
      coach: 'Capt. Mahmoud El-Attar',
      facility: 'Main Fitness & Weights Hall',
      schedule: 'Daily (06:00 - 23:00)',
      capacity: 100,
      enrolled: 76,
      fee: 900,
      ageGroup: 'Open to 16+'
    },
    {
      id: 'ACT-06',
      name: 'Mindful Yoga & Core Pilates',
      sport: 'Yoga',
      coach: 'Capt. Yasmine Rostom',
      facility: 'Zen Yoga Studio',
      schedule: 'Sun, Wed (10:00 - 11:30 & 19:00 - 20:30)',
      capacity: 20,
      enrolled: 16,
      fee: 1100,
      ageGroup: 'All Levels'
    }
  ],
  staff: [
    {
      id: 'STF-01',
      name: 'Capt. Mahmoud Al-Masry',
      role: 'Club Director / General Manager',
      department: 'Administration',
      phone: '+20 100 000 0001',
      email: 'm.almasry@champions-club.eg',
      shift: 'Morning & Full Time',
      sport: 'Administration'
    },
    {
      id: 'STF-02',
      name: 'Capt. Hossam Ashour',
      role: 'Head Football Coach',
      department: 'Football',
      phone: '+20 100 222 3333',
      email: 'h.ashour@champions-club.eg',
      shift: 'Evening Shift',
      sport: 'Football'
    },
    {
      id: 'STF-03',
      name: 'Capt. Rania El-Wany',
      role: 'Director of Aquatic Sports',
      department: 'Swimming',
      phone: '+20 100 333 4444',
      email: 'r.elwany@champions-club.eg',
      shift: 'Morning & Evening',
      sport: 'Swimming'
    },
    {
      id: 'STF-04',
      name: 'Capt. Mohamed Safwat',
      role: 'Head Tennis Pro',
      department: 'Tennis',
      phone: '+20 100 444 5555',
      email: 'm.safwat@champions-club.eg',
      shift: 'Afternoon Shift',
      sport: 'Tennis'
    },
    {
      id: 'STF-05',
      name: 'Capt. Tarek Hamed',
      role: 'Head Basketball Coach',
      department: 'Basketball',
      phone: '+20 100 555 6666',
      email: 't.hamed@champions-club.eg',
      shift: 'Evening Shift',
      sport: 'Basketball'
    },
    {
      id: 'STF-06',
      name: 'Capt. Mahmoud El-Attar',
      role: 'Chief Fitness Trainer',
      department: 'Gym',
      phone: '+20 100 666 7777',
      email: 'm.elattar@champions-club.eg',
      shift: 'Rotating Shift',
      sport: 'Gym'
    },
    {
      id: 'STF-07',
      name: 'Capt. Yasmine Rostom',
      role: 'Lead Yoga & Wellness Specialist',
      department: 'Yoga',
      phone: '+20 100 777 8888',
      email: 'y.rostom@champions-club.eg',
      shift: 'Morning & Evening',
      sport: 'Yoga'
    },
    {
      id: 'STF-08',
      name: 'Dr. Hazem Emam',
      role: 'Club Chief Sports Physician',
      department: 'Medical & Physio',
      phone: '+20 100 888 9999',
      email: 'h.emam@champions-club.eg',
      shift: 'Daily (12:00 - 18:00)',
      sport: 'Medical'
    },
    {
      id: 'STF-09',
      name: 'Mona El-Shazly',
      role: 'Membership Relations Manager',
      department: 'Administration',
      phone: '+20 100 999 1111',
      email: 'm.elshazly@champions-club.eg',
      shift: 'Morning Shift',
      sport: 'Administration'
    },
    {
      id: 'STF-10',
      name: 'Sherif Ekramy',
      role: 'Facilities & Security Head',
      department: 'Operations',
      phone: '+20 100 111 2222',
      email: 's.ekramy@champions-club.eg',
      shift: 'Full Day',
      sport: 'Operations'
    }
  ],
  facilities: [
    {
      id: 'FAC-01',
      name: 'Pitch A - Main Football Turf',
      type: 'Football Pitch',
      capacity: 50,
      status: 'Available',
      location: 'Outdoor Sector North'
    },
    {
      id: 'FAC-02',
      name: 'Olympic Pool 1',
      type: 'Swimming Pool',
      capacity: 30,
      status: 'Available',
      location: 'Aquatic Center Indoor'
    },
    {
      id: 'FAC-03',
      name: 'Clay Tennis Court 1',
      type: 'Tennis Court',
      capacity: 8,
      status: 'Available',
      location: 'Racquet Center Court 1'
    },
    {
      id: 'FAC-04',
      name: 'Clay Tennis Court 2',
      type: 'Tennis Court',
      capacity: 8,
      status: 'Maintenance',
      location: 'Racquet Center Court 2'
    },
    {
      id: 'FAC-05',
      name: 'Main Fitness & Weights Hall',
      type: 'Gym',
      capacity: 100,
      status: 'Available',
      location: 'Main Pavilion Floor 1'
    },
    {
      id: 'FAC-06',
      name: 'Zen Yoga Studio',
      type: 'Yoga Studio',
      capacity: 25,
      status: 'Available',
      location: 'Wellness Wing Floor 2'
    },
    {
      id: 'FAC-07',
      name: 'Indoor Basketball Arena',
      type: 'Basketball Arena',
      capacity: 40,
      status: 'Available',
      location: 'Sports Dome Area B'
    }
  ],
  transactions: [
    {
      id: 'TXN-901',
      memberId: 'MEM-101',
      memberName: 'Mohamed Salah',
      plan: 'Annual VIP All-Access',
      amount: 15000,
      method: 'Visa Card',
      date: '2024-01-10',
      status: 'Completed'
    },
    {
      id: 'TXN-902',
      memberId: 'MEM-102',
      memberName: 'Ahmed Hassan',
      plan: 'Quarterly Basketball & Gym',
      amount: 3800,
      method: 'Meeza Card',
      date: '2024-01-15',
      status: 'Completed'
    },
    {
      id: 'TXN-903',
      memberId: 'MEM-103',
      memberName: 'Fatma El-Zahraa',
      plan: 'Monthly Swimming Pro',
      amount: 1500,
      method: 'Cash',
      date: '2024-04-01',
      status: 'Completed'
    },
    {
      id: 'TXN-904',
      memberId: 'MEM-104',
      memberName: 'Mahmoud Al-Masry',
      plan: 'Annual Gym Elite',
      amount: 9000,
      method: 'Bank Transfer',
      date: '2024-02-12',
      status: 'Completed'
    },
    {
      id: 'TXN-905',
      memberId: 'MEM-105',
      memberName: 'Nour El-Sherbini',
      plan: 'Annual Tennis Gold',
      amount: 18000,
      method: 'Mastercard',
      date: '2024-02-20',
      status: 'Completed'
    },
    {
      id: 'TXN-906',
      memberId: 'MEM-107',
      memberName: 'Salma El-Demerdash',
      plan: 'Quarterly Yoga & Wellness',
      amount: 3200,
      method: 'Fawry Pay',
      date: '2024-03-05',
      status: 'Completed'
    },
    {
      id: 'TXN-907',
      memberId: 'MEM-109',
      memberName: 'Farida Osman',
      plan: 'Monthly Swimming Pro',
      amount: 1500,
      method: 'Visa Card',
      date: '2024-03-18',
      status: 'Completed'
    },
    {
      id: 'TXN-908',
      memberId: 'MEM-110',
      memberName: 'Kareem El-Shenawy',
      plan: 'Annual Tennis Gold',
      amount: 18000,
      method: 'Cash',
      date: '2024-04-02',
      status: 'Completed'
    }
  ],
  financials: {
    baseRevenue: 485400,
    baseExpenses: 192800
  },
  facilityBookings: [
    {
      id: 'BKG-201',
      facility: 'Pitch A - Main Football Turf',
      organizer: 'Football Academy Match (Capt. Hossam Ashour)',
      date: '2026-11-08',
      time: '17:00 - 19:00',
      status: 'Confirmed'
    },
    {
      id: 'BKG-202',
      facility: 'Olympic Pool 1',
      organizer: 'Egyptian Youth Swimming Trials (Capt. Rania El-Wany)',
      date: '2026-11-09',
      time: '09:00 - 12:00',
      status: 'Confirmed'
    },
    {
      id: 'BKG-203',
      facility: 'Indoor Basketball Arena',
      organizer: 'Cairo Inter-Club Basketball League',
      date: '2026-11-09',
      time: '16:00 - 18:00',
      status: 'Confirmed'
    }
  ]
};

// Data Helper Object
const ChampionsDB = {
  get() {
    try {
      const stored = localStorage.getItem(CHAMPIONS_STORAGE_KEY);
      if (!stored) {
        this.save(DEFAULT_CHAMPIONS_DATA);
        return DEFAULT_CHAMPIONS_DATA;
      }
      return JSON.parse(stored);
    } catch (e) {
      console.error('Error reading localStorage', e);
      return DEFAULT_CHAMPIONS_DATA;
    }
  },

  save(data) {
    try {
      localStorage.setItem(CHAMPIONS_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving localStorage', e);
    }
  },

  reset() {
    this.save(DEFAULT_CHAMPIONS_DATA);
    return DEFAULT_CHAMPIONS_DATA;
  }
};

// UI Notification Toast
function showToast(message, type = 'success') {
  const toastEl = document.getElementById('actionToast');
  if (!toastEl) return;
  const toastBody = document.getElementById('toastMessage');
  const toastIcon = document.getElementById('toastIcon');

  toastEl.className = `toast align-items-center text-white border-0 shadow-lg ${
    type === 'success' ? 'bg-success' : type === 'danger' ? 'bg-danger' : 'bg-primary'
  }`;
  
  if (toastIcon) {
    toastIcon.className = type === 'success' ? 'bi bi-check-circle-fill fs-5' : 'bi bi-info-circle-fill fs-5';
  }

  if (toastBody) toastBody.innerText = message;
  const bsToast = new bootstrap.Toast(toastEl, { delay: 3500 });
  bsToast.show();
}

// Draw High-DPI HTML5 Canvas Donut Chart for Memberships
function drawMembershipDonut(activeCount, expiredCount) {
  const canvas = document.getElementById('membershipDonutCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const total = activeCount + expiredCount;

  // Clear Canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const outerRadius = 75;
  const innerRadius = 55;

  if (total === 0) {
    // Empty state ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
    ctx.arc(centerX, centerY, innerRadius, Math.PI * 2, 0, true);
    ctx.fillStyle = '#e2e8f0';
    ctx.fill();
    return;
  }

  const activeAngle = (activeCount / total) * (Math.PI * 2);
  const startAngle = -Math.PI / 2;

  // Active Arc (Emerald Green)
  ctx.beginPath();
  ctx.arc(centerX, centerY, outerRadius, startAngle, startAngle + activeAngle);
  ctx.arc(centerX, centerY, innerRadius, startAngle + activeAngle, startAngle, true);
  ctx.fillStyle = '#10b981';
  ctx.fill();

  // Expired Arc (Ruby Red)
  ctx.beginPath();
  ctx.arc(centerX, centerY, outerRadius, startAngle + activeAngle, startAngle + Math.PI * 2);
  ctx.arc(centerX, centerY, innerRadius, startAngle + Math.PI * 2, startAngle + activeAngle, true);
  ctx.fillStyle = '#ef4444';
  ctx.fill();
}

// Render Dashboard Data & Executive Metrics
function renderDashboard() {
  const data = ChampionsDB.get();

  // 1. Members Statistics
  const totalMembers = data.members ? data.members.length : 0;
  const activeMembers = data.members ? data.members.filter(m => m.status === 'Active').length : 0;
  const expiredMembers = totalMembers - activeMembers;

  const statTotalMembers = document.getElementById('statTotalMembers');
  const statActiveMembers = document.getElementById('statActiveMembers');
  const sidebarMembersCount = document.getElementById('sidebarMembersCount');
  const donutTotalCount = document.getElementById('donutTotalCount');
  const activeMembersCount = document.getElementById('activeMembersCount');
  const expiredMembersCount = document.getElementById('expiredMembersCount');
  const activeProgressBar = document.getElementById('activeProgressBar');
  const expiredProgressBar = document.getElementById('expiredProgressBar');

  if (statTotalMembers) statTotalMembers.innerText = totalMembers;
  if (statActiveMembers) statActiveMembers.innerText = activeMembers;
  if (sidebarMembersCount) sidebarMembersCount.innerText = totalMembers;
  if (donutTotalCount) donutTotalCount.innerText = totalMembers;
  if (activeMembersCount) activeMembersCount.innerText = activeMembers;
  if (expiredMembersCount) expiredMembersCount.innerText = expiredMembers;

  const activePct = totalMembers > 0 ? Math.round((activeMembers / totalMembers) * 100) : 0;
  const expiredPct = totalMembers > 0 ? (100 - activePct) : 0;

  if (activeProgressBar) activeProgressBar.style.width = `${activePct}%`;
  if (expiredProgressBar) expiredProgressBar.style.width = `${expiredPct}%`;

  // Draw visual donut
  drawMembershipDonut(activeMembers, expiredMembers);

  // 2. Activities count
  const statTotalActivities = document.getElementById('statTotalActivities');
  if (statTotalActivities) {
    statTotalActivities.innerText = data.activities ? data.activities.length : 6;
  }

  // 3. Staff count
  const statTotalStaff = document.getElementById('statTotalStaff');
  if (statTotalStaff) {
    statTotalStaff.innerText = data.staff ? data.staff.length : 10;
  }

  // 4. Financial Calculations in Egyptian Pounds (EGP)
  const calculatedTransactionRevenue = (data.transactions || [])
    .filter(t => t.status === 'Completed')
    .reduce((sum, t) => sum + Number(t.amount || 0), 0);

  const baseRev = data.financials && data.financials.baseRevenue ? data.financials.baseRevenue : 485400;
  const baseExp = data.financials && data.financials.baseExpenses ? data.financials.baseExpenses : 192800;

  const totalRevenue = baseRev + calculatedTransactionRevenue;
  const totalExpenses = baseExp;
  const netBalance = totalRevenue - totalExpenses;

  const statTotalRevenue = document.getElementById('statTotalRevenue');
  const statTotalExpenses = document.getElementById('statTotalExpenses');
  const boxRevenue = document.getElementById('boxRevenue');
  const boxExpenses = document.getElementById('boxExpenses');
  const boxNetBalance = document.getElementById('boxNetBalance');

  const formatEGP = (num) => 'EGP ' + Number(num).toLocaleString('en-US');

  if (statTotalRevenue) statTotalRevenue.innerText = formatEGP(totalRevenue);
  if (statTotalExpenses) statTotalExpenses.innerText = formatEGP(totalExpenses);
  if (boxRevenue) boxRevenue.innerText = formatEGP(totalRevenue);
  if (boxExpenses) boxExpenses.innerText = formatEGP(totalExpenses);
  if (boxNetBalance) boxNetBalance.innerText = formatEGP(netBalance);

  // 5. Recent Club Operations Log (Last 6 entries)
  const recentTableBody = document.getElementById('recentTransactionsTableBody');
  if (recentTableBody) {
    const sortedTx = [...(data.transactions || [])].reverse().slice(0, 6);
    if (sortedTx.length === 0) {
      recentTableBody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">No club operations recorded</td></tr>`;
    } else {
      recentTableBody.innerHTML = sortedTx.map(tx => `
        <tr>
          <td class="ps-3 fw-semibold text-primary font-monospace">${tx.id}</td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <span class="avatar-sm rounded-circle bg-light border text-primary fw-bold px-2 py-1 small">
                ${tx.memberName ? tx.memberName.charAt(0) : 'M'}
              </span>
              <span class="fw-medium">${tx.memberName}</span>
            </div>
          </td>
          <td><span class="badge bg-light text-dark border">${tx.plan || 'General Fee'}</span></td>
          <td class="fw-bold text-success">EGP ${Number(tx.amount).toLocaleString('en-US')}</td>
          <td><i class="bi bi-credit-card text-muted me-1"></i>${tx.method}</td>
          <td class="text-muted small">${tx.date}</td>
          <td class="pe-3 text-end">
            <span class="badge ${tx.status === 'Completed' ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-warning-subtle text-warning border border-warning-subtle'} rounded-pill px-2 py-1">
              ${tx.status}
            </span>
          </td>
        </tr>
      `).join('');
    }
  }

  // 6. Facilities Mini List
  const facilitiesList = document.getElementById('facilitiesMiniList');
  if (facilitiesList) {
    facilitiesList.innerHTML = (data.facilities || []).slice(0, 5).map(fac => `
      <li class="list-group-item d-flex justify-content-between align-items-center py-3 px-3">
        <div>
          <h6 class="mb-0 fw-semibold text-dark fs-6">${fac.name}</h6>
          <small class="text-muted"><i class="bi bi-geo-alt me-1"></i>${fac.type} &bull; Capacity: ${fac.capacity}</small>
        </div>
        <span class="badge ${fac.status === 'Available' ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-danger-subtle text-danger border border-danger-subtle'} rounded-pill px-3 py-1">
          ${fac.status === 'Available' ? '&bull; Available' : '&bull; In Maintenance'}
        </span>
      </li>
    `).join('');
  }
}

// DOM Ready Handler
document.addEventListener('DOMContentLoaded', () => {
  // Initial Render of Dashboard Data
  renderDashboard();

  // Sidebar Mobile Toggle Handlers
  const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');
  const appSidebar = document.getElementById('appSidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  function openSidebar() {
    if (appSidebar) appSidebar.classList.add('show');
    if (sidebarOverlay) sidebarOverlay.classList.add('show');
  }

  function closeSidebar() {
    if (appSidebar) appSidebar.classList.remove('show');
    if (sidebarOverlay) sidebarOverlay.classList.remove('show');
  }

  if (sidebarToggleBtn) sidebarToggleBtn.addEventListener('click', openSidebar);
  if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);
});
