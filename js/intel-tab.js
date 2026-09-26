document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.intel-tab-btn');
    const tabContents = document.querySelectorAll('.intel-tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});


