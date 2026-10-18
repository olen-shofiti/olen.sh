const entryHint = document.getElementById("entry-hint");
const projectsLink = document.querySelector('.hero a[href="projects.html"]');
const enteredStorageKey = "olen-projects-entered";

let showHintTimer = null;
let hideHintTimer = null;

function hasEnteredProjects() {
    try {
        return sessionStorage.getItem(enteredStorageKey) === "true";
    } catch (error) {
        return false;
    }
}

function stopHintTimers() {
    window.clearTimeout(showHintTimer);
    window.clearTimeout(hideHintTimer);
    showHintTimer = null;
    hideHintTimer = null;
}

function hideHint() {
    entryHint.classList.remove("is-flashing");
    entryHint.hidden = true;
}

function scheduleHint() {
    stopHintTimers();

    if (hasEnteredProjects() || document.hidden) {
        hideHint();
        return;
    }

    showHintTimer = window.setTimeout(showHint, 5000);
}

function showHint() {
    showHintTimer = null;

    if (hasEnteredProjects() || document.hidden) {
        hideHint();
        return;
    }

    entryHint.hidden = false;
    entryHint.classList.remove("is-flashing");
    void entryHint.offsetWidth;
    entryHint.classList.add("is-flashing");

    hideHintTimer = window.setTimeout(() => {
        hideHintTimer = null;
        hideHint();
        scheduleHint();
    }, 2000);
}

if (entryHint && projectsLink) {
    projectsLink.addEventListener("click", () => {
        try {
            sessionStorage.setItem(enteredStorageKey, "true");
        } catch (error) {
            // Continue navigation if browser storage is unavailable.
        }

        stopHintTimers();
        hideHint();
    });

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            stopHintTimers();
            hideHint();
        } else {
            scheduleHint();
        }
    });

    window.addEventListener("pageshow", () => {
        if (hasEnteredProjects()) {
            stopHintTimers();
            hideHint();
        } else {
            scheduleHint();
        }
    });

    scheduleHint();
}
