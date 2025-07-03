document.addEventListener('DOMContentLoaded', async function () {
    const menuIcon = document.getElementById('menu-icon');
    const accountIcon = document.getElementById('account-icon');
    const accountActions = document.getElementById('account-actions');
    const accountActionsLogout = document.getElementById('account-actions-logout');

    if (menuIcon) {
        menuIcon.addEventListener('click', function () {
            menuIcon.classList.toggle('active');
        });
    }

    if (accountIcon && accountActions) {
        accountIcon.addEventListener('click', function () {
            accountActions.classList.toggle('hidden');
        });
    }

    if (accountActionsLogout){
        accountActionsLogout.addEventListener('click', function () {
            window.location.href = accountActionsLogout.getAttribute('data-redirect');
        });
    }
});