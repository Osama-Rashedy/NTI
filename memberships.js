const CHAMPIONS_STORAGE_KEY = 'champions_sport_club_db';

const DEFAULT_CHAMPIONS_DATA = {
  members: [
    { id: 'MEM-101', name: 'Mohamed Salah', phone: '+20 100 123 4567', dob: '1992-06-15', gender: 'Male', address: 'Zamalek, Cairo', sport: 'Football', regDate: '2024-01-10', status: 'Active', membershipPlan: 'Annually' },
    { id: 'MEM-102', name: 'Ahmed Hassan', phone: '+20 111 234 5678', dob: '1995-03-22', gender: 'Male', address: 'Heliopolis, Cairo', sport: 'Basketball', regDate: '2024-01-15', status: 'Active', membershipPlan: 'Monthly' },
    { id: 'MEM-103', name: 'Fatma El-Zahraa', phone: '+20 122 345 6789', dob: '1998-08-14', gender: 'Female', address: 'Maadi, Cairo', sport: 'Swimming', regDate: '2024-02-01', status: 'Active', membershipPlan: 'Monthly' },
    { id: 'MEM-104', name: 'Mahmoud Al-Masry', phone: '+20 106 456 7890', dob: '1990-11-05', gender: 'Male', address: 'Smouha, Alexandria', sport: 'Gym', regDate: '2024-02-12', status: 'Active', membershipPlan: 'Annually' },
    { id: 'MEM-105', name: 'Nour El-Sherbini', phone: '+20 115 567 8901', dob: '1996-12-01', gender: 'Female', address: 'Sporting, Alexandria', sport: 'Tennis', regDate: '2024-02-20', status: 'Active', membershipPlan: 'Annually' },
    { id: 'MEM-106', name: 'Omar Gaber', phone: '+20 109 678 9012', dob: '1993-04-18', gender: 'Male', address: 'Dokki, Giza', sport: 'Football', regDate: '2023-08-10', status: 'Expired', membershipPlan: 'Monthly' },
    { id: 'MEM-107', name: 'Salma El-Demerdash', phone: '+20 128 789 0123', dob: '2000-09-30', gender: 'Female', address: 'New Cairo, Cairo', sport: 'Yoga', regDate: '2024-03-05', status: 'Active', membershipPlan: 'Monthly' },
    { id: 'MEM-108', name: 'Tarek Hegazy', phone: '+20 101 890 1234', dob: '1988-07-25', gender: 'Male', address: 'Sheikh Zayed, Giza', sport: 'Gym', regDate: '2023-09-15', status: 'Expired', membershipPlan: 'Monthly' },
    { id: 'MEM-109', name: 'Farida Osman', phone: '+20 112 901 2345', dob: '1997-02-14', gender: 'Female', address: 'Nasr City, Cairo', sport: 'Swimming', regDate: '2024-03-18', status: 'Active', membershipPlan: 'Monthly' },
    { id: 'MEM-110', name: 'Kareem El-Shenawy', phone: '+20 120 012 3456', dob: '1994-10-10', gender: 'Male', address: 'Agouza, Giza', sport: 'Tennis', regDate: '2024-04-02', status: 'Active', membershipPlan: 'Annually' }
  ],
  subscriptions: [
    { id: 'SUB-501', memberId: 'MEM-101', memberName: 'Mohamed Salah', type: 'Annually', plan: 'Annually', sport: 'Football', startDate: '2024-01-10', endDate: '2025-01-09', price: 15000, status: 'Active' },
    { id: 'SUB-502', memberId: 'MEM-102', memberName: 'Ahmed Hassan', type: 'Monthly', plan: 'Monthly', sport: 'Basketball', startDate: '2024-01-15', endDate: '2024-04-14', price: 3800, status: 'Active' },
    { id: 'SUB-503', memberId: 'MEM-103', memberName: 'Fatma El-Zahraa', type: 'Monthly', plan: 'Monthly', sport: 'Swimming', startDate: '2024-04-01', endDate: '2024-04-30', price: 1500, status: 'Active' },
    { id: 'SUB-504', memberId: 'MEM-104', memberName: 'Mahmoud Al-Masry', type: 'Annually', plan: 'Annually', sport: 'Gym', startDate: '2024-02-12', endDate: '2025-02-11', price: 9000, status: 'Active' },
    { id: 'SUB-505', memberId: 'MEM-105', memberName: 'Nour El-Sherbini', type: 'Annually', plan: 'Annually', sport: 'Tennis', startDate: '2024-02-20', endDate: '2025-02-19', price: 18000, status: 'Active' },
    { id: 'SUB-506', memberId: 'MEM-106', memberName: 'Omar Gaber', type: 'Monthly', plan: 'Monthly', sport: 'Football', startDate: '2023-08-10', endDate: '2023-09-09', price: 1200, status: 'Expired' },
    { id: 'SUB-507', memberId: 'MEM-107', memberName: 'Salma El-Demerdash', type: 'Monthly', plan: 'Monthly', sport: 'Yoga', startDate: '2024-03-05', endDate: '2024-06-04', price: 3200, status: 'Active' },
    { id: 'SUB-508', memberId: 'MEM-108', memberName: 'Tarek Hegazy', type: 'Monthly', plan: 'Monthly', sport: 'Gym', startDate: '2023-09-15', endDate: '2023-10-14', price: 900, status: 'Expired' }
  ],
  transactions: [
    { id: 'TXN-901', memberId: 'MEM-101', memberName: 'Mohamed Salah', plan: 'Annually', amount: 15000, method: 'Visa Card', date: '2024-01-10', status: 'Completed' },
    { id: 'TXN-902', memberId: 'MEM-102', memberName: 'Ahmed Hassan', plan: 'Monthly', amount: 3800, method: 'Meeza Card', date: '2024-01-15', status: 'Completed' },
    { id: 'TXN-903', memberId: 'MEM-103', memberName: 'Fatma El-Zahraa', plan: 'Monthly', amount: 1500, method: 'Cash', date: '2024-04-01', status: 'Completed' },
    { id: 'TXN-904', memberId: 'MEM-104', memberName: 'Mahmoud Al-Masry', plan: 'Annually', amount: 9000, method: 'Bank Transfer', date: '2024-02-12', status: 'Completed' },
    { id: 'TXN-905', memberId: 'MEM-105', memberName: 'Nour El-Sherbini', plan: 'Annually', amount: 18000, method: 'Mastercard', date: '2024-02-20', status: 'Completed' },
    { id: 'TXN-906', memberId: 'MEM-107', memberName: 'Salma El-Demerdash', plan: 'Monthly', amount: 3200, method: 'Fawry Pay', date: '2024-03-05', status: 'Completed' },
    { id: 'TXN-907', memberId: 'MEM-109', memberName: 'Farida Osman', plan: 'Monthly', amount: 1500, method: 'Visa Card', date: '2024-03-18', status: 'Completed' },
    { id: 'TXN-908', memberId: 'MEM-110', memberName: 'Kareem El-Shenawy', plan: 'Annually', amount: 18000, method: 'Cash', date: '2024-04-02', status: 'Completed' }
  ],
  activities: [],
  staff: [],
  facilities: [],
  financials: { baseRevenue: 485400, baseExpenses: 192800 },
  facilityBookings: []
};

