/**
 * CHAMPIONS SPORT CLUB - MEMBERS CONTROLLER (members.js)
 * Full CRUD, search, filter, export, and detailed profile viewing
 */

const CHAMPIONS_STORAGE_KEY = 'champions_sport_club_db';

// Fallback Default Egyptian Club Data if page opened directly
const DEFAULT_CHAMPIONS_DATA = {
  members: [
    { id: 'MEM-101', name: 'Mohamed Salah', phone: '+20 100 123 4567', dob: '1992-06-15', gender: 'Male', address: 'Zamalek, Cairo', emergencyContact: 'Capt. Gamal Salah (+20 100 999 8888)', sport: 'Football', regDate: '2024-01-10', status: 'Active', membershipPlan: 'Annual VIP All-Access' },
    { id: 'MEM-102', name: 'Ahmed Hassan', phone: '+20 111 234 5678', dob: '1995-03-22', gender: 'Male', address: 'Heliopolis, Cairo', emergencyContact: 'Mona Hassan (+20 111 777 6666)', sport: 'Basketball', regDate: '2024-01-15', status: 'Active', membershipPlan: 'Quarterly Basketball & Gym' },
    { id: 'MEM-103', name: 'Fatma El-Zahraa', phone: '+20 122 345 6789', dob: '1998-08-14', gender: 'Female', address: 'Maadi, Cairo', emergencyContact: 'Tarek Al-Sayed (+20 122 666 5555)', sport: 'Swimming', regDate: '2024-02-01', status: 'Active', membershipPlan: 'Monthly Swimming Pro' },
    { id: 'MEM-104', name: 'Mahmoud Al-Masry', phone: '+20 106 456 7890', dob: '1990-11-05', gender: 'Male', address: 'Smouha, Alexandria', emergencyContact: 'Nader Al-Masry (+20 106 555 4444)', sport: 'Gym', regDate: '2024-02-12', status: 'Active', membershipPlan: 'Annual Gym Elite' },
    { id: 'MEM-105', name: 'Nour El-Sherbini', phone: '+20 115 567 8901', dob: '1996-12-01', gender: 'Female', address: 'Sporting, Alexandria', emergencyContact: 'Atef El-Sherbini (+20 115 444 3333)', sport: 'Tennis', regDate: '2024-02-20', status: 'Active', membershipPlan: 'Annual Tennis Gold' },
    { id: 'MEM-106', name: 'Omar Gaber', phone: '+20 109 678 9012', dob: '1993-04-18', gender: 'Male', address: 'Dokki, Giza', emergencyContact: 'Hoda Gaber (+20 109 333 2222)', sport: 'Football', regDate: '2023-08-10', status: 'Expired', membershipPlan: 'Monthly Football' },
    { id: 'MEM-107', name: 'Salma El-Demerdash', phone: '+20 128 789 0123', dob: '2000-09-30', gender: 'Female', address: 'New Cairo, Cairo', emergencyContact: 'Kareem El-Demerdash (+20 128 222 1111)', sport: 'Yoga', regDate: '2024-03-05', status: 'Active', membershipPlan: 'Quarterly Yoga & Wellness' },
    { id: 'MEM-108', name: 'Tarek Hegazy', phone: '+20 101 890 1234', dob: '1988-07-25', gender: 'Male', address: 'Sheikh Zayed, Giza', emergencyContact: 'Dina Hegazy (+20 101 111 0000)', sport: 'Gym', regDate: '2023-09-15', status: 'Expired', membershipPlan: 'Monthly Gym Basic' },
    { id: 'MEM-109', name: 'Farida Osman', phone: '+20 112 901 2345', dob: '1997-02-14', gender: 'Female', address: 'Nasr City, Cairo', emergencyContact: 'Hisham Osman (+20 112 000 9999)', sport: 'Swimming', regDate: '2024-03-18', status: 'Active', membershipPlan: 'Monthly Swimming Pro' },
    { id: 'MEM-110', name: 'Kareem El-Shenawy', phone: '+20 120 012 3456', dob: '1994-10-10', gender: 'Male', address: 'Agouza, Giza', emergencyContact: 'Ali El-Shenawy (+20 120 888 7777)', sport: 'Tennis', regDate: '2024-04-02', status: 'Active', membershipPlan: 'Annual Tennis Gold' }
  ],
  activities: [],
  staff: [],
  facilities: [],
  transactions: [],
  financials: { baseRevenue: 485400, baseExpenses: 192800 },
  facilityBookings: []
};

