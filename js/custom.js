
// ---- Sample Course Data (12 records) ----
const courses = [
    {
        id: 1,
        title: "Certified Competency Mapping Specialist [CCMS]",
        type: "cp",
        shrm: "16"
    },
    {
        id: 2,
        title: "Certified HR Analytics Professional",
        type: "cp",
        shrm: "20"
    },
    {
        id: 3,
        title: "Certified Learning & Development Professional [CLDP]",
        type: "cp",
        shrm: "16"
    },
    {
        id: 4,
        title: "Certified Associate Human Resource Professional [CAHRP]",
        type: "cp",
        shrm: "20"
    },
    {
        id: 5,
        title: "Certified Team Performance Specialist [CTPS]",
        type: "cp",
        shrm: "14"
    },
    {
        id: 6,
        title: "Certified Succession Planning Specialist [CSPS]",
        type: "cp",
        shrm: "9"
    },
    {
        id: 7,
        title: "Certified PEOPLE Champion",
        type: "cp",
        shrm: "16"
    },
    {
        id: 8,
        title: "Certified Apparel Compliance Professional [CACP]",
        type: "cp",
        shrm: "16"
    },
    {
        id: 9,
        title: "Certified HR Business Partner 2.0 [Online]",
        type: "cp",
        shrm: "45"
    },
    {
        id: 10,
        title: "Certified HR Business Partner 2.0 [Virtual Class based]",
        type: "cp",
        shrm: "15"
    },
    {
        id: 11,
        title: "Certified Compensation & Benefits Professional [CCBP]",
        type: "cp",
        shrm: "16"
    },
    {
        id: 12,
        title: "Certified Human Resource Professional [CHRP]",
        type: "cp",
        shrm: "24"
    },
    {
        id: 13,
        title: "Certified Key Performance Indicator Specialist [CKPIS]",
        type: "cp",
        shrm: "24"
    },
    {
        id: 14,
        title: "Certified HR Generalist [CHRG]",
        type: "cp",
        shrm: "24"
    },
    {
        id: 15,
        title: "Certified Recruitment & Selection Specialist [CRSS]",
        type: "cp",
        shrm: "16"
    },
    {
        id: 16,
        title: "Certified Performance Management Professional [CPMP]",
        type: "cp",
        shrm: "22"
    },
    {
        id: 17,
        title: "Certified Organization Development Professional [CODP]",
        type: "cp",
        shrm: "16"
    },
    {
        id: 18,
        title: "Certified Human Resource Associate",
        type: "cp",
        shrm: "15.75"
    },
    {
        id: 19,
        title: "Certified Psychometric Assessment Specialist [CPAS]",
        type: "cp",
        shrm: "16"
    },
    {
        id: 20,
        title: "Certified Fellow Human Resource Professional [cFHRP]",
        type: "cp",
        shrm: "15"
    },
    {
        id: 21,
        title: "Post Graduate Diploma in Human Resource Management",
        type: "open",
        shrm: "72"
    },
    {
        id: 22,
        title: "Post Graduate Diploma in Leadership & People Management [PGDLPM]",
        type: "open",
        shrm: "50"
    },
    {
        id: 23,
        title: "Post Graduate Diploma in Business Communication & Managerial Competency [PGDBCMC]",
        type: "open",
        shrm: "50"
    },
    {
        id: 24,
        title: "Post Graduate Diploma in Occupational Safety & Health (PGDOSH)",
        type: "open",
        shrm: "50"
    },
    {
        id: 25,
        title: "Post Graduate Diploma in Business Management [PGDBM]",
        type: "open",
        shrm: "72"
    },
    {
        id: 26,
        title: "Diploma in Human Resource Management [DHRM]",
        type: "open",
        shrm: "48"
    },
    {
        id: 27,
        title: "Professional Certificate in Managerial Excellence [PcMEx]",
        type: "closed",
        shrm: "20"
    },
    {
        id: 28,
        title: "Professional Certificate in Strategic HR Management [PcSHRM]",
        type: "closed",
        shrm: "20"
    },
    {
        id: 29,
        title: "Professional Certificate in Leadership Excellence [PcLE]",
        type: "closed",
        shrm: "12"
    },
    {
        id: 30,
        title: "Professional Certificate in HR Operations [PcHRO]",
        type: "closed",
        shrm: "20"
    },
    {
        id: 31,
        title: "Professional Certificate in Compensation & Benefit Management [PcCBM]",
        type: "closed",
        shrm: "16"
    },
    {
        id: 32,
        title: "Professional Certificate in Health, Safety & Environment [PcHSE]",
        type: "closed",
        shrm: "16"
    },
    {
        id: 33,
        title: "Professional Certificate in Training Need & Impact Assessment [PcTNAIA]",
        type: "closed",
        shrm: "16"
    },
    {
        id: 34,
        title: "Professional Certificate in Organization Development [PcOD]",
        type: "closed",
        shrm: "18"
    },
    {
        id: 34,
        title: "Talent Management Master Class [TMMC]",
        type: "closed",
        shrm: "20"
    },
    {
        id: 35,
        title: "Post Graduate Certificate in Human Resource Management (PGCHRM)",
        type: "closed",
        shrm: "30"
    },
    {
        id: 36,
        title: "HR Audit: Preparation & Conduction",
        type: "last",
        shrm: "3"
    },
    {
        id: 37,
        title: "TNA: Process, Tools and Technique",
        type: "last",
        shrm: "3"
    },
    {
        id: 38,
        title: "ROI of Training",
        type: "last",
        shrm: "3"
    },
    {
        id: 39,
        title: "HR Accounting: Concept of Human Capital Management",
        type: "last",
        shrm: "6"
    },
    {
        id: 40,
        title: "KPI based Performance Management System",
        type: "last",
        shrm: "6"
    },
    {
        id: 41,
        title: "Coaching Skills for Managers",
        type: "last",
        shrm: "3"
    },
    {
        id: 42,
        title: "Competency Mapping: Tools & Techniques",
        type: "last",
        shrm: "3"
    },
    {
        id: 43,
        title: "Facilitation: Concept & Competencies",
        type: "last",
        shrm: "3"
    },
    {
        id: 44,
        title: "HR Planning: Scientific and Mathematical Calculation",
        type: "last",
        shrm: "3"
    },
    {
        id: 45,
        title: "Methods for KPI Designing",
        type: "last",
        shrm: "3"
    },
    {
        id: 46,
        title: "Methods of Recruitment & Selection",
        type: "last",
        shrm: "3"
    },
    {
        id: 47,
        title: "Job Analysis: Methods & Tools",
        type: "last",
        shrm: "3"
    }
];

