const CHAMPIONS_STORAGE_KEY = 'champions_sport_club_db';

const DEFAULT_CHAMPIONS_DATA = {
  members: [
    { id: 'MEM-101', name: 'Mohamed Salah', phone: '+20 100 123 4567', dob: '1992-06-15', gender: 'Male', address: 'Zamalek, Cairo', sport: 'Football', regDate: '2024-01-10', status: 'Active' },
    { id: 'MEM-102', name: 'Ahmed Hassan', phone: '+20 111 234 5678', dob: '1995-03-22', gender: 'Male', address: 'Heliopolis, Cairo', sport: 'Basketball', regDate: '2024-01-15', status: 'Active' },
    { id: 'MEM-103', name: 'Fatma El-Zahraa', phone: '+20 122 345 6789', dob: '1998-08-14', gender: 'Female', address: 'Maadi, Cairo', sport: 'Swimming', regDate: '2024-02-01', status: 'Active' },
    { id: 'MEM-104', name: 'Mahmoud Al-Masry', phone: '+20 106 456 7890', dob: '1990-11-05', gender: 'Male', address: 'Smouha, Alexandria', sport: 'Gym', regDate: '2024-02-12', status: 'Active' },
    { id: 'MEM-105', name: 'Nour El-Sherbini', phone: '+20 115 567 8901', dob: '1996-12-01', gender: 'Female', address: 'Sporting, Alexandria', sport: 'Tennis', regDate: '2024-02-20', status: 'Active' },
    { id: 'MEM-106', name: 'Omar Gaber', phone: '+20 109 678 9012', dob: '1993-04-18', gender: 'Male', address: 'Dokki, Giza', sport: 'Football', regDate: '2023-08-10', status: 'Expired' },
    { id: 'MEM-107', name: 'Salma El-Demerdash', phone: '+20 128 789 0123', dob: '2000-09-30', gender: 'Female', address: 'New Cairo, Cairo', sport: 'Yoga', regDate: '2024-03-05', status: 'Active' },
    { id: 'MEM-108', name: 'Tarek Hegazy', phone: '+20 101 890 1234', dob: '1988-07-25', gender: 'Male', address: 'Sheikh Zayed, Giza', sport: 'Gym', regDate: '2023-09-15', status: 'Expired' },
    { id: 'MEM-109', name: 'Farida Osman', phone: '+20 112 901 2345', dob: '1997-02-14', gender: 'Female', address: 'Nasr City, Cairo', sport: 'Swimming', regDate: '2024-03-18', status: 'Active' },
    { id: 'MEM-110', name: 'Kareem El-Shenawy', phone: '+20 120 012 3456', dob: '1994-10-10', gender: 'Male', address: 'Agouza, Giza', sport: 'Tennis', regDate: '2024-04-02', status: 'Active' }
  ],
  activities: [
    { id: 'ACT-01', name: 'Football (Soccer) Academy', sport: 'Football', coach: 'Capt. Hossam Ashour', facility: 'Pitch A - Main Football Turf', schedule: 'Mon, Wed, Fri (17:00 - 19:00)', capacity: 30, enrolled: 24, fee: 1200, ageGroup: 'Youth & Adults (14+)' },
    { id: 'ACT-02', name: 'Basketball Development League', sport: 'Basketball', coach: 'Capt. Tarek Hamed', facility: 'Indoor Basketball Arena', schedule: 'Tue, Thu, Sat (16:00 - 18:00)', capacity: 25, enrolled: 18, fee: 1000, ageGroup: 'All Ages (10+)' },
    { id: 'ACT-03', name: 'Olympic Swimming Team & Academy', sport: 'Swimming', coach: 'Capt. Rania El-Wany', facility: 'Olympic Pool 1', schedule: 'Sun, Tue, Thu (08:00 - 10:00 & 18:00 - 20:00)', capacity: 20, enrolled: 19, fee: 1500, ageGroup: 'Intermediate to Advanced' },
    { id: 'ACT-04', name: 'Championship Tennis Clinics', sport: 'Tennis', coach: 'Capt. Mohamed Safwat', facility: 'Clay Tennis Court 1', schedule: 'Mon, Wed, Sat (15:00 - 17:00)', capacity: 15, enrolled: 12, fee: 1800, ageGroup: 'Juniors & Adults' },
    { id: 'ACT-05', name: 'Gym & High Intensity Conditioning', sport: 'Gym', coach: 'Capt. Mahmoud El-Attar', facility: 'Main Fitness & Weights Hall', schedule: 'Daily (06:00 - 23:00)', capacity: 100, enrolled: 76, fee: 900, ageGroup: 'Open to 16+' },
    { id: 'ACT-06', name: 'Mindful Yoga & Core Pilates', sport: 'Yoga', coach: 'Capt. Yasmine Rostom', facility: 'Zen Yoga Studio', schedule: 'Sun, Wed (10:00 - 11:30 & 19:00 - 20:30)', capacity: 20, enrolled: 16, fee: 1100, ageGroup: 'All Levels' }
  ],
  staff: [
    { id: 'STF-01', name: 'Capt. Mahmoud Al-Masry', role: 'Club Director', department: 'Administration', sport: 'Administration' },
    { id: 'STF-02', name: 'Capt. Hossam Ashour', role: 'Head Football Coach', department: 'Football', sport: 'Football' },
    { id: 'STF-03', name: 'Capt. Rania El-Wany', role: 'Director of Aquatic Sports', department: 'Swimming', sport: 'Swimming' },
    { id: 'STF-04', name: 'Capt. Mohamed Safwat', role: 'Head Tennis Pro', department: 'Tennis', sport: 'Tennis' },
    { id: 'STF-05', name: 'Capt. Tarek Hamed', role: 'Head Basketball Coach', department: 'Basketball', sport: 'Basketball' },
    { id: 'STF-06', name: 'Capt. Mahmoud El-Attar', role: 'Chief Fitness Trainer', department: 'Gym', sport: 'Gym' },
    { id: 'STF-07', name: 'Capt. Yasmine Rostom', role: 'Lead Yoga Instructor', department: 'Yoga', sport: 'Yoga' }
  ],
  facilities: [
    { id: 'FAC-01', name: 'Pitch A - Main Football Turf', type: 'Football Pitch' },
    { id: 'FAC-02', name: 'Olympic Pool 1', type: 'Swimming Pool' },
    { id: 'FAC-03', name: 'Clay Tennis Court 1', type: 'Tennis Court' },
    { id: 'FAC-04', name: 'Clay Tennis Court 2', type: 'Tennis Court' },
    { id: 'FAC-05', name: 'Main Fitness & Weights Hall', type: 'Gym' },
    { id: 'FAC-06', name: 'Zen Yoga Studio', type: 'Yoga Studio' },
    { id: 'FAC-07', name: 'Indoor Basketball Arena', type: 'Basketball Arena' }
  ],
  transactions: [],
  financials: { baseRevenue: 485400, baseExpenses: 192800 },
  facilityBookings: []
};

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

