let toggleThemeIcon = document.querySelector("#toggleBtn");

let theme = localStorage.getItem("theme");
if (theme === "dark") {
    document.documentElement.classList.add("dark");
    toggleThemeIcon.setAttribute("checked", true);
}
toggleThemeIcon.addEventListener("change", () => {
    if (theme === "light") {
        theme = "dark";
        localStorage.setItem("theme", theme);
        document.documentElement.classList.add("dark");
    } else {
        theme = "light";
        localStorage.setItem("theme", theme);
        document.documentElement.classList.remove("dark");
    }
});