// ---- DOM References ----
const filterSelect = document.getElementById('courseTypeFilter');
const tableBody = document.getElementById('courseTableBody');
const resultCountEl = document.getElementById('resultCount');
const countNumberEl = document.getElementById('countNumber');
const emptyStateEl = document.getElementById('emptyState');
const tableFooterEl = document.getElementById('tableFooter');
const footerTotalEl = document.getElementById('footerTotal');

// ---- Helper: Generate SHRM Badge HTML ----
function getShrmBadge(value) {
    const config = {
        'Approved': {
            cls: 'approved',
            icon: 'bi-patch-check-fill'
        },
        'Yes': {
            cls: 'yes',
            icon: 'bi-check-circle-fill'
        },
        'No': {
            cls: 'no',
            icon: 'bi-x-circle-fill'
        }
    };

    const c = config[value] || config['No'];
    return `<span class="shrm-badge ${c.cls}">${value}</span>`;
}

// ---- Render all rows into the table ----
function renderTable() {
    tableBody.innerHTML = '';

    courses.forEach((course, index) => {
        const tr = document.createElement('tr');
        tr.dataset.type = course.type;
        tr.setAttribute('role', 'row');

        tr.innerHTML = `
                    <td class="col-sl">
                        <span class="sl-number">${index + 1}</span>
                    </td>
                    <td class="col-title">
                        <span class="course-name">${course.title}</span>
                    </td>
                    <td class="col-shrm">
                        ${getShrmBadge(course.shrm)}
                    </td>
                `;

        tableBody.appendChild(tr);
    });

    // Set total in footer
    footerTotalEl.textContent = courses.length;

    // Show initial result count
    updateResultCount(courses.length);
}

// ---- Update the result count display ----
function updateResultCount(count) {
    countNumberEl.textContent = count;
    resultCountEl.classList.add('visible');
}

// ---- Filter courses with animation ----
function filterCourses(selectedType) {
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    let visibleCount = 0;
    let serial = 1;

    // Phase 1: Fade out all rows
    rows.forEach(row => {
        row.classList.remove('row-visible');
        row.classList.add('row-fade-out');
    });

    // Phase 2: After fade-out, hide/show rows and fade in
    setTimeout(() => {
        rows.forEach(row => {
            const rowType = row.dataset.type;
            const shouldShow = selectedType === 'all' || rowType === selectedType;

            if (shouldShow) {
                row.classList.remove('row-fade-out', 'row-hidden');
                row.classList.add('row-fade-in');
                visibleCount++;
                row.querySelector('.sl-number').textContent = serial++;

                // Trigger reflow, then animate in
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        row.classList.remove('row-fade-in');
                        row.classList.add('row-visible');
                    });
                });
            } else {
                row.classList.remove('row-fade-out', 'row-visible', 'row-fade-in');
                row.classList.add('row-hidden');
            }
        });

        // Update count
        updateResultCount(visibleCount);

        // Toggle empty state
        if (visibleCount === 0) {
            emptyStateEl.classList.add('visible');
            tableFooterEl.style.display = 'none';
        } else {
            emptyStateEl.classList.remove('visible');
            tableFooterEl.style.display = '';
        }
    }, 280); // Slightly less than transition duration for smooth feel
}

// ---- Event Listener: Dropdown change ----
filterSelect.addEventListener('change', function () {
    filterCourses(this.value);
});

// ---- Initialize on DOM ready ----
document.addEventListener('DOMContentLoaded', function () {
    renderTable();

    filterCourses(filterSelect.value);

    // Trigger initial fade-in animation for rows
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    rows.forEach(row => {
        row.classList.add('row-fade-in');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                row.classList.remove('row-fade-in');
                row.classList.add('row-visible');
            });
        });
    });
});

