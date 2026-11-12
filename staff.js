const CHAMPIONS_STORAGE_KEY = 'champions_sport_club_db';

const DEFAULT_CHAMPIONS_DATA = {
  members: [],
  activities: [],
  staff: [
    { id: 'STF-01', name: 'Capt. Mahmoud Al-Masry', role: 'Club Director / General Manager', department: 'Administration', phone: '+20 100 000 0001', email: 'm.almasry@champions-club.eg', shift: 'Morning & Full Time', sport: 'Administration' },
    { id: 'STF-02', name: 'Capt. Hossam Ashour', role: 'Head Football Coach', department: 'Football', phone: '+20 100 222 3333', email: 'h.ashour@champions-club.eg', shift: 'Evening Shift', sport: 'Football' },
    { id: 'STF-03', name: 'Capt. Rania El-Wany', role: 'Director of Aquatic Sports', department: 'Swimming', phone: '+20 100 333 4444', email: 'r.elwany@champions-club.eg', shift: 'Morning & Evening', sport: 'Swimming' },
    { id: 'STF-04', name: 'Capt. Mohamed Safwat', role: 'Head Tennis Pro', department: 'Tennis', phone: '+20 100 444 5555', email: 'm.safwat@champions-club.eg', shift: 'Afternoon Shift', sport: 'Tennis' },
    { id: 'STF-05', name: 'Capt. Tarek Hamed', role: 'Head Basketball Coach', department: 'Basketball', phone: '+20 100 555 6666', email: 't.hamed@champions-club.eg', shift: 'Evening Shift', sport: 'Basketball' },
    { id: 'STF-06', name: 'Capt. Mahmoud El-Attar', role: 'Chief Fitness Trainer', department: 'Gym', phone: '+20 100 666 7777', email: 'm.elattar@champions-club.eg', shift: 'Rotating Shift', sport: 'Gym' },
    { id: 'STF-07', name: 'Capt. Yasmine Rostom', role: 'Lead Yoga & Wellness Specialist', department: 'Yoga', phone: '+20 100 777 8888', email: 'y.rostom@champions-club.eg', shift: 'Morning & Evening', sport: 'Yoga' },
    { id: 'STF-08', name: 'Dr. Hazem Emam', role: 'Club Chief Sports Physician', department: 'Medical & Physio', phone: '+20 100 888 9999', email: 'h.emam@champions-club.eg', shift: 'Daily (12:00 - 18:00)', sport: 'Medical' },
    { id: 'STF-09', name: 'Mona El-Shazly', role: 'Membership Relations Manager', department: 'Administration', phone: '+20 100 999 1111', email: 'm.elshazly@champions-club.eg', shift: 'Morning Shift', sport: 'Administration' },
    { id: 'STF-10', name: 'Sherif Ekramy', role: 'Facilities & Security Head', department: 'Operations', phone: '+20 100 111 2222', email: 's.ekramy@champions-club.eg', shift: 'Full Day', sport: 'Operations' }
  ],
  facilities: [
    { id: 'FAC-01', name: 'Pitch A - Main Football Turf', type: 'Football Pitch', capacity: 50, status: 'Available', location: 'Outdoor Sector North' },
    { id: 'FAC-02', name: 'Olympic Pool 1', type: 'Swimming Pool', capacity: 30, status: 'Available', location: 'Aquatic Center Indoor' },
    { id: 'FAC-03', name: 'Clay Tennis Court 1', type: 'Tennis Court', capacity: 8, status: 'Available', location: 'Racquet Center Court 1' },
    { id: 'FAC-04', name: 'Clay Tennis Court 2', type: 'Tennis Court', capacity: 8, status: 'Maintenance', location: 'Racquet Center Court 2' },
    { id: 'FAC-05', name: 'Main Fitness & Weights Hall', type: 'Gym', capacity: 100, status: 'Available', location: 'Main Pavilion Floor 1' },
    { id: 'FAC-06', name: 'Zen Yoga Studio', type: 'Yoga Studio', capacity: 25, status: 'Available', location: 'Wellness Wing Floor 2' },
    { id: 'FAC-07', name: 'Indoor Basketball Arena', type: 'Basketball Arena', capacity: 40, status: 'Available', location: 'Sports Dome Area B' }
  ],
  facilityBookings: [
    { id: 'BKG-201', facility: 'Pitch A - Main Football Turf', organizer: 'Football Academy Match (Capt. Hossam Ashour)', date: '2026-11-08', time: '17:00 - 19:00', status: 'Confirmed' },
    { id: 'BKG-202', facility: 'Olympic Pool 1', organizer: 'Egyptian Youth Swimming Trials (Capt. Rania El-Wany)', date: '2026-11-09', time: '09:00 - 12:00', status: 'Confirmed' },
    { id: 'BKG-203', facility: 'Indoor Basketball Arena', organizer: 'Cairo Inter-Club Basketball League', date: '2026-11-09', time: '16:00 - 18:00', status: 'Confirmed' }
  ],
  transactions: [],
  financials: { baseRevenue: 485400, baseExpenses: 192800 }
};

