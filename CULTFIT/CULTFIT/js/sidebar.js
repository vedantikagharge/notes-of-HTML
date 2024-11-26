
        document.querySelectorAll('.main-menu').forEach((menu) => {
            menu.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent default action of the link

                // Find the closest `.sub-menu-1` related to this menu
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


