(() => {
    const transcript = document.getElementById("terminal-transcript");
    if (!transcript) return;
    const translate = key => window.siteTranslate ? window.siteTranslate(key) : key;
    let typingTimer;
    const wait = duration => new Promise(resolve => { typingTimer = setTimeout(resolve, duration); });
    const type = (element, text, speed = 14) => new Promise(resolve => {
        const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) { element.textContent = text; resolve(); return; }
        let index = 0;
        const next = () => { element.textContent = text.slice(0, index += 2); index < text.length ? typingTimer = setTimeout(next, speed) : resolve(); };
        next();
    });
    const addContactLinks = line => {
        const links = document.createElement("span");
        links.className = "terminal-contact-links";
        links.innerHTML = '<a href="https://github.com/olen-shofiti" rel="me">GitHub</a><a href="https://www.linkedin.com/in/olen-shofiti/" rel="me">LinkedIn</a><a href="mailto:olenshofiti@gmail.com">Email</a>';
        line.append(links);
    };
    const writeEntry = async (command, response, contact = false) => {
        const prompt = document.createElement("p");
        prompt.className = "terminal-command-line";
        transcript.append(prompt);
        await type(prompt, `olen@shofiti:~$ ${command}`, 18);
        const output = document.createElement("div");
        output.className = "terminal-output";
        transcript.append(output);
        await type(output, response);
        if (contact) addContactLinks(output);
        await wait(360);
    };
    const runTranscript = async () => {
        clearTimeout(typingTimer);
        transcript.replaceChildren();
        await writeEntry("about", [
            translate("Professional button clicker. Occasional bug creator. Sometimes software developer."),
            translate("I spend my days telling computers exactly what to do and then acting surprised when they do something completely different."),
            translate("This website is an effort to showcase my work because apparently keeping projects hidden in random folders isn't considered a portfolio.")
        ].join("\n\n"));
        await writeEntry("interests", [
            translate("When I'm not coding, I'm usually:"),
            `• ${translate("Starting a new project.")}`,
            `• ${translate("Thinking about another new project.")}`,
            `• ${translate("Ignoring the project I was already working on.")}`
        ].join("\n"));
        await writeEntry("focus", translate("Software, machine learning, computer vision, microcontrollers, algorithms, robotics."));
        await writeEntry("status", [
            translate("Building, learning, and occasionally debugging friendly bugs."),
            translate("Feel free to look around. The bugs are mostly friendly.")
        ].join("\n\n"));
        await writeEntry("contact", translate("Find me online or send me an email."), true);
    };
    document.addEventListener("site-language-change", runTranscript);
    runTranscript();
})();
