document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.querySelector('.form');
    if (!formContainer) return;

    // Remove old custom header if it exists
    const existingHeader = document.getElementById('custom-header');
    if (existingHeader) {
        existingHeader.remove();
    }

    // Create a new header div
    const header = document.createElement('div');
    header.id = 'custom-header';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'flex-start';
    header.style.backgroundColor = '#f5f8fc';
    header.style.padding = '12px 24px';
    header.style.borderBottom = '2px solid #003f7f';
    header.style.marginBottom = '8px';

    // Add logo image
    const logo = document.createElement('img');
    logo.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Bank.svg/200px-Logo_Bank.svg.png'; // ✅ Replace with your logo
    logo.alt = 'Bank Logo';
    logo.style.height = '40px';
    logo.style.marginRight = '16px';

    // Add label next to logo
    const label = document.createElement('span');
    label.textContent = 'Your Bank Portal';
    label.style.fontSize = '18px';
    label.style.fontWeight = '600';
    label.style.color = '#003f7f';
    label.style.fontFamily = "'Inter', sans-serif";

    // Append logo and label to header
    header.appendChild(logo);
    header.appendChild(label);

    // Insert the header before the form container
    formContainer.parentNode.insertBefore(header, formContainer);
});