const ChampionsDB = {
  get() {
    try {
      const stored = localStorage.getItem(CHAMPIONS_STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(CHAMPIONS_STORAGE_KEY, JSON.stringify(DEFAULT_CHAMPIONS_DATA));
        return DEFAULT_CHAMPIONS_DATA;
      }
      const parsed = JSON.parse(stored);
      if (!parsed.staff) parsed.staff = DEFAULT_CHAMPIONS_DATA.staff;
      if (!parsed.facilities) parsed.facilities = DEFAULT_CHAMPIONS_DATA.facilities;
      if (!parsed.facilityBookings) parsed.facilityBookings = DEFAULT_CHAMPIONS_DATA.facilityBookings;
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

let currentDeleteStaffId = null;

function showToast(message, type = 'success') {
  const toastEl = document.getElementById('actionToast');
  if (!toastEl) return;
  const toastBody = document.getElementById('toastMessage');
  const toastIcon = document.getElementById('toastIcon');

  toastEl.className = `toast align-items-center text-white border-0 shadow-lg ${type === 'success' ? 'bg-success' : type === 'danger' ? 'bg-danger' : 'bg-primary'
    }`;

  if (toastIcon) {
    toastIcon.className = type === 'success' ? 'bi bi-check-circle-fill fs-5' : 'bi bi-info-circle-fill fs-5';
  }

  if (toastBody) toastBody.innerText = message;
  const bsToast = new bootstrap.Toast(toastEl, { delay: 3500 });
  bsToast.show();
}

function getInitials(name) {
  if (!name) return 'ST';
  const clean = name.replace(/^(Capt\.|Dr\.|Coach)\s+/i, '').trim();
  const parts = clean.split(' ');
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function populateBookingFacilities() {
  const db = ChampionsDB.get();
  const select = document.getElementById('bookingFacilitySelect');
  if (!select) return;

  select.innerHTML = db.facilities.map(f => `
    <option value="${f.name}" ${f.status === 'Maintenance' ? 'disabled' : ''}>
      ${f.name} (${f.type}) - [${f.status}]
    </option>
  `).join('');
}

function renderStaff() {
  const db = ChampionsDB.get();
  const staff = db.staff || [];

  document.getElementById('staffCountBadge').innerText = staff.length;
  document.getElementById('sidebarStaffBadge').innerText = staff.length;

  const searchQuery = (document.getElementById('staffSearchInput').value || '').toLowerCase().trim();
  const deptFilter = document.getElementById('staffDeptFilter').value;

  const filtered = staff.filter(s => {
    if (deptFilter !== 'ALL' && s.department !== deptFilter) return false;
    if (searchQuery) {
      const matchName = (s.name || '').toLowerCase().includes(searchQuery);
      const matchRole = (s.role || '').toLowerCase().includes(searchQuery);
      const matchEmail = (s.email || '').toLowerCase().includes(searchQuery);
      const matchPhone = (s.phone || '').toLowerCase().includes(searchQuery);
      if (!matchName && !matchRole && !matchEmail && !matchPhone) return false;
    }
    return true;
  });

  document.getElementById('staffShowingLabel').innerText = `Showing ${filtered.length} of ${staff.length} staff members`;

  const grid = document.getElementById('staffGrid');
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-people fs-1 text-muted d-block mb-2"></i>
        <h5 class="text-secondary fw-semibold">No staff or coaches found</h5>
        <p class="text-muted small">Try adjusting your department filter or search keywords.</p>
      </div>
    `;
  } else {
    grid.innerHTML = filtered.map(s => {
      const initials = getInitials(s.name);
      return `
        <div class="col-xl-4 col-md-6">
          <div class="card staff-card shadow-sm h-100 bg-white">
            <div class="card-body p-3">
              <div class="d-flex align-items-center gap-3 mb-3">
                <div class="staff-avatar-badge">
                  ${initials}
                </div>
                <div class="overflow-hidden">
                  <h6 class="fw-bold mb-0 text-dark text-truncate">${s.name}</h6>
                  <span class="badge bg-primary-subtle text-primary fw-medium small mb-1">${s.role}</span>
                  <small class="text-muted d-block font-monospace">${s.id} • ${s.department}</small>
                </div>
              </div>

              <div class="border-top pt-2 small">
                <div class="d-flex justify-content-between py-1">
                  <span class="text-muted"><i class="bi bi-clock me-1 text-secondary"></i>Shift:</span>
                  <strong class="text-dark">${s.shift}</strong>
                </div>
                <div class="d-flex justify-content-between py-1">
                  <span class="text-muted"><i class="bi bi-telephone me-1 text-secondary"></i>Phone:</span>
                  <span class="text-dark fw-semibold">${s.phone}</span>
                </div>
                <div class="d-flex justify-content-between py-1">
                  <span class="text-muted"><i class="bi bi-envelope me-1 text-secondary"></i>Email:</span>
                  <span class="text-muted text-truncate" style="max-width: 170px;" title="${s.email}">${s.email}</span>
                </div>
              </div>

              <div class="d-flex justify-content-end gap-2 pt-3 border-top mt-2">
                <button class="btn btn-sm btn-light border text-secondary" onclick="openEditStaff('${s.id}')">
                  <i class="bi bi-pencil me-1"></i> Edit
                </button>
                <button class="btn btn-sm btn-light border text-danger" onclick="confirmDeleteStaff('${s.id}')">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  const tbody = document.getElementById('staffTableBody');
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">No staff members found</td></tr>`;
  } else {
    tbody.innerHTML = filtered.map(s => `
      <tr>
        <td class="ps-3 font-monospace fw-bold text-primary">${s.id}</td>
        <td>
          <div class="fw-bold text-dark">${s.name}</div>
          <small class="text-muted">${s.role}</small>
        </td>
        <td><span class="badge bg-light text-dark border">${s.department}</span></td>
        <td class="small">${s.shift}</td>
        <td class="small fw-semibold text-secondary">${s.phone}</td>
        <td class="small text-muted font-monospace">${s.email}</td>
        <td class="pe-3 text-end">
          <div class="btn-group btn-group-sm">
            <button class="btn btn-light border text-secondary" onclick="openEditStaff('${s.id}')" title="Edit Staff">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-light border text-danger" onclick="confirmDeleteStaff('${s.id}')" title="Delete Staff">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  }
}

function renderFacilities() {
  const db = ChampionsDB.get();
  const facilities = db.facilities || [];
  const bookings = db.facilityBookings || [];

  document.getElementById('facilitiesCountBadge').innerText = facilities.length;

  const cardsRow = document.getElementById('facilitiesCardsRow');
  if (cardsRow) {
    cardsRow.innerHTML = facilities.map(f => {
      const isAvailable = f.status === 'Available';
      return `
        <div class="col-xl-3 col-md-4 col-sm-6">
          <div class="facility-kpi-card shadow-sm h-100">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <span class="badge bg-light text-dark border font-monospace">${f.id}</span>
              <span class="badge ${isAvailable ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'} rounded-pill">
                <span class="status-dot-pulse ${isAvailable ? 'available' : 'maintenance'}"></span>
                ${f.status}
              </span>
            </div>
            <h6 class="fw-bold mb-1 text-dark">${f.name}</h6>
            <div class="small text-muted mb-2"><i class="bi bi-geo-alt text-danger me-1"></i>${f.location}</div>
            <div class="d-flex justify-content-between align-items-center pt-2 border-top small text-muted">
              <span>Cap: ${f.capacity} users</span>
              <button class="btn btn-xs btn-link text-decoration-none p-0 fw-semibold text-primary" onclick="toggleFacilityStatus('${f.id}')">
                Switch Status
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  const facTbody = document.getElementById('facilitiesTableBody');
  if (facTbody) {
    facTbody.innerHTML = facilities.map(f => {
      const isAvailable = f.status === 'Available';
      return `
        <tr>
          <td class="ps-3 font-monospace fw-bold text-primary">${f.id}</td>
          <td class="fw-bold text-dark">${f.name}</td>
          <td><span class="badge bg-light text-dark border">${f.type}</span></td>
          <td class="small text-muted"><i class="bi bi-geo-alt me-1"></i>${f.location}</td>
          <td class="small fw-semibold">${f.capacity} athletes</td>
          <td>
            <span class="badge ${isAvailable ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-danger-subtle text-danger border border-danger-subtle'} rounded-pill px-3 py-1">
              <span class="status-dot-pulse ${isAvailable ? 'available' : 'maintenance'}"></span>
              ${f.status}
            </span>
          </td>
        </tr>
      `;
    }).join('');
  }

  const bookTbody = document.getElementById('bookingsTableBody');
  if (bookTbody) {
    if (bookings.length === 0) {
      bookTbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">No scheduled facility bookings</td></tr>`;
    } else {
      bookTbody.innerHTML = bookings.map(b => `
        <tr>
          <td class="ps-3 font-monospace fw-bold text-primary">${b.id}</td>
          <td class="fw-bold text-dark">${b.facility}</td>
          <td><i class="bi bi-person text-secondary me-1"></i>${b.organizer}</td>
          <td class="small text-muted">${b.date}</td>
          <td class="small fw-semibold text-primary"><i class="bi bi-clock me-1"></i>${b.time}</td>
          <td>
            <span class="badge bg-success-subtle text-success rounded-pill px-3 py-1">
              ● ${b.status}
            </span>
          </td>
          <td class="pe-3 text-end">
            <button class="btn btn-sm btn-light border text-danger" onclick="cancelBooking('${b.id}')" title="Cancel Booking">
              <i class="bi bi-x-circle"></i> Cancel
            </button>
          </td>
        </tr>
      `).join('');
    }
  }
}

function toggleFacilityStatus(facilityId) {
  const db = ChampionsDB.get();
  const fac = db.facilities.find(f => f.id === facilityId);
  if (!fac) return;

  fac.status = fac.status === 'Available' ? 'Maintenance' : 'Available';
  ChampionsDB.save(db);

  renderFacilities();
  populateBookingFacilities();
  showToast(`${fac.name} status updated to: ${fac.status}`, fac.status === 'Available' ? 'success' : 'danger');
}

function handleSaveStaff(e) {
  e.preventDefault();

  const id = document.getElementById('staffIdInput').value;
  const name = document.getElementById('staffNameInput').value.trim();
  const role = document.getElementById('staffRoleInput').value.trim();
  const department = document.getElementById('staffDeptSelect').value;
  const shift = document.getElementById('staffShiftInput').value.trim();
  const phone = document.getElementById('staffPhoneInput').value.trim();
  const email = document.getElementById('staffEmailInput').value.trim();

  const db = ChampionsDB.get();

  if (id) {
    const index = db.staff.findIndex(s => s.id === id);
    if (index !== -1) {
      db.staff[index] = { ...db.staff[index], name, role, department, shift, phone, email };
      ChampionsDB.save(db);
      showToast(`Staff record for ${name} updated!`, 'success');
    }
  } else {
    const nextNum = db.staff.length > 0
      ? Math.max(...db.staff.map(s => parseInt(s.id.replace(/\D/g, '')) || 0)) + 1
      : 1;
    const newId = `STF-0${nextNum}`;

    db.staff.push({
      id: newId,
      name,
      role,
      department,
      shift,
      phone,
      email,
      sport: department
    });
    ChampionsDB.save(db);
    showToast(`New staff member ${name} registered (${newId})!`, 'success');
  }

  const modalEl = document.getElementById('staffModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();

  renderStaff();
}

function openEditStaff(staffId) {
  const db = ChampionsDB.get();
  const staff = db.staff.find(s => s.id === staffId);
  if (!staff) return;

  document.getElementById('staffIdInput').value = staff.id;
  document.getElementById('staffNameInput').value = staff.name;
  document.getElementById('staffRoleInput').value = staff.role;
  document.getElementById('staffDeptSelect').value = staff.department;
  document.getElementById('staffShiftInput').value = staff.shift;
  document.getElementById('staffPhoneInput').value = staff.phone;
  document.getElementById('staffEmailInput').value = staff.email;

  document.getElementById('staffModalLabel').innerHTML = `<i class="bi bi-pencil-square me-2"></i> Edit Staff Profile: ${staff.name}`;

  const modal = new bootstrap.Modal(document.getElementById('staffModal'));
  modal.show();
}

function confirmDeleteStaff(staffId) {
  const db = ChampionsDB.get();
  const staff = db.staff.find(s => s.id === staffId);
  if (!staff) return;

  currentDeleteStaffId = staffId;
  document.getElementById('deleteStaffNameText').innerText = `${staff.name} (${staff.id})`;

  const modal = new bootstrap.Modal(document.getElementById('deleteStaffModal'));
  modal.show();
}

function executeDeleteStaff() {
  if (!currentDeleteStaffId) return;

  const db = ChampionsDB.get();
  const sToDelete = db.staff.find(s => s.id === currentDeleteStaffId);
  db.staff = db.staff.filter(s => s.id !== currentDeleteStaffId);
  ChampionsDB.save(db);

  const modalEl = document.getElementById('deleteStaffModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();

  renderStaff();
  showToast(`Staff record ${sToDelete ? sToDelete.name : currentDeleteStaffId} removed.`, 'danger');
  currentDeleteStaffId = null;
}

function handleSaveFacility(e) {
  e.preventDefault();

  const name = document.getElementById('facilityNameInput').value.trim();
  const type = document.getElementById('facilityTypeSelect').value;
  const capacity = Number(document.getElementById('facilityCapacityInput').value) || 30;
  const location = document.getElementById('facilityLocationInput').value.trim();
  const status = document.getElementById('facilityStatusSelect').value;

  const db = ChampionsDB.get();
  const nextNum = db.facilities.length > 0
    ? Math.max(...db.facilities.map(f => parseInt(f.id.replace(/\D/g, '')) || 0)) + 1
    : 1;
  const newId = `FAC-0${nextNum}`;

  db.facilities.push({
    id: newId,
    name,
    type,
    capacity,
    location,
    status
  });

  ChampionsDB.save(db);

  const modalEl = document.getElementById('facilityModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();

  renderFacilities();
  populateBookingFacilities();
  showToast(`Facility "${name}" registered with code ${newId}!`, 'success');
}

function handleBookFacility(e) {
  e.preventDefault();

  const facility = document.getElementById('bookingFacilitySelect').value;
  const organizer = document.getElementById('bookingOrganizerInput').value.trim();
  const date = document.getElementById('bookingDateInput').value;
  const time = document.getElementById('bookingTimeInput').value.trim();

  const db = ChampionsDB.get();
  const nextNum = db.facilityBookings && db.facilityBookings.length > 0
    ? Math.max(...db.facilityBookings.map(b => parseInt(b.id.replace(/\D/g, '')) || 200)) + 1
    : 201;
  const newId = `BKG-${nextNum}`;

  db.facilityBookings.push({
    id: newId,
    facility,
    organizer,
    date,
    time,
    status: 'Confirmed'
  });

  ChampionsDB.save(db);

  const modalEl = document.getElementById('facilityBookingModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();

  renderFacilities();
  showToast(`Booking ${newId} confirmed for ${facility}!`, 'success');
}

function cancelBooking(bookingId) {
  if (!confirm(`Cancel facility reservation ${bookingId}?`)) return;

  const db = ChampionsDB.get();
  db.facilityBookings = db.facilityBookings.filter(b => b.id !== bookingId);
  ChampionsDB.save(db);

  renderFacilities();
  showToast(`Facility booking ${bookingId} has been cancelled.`, 'danger');
}

document.addEventListener('DOMContentLoaded', () => {
  renderStaff();
  renderFacilities();
  populateBookingFacilities();

  document.getElementById('staffSearchInput').addEventListener('input', renderStaff);
  document.getElementById('staffDeptFilter').addEventListener('change', renderStaff);

  document.getElementById('staffForm').addEventListener('submit', handleSaveStaff);
  document.getElementById('facilityForm').addEventListener('submit', handleSaveFacility);
  document.getElementById('facilityBookingForm').addEventListener('submit', handleBookFacility);

  document.getElementById('openAddStaffBtn').addEventListener('click', () => {
    document.getElementById('staffForm').reset();
    document.getElementById('staffIdInput').value = '';
    document.getElementById('staffModalLabel').innerHTML = '<i class="bi bi-person-plus-fill me-2"></i> Register Staff / Coach';
  });

  document.getElementById('openAddFacilityBtn').addEventListener('click', () => {
    document.getElementById('facilityForm').reset();
  });

  const openBookFacilityBtn = document.getElementById('openBookFacilityBtn');
  if (openBookFacilityBtn) {
    openBookFacilityBtn.addEventListener('click', () => {
      populateBookingFacilities();
      document.getElementById('bookingDateInput').value = new Date().toISOString().split('T')[0];
    });
  }

  document.getElementById('confirmDeleteStaffBtn').addEventListener('click', executeDeleteStaff);

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('action') === 'book') {

    const facTabTrigger = document.getElementById('facilities-tab');
    if (facTabTrigger) {
      const tabInstance = new bootstrap.Tab(facTabTrigger);
      tabInstance.show();
    }
    populateBookingFacilities();
    document.getElementById('bookingDateInput').value = new Date().toISOString().split('T')[0];
    const modal = new bootstrap.Modal(document.getElementById('facilityBookingModal'));
    modal.show();
  }

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