// Database helper
const ChampionsDB = {
  get() {
    try {
      const stored = localStorage.getItem(CHAMPIONS_STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(CHAMPIONS_STORAGE_KEY, JSON.stringify(DEFAULT_CHAMPIONS_DATA));
        return DEFAULT_CHAMPIONS_DATA;
      }
      return JSON.parse(stored);
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

// State Variables
let currentDeleteMemberId = null;
let currentViewMemberId = null;

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

// Generate Initials
function getInitials(name) {
  if (!name) return 'CH';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Render Members Table & Counters
function renderMembers() {
  const db = ChampionsDB.get();
  const members = db.members || [];

  // Update Counters
  const countAll = members.length;
  const countActive = members.filter(m => m.status === 'Active').length;
  const countExpired = countAll - countActive;

  document.getElementById('countAllMembers').innerText = countAll;
  document.getElementById('countActiveMembers').innerText = countActive;
  document.getElementById('countExpiredMembers').innerText = countExpired;
  document.getElementById('sidebarMembersBadge').innerText = countAll;

  // Search & Filter criteria
  const query = (document.getElementById('memberSearchInput').value || '').toLowerCase().trim();
  const filterStatus = document.getElementById('filterStatusSelect').value;
  const filterSport = document.getElementById('filterSportSelect').value;

  const filteredMembers = members.filter(m => {
    // Status Filter
    if (filterStatus !== 'ALL' && m.status !== filterStatus) return false;
    // Sport Filter
    if (filterSport !== 'ALL' && m.sport !== filterSport) return false;
    // Search Query (Name, ID, Phone, Address)
    if (query) {
      const matchName = (m.name || '').toLowerCase().includes(query);
      const matchId = (m.id || '').toLowerCase().includes(query);
      const matchPhone = (m.phone || '').toLowerCase().includes(query);
      const matchAddress = (m.address || '').toLowerCase().includes(query);
      if (!matchName && !matchId && !matchPhone && !matchAddress) return false;
    }
    return true;
  });

  document.getElementById('membersDisplayCount').innerText = `Showing ${filteredMembers.length} of ${countAll} members`;

  const tbody = document.getElementById('membersTableBody');
  if (filteredMembers.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" class="text-center py-5 text-muted">
          <i class="bi bi-person-x fs-1 d-block mb-2 text-secondary opacity-50"></i>
          No club members match the selected search or filter criteria.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filteredMembers.map(m => {
    const isFemale = m.gender === 'Female';
    const initials = getInitials(m.name);
    return `
      <tr>
        <td class="ps-3 font-monospace fw-bold text-primary">${m.id}</td>
        <td>
          <div class="d-flex align-items-center gap-2">
            <div class="member-avatar ${isFemale ? 'female' : ''}">
              ${initials}
            </div>
            <div>
              <span class="fw-bold text-dark d-block">${m.name}</span>
              <small class="text-muted"><i class="bi bi-gender-${isFemale ? 'female text-pink' : 'male text-primary'}"></i> ${m.gender}</small>
            </div>
          </div>
        </td>
        <td class="small fw-semibold text-secondary">
          <i class="bi bi-telephone-fill text-muted me-1"></i>${m.phone}
        </td>
        <td class="small text-muted">${m.dob}</td>
        <td class="small text-truncate" style="max-width: 170px;" title="${m.address}">
          <i class="bi bi-geo-alt text-danger me-1"></i>${m.address}
        </td>
        <td>
          <span class="sport-badge ${m.sport}">
            ${m.sport}
          </span>
        </td>
        <td class="small text-muted">${m.regDate}</td>
        <td>
          <span class="badge ${m.status === 'Active' ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-danger-subtle text-danger border border-danger-subtle'} rounded-pill px-3 py-1 fw-semibold">
            ${m.status === 'Active' ? '● Active' : '● Expired'}
          </span>
        </td>
        <td class="pe-3 text-end">
          <div class="btn-group btn-group-sm">
            <button class="btn btn-light border text-primary" onclick="viewMember('${m.id}')" title="View Full Details">
              <i class="bi bi-eye"></i>
            </button>
            <button class="btn btn-light border text-secondary" onclick="openEditMember('${m.id}')" title="Edit Member">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-light border text-danger" onclick="confirmDeleteMember('${m.id}')" title="Delete Member">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Reset and open Add Member modal
function openAddMember() {
  document.getElementById('memberForm').reset();
  document.getElementById('memberIdInput').value = '';
  document.getElementById('memberModalLabel').innerHTML = '<i class="bi bi-person-plus-fill me-2"></i> Register New Member';
  
  // Set default registration date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('memberRegDateInput').value = today;
  document.getElementById('memberDobInput').value = '1998-01-01';
}

// Open Edit Member modal
function openEditMember(memberId) {
  const db = ChampionsDB.get();
  const member = db.members.find(m => m.id === memberId);
  if (!member) return;

  document.getElementById('memberIdInput').value = member.id;
  document.getElementById('memberNameInput').value = member.name;
  document.getElementById('memberPhoneInput').value = member.phone;
  document.getElementById('memberDobInput').value = member.dob;
  document.getElementById('memberGenderSelect').value = member.gender;
  document.getElementById('memberSportSelect').value = member.sport;
  document.getElementById('memberAddressInput').value = member.address;
  document.getElementById('memberEmergencyInput').value = member.emergencyContact || '';
  document.getElementById('memberRegDateInput').value = member.regDate;
  document.getElementById('memberStatusSelect').value = member.status;

  document.getElementById('memberModalLabel').innerHTML = `<i class="bi bi-pencil-square me-2"></i> Edit Member: ${member.id}`;

  const memberModal = new bootstrap.Modal(document.getElementById('memberModal'));
  memberModal.show();
}

// Save Member (Add or Edit)
function handleSaveMember(e) {
  e.preventDefault();

  const id = document.getElementById('memberIdInput').value.trim();
  const name = document.getElementById('memberNameInput').value.trim();
  const phone = document.getElementById('memberPhoneInput').value.trim();
  const dob = document.getElementById('memberDobInput').value;
  const gender = document.getElementById('memberGenderSelect').value;
  const sport = document.getElementById('memberSportSelect').value;
  const address = document.getElementById('memberAddressInput').value.trim();
  const emergencyContact = document.getElementById('memberEmergencyInput').value.trim();
  const regDate = document.getElementById('memberRegDateInput').value;
  const status = document.getElementById('memberStatusSelect').value;

  const db = ChampionsDB.get();

  if (id) {
    // Edit existing
    const index = db.members.findIndex(m => m.id === id);
    if (index !== -1) {
      db.members[index] = {
        ...db.members[index],
        name,
        phone,
        dob,
        gender,
        sport,
        address,
        emergencyContact,
        regDate,
        status
      };
      ChampionsDB.save(db);
      showToast(`Member ${name} (${id}) updated successfully!`, 'success');
    }
  } else {
    // Create new with automatic ID sequence
    const nextNum = db.members.length > 0
      ? Math.max(...db.members.map(m => parseInt(m.id.replace(/\D/g, '')) || 100)) + 1
      : 101;
    const newId = `MEM-${nextNum}`;

    const newMember = {
      id: newId,
      name,
      phone,
      dob,
      gender,
      sport,
      address,
      emergencyContact,
      regDate,
      status,
      membershipPlan: 'Standard Activity Pass'
    };

    db.members.push(newMember);
    ChampionsDB.save(db);
    showToast(`New member ${name} registered with ID ${newId}!`, 'success');
  }

  // Close modal and refresh
  const modalEl = document.getElementById('memberModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();

  renderMembers();
}

// View Comprehensive Member Profile
function viewMember(memberId) {
  const db = ChampionsDB.get();
  const m = db.members.find(item => item.id === memberId);
  if (!m) return;

  currentViewMemberId = memberId;

  const container = document.getElementById('viewMemberDetailsBody');
  const isFemale = m.gender === 'Female';
  const initials = getInitials(m.name);

  container.innerHTML = `
    <div class="text-center pb-3 border-bottom mb-3">
      <div class="member-avatar mx-auto mb-2 ${isFemale ? 'female' : ''}" style="width: 64px; height: 64px; font-size: 1.5rem;">
        ${initials}
      </div>
      <h5 class="fw-bold mb-1">${m.name}</h5>
      <span class="badge ${m.status === 'Active' ? 'bg-success' : 'bg-danger'} rounded-pill px-3 py-1">
        ${m.status} Membership
      </span>
      <div class="text-muted small mt-1">Club ID: <strong class="font-monospace text-primary">${m.id}</strong></div>
    </div>

    <div class="profile-detail-row">
      <span class="profile-detail-label"><i class="bi bi-telephone text-primary me-2"></i>Phone Number</span>
      <span class="profile-detail-val">${m.phone}</span>
    </div>
    <div class="profile-detail-row">
      <span class="profile-detail-label"><i class="bi bi-calendar-event text-primary me-2"></i>Date of Birth</span>
      <span class="profile-detail-val">${m.dob}</span>
    </div>
    <div class="profile-detail-row">
      <span class="profile-detail-label"><i class="bi bi-gender-ambiguous text-primary me-2"></i>Gender</span>
      <span class="profile-detail-val">${m.gender}</span>
    </div>
    <div class="profile-detail-row">
      <span class="profile-detail-label"><i class="bi bi-geo-alt text-primary me-2"></i>Address</span>
      <span class="profile-detail-val">${m.address}</span>
    </div>
    <div class="profile-detail-row">
      <span class="profile-detail-label"><i class="bi bi-dribbble text-primary me-2"></i>Primary Sport</span>
      <span class="profile-detail-val"><span class="sport-badge ${m.sport}">${m.sport}</span></span>
    </div>
    <div class="profile-detail-row">
      <span class="profile-detail-label"><i class="bi bi-clock-history text-primary me-2"></i>Registration Date</span>
      <span class="profile-detail-val">${m.regDate}</span>
    </div>
    <div class="profile-detail-row">
      <span class="profile-detail-label"><i class="bi bi-heart-pulse text-danger me-2"></i>Emergency Contact</span>
      <span class="profile-detail-val text-danger fw-semibold">${m.emergencyContact || 'Not recorded'}</span>
    </div>
  `;

  const viewModal = new bootstrap.Modal(document.getElementById('viewMemberModal'));
  viewModal.show();
}

// Trigger Delete Confirmation
function confirmDeleteMember(memberId) {
  const db = ChampionsDB.get();
  const member = db.members.find(m => m.id === memberId);
  if (!member) return;

  currentDeleteMemberId = memberId;
  document.getElementById('deleteMemberNameText').innerText = `${member.name} (${member.id})`;

  const modal = new bootstrap.Modal(document.getElementById('deleteConfirmModal'));
  modal.show();
}

// Execute Member Deletion
function executeDelete() {
  if (!currentDeleteMemberId) return;

  const db = ChampionsDB.get();
  const memberToDelete = db.members.find(m => m.id === currentDeleteMemberId);
  db.members = db.members.filter(m => m.id !== currentDeleteMemberId);
  ChampionsDB.save(db);

  const modalEl = document.getElementById('deleteConfirmModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();

  renderMembers();
  showToast(`Member ${memberToDelete ? memberToDelete.name : currentDeleteMemberId} removed from club records.`, 'danger');
  currentDeleteMemberId = null;
}

// DOM Setup
document.addEventListener('DOMContentLoaded', () => {
  renderMembers();

  // Search and filter listeners
  document.getElementById('memberSearchInput').addEventListener('input', renderMembers);
  document.getElementById('filterStatusSelect').addEventListener('change', renderMembers);
  document.getElementById('filterSportSelect').addEventListener('change', renderMembers);

  // Form submission
  document.getElementById('memberForm').addEventListener('submit', handleSaveMember);

  // Add Member button click
  document.getElementById('openAddMemberBtn').addEventListener('click', openAddMember);

  // Confirm delete button
  document.getElementById('confirmDeleteBtn').addEventListener('click', executeDelete);

  // Edit from View Modal button
  document.getElementById('editFromViewBtn').addEventListener('click', () => {
    const viewModalEl = document.getElementById('viewMemberModal');
    const viewModalInstance = bootstrap.Modal.getInstance(viewModalEl);
    if (viewModalInstance) viewModalInstance.hide();

    if (currentViewMemberId) {
      setTimeout(() => openEditMember(currentViewMemberId), 300);
    }
  });

  // Check URL query parameters (e.g. ?action=new)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('action') === 'new') {
    openAddMember();
    const modal = new bootstrap.Modal(document.getElementById('memberModal'));
    modal.show();
  }

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

