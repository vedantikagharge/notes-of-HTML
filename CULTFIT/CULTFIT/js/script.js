    // Load the sidebar dynamically
    fetch('../components/sidebar.html')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch sidebar: ' + response.statusText);
            }
            return response.text();
        })
        .then((data) => {
            document.getElementById('sidebar').innerHTML = data;

            // Initialize sidebar functionality AFTER it's loaded
            initializeSidebar();
        })
        .catch((error) => {
            console.error('Error loading sidebar:', error);
        });

    // Load the header dynamically
    fetch('../components/header.html')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch header: ' + response.statusText);
            }
            return response.text();
        })
        .then((data) => {
            document.getElementById('header').innerHTML = data;
        })
        .catch((error) => {
            console.error('Error loading header:', error);
        });

    // Sidebar initialization function
    function initializeSidebar() {
        // The JavaScript logic from sidebar.js can be placed here,
        // or you can call a function from sidebar.js if it's already imported.
        document.querySelectorAll('.main-menu').forEach((menu) => {
            menu.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent default action of the link

                const subMenu = this.nextElementSibling;

                if (subMenu && subMenu.classList.contains('sub-menu-1')) {
                    const downArrow = this.querySelector('.down-arrow');

                    if (subMenu.style.display === 'block') {
                        subMenu.style.display = 'none'; // Hide submenu
                        this.style.backgroundColor = ''; // Reset main-menu background
                        if (downArrow) {
                            downArrow.classList.remove('active'); // Remove active class from down-arrow
                        }
                    } else {
                        // Hide all other submenus and reset styles
                        document.querySelectorAll('.sub-menu-1').forEach((menu) => {
                            menu.style.display = 'none';
                            menu.previousElementSibling.style.backgroundColor = ''; // Reset other main-menu backgrounds
                            const otherArrow = menu.previousElementSibling.querySelector('.down-arrow');
                            if (otherArrow) {
                                otherArrow.classList.remove('active'); // Remove active class from other down-arrows
                            }
                        });

                        // Show the current submenu and apply styles
                        subMenu.style.display = 'block';
                        subMenu.querySelector('ul').style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
                        this.style.backgroundColor = 'rgba(255, 255, 255, 0.16)'; // Apply background to main-menu

                        if (downArrow) {
                            downArrow.classList.add('active'); // Add active class to down-arrow
                        }
                    }
                }
            });
        });
    }