let currentSportFilter = 'ALL';
let currentDeleteActivityId = null;

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

function getSportIcon(sport) {
  switch (sport) {
    case 'Football': return 'bi-dribbble';
    case 'Basketball': return 'bi-circle';
    case 'Swimming': return 'bi-water';
    case 'Tennis': return 'bi-trophy';
    case 'Gym': return 'bi-activity';
    case 'Yoga': return 'bi-peace';
    default: return 'bi-award';
  }
}

function populateDropdownOptions() {
  const db = ChampionsDB.get();

  const coachSelect = document.getElementById('activityCoachSelect');
  if (coachSelect) {
    const coaches = db.staff.filter(s => s.role.toLowerCase().includes('coach') || s.role.toLowerCase().includes('trainer') || s.role.toLowerCase().includes('instructor') || s.role.toLowerCase().includes('pro') || s.role.toLowerCase().includes('director'));
    coachSelect.innerHTML = coaches.map(c => `
      <option value="${c.name}">${c.name} (${c.role})</option>
    `).join('');
  }

  const facilitySelect = document.getElementById('activityFacilitySelect');
  if (facilitySelect) {
    facilitySelect.innerHTML = db.facilities.map(f => `
      <option value="${f.name}">${f.name} - ${f.type}</option>
    `).join('');
  }

  const enrollMemberSelect = document.getElementById('enrollMemberSelect');
  if (enrollMemberSelect) {
    enrollMemberSelect.innerHTML = db.members.map(m => `
      <option value="${m.id}">${m.name} (${m.id}) - Current: ${m.sport} [${m.status}]</option>
    `).join('');
  }

  const enrollActivitySelect = document.getElementById('enrollActivitySelect');
  if (enrollActivitySelect) {
    enrollActivitySelect.innerHTML = db.activities.map(a => `
      <option value="${a.id}">${a.name} (${a.sport}) - Cap: ${a.enrolled}/${a.capacity}</option>
    `).join('');
  }
}

