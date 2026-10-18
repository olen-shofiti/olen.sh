(() => {
    const supported = ["en", "el", "sq", "sv"];
    const names = { en: "English", el: "Ελληνικά", sq: "Shqip", sv: "Svenska" };
    const flags = { en: "🇬🇧", el: "🇬🇷", sq: "🇦🇱", sv: "🇸🇪" };
    const translations = {
        el: {
            "Click to enter": "Κάντε κλικ για είσοδο", "View projects": "Δείτε τα έργα",
            "About Me": "Σχετικά με εμένα", "Projects": "Έργα",
            "Professional button clicker. Occasional bug creator. Sometimes software developer.": "Επαγγελματίας πατητής κουμπιών. Περιστασιακός δημιουργός σφαλμάτων. Μερικές φορές προγραμματιστής.",
            "I spend my days telling computers exactly what to do and then acting surprised when they do something completely different.": "Περνώ τις μέρες μου λέγοντας στους υπολογιστές ακριβώς τι να κάνουν και μετά εκπλήσσομαι όταν κάνουν κάτι τελείως διαφορετικό.",
            "This website is an effort to showcase my work because apparently keeping projects hidden in random folders isn't considered a portfolio.": "Αυτός ο ιστότοπος παρουσιάζει τη δουλειά μου, επειδή το να κρύβω έργα σε τυχαίους φακέλους μάλλον δεν θεωρείται «portfolio».",
            "When I'm not coding, I'm usually:": "Όταν δεν προγραμματίζω, συνήθως:", "Starting a new project.": "Ξεκινάω ένα νέο έργο.", "Thinking about another new project.": "Σκέφτομαι ένα ακόμη νέο έργο.", "Ignoring the project I was already working on.": "Αγνοώ το έργο που ήδη έφτιαχνα.", "Feel free to look around. The bugs are mostly friendly.": "Ρίξτε μια ματιά. Τα σφάλματα είναι ως επί το πλείστον φιλικά.",
            "Machine Learning, Computer Vision and Software Development": "Μηχανική μάθηση, υπολογιστική όραση και ανάπτυξη λογισμικού",
            "Digit Recognition": "Αναγνώριση ψηφίων", "A handwritten-digit recognition application built using PyTorch.": "Εφαρμογή αναγνώρισης χειρόγραφων ψηφίων με χρήση του PyTorch.",
            "View Project": "Προβολή έργου", "Pathfinding Algorithms": "Αλγόριθμοι εύρεσης διαδρομής",
            "An interactive visualizer for BFS, DFS, Greedy BFS, and A* Search.": "Διαδραστική απεικόνιση των BFS, DFS, Greedy BFS και A*.",
            "INTERACTIVE PROJECT": "ΔΙΑΔΡΑΣΤΙΚΟ ΕΡΓΟ", "Pathfinding Visualizer": "Οπτικοποίηση εύρεσης διαδρομής",
            "Draw a maze, choose a search algorithm, and watch it find a route across the grid.": "Σχεδιάστε έναν λαβύρινθο, επιλέξτε αλγόριθμο αναζήτησης και δείτε πώς βρίσκει διαδρομή στο πλέγμα.",
            "The grid": "Το πλέγμα", "Click or drag on the grid. You can also focus the grid and use the arrow keys and Space.": "Κάντε κλικ ή σύρετε στο πλέγμα. Μπορείτε επίσης να εστιάσετε στο πλέγμα και να χρησιμοποιήσετε τα βέλη και το Space.",
            "Start": "Αφετηρία", "Goal": "Στόχος", "Wall": "Τοίχος", "Explored": "Εξερεύνηση", "Path": "Διαδρομή",
            "Algorithm": "Αλγόριθμος", "Breadth-First Search": "Αναζήτηση κατά πλάτος", "Depth-First Search": "Αναζήτηση κατά βάθος", "Greedy Best-First Search": "Άπληστη αναζήτηση πρώτα του καλύτερου", "A* Search": "Αναζήτηση A*",
            "Distance estimate": "Εκτίμηση απόστασης", "Used by A* and Greedy": "Χρησιμοποιείται από A* και Greedy", "Manhattan": "Μανχάταν", "Euclidean": "Ευκλείδεια",
            "Grid tool": "Εργαλείο πλέγματος", "Draw walls": "Σχεδίαση τοίχων", "Erase walls": "Σβήσιμο τοίχων", "Move start": "Μετακίνηση αφετηρίας", "Move goal": "Μετακίνηση στόχου",
            "Animation speed": "Ταχύτητα κίνησης", "Cells shown per frame": "Κελιά ανά καρέ", "Find Path": "Εύρεση διαδρομής", "Randomize Walls": "Τυχαίοι τοίχοι", "Clear Walls": "Καθαρισμός τοίχων", "Nodes explored": "Κόμβοι που εξερευνήθηκαν", "Path length": "Μήκος διαδρομής", "← Back to projects": "← Επιστροφή στα έργα",
            "Draw a digit from 0 to 9 and see the magic unfold!": "Σχεδιάστε ένα ψηφίο από 0 έως 9 και δείτε τι θα συμβεί!", "Draw a digit (0–9)": "Σχεδιάστε ένα ψηφίο (0–9)", "Clear": "Καθαρισμός", "Predict": "Πρόβλεψη", "Prediction": "Πρόβλεψη", "← Back to Projects": "← Επιστροφή στα έργα"
        },
        sq: {
            "Click to enter": "Klikoni për të hyrë", "View projects": "Shiko projektet", "About Me": "Rreth meje", "Projects": "Projektet",
            "Professional button clicker. Occasional bug creator. Sometimes software developer.": "Klikues profesionist butonash. Krijues i rastësishëm gabimesh. Ndonjëherë zhvillues softueri.",
            "I spend my days telling computers exactly what to do and then acting surprised when they do something completely different.": "I kaloj ditët duke u treguar kompjuterëve saktësisht çfarë të bëjnë, pastaj habitem kur bëjnë diçka krejt tjetër.",
            "This website is an effort to showcase my work because apparently keeping projects hidden in random folders isn't considered a portfolio.": "Kjo faqe prezanton punën time, sepse projektet e fshehura në dosje të rastësishme me sa duket nuk quhen «portofol».",
            "When I'm not coding, I'm usually:": "Kur nuk programoj, zakonisht:", "Starting a new project.": "Nis një projekt të ri.", "Thinking about another new project.": "Mendoj për një projekt tjetër të ri.", "Ignoring the project I was already working on.": "Injoroj projektin me të cilin po punoja.", "Feel free to look around. The bugs are mostly friendly.": "Shikoje faqen lirisht. Gabimet janë kryesisht miqësore.",
            "Machine Learning, Computer Vision and Software Development": "Mësimi makinerik, vizioni kompjuterik dhe zhvillimi i softuerit", "Digit Recognition": "Njohja e shifrave", "A handwritten-digit recognition application built using PyTorch.": "Aplikacion për njohjen e shifrave të shkruara me dorë, ndërtuar me PyTorch.", "View Project": "Shiko projektin", "Pathfinding Algorithms": "Algoritmet e gjetjes së rrugës", "An interactive visualizer for BFS, DFS, Greedy BFS, and A* Search.": "Vizualizues interaktiv për BFS, DFS, Greedy BFS dhe kërkimin A*.",
            "INTERACTIVE PROJECT": "PROJEKT NDËRVEPRUES", "Pathfinding Visualizer": "Vizualizues i gjetjes së rrugës", "Draw a maze, choose a search algorithm, and watch it find a route across the grid.": "Vizato një labirint, zgjidh algoritmin dhe shiko si gjen rrugën në rrjetë.", "The grid": "Rrjeta", "Click or drag on the grid. You can also focus the grid and use the arrow keys and Space.": "Kliko ose tërhiq në rrjetë. Mund ta fokusosh rrjetën dhe të përdorësh shigjetat dhe Space.", "Start": "Nisja", "Goal": "Synimi", "Wall": "Mur", "Explored": "Eksploruar", "Path": "Rruga", "Algorithm": "Algoritmi", "Breadth-First Search": "Kërkim në gjerësi", "Depth-First Search": "Kërkim në thellësi", "Greedy Best-First Search": "Kërkimi lakmitar më i mirë", "A* Search": "Kërkimi A*", "Distance estimate": "Vlerësimi i distancës", "Used by A* and Greedy": "Përdoret nga A* dhe Greedy", "Manhattan": "Manhattan", "Euclidean": "Euklidiane", "Grid tool": "Mjeti i rrjetës", "Draw walls": "Vizato mure", "Erase walls": "Fshi mure", "Move start": "Lëviz nisjen", "Move goal": "Lëviz synimin", "Animation speed": "Shpejtësia e animacionit", "Cells shown per frame": "Qeliza për kuadër", "Find Path": "Gjej rrugën", "Randomize Walls": "Mure rastësore", "Clear Walls": "Pastro muret", "Nodes explored": "Nyje të eksploruara", "Path length": "Gjatësia e rrugës", "← Back to projects": "← Kthehu te projektet", "Draw a digit from 0 to 9 and see the magic unfold!": "Vizato një shifër nga 0 në 9 dhe shiko rezultatin!", "Draw a digit (0–9)": "Vizato një shifër (0–9)", "Clear": "Pastro", "Predict": "Parashiko", "Prediction": "Parashikimi", "← Back to Projects": "← Kthehu te projektet"
        },
        sv: {
            "Click to enter": "Klicka för att gå in", "View projects": "Visa projekt", "About Me": "Om mig", "Projects": "Projekt",
            "Professional button clicker. Occasional bug creator. Sometimes software developer.": "Professionell knapptryckare. Skapar buggar ibland. Utvecklare emellanåt.",
            "I spend my days telling computers exactly what to do and then acting surprised when they do something completely different.": "Jag ägnar dagarna åt att tala om för datorer exakt vad de ska göra och blir sedan förvånad när de gör något helt annat.",
            "This website is an effort to showcase my work because apparently keeping projects hidden in random folders isn't considered a portfolio.": "Den här webbplatsen visar upp mitt arbete eftersom projekt i slumpmässiga mappar tydligen inte räknas som en portfolio.",
            "When I'm not coding, I'm usually:": "När jag inte kodar brukar jag:", "Starting a new project.": "Börja på ett nytt projekt.", "Thinking about another new project.": "Fundera på ännu ett nytt projekt.", "Ignoring the project I was already working on.": "Ignorera projektet jag redan arbetade med.", "Feel free to look around. The bugs are mostly friendly.": "Titta gärna runt. Buggarna är oftast vänliga.",
            "Machine Learning, Computer Vision and Software Development": "Maskininlärning, datorseende och mjukvaruutveckling", "Digit Recognition": "Sifferigenkänning", "A handwritten-digit recognition application built using PyTorch.": "En app för att känna igen handskrivna siffror, byggd med PyTorch.", "View Project": "Visa projekt", "Pathfinding Algorithms": "Vägsökningsalgoritmer", "An interactive visualizer for BFS, DFS, Greedy BFS, and A* Search.": "En interaktiv visualisering av BFS, DFS, Greedy BFS och A*-sökning.",
            "INTERACTIVE PROJECT": "INTERAKTIVT PROJEKT", "Pathfinding Visualizer": "Visualisering av vägsökning", "Draw a maze, choose a search algorithm, and watch it find a route across the grid.": "Rita en labyrint, välj sökalgoritm och se hur den hittar en väg genom rutnätet.", "The grid": "Rutnätet", "Click or drag on the grid. You can also focus the grid and use the arrow keys and Space.": "Klicka eller dra i rutnätet. Du kan också fokusera rutnätet och använda piltangenterna och mellanslag.", "Start": "Start", "Goal": "Mål", "Wall": "Vägg", "Explored": "Utforskat", "Path": "Väg", "Algorithm": "Algoritm", "Breadth-First Search": "Bredden-först-sökning", "Depth-First Search": "Djupet-först-sökning", "Greedy Best-First Search": "Girig bästa-först-sökning", "A* Search": "A*-sökning", "Distance estimate": "Avståndsestimat", "Used by A* and Greedy": "Används av A* och Greedy", "Manhattan": "Manhattan", "Euclidean": "Euklidiskt", "Grid tool": "Rutnätsverktyg", "Draw walls": "Rita väggar", "Erase walls": "Sudda väggar", "Move start": "Flytta start", "Move goal": "Flytta mål", "Animation speed": "Animationshastighet", "Cells shown per frame": "Rutor per bildruta", "Find Path": "Hitta väg", "Randomize Walls": "Slumpa väggar", "Clear Walls": "Rensa väggar", "Nodes explored": "Utforskade noder", "Path length": "Väglängd", "← Back to projects": "← Tillbaka till projekt", "Draw a digit from 0 to 9 and see the magic unfold!": "Rita en siffra från 0 till 9 och se resultatet!", "Draw a digit (0–9)": "Rita en siffra (0–9)", "Clear": "Rensa", "Predict": "Förutsäg", "Prediction": "Förutsägelse", "← Back to Projects": "← Tillbaka till projekt"
        }
    };

    const sharedTranslations = {
        el: {
            "The grid could not start because canvas drawing is unavailable.": "Το πλέγμα δεν ξεκίνησε επειδή δεν είναι διαθέσιμη η σχεδίαση canvas.", "Skip animation": "Παράλειψη κίνησης", "Board updated. Choose Find Path to run the search.": "Το πλέγμα ενημερώθηκε. Επιλέξτε Εύρεση διαδρομής για αναζήτηση.", "Searching the grid…": "Αναζήτηση στο πλέγμα…", "Walls cleared. Add obstacles or run a search.": "Οι τοίχοι αφαιρέθηκαν. Προσθέστε εμπόδια ή ξεκινήστε αναζήτηση.", "Tool changed. Edit the grid, then run a search.": "Το εργαλείο άλλαξε. Επεξεργαστείτε το πλέγμα και ξεκινήστε αναζήτηση.", "Random walls created. Choose Find Path to run the search.": "Δημιουργήθηκαν τυχαίοι τοίχοι. Επιλέξτε Εύρεση διαδρομής.", "{algorithm} found a path of {steps} steps after exploring {nodes} nodes.": "Ο αλγόριθμος {algorithm} βρήκε διαδρομή {steps} βημάτων αφού εξερεύνησε {nodes} κόμβους.", "{algorithm} could not reach the goal after exploring {nodes} nodes.": "Ο αλγόριθμος {algorithm} δεν έφτασε στον στόχο αφού εξερεύνησε {nodes} κόμβους.",
            "Drawing is unavailable in this browser.": "Η σχεδίαση δεν είναι διαθέσιμη σε αυτό το πρόγραμμα περιήγησης.", "Could not read the drawing. Try refreshing the page.": "Δεν ήταν δυνατή η ανάγνωση του σχεδίου. Δοκιμάστε ανανέωση της σελίδας.", "Draw a digit on the canvas first.": "Σχεδιάστε πρώτα ένα ψηφίο στον καμβά.", "Loading the digit model…": "Φόρτωση μοντέλου ψηφίων…", "Recognizing your digit…": "Αναγνώριση ψηφίου…", "Prediction ready.": "Η πρόβλεψη είναι έτοιμη.", "Could not load or run the digit model. Check that the site files are available, then try again.": "Δεν ήταν δυνατή η φόρτωση ή εκτέλεση του μοντέλου. Ελέγξτε τα αρχεία του ιστότοπου και δοκιμάστε ξανά.", "The digit demo could not start because part of the page is missing.": "Η επίδειξη δεν ξεκίνησε επειδή λείπει μέρος της σελίδας.", "Canvas cleared. Draw a digit from 0 to 9.": "Ο καμβάς καθαρίστηκε. Σχεδιάστε ένα ψηφίο από 0 έως 9.", "Draw a digit from 0 to 9, then choose Predict.": "Σχεδιάστε ένα ψηφίο από 0 έως 9 και επιλέξτε Πρόβλεψη."
        },
        sq: {
            "The grid could not start because canvas drawing is unavailable.": "Rrjeta nuk mund të niste sepse vizatimi në canvas nuk është i disponueshëm.", "Skip animation": "Kalo animacionin", "Board updated. Choose Find Path to run the search.": "Rrjeta u përditësua. Zgjidh Gjej rrugën për të nisur kërkimin.", "Searching the grid…": "Po kërkohet në rrjetë…", "Walls cleared. Add obstacles or run a search.": "Muret u pastruan. Shto pengesa ose nis kërkimin.", "Tool changed. Edit the grid, then run a search.": "Mjeti ndryshoi. Ndrysho rrjetën dhe nis kërkimin.", "Random walls created. Choose Find Path to run the search.": "U krijuan mure rastësore. Zgjidh Gjej rrugën.", "{algorithm} found a path of {steps} steps after exploring {nodes} nodes.": "{algorithm} gjeti rrugë me {steps} hapa pasi eksploroi {nodes} nyje.", "{algorithm} could not reach the goal after exploring {nodes} nodes.": "{algorithm} nuk arriti te synimi pasi eksploroi {nodes} nyje.", "Drawing is unavailable in this browser.": "Vizatimi nuk është i disponueshëm në këtë shfletues.", "Could not read the drawing. Try refreshing the page.": "Nuk mund të lexohej vizatimi. Rifresko faqen dhe provo përsëri.", "Draw a digit on the canvas first.": "Vizato fillimisht një shifër në canvas.", "Loading the digit model…": "Po ngarkohet modeli i shifrave…", "Recognizing your digit…": "Po njihet shifra…", "Prediction ready.": "Parashikimi është gati.", "Could not load or run the digit model. Check that the site files are available, then try again.": "Modeli nuk mund të ngarkohej ose nisej. Kontrollo skedarët e faqes dhe provo përsëri.", "The digit demo could not start because part of the page is missing.": "Demonstrimi nuk mund të niste sepse mungon një pjesë e faqes.", "Canvas cleared. Draw a digit from 0 to 9.": "Canvas u pastrua. Vizato një shifër nga 0 në 9.", "Draw a digit from 0 to 9, then choose Predict.": "Vizato një shifër nga 0 në 9 dhe zgjidh Parashiko."
        },
        sv: {
            "The grid could not start because canvas drawing is unavailable.": "Rutnätet kunde inte starta eftersom canvasritning inte är tillgänglig.", "Skip animation": "Hoppa över animering", "Board updated. Choose Find Path to run the search.": "Rutnätet har uppdaterats. Välj Hitta väg för att starta sökningen.", "Searching the grid…": "Söker i rutnätet…", "Walls cleared. Add obstacles or run a search.": "Väggarna har rensats. Lägg till hinder eller starta en sökning.", "Tool changed. Edit the grid, then run a search.": "Verktyget har ändrats. Redigera rutnätet och starta en sökning.", "Random walls created. Choose Find Path to run the search.": "Slumpade väggar har skapats. Välj Hitta väg.", "{algorithm} found a path of {steps} steps after exploring {nodes} nodes.": "{algorithm} hittade en väg på {steps} steg efter att ha utforskat {nodes} noder.", "{algorithm} could not reach the goal after exploring {nodes} nodes.": "{algorithm} kunde inte nå målet efter att ha utforskat {nodes} noder.", "Drawing is unavailable in this browser.": "Ritning är inte tillgänglig i den här webbläsaren.", "Could not read the drawing. Try refreshing the page.": "Kunde inte läsa ritningen. Försök att uppdatera sidan.", "Draw a digit on the canvas first.": "Rita först en siffra på arbetsytan.", "Loading the digit model…": "Läser in siffermodellen…", "Recognizing your digit…": "Känner igen siffran…", "Prediction ready.": "Förutsägelsen är klar.", "Could not load or run the digit model. Check that the site files are available, then try again.": "Kunde inte läsa in eller köra modellen. Kontrollera att webbplatsens filer är tillgängliga och försök igen.", "The digit demo could not start because part of the page is missing.": "Sifferdemonstrationen kunde inte starta eftersom delar av sidan saknas.", "Canvas cleared. Draw a digit from 0 to 9.": "Arbetsytan har rensats. Rita en siffra från 0 till 9.", "Draw a digit from 0 to 9, then choose Predict.": "Rita en siffra från 0 till 9 och välj Förutsäg."
        }
    };
    const statusTranslations = {
        "Draw a maze or use the sample walls, then choose Find Path.": {
            el: "Σχεδιάστε έναν λαβύρινθο ή χρησιμοποιήστε τους ενδεικτικούς τοίχους και επιλέξτε Εύρεση διαδρομής.",
            sq: "Vizato një labirint ose përdor muret shembull dhe zgjidh Gjej rrugën.",
            sv: "Rita en labyrint eller använd exempelväggarna och välj Hitta väg."
        }
    };
    for (const [key, localized] of Object.entries(statusTranslations)) {
        for (const [language, value] of Object.entries(localized)) translations[language][key] = value;
    }
    for (const language of Object.keys(sharedTranslations)) {
        Object.assign(translations[language], sharedTranslations[language]);
    }

    function detectLanguage() {
        let saved = null;
        try { saved = localStorage.getItem("olen-language"); } catch (error) { /* Private browsing can block storage. */ }
        if (supported.includes(saved)) return saved;
        for (const preference of navigator.languages || [navigator.language || "en"]) {
            const language = preference.toLowerCase().split("-")[0];
            if (supported.includes(language)) return language;
        }
        return "en";
    }

    function translate(language) {
        const dictionary = translations[language] || {};
        document.documentElement.lang = language;
        document.querySelectorAll("[data-language-text]").forEach(element => {
            const key = element.dataset.languageText;
            element.textContent = (dictionary[key] || key);
        });
        document.querySelectorAll("[data-language-aria]").forEach(element => {
            const key = element.dataset.languageAria;
            element.setAttribute("aria-label", dictionary[key] || key);
        });
        document.querySelectorAll("[data-language-title]").forEach(element => {
            const key = element.dataset.languageTitle;
            element.title = dictionary[key] || key;
        });
        const select = document.getElementById("language-select");
        if (select) select.value = language;
        window.siteLanguage = language;
        window.siteTranslate = key => dictionary[key] || key;
        document.dispatchEvent(new CustomEvent("site-language-change", { detail: { language } }));
    }

    const select = document.createElement("select");
    select.id = "language-select";
    select.className = "language-select";
    select.setAttribute("aria-label", "Language / Γλώσσα / Gjuha / Språk");
    for (const language of supported) {
        const option = document.createElement("option");
        option.value = language;
        option.textContent = `${flags[language]} ${names[language]}`;
        select.append(option);
    }
    select.addEventListener("change", () => {
        try { localStorage.setItem("olen-language", select.value); } catch (error) { /* Language still changes for this page. */ }
        translate(select.value);
    });
    document.body.append(select);
    translate(detectLanguage());
})();
