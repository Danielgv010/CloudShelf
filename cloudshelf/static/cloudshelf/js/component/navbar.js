document.addEventListener('DOMContentLoaded', async function () {
    const menuIcon = document.getElementById('menu-icon');
    const queryFilters = document.getElementById('query-filters');
    const accountIcon = document.getElementById('account-icon');
    const accountActions = document.getElementById('account-actions');
    const accountActionsLogout = document.getElementById('account-actions-logout');

    if (menuIcon && queryFilters) {
        menuIcon.addEventListener('click', function () {
            menuIcon.classList.toggle('active');
            queryFilters.classList.toggle('hidden');
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