const toggleBtn = document.querySelector("#toggle-theme");

toggleBtn.addEventListener('click', e => {
    console.log("Switching theme");
    if (document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme');
    } else {
        document.documentElement.setAttribute('theme', 'dark');
    }
});

const darknessSlider = document.querySelector("#darknessSlider");

darknessSlider.addEventListener('change', (e) => {
    const val = darknessSlider.value
    document.documentElement.style.setProperty('--theme-darkness', val);
});