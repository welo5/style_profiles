(function () {
    window.addEventListener('DOMContentLoaded', function () {
        const formContainer = document.querySelector('.form');

        if (formContainer) {
            const header = document.createElement('div');
            header.innerHTML = `<div style="
                width: 100%;
                background: linear-gradient(to right, #003f7f, #ff6f3c);
                color: white;
                padding: 16px;
                font-size: 20px;
                font-weight: 600;
                text-align: center;
                border-radius: 8px 8px 0 0;
                margin-bottom: 12px;
                font-family: 'Inter', sans-serif;
            ">Hello World</div>`;

            formContainer.parentNode.insertBefore(header, formContainer);
        }
    });
})();
