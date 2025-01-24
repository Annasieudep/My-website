// Kiểm tra trạng thái dark mode từ localStorage khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        enableDarkMode();
    }

    // Nạp nội dung Sidebar và Footer
    loadSidebar();
    loadFooter();
});

// Hàm bật chế độ dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    const icon = document.getElementById('theme-icon');
    const text = document.getElementById('theme-text');
    icon.setAttribute('name', 'sunny-outline');
    text.textContent = 'Chế Độ Sáng';
    localStorage.setItem('darkMode', 'enabled');
}

// Hàm tắt chế độ dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    const icon = document.getElementById('theme-icon');
    const text = document.getElementById('theme-text');
    icon.setAttribute('name', 'moon-outline');
    text.textContent = 'Chế Độ Tối';
    localStorage.setItem('darkMode', 'disabled');
}

// Hàm bật/tắt dark mode
function toggleDarkMode() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const icon = document.getElementById('theme-icon');
    if (isDarkMode) {
        disableDarkMode(
            icon.setAttribute('name', 'moon-outline')
        );
    } else {
        enableDarkMode(
            icon.setAttribute('name', 'sunny-outline')
        );
    }
}

// Hàm nạp Sidebar
function loadSidebar() {
    fetch('components/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.sidebar').innerHTML = data;
        })
        .catch(err => console.error('Lỗi khi tải Sidebar:', err));
}

// Hàm nạp Footer
function loadFooter() {
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.footer').innerHTML = data;
        })
        .catch(err => console.error('Lỗi khi tải Footer:', err));
}
