
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







/* ============================================================
           JAVASCRIPT — MODULAR SECTION INITIALIZERS
           Each section's JS is wrapped in its own function.
           To remove a section's behavior, delete its init function
           call at the bottom of this script.
           No section's JS depends on another section's JS.
           ============================================================ */
        (function () {
            'use strict';

           
            function initRevealAnimations() {
                var els = document.querySelectorAll('.reveal');
                if (!els.length) return;

                if ('IntersectionObserver' in window) {
                    var observer = new IntersectionObserver(function (entries) {
                        entries.forEach(function (entry) {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('visible');
                                observer.unobserve(entry.target);
                            }
                        });
                    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

                    els.forEach(function (el) { observer.observe(el); });
                } else {
                    els.forEach(function (el) { el.classList.add('visible'); });
                }
            }


            /* --------------------------------------------------
               SECTION 1 — HERO: Popular Tag Clicks
               Depends on: #faqSearch, .popular-tag, .search-clear,
                            .faq-section (for scroll target)
            -------------------------------------------------- */
            function initHeroPopularTags() {
                var tags = document.querySelectorAll('.popular-tag');
                var searchInput = document.getElementById('faqSearch');
                var searchClear = document.getElementById('searchClear');
                var faqSection = document.querySelector('.faq-section');

                if (!tags.length || !searchInput) return;

                tags.forEach(function (tag) {
                    tag.addEventListener('click', function () {
                        var term = this.getAttribute('data-search');
                        searchInput.value = term;
                        searchInput.dispatchEvent(new Event('input'));
                        if (searchClear) searchClear.classList.add('visible');
                        if (faqSection) {
                            faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    });
                });
            }


            /* --------------------------------------------------
               SECTION 2 — FLOATING SEARCH: Input & Clear
               Depends on: #faqSearch, #searchClear
            -------------------------------------------------- */
            function initSearch() {
                var searchInput = document.getElementById('faqSearch');
                var searchClear = document.getElementById('searchClear');

                if (!searchInput) return;

                searchInput.addEventListener('input', function () {
                    if (searchClear) {
                        searchClear.classList.toggle('visible', this.value.trim().length > 0);
                    }
                    // Dispatch custom event so FAQ section can listen
                    document.dispatchEvent(new CustomEvent('faq:search', {
                        detail: { query: this.value.trim().toLowerCase() }
                    }));
                });

                if (searchClear) {
                    searchClear.addEventListener('click', function () {
                        searchInput.value = '';
                        searchClear.classList.remove('visible');
                        searchInput.focus();
                        document.dispatchEvent(new CustomEvent('faq:search', {
                            detail: { query: '' }
                        }));
                    });
                }
            }


            /* --------------------------------------------------
               SECTION 3 — CATEGORY CARDS: Click to Filter
               Depends on: #categoryGrid
            -------------------------------------------------- */
            function initCategoryCards() {
                var grid = document.getElementById('categoryGrid');
                if (!grid) return;

                grid.addEventListener('click', function (e) {
                    var card = e.target.closest('.category-card');
                    if (!card) return;

                    var category = card.getAttribute('data-category');

                    document.dispatchEvent(new CustomEvent('faq:category', {
                        detail: { category: category, source: 'card' }
                    }));
                });
            }


            /* --------------------------------------------------
               SECTION 4 — FAQ ACCORDION: Full Logic
               Self-contained. Listens for custom events from
               Search and Category sections. If those sections
               are removed, this section still works standalone.
               Depends on: #faqAccordion, #faqCount,
                            #faqCategoryLabel, #noResults,
                            #noResultsReset, #stickyNavList
            -------------------------------------------------- */
            function initFaqAccordion() {
                var accordion = document.getElementById('faqAccordion');
                var countEl = document.getElementById('faqCount');
                var labelEl = document.getElementById('faqCategoryLabel');
                var noResults = document.getElementById('noResults');
                var noResultsReset = document.getElementById('noResultsReset');
                var stickyNav = document.getElementById('stickyNavList');

                if (!accordion) return;

                var activeCategory = 'all';
                var searchQuery = '';

                var categoryNames = {
                    all: 'All Topics',
                    general: 'General Information',
                    certification: 'Certification Process',
                    examinations: 'Examinations',
                    membership: 'Membership',
                    fees: 'Fees & Payments',
                    recognition: 'International Recognition',
                    knowledge: 'knowledge'
                };

                function getItems() {
                    return Array.from(accordion.querySelectorAll('.faq-item-wrapper'));
                }

                function filter() {
                    var items = getItems();
                    var visible = 0;

                    items.forEach(function (item) {
                        var cat = item.getAttribute('data-category');
                        var qText = item.querySelector('.btn-text').textContent.toLowerCase();
                        var aText = item.querySelector('.accordion-body').textContent.toLowerCase();
                        var full = qText + ' ' + aText;

                        var catMatch = (activeCategory === 'all') || (cat === activeCategory);
                        var searchMatch = (searchQuery === '') || full.indexOf(searchQuery) !== -1;

                        if (catMatch && searchMatch) {
                            item.classList.remove('hidden');
                            visible++;
                        } else {
                            item.classList.add('hidden');
                            var collapse = item.querySelector('.accordion-collapse');
                            if (collapse && collapse.classList.contains('show')) {
                                var bsC = bootstrap.Collapse.getInstance(collapse);
                                if (bsC) bsC.hide();
                            }
                        }
                    });

                    if (countEl) countEl.textContent = visible;
                    if (labelEl) labelEl.textContent = categoryNames[activeCategory] || 'All Topics';

                    if (noResults) {
                        if (visible === 0) {
                            noResults.classList.add('visible');
                            accordion.style.display = 'none';
                        } else {
                            noResults.classList.remove('visible');
                            accordion.style.display = '';
                        }
                    }
                }

                function syncUI(category) {
                    // Sync category cards
                    var cards = document.querySelectorAll('.category-card');
                    cards.forEach(function (c) {
                        c.classList.toggle('active', c.getAttribute('data-category') === category);
                    });

                    // Sync sticky nav
                    if (stickyNav) {
                        stickyNav.querySelectorAll('.sticky-nav-item').forEach(function (item) {
                            var isActive = item.getAttribute('data-category') === category;
                            item.classList.toggle('active', isActive);
                            item.setAttribute('aria-pressed', isActive ? 'true' : 'false');
                        });
                    }
                }

                function setCategory(category) {
                    // Toggle off if same category clicked from card
                    if (activeCategory === category) {
                        category = 'all';
                    }
                    activeCategory = category;
                    syncUI(category);
                    filter();
                }

                // Listen for category events from cards
                document.addEventListener('faq:category', function (e) {
                    setCategory(e.detail.category);
                });

                // Listen for search events from search input
                document.addEventListener('faq:search', function (e) {
                    searchQuery = e.detail.query;
                    filter();
                });

                // Sticky nav clicks
                if (stickyNav) {
                    stickyNav.addEventListener('click', function (e) {
                        var item = e.target.closest('.sticky-nav-item');
                        if (!item) return;
                        activeCategory = item.getAttribute('data-category');
                        syncUI(activeCategory);
                        filter();
                    });

                    stickyNav.addEventListener('keydown', function (e) {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            var item = e.target.closest('.sticky-nav-item');
                            if (!item) return;
                            activeCategory = item.getAttribute('data-category');
                            syncUI(activeCategory);
                            filter();
                        }
                    });
                }

                // No results reset
                if (noResultsReset) {
                    noResultsReset.addEventListener('click', function () {
                        var searchInput = document.getElementById('faqSearch');
                        var searchClear = document.getElementById('searchClear');
                        if (searchInput) searchInput.value = '';
                        if (searchClear) searchClear.classList.remove('visible');
                        searchQuery = '';
                        activeCategory = 'all';
                        syncUI('all');
                        filter();
                    });
                }

                // Initial render
                filter();
            }


            /* --------------------------------------------------
               SECTION 6 — NEWSLETTER: Form Submit
               Depends on: #newsletterForm, #newsletterBtn
            -------------------------------------------------- */
            function initNewsletter() {
                var form = document.getElementById('newsletterForm');
                var btn = document.getElementById('newsletterBtn');

                if (!form || !btn) return;

                form.addEventListener('submit', function (e) {
                    e.preventDefault();
                    var input = form.querySelector('.newsletter-input');
                    if (input && input.value && input.checkValidity()) {
                        btn.innerHTML = '<i class="bi bi-check-lg" aria-hidden="true"></i> Subscribed';
                        btn.style.background = 'var(--gold-dark)';
                        input.value = '';

                        setTimeout(function () {
                            btn.innerHTML = 'Subscribe <i class="bi bi-arrow-right" aria-hidden="true"></i>';
                            btn.style.background = '';
                        }, 2500);
                    }
                });
            }


            /* --------------------------------------------------
               INITIALIZE ALL SECTIONS
               To disable a section's JS without removing its
               HTML, comment out its init call below.
               To fully remove a section, also delete its HTML
               and its corresponding CSS block.
            -------------------------------------------------- */
            initRevealAnimations();   // Shared — keeps .reveal working everywhere
            initHeroPopularTags();    // Section 1 — popular tag clicks
            initSearch();             // Section 2 — search input & clear
            initCategoryCards();      // Section 3 — category card clicks
            initFaqAccordion();       // Section 4 — full accordion + filter logic
            initNewsletter();         // Section 6 — form submit
            // Section 5 (Offices) and Section 7 (Footer) have no JS.

        })();