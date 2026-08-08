document.addEventListener('DOMContentLoaded', function () {
    const exploreBtn = document.getElementById('exploreBtn');
    const sidebar = document.getElementById('mobileSidebarMenu');
    const panels = document.querySelectorAll('.menu-panel');
    const backButtons = document.querySelectorAll('.back-btn');

    // Sidebar Close Function
    const closeSidebar = () => {
        if (sidebar) {
            sidebar.classList.remove('open');
            // Transition shesh hole active class remove kora
            setTimeout(() => {
                panels.forEach(panel => panel.classList.remove('active'));
            }, 400); 
        }
    };

    // 1. Sidebar Open
    if (exploreBtn && sidebar) {
        exploreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            sidebar.classList.add('open');
            panels.forEach(p => p.classList.remove('active'));
            const mainPanel = document.querySelector('.category-panel');
            if (mainPanel) mainPanel.classList.add('active');
        });
    }

    // 2. Submenu Toggle (Next Level)
    document.querySelectorAll('.toggle-submenu').forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.stopPropagation();
            const targetClass = this.getAttribute('data-target');
            const targetPanel = document.querySelector(`.${targetClass}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // 3. Back Button (Previous Level)
    backButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const currentPanel = this.closest('.menu-panel');
            if (currentPanel) {
                currentPanel.classList.remove('active');
            }
        });
    });

    // 4. Close Button Logic (Multiple Button Support)
    // ID 'closeSidebar' thakleo shobgulo select korar jonno querySelectorAll use kora hoyeche
    document.querySelectorAll('#closeSidebar').forEach(btn => {
        btn.addEventListener('click', closeSidebar);
    });

    // 5. Click Outside (Overlay) to Close
    // Eita add korle design aro premium hobe
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !exploreBtn.contains(e.target)) {
            closeSidebar();
        }
    });
});