function renderActivities() {
  const db = ChampionsDB.get();
  const activities = db.activities || [];

  document.getElementById('sidebarActivitiesBadge').innerText = activities.length;

  const searchQuery = (document.getElementById('activitySearchInput').value || '').toLowerCase().trim();

  const filtered = activities.filter(act => {
    if (currentSportFilter !== 'ALL' && act.sport !== currentSportFilter) return false;
    if (searchQuery) {
      const matchName = (act.name || '').toLowerCase().includes(searchQuery);
      const matchCoach = (act.coach || '').toLowerCase().includes(searchQuery);
      const matchSport = (act.sport || '').toLowerCase().includes(searchQuery);
      const matchVenue = (act.facility || '').toLowerCase().includes(searchQuery);
      if (!matchName && !matchCoach && !matchSport && !matchVenue) return false;
    }
    return true;
  });

  const grid = document.getElementById('activitiesGrid');
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-inbox fs-1 text-muted d-block mb-2"></i>
        <h5 class="text-secondary fw-semibold">No sports activities found</h5>
        <p class="text-muted small">Try adjusting your category filter or search keywords.</p>
      </div>
    `;
  } else {
    grid.innerHTML = filtered.map(act => {
      const icon = getSportIcon(act.sport);
      const capacityPct = Math.min(100, Math.round(((act.enrolled || 0) / (act.capacity || 1)) * 100));
      const isFull = act.enrolled >= act.capacity;

      return `
        <div class="col-xl-4 col-md-6">
          <div class="card activity-card shadow-sm h-100 bg-white">
            <div class="activity-card-header ${act.sport}">
              <div>
                <span class="badge bg-white bg-opacity-25 text-white mb-2">${act.sport}</span>
                <h5 class="fw-bold mb-1 text-white">${act.name}</h5>
                <small class="text-white text-opacity-75">${act.ageGroup || 'All Ages'}</small>
              </div>
              <div class="sport-icon-circle">
                <i class="bi ${icon}"></i>
              </div>
            </div>

            <div class="card-body p-3 d-flex flex-column justify-content-between">
              <div>
                <div class="activity-info-row">
                  <i class="bi bi-person-fill"></i>
                  <span><strong>Head Coach:</strong> ${act.coach}</span>
                </div>
                <div class="activity-info-row">
                  <i class="bi bi-geo-alt-fill"></i>
                  <span class="text-truncate"><strong>Venue:</strong> ${act.facility}</span>
                </div>
                <div class="activity-info-row">
                  <i class="bi bi-clock-fill"></i>
                  <span><strong>Schedule:</strong> ${act.schedule}</span>
                </div>
                <div class="activity-info-row">
                  <i class="bi bi-tag-fill text-success"></i>
                  <span><strong>Monthly Fee:</strong> <span class="fw-bold text-success">EGP ${Number(act.fee).toLocaleString('en-US')}</span></span>
                </div>

                <!-- Capacity Bar -->
                <div class="capacity-progress-box my-3">
                  <div class="d-flex justify-content-between small mb-1">
                    <span class="fw-semibold text-muted">Enrollment Level:</span>
                    <span class="fw-bold ${isFull ? 'text-danger' : 'text-primary'}">${act.enrolled} / ${act.capacity} Members (${capacityPct}%)</span>
                  </div>
                  <div class="progress" style="height: 6px;">
                    <div class="progress-bar ${isFull ? 'bg-danger' : 'bg-primary'}" role="progressbar" style="width: ${capacityPct}%"></div>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="d-flex align-items-center justify-content-between pt-2 border-top mt-2">
                <button class="btn btn-sm btn-outline-primary" onclick="openActivityRoster('${act.id}')">
                  <i class="bi bi-people me-1"></i> View Roster
                </button>
                <div class="btn-group btn-group-sm">
                  <button class="btn btn-light border text-secondary" onclick="openEditActivity('${act.id}')" title="Edit Schedule / Coach">
                    <i class="bi bi-pencil"></i> Edit
                  </button>
                  <button class="btn btn-light border text-danger" onclick="confirmDeleteActivity('${act.id}')" title="Delete Activity">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  const tbody = document.getElementById('activitiesTableBody');
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4 text-muted">No activities found</td></tr>`;
  } else {
    tbody.innerHTML = filtered.map(act => `
      <tr>
        <td class="ps-3">
          <span class="badge bg-light text-dark border font-monospace me-1">${act.id}</span>
          <span class="badge bg-primary-subtle text-primary">${act.sport}</span>
        </td>
        <td class="fw-bold text-dark">${act.name}</td>
        <td><i class="bi bi-person-badge text-muted me-1"></i>${act.coach}</td>
        <td class="small text-muted"><i class="bi bi-geo-alt text-danger me-1"></i>${act.facility}</td>
        <td class="small fw-medium">${act.schedule}</td>
        <td>
          <span class="badge bg-light text-dark border fw-semibold">
            ${act.enrolled} / ${act.capacity} (${Math.round((act.enrolled / act.capacity) * 100)}%)
          </span>
        </td>
        <td class="fw-bold text-success">EGP ${Number(act.fee).toLocaleString('en-US')}</td>
        <td class="pe-3 text-end">
          <div class="btn-group btn-group-sm">
            <button class="btn btn-light border text-primary" onclick="openActivityRoster('${act.id}')" title="View Members Roster">
              <i class="bi bi-eye"></i>
            </button>
            <button class="btn btn-light border text-secondary" onclick="openEditActivity('${act.id}')" title="Edit Activity">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-light border text-danger" onclick="confirmDeleteActivity('${act.id}')" title="Delete Activity">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  }
}

function openAddActivity() {
  document.getElementById('activityForm').reset();
  document.getElementById('activityIdInput').value = '';
  document.getElementById('activityModalLabel').innerHTML = '<i class="bi bi-plus-circle-fill me-2"></i> Add Sports Activity Program';
  document.getElementById('activityCapacityInput').value = 30;
  document.getElementById('activityEnrolledInput').value = 0;
  populateDropdownOptions();
}

function openEditActivity(activityId) {
  const db = ChampionsDB.get();
  const act = db.activities.find(a => a.id === activityId);
  if (!act) return;

  populateDropdownOptions();

  document.getElementById('activityIdInput').value = act.id;
  document.getElementById('activitySportSelect').value = act.sport;
  document.getElementById('activityNameInput').value = act.name;
  document.getElementById('activityCoachSelect').value = act.coach;
  document.getElementById('activityFacilitySelect').value = act.facility;
  document.getElementById('activityScheduleInput').value = act.schedule;
  document.getElementById('activityFeeInput').value = act.fee;
  document.getElementById('activityCapacityInput').value = act.capacity;
  document.getElementById('activityEnrolledInput').value = act.enrolled;
  document.getElementById('activityAgeGroupInput').value = act.ageGroup || '';

  document.getElementById('activityModalLabel').innerHTML = `<i class="bi bi-pencil-square me-2"></i> Edit Activity Program: ${act.name}`;

  const modal = new bootstrap.Modal(document.getElementById('activityModal'));
  modal.show();
}

function handleSaveActivity(e) {
  e.preventDefault();

  const id = document.getElementById('activityIdInput').value;
  const sport = document.getElementById('activitySportSelect').value;
  const name = document.getElementById('activityNameInput').value.trim();
  const coach = document.getElementById('activityCoachSelect').value;
  const facility = document.getElementById('activityFacilitySelect').value;
  const schedule = document.getElementById('activityScheduleInput').value.trim();
  const fee = Number(document.getElementById('activityFeeInput').value) || 0;
  const capacity = Number(document.getElementById('activityCapacityInput').value) || 30;
  const enrolled = Number(document.getElementById('activityEnrolledInput').value) || 0;
  const ageGroup = document.getElementById('activityAgeGroupInput').value.trim();

  const db = ChampionsDB.get();

  if (id) {

    const index = db.activities.findIndex(a => a.id === id);
    if (index !== -1) {
      db.activities[index] = {
        ...db.activities[index],
        sport,
        name,
        coach,
        facility,
        schedule,
        fee,
        capacity,
        enrolled,
        ageGroup
      };
      ChampionsDB.save(db);
      showToast(`Activity program "${name}" updated successfully!`, 'success');
    }
  } else {

    const nextNum = db.activities.length > 0
      ? Math.max(...db.activities.map(a => parseInt(a.id.replace(/\D/g, '')) || 0)) + 1
      : 1;
    const newId = `ACT-0${nextNum}`;

    const newActivity = {
      id: newId,
      sport,
      name,
      coach,
      facility,
      schedule,
      fee,
      capacity,
      enrolled,
      ageGroup
    };

    db.activities.push(newActivity);
    ChampionsDB.save(db);
    showToast(`New sports activity "${name}" added with code ${newId}!`, 'success');
  }

  const modalEl = document.getElementById('activityModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();

  renderActivities();
}

function handleEnrollMember(e) {
  e.preventDefault();

  const memberId = document.getElementById('enrollMemberSelect').value;
  const activityId = document.getElementById('enrollActivitySelect').value;

  const db = ChampionsDB.get();
  const member = db.members.find(m => m.id === memberId);
  const activity = db.activities.find(a => a.id === activityId);

  if (!member || !activity) {
    showToast('Member or Activity not found', 'danger');
    return;
  }

  member.sport = activity.sport;

  if (activity.enrolled < activity.capacity) {
    activity.enrolled = (activity.enrolled || 0) + 1;
  }

  ChampionsDB.save(db);

  const modalEl = document.getElementById('enrollMemberModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();

  renderActivities();
  showToast(`Member ${member.name} successfully registered into ${activity.name}!`, 'success');
}

function openActivityRoster(activityId) {
  const db = ChampionsDB.get();
  const act = db.activities.find(a => a.id === activityId);
  if (!act) return;

  const rosterMembers = db.members.filter(m => m.sport.toLowerCase() === act.sport.toLowerCase());

  document.getElementById('rosterActivityName').innerText = act.name;
  document.getElementById('rosterActivityDetails').innerText = `Coach: ${act.coach} • Venue: ${act.facility} • ${act.schedule}`;
  document.getElementById('rosterCountBadge').innerText = `${rosterMembers.length} Registered Members`;

  const tbody = document.getElementById('rosterTableBody');
  if (rosterMembers.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center py-4 text-muted">
          No members are currently enrolled under the ${act.sport} category.
        </td>
      </tr>
    `;
  } else {
    tbody.innerHTML = rosterMembers.map(m => `
      <tr>
        <td class="font-monospace fw-bold text-primary">${m.id}</td>
        <td class="fw-semibold text-dark">${m.name}</td>
        <td class="small text-secondary">${m.phone}</td>
        <td class="small text-muted">${m.address}</td>
        <td>
          <span class="badge ${m.status === 'Active' ? 'bg-success' : 'bg-danger'} rounded-pill">
            ${m.status}
          </span>
        </td>
      </tr>
    `).join('');
  }

  const modal = new bootstrap.Modal(document.getElementById('rosterModal'));
  modal.show();
}

