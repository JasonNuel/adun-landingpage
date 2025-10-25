// Shared JavaScript across all pages
document.addEventListener('DOMContentLoaded', () => {
    // Form submission handler
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            if (email) {
                alert(`Thank you! We'll notify you at ${email} when we launch.`);
                form.reset();
            }
        });
    }
    
    // Feather icons replacement
    if (window.feather) {
        feather.replace();
    }
});