// Database Access
const ChampionsDB = {
  get() {
    try {
      const stored = localStorage.getItem(CHAMPIONS_STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(CHAMPIONS_STORAGE_KEY, JSON.stringify(DEFAULT_CHAMPIONS_DATA));
        return DEFAULT_CHAMPIONS_DATA;
      }
      const parsed = JSON.parse(stored);
      // Ensure subscriptions array exists
      if (!parsed.subscriptions) {
        parsed.subscriptions = DEFAULT_CHAMPIONS_DATA.subscriptions;
        this.save(parsed);
      }
      return parsed;
    } catch (e) {
      console.error(e);
      return DEFAULT_CHAMPIONS_DATA;
    }
  },
  save(data) {
    try {
      localStorage.setItem(CHAMPIONS_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  }
};

let currentRenewSubId = null;

// Toast Helper
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

// Format Plan name to strictly 'Monthly' or 'Annually'
function formatPlanName(plan) {
  if (!plan) return 'Monthly';
  const p = String(plan).toLowerCase();
  if (p.includes('annual') || p.includes('year') || p.includes('سنوي')) {
    return 'Annually';
  }
  return 'Monthly';
}

// Populate Member Dropdowns in Modals
function populateMemberDropdowns() {
  const db = ChampionsDB.get();
  const members = db.members || [];

  const subMemberSelect = document.getElementById('subMemberSelect');
  const payMemberSelect = document.getElementById('payMemberSelect');

  const optionsHtml = members.map(m => `
    <option value="${m.id}" data-name="${m.name}" data-sport="${m.sport}">
      ${m.name} (${m.id}) - Sport: ${m.sport} [${m.status}]
    </option>
  `).join('');

  if (subMemberSelect) subMemberSelect.innerHTML = optionsHtml;
  if (payMemberSelect) payMemberSelect.innerHTML = optionsHtml;
}

// Render Subscriptions & Payments
function renderMemberships() {
  const db = ChampionsDB.get();
  const subscriptions = db.subscriptions || [];
  const transactions = db.transactions || [];

  // Update KPI Cards
  const totalRev = transactions
    .filter(t => t.status === 'Completed')
    .reduce((sum, t) => sum + Number(t.amount || 0), 0);
  
  const activeSubsCount = subscriptions.filter(s => s.status === 'Active').length;
  const expiredSubsCount = subscriptions.length - activeSubsCount;

  document.getElementById('kpiTotalRevenue').innerText = `EGP ${totalRev.toLocaleString('en-US')}`;
  document.getElementById('kpiActiveSubs').innerText = activeSubsCount;
  document.getElementById('kpiExpiredSubs').innerText = expiredSubsCount;
  document.getElementById('kpiTotalTransactions').innerText = transactions.length;

  // 1. Render Subscriptions Table with Filter (Action column removed)
  const subFilter = document.getElementById('filterSubStatusSelect').value;
  const filteredSubs = subscriptions.filter(s => {
    if (subFilter !== 'ALL' && s.status !== subFilter) return false;
    return true;
  });

  const subsTbody = document.getElementById('subscriptionsTableBody');
  if (filteredSubs.length === 0) {
    subsTbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">No subscriptions found</td></tr>`;
  } else {
    subsTbody.innerHTML = filteredSubs.map(s => {
      const isExpired = s.status === 'Expired';
      return `
        <tr>
          <td class="ps-3 font-monospace fw-bold text-primary">${s.id}</td>
          <td>
            <div class="fw-bold text-dark">${s.memberName}</div>
            <small class="text-muted font-monospace">${s.memberId}</small>
          </td>
          <td>
            <span class="badge bg-light text-dark border fw-semibold">${formatPlanName(s.plan || s.type)}</span>
          </td>
          <td class="small text-muted">${s.startDate}</td>
          <td class="small ${isExpired ? 'text-danger fw-bold' : 'text-muted'}">
            ${s.endDate} ${isExpired ? '<span class="badge bg-danger-subtle text-danger ms-1">Expired</span>' : ''}
          </td>
          <td class="fw-bold text-success">EGP ${Number(s.price).toLocaleString('en-US')}</td>
          <td class="pe-3">
            <span class="badge ${s.status === 'Active' ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-danger-subtle text-danger border border-danger-subtle'} rounded-pill px-3 py-1 fw-semibold">
              ${s.status === 'Active' ? '● Active' : '● Expired'}
            </span>
          </td>
        </tr>
      `;
    }).join('');
  }

  // 2. Render Payment Transactions Table with Search
  const payQuery = (document.getElementById('paymentSearchInput').value || '').toLowerCase().trim();
  const filteredTx = transactions.filter(t => {
    if (payQuery) {
      const matchName = (t.memberName || '').toLowerCase().includes(payQuery);
      const matchId = (t.id || '').toLowerCase().includes(payQuery);
      const matchMethod = (t.method || '').toLowerCase().includes(payQuery);
      const matchPlan = (t.plan || '').toLowerCase().includes(payQuery);
      if (!matchName && !matchId && !matchMethod && !matchPlan) return false;
    }
    return true;
  });

  const payTbody = document.getElementById('paymentsTableBody');
  if (filteredTx.length === 0) {
    payTbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">No payment records match criteria</td></tr>`;
  } else {
    // Reverse to show newest payments first
    payTbody.innerHTML = [...filteredTx].reverse().map(t => `
      <tr>
        <td class="ps-3 font-monospace fw-bold text-primary">${t.id}</td>
        <td>
          <span class="fw-bold text-dark d-block">${t.memberName}</span>
          <small class="text-muted font-monospace">${t.memberId || 'N/A'}</small>
        </td>
        <td><span class="badge bg-light text-dark border fw-semibold">${formatPlanName(t.plan)}</span></td>
        <td class="fw-bold text-success fs-6">EGP ${Number(t.amount).toLocaleString('en-US')}</td>
        <td><i class="bi bi-credit-card-2-front text-muted me-1"></i>${t.method}</td>
        <td class="small text-muted">${t.date}</td>
        <td class="pe-3 text-end">
          <span class="badge ${t.status === 'Completed' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'} rounded-pill px-3 py-1">
            ${t.status}
          </span>
        </td>
      </tr>
    `).join('');
  }
}

// Handle Create Subscription
function handleCreateSubscription(e) {
  e.preventDefault();

  const subMemberSelect = document.getElementById('subMemberSelect');
  const memberId = subMemberSelect.value;
  const selectedOption = subMemberSelect.options[subMemberSelect.selectedIndex];
  const memberName = selectedOption.getAttribute('data-name');
  const memberSport = selectedOption.getAttribute('data-sport') || 'Fitness';

  const type = document.getElementById('subDurationSelect').value;
  const plan = document.getElementById('subPlanNameInput').value.trim();
  const price = Number(document.getElementById('subPriceInput').value) || 0;
  const startDate = document.getElementById('subStartDateInput').value;
  const endDate = document.getElementById('subEndDateInput').value;
  const autoRecord = document.getElementById('autoRecordPaymentCheck').checked;

  const db = ChampionsDB.get();

  // Create unique Sub ID
  const nextSubNum = db.subscriptions && db.subscriptions.length > 0
    ? Math.max(...db.subscriptions.map(s => parseInt(s.id.replace(/\D/g, '')) || 500)) + 1
    : 501;
  const subId = `SUB-${nextSubNum}`;

  const newSub = {
    id: subId,
    memberId,
    memberName,
    type,
    plan,
    sport: memberSport,
    startDate,
    endDate,
    price,
    status: 'Active'
  };

  db.subscriptions.push(newSub);

  // Update member status to Active
  const memberIndex = db.members.findIndex(m => m.id === memberId);
  if (memberIndex !== -1) {
    db.members[memberIndex].status = 'Active';
    db.members[memberIndex].membershipPlan = plan;
  }

  // Auto record payment transaction if requested
  if (autoRecord) {
    const nextTxNum = db.transactions.length > 0
      ? Math.max(...db.transactions.map(t => parseInt(t.id.replace(/\D/g, '')) || 900)) + 1
      : 901;
    const txId = `TXN-${nextTxNum}`;

    db.transactions.push({
      id: txId,
      memberId,
      memberName,
      plan: formatPlanName(type || plan),
      amount: price,
      method: 'Visa Card',
      date: startDate,
      status: 'Completed'
    });
  }

  ChampionsDB.save(db);

  const modalEl = document.getElementById('subscriptionModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();

  renderMemberships();
  showToast(`Subscription ${subId} successfully issued for ${memberName}!`, 'success');
}

// Handle Record Standalone Payment
function handleRecordPayment(e) {
  e.preventDefault();

  const payMemberSelect = document.getElementById('payMemberSelect');
  const memberId = payMemberSelect.value;
  const selectedOption = payMemberSelect.options[payMemberSelect.selectedIndex];
  const memberName = selectedOption.getAttribute('data-name');

  const plan = formatPlanName(document.getElementById('payDescriptionInput').value.trim());
  const amount = Number(document.getElementById('payAmountInput').value) || 0;
  const method = document.getElementById('payMethodSelect').value;
  const date = document.getElementById('payDateInput').value;

  const db = ChampionsDB.get();

  const nextTxNum = db.transactions.length > 0
    ? Math.max(...db.transactions.map(t => parseInt(t.id.replace(/\D/g, '')) || 900)) + 1
    : 901;
  const txId = `TXN-${nextTxNum}`;

  db.transactions.push({
    id: txId,
    memberId,
    memberName,
    plan,
    amount,
    method,
    date,
    status: 'Completed'
  });

  ChampionsDB.save(db);

  const modalEl = document.getElementById('paymentModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();

  renderMemberships();
  showToast(`Payment ${txId} for EGP ${amount.toLocaleString('en-US')} recorded successfully!`, 'success');
}

// Open Renew Modal
function openRenewModal(subId) {
  const db = ChampionsDB.get();
  const sub = db.subscriptions.find(s => s.id === subId);
  if (!sub) return;

  currentRenewSubId = subId;
  document.getElementById('renewMemberNameText').innerText = `${sub.memberName} (${sub.id})`;
  document.getElementById('renewPlanText').innerText = sub.plan;

  const modal = new bootstrap.Modal(document.getElementById('renewModal'));
  modal.show();
}

// Confirm Renewal Action
function confirmRenewSubscription() {
  if (!currentRenewSubId) return;

  const db = ChampionsDB.get();
  const sub = db.subscriptions.find(s => s.id === currentRenewSubId);
  if (!sub) return;

  // Extend end date by 30 days
  const currentEnd = new Date(sub.endDate);
  const now = new Date();
  const baseDate = currentEnd > now ? currentEnd : now;
  baseDate.setDate(baseDate.getDate() + 30);
  sub.endDate = baseDate.toISOString().split('T')[0];
  sub.status = 'Active';

  // Also ensure member status in members registry is Active
  const mem = db.members.find(m => m.id === sub.memberId);
  if (mem) mem.status = 'Active';

  // Automatically record a renewal payment record
  const nextTxNum = db.transactions.length > 0
    ? Math.max(...db.transactions.map(t => parseInt(t.id.replace(/\D/g, '')) || 900)) + 1
    : 901;
  const txId = `TXN-${nextTxNum}`;

  db.transactions.push({
    id: txId,
    memberId: sub.memberId,
    memberName: sub.memberName,
    plan: `Subscription Renewal - ${sub.plan}`,
    amount: sub.price,
    method: 'Cash / Meeza',
    date: new Date().toISOString().split('T')[0],
    status: 'Completed'
  });

  ChampionsDB.save(db);

  const modalEl = document.getElementById('renewModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();

  renderMemberships();
  showToast(`Subscription ${sub.id} renewed for ${sub.memberName} until ${sub.endDate}!`, 'success');
  currentRenewSubId = null;
}

// View and Print Official Receipt
function viewReceipt(txId) {
  const db = ChampionsDB.get();
  const tx = db.transactions.find(t => t.id === txId);
  if (!tx) return;

  const area = document.getElementById('receiptPrintArea');
  area.innerHTML = `
    <div class="official-receipt-box">
      <div class="receipt-header-brand d-flex justify-content-between align-items-center">
        <div>
          <h4 class="fw-bold mb-0 text-dark"><i class="bi bi-trophy-fill text-warning me-2"></i>CHAMPIONS</h4>
          <span class="small text-muted">SPORT CLUB • CAIRO, EGYPT</span>
          <div class="text-xs text-muted">Tax Reg: 482-991-301 | Ministry of Youth & Sports Lic. #2018/EG</div>
        </div>
        <div class="receipt-stamp">PAID & VERIFIED</div>
      </div>

      <div class="receipt-row">
        <span class="text-muted">Receipt Number:</span>
        <strong class="font-monospace text-primary">${tx.id}</strong>
      </div>
      <div class="receipt-row">
        <span class="text-muted">Date & Time:</span>
        <span>${tx.date} • Cairo Branch</span>
      </div>
      <div class="receipt-row">
        <span class="text-muted">Member Name:</span>
        <strong>${tx.memberName} (${tx.memberId || 'N/A'})</strong>
      </div>
      <div class="receipt-row">
        <span class="text-muted">Payment Method:</span>
        <span>${tx.method}</span>
      </div>
      <div class="receipt-row">
        <span class="text-muted">Item / Description:</span>
        <span class="text-dark fw-semibold">${tx.plan}</span>
      </div>

      <div class="receipt-row total-row">
        <span>TOTAL PAID (EGP):</span>
        <span class="text-success">EGP ${Number(tx.amount).toLocaleString('en-US')}</span>
      </div>

      <div class="mt-4 pt-3 border-top text-center text-muted small">
        Thank you for being a champion! Please retain this receipt for club access and facility bookings.
      </div>
    </div>
  `;

  const modal = new bootstrap.Modal(document.getElementById('receiptModal'));
  modal.show();
}

// DOM Setup
document.addEventListener('DOMContentLoaded', () => {
  populateMemberDropdowns();
  renderMemberships();

  // Search and filter listeners
  document.getElementById('filterSubStatusSelect').addEventListener('change', renderMemberships);
  document.getElementById('paymentSearchInput').addEventListener('input', renderMemberships);

  // Form listeners
  document.getElementById('subscriptionForm').addEventListener('submit', handleCreateSubscription);
  const recordPayForm = document.getElementById('recordPaymentForm');
  if (recordPayForm) {
    recordPayForm.addEventListener('submit', handleRecordPayment);
  }

  // Confirm renew button
  const confirmRenewBtn = document.getElementById('confirmRenewBtn');
  if (confirmRenewBtn) {
    confirmRenewBtn.addEventListener('click', confirmRenewSubscription);
  }

  // Modal open button defaults
  const openCreateBtn = document.getElementById('openCreateSubBtn');
  if (openCreateBtn) {
    openCreateBtn.addEventListener('click', () => {
      populateMemberDropdowns();
      const today = new Date().toISOString().split('T')[0];
      document.getElementById('subStartDateInput').value = today;
      // Set 1 year ahead default
      const nextYear = new Date();
      nextYear.setFullYear(nextYear.getFullYear() + 1);
      document.getElementById('subEndDateInput').value = nextYear.toISOString().split('T')[0];
    });
  }

  // URL query parameter (?action=pay)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('action') === 'pay') {
    populateMemberDropdowns();
    document.getElementById('payDateInput').value = new Date().toISOString().split('T')[0];
    const modal = new bootstrap.Modal(document.getElementById('paymentModal'));
    modal.show();
  }

  // Duration select change adjusts end date automatically
  document.getElementById('subDurationSelect').addEventListener('change', (e) => {
    const val = e.target.value;
    const startInput = document.getElementById('subStartDateInput').value || new Date().toISOString().split('T')[0];
    const startDate = new Date(startInput);

    if (val === 'Monthly') {
      startDate.setDate(startDate.getDate() + 30);
      document.getElementById('subPriceInput').value = 1200;
    } else if (val === 'Quarterly') {
      startDate.setDate(startDate.getDate() + 90);
      document.getElementById('subPriceInput').value = 3200;
    } else if (val === 'Annually') {
      startDate.setFullYear(startDate.getFullYear() + 1);
      document.getElementById('subPriceInput').value = 12000;
    } else {
      startDate.setDate(startDate.getDate() + 30);
      document.getElementById('subPriceInput').value = 1500;
    }
    document.getElementById('subEndDateInput').value = startDate.toISOString().split('T')[0];
  });

  // Sidebar Mobile Toggle
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
