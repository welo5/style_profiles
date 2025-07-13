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
    header.style.background = 'linear-gradient(to right, #003f7f, #ff6f3c)'; // 🎨 Gradient here
    header.style.padding = '12px 24px';
    header.style.borderBottom = '2px solid #003f7f';
    header.style.marginBottom = '8px';

    // Add logo image
    const logo = document.createElement('img');
    logo.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGPyZex-V1Os0bQH2W6Ku8Sh0_FM-78madw&s'; // ✅ Replace if needed
    logo.alt = 'Bank Logo';
    logo.style.height = '40px';
    logo.style.marginRight = '16px';

    // Add label next to logo
    const label = document.createElement('span');
    label.textContent = 'Your Bank Portal';
    label.style.fontSize = '18px';
    label.style.fontWeight = '600';
    label.style.color = '#ffffff';
    label.style.fontFamily = "'Inter', sans-serif";

    // Append logo and label to header
    header.appendChild(logo);
    header.appendChild(label);

    // Insert the header before the form container
    formContainer.parentNode.insertBefore(header, formContainer);
});