function confirmDeleteActivity(activityId) {
  const db = ChampionsDB.get();
  const act = db.activities.find(a => a.id === activityId);
  if (!act) return;

  currentDeleteActivityId = activityId;
  document.getElementById('deleteActivityNameText').innerText = `${act.name} (${act.id})`;

  const modal = new bootstrap.Modal(document.getElementById('deleteActivityModal'));
  modal.show();
}

function executeDeleteActivity() {
  if (!currentDeleteActivityId) return;

  const db = ChampionsDB.get();
  const actToDelete = db.activities.find(a => a.id === currentDeleteActivityId);
  db.activities = db.activities.filter(a => a.id !== currentDeleteActivityId);
  ChampionsDB.save(db);

  const modalEl = document.getElementById('deleteActivityModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();

  renderActivities();
  showToast(`Activity ${actToDelete ? actToDelete.name : currentDeleteActivityId} was removed from club programs.`, 'danger');
  currentDeleteActivityId = null;
}

document.addEventListener('DOMContentLoaded', () => {
  populateDropdownOptions();
  renderActivities();

  const filterPills = document.querySelectorAll('#sportCategoryFilters button');
  filterPills.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterPills.forEach(b => {
        b.classList.remove('btn-dark', 'active');
        b.classList.add('btn-outline-secondary');
      });
      btn.classList.remove('btn-outline-secondary');
      btn.classList.add('btn-dark', 'active');

      currentSportFilter = btn.getAttribute('data-filter');
      renderActivities();
    });
  });

  document.getElementById('activitySearchInput').addEventListener('input', renderActivities);

  document.getElementById('activityForm').addEventListener('submit', handleSaveActivity);
  document.getElementById('enrollMemberForm').addEventListener('submit', handleEnrollMember);

  document.getElementById('openAddActivityBtn').addEventListener('click', openAddActivity);

  document.getElementById('confirmDeleteActivityBtn').addEventListener('click', executeDeleteActivity);

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('action') === 'new') {
    openAddActivity();
    const modal = new bootstrap.Modal(document.getElementById('activityModal'));
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

