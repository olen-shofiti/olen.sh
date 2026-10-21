(() => {
    const supported = ["en", "el", "sq", "sv"];
    const names = { en: "English", el: "Ελληνικά", sq: "Shqip", sv: "Svenska" };
    const flags = { en: "🇬🇧", el: "🇬🇷", sq: "🇦🇱", sv: "🇸🇪" };
    const translations = {
        el: {
            "Click to enter": "Κάντε κλικ για είσοδο", "View projects": "Δείτε τα πρότζεκτ",
            "About Me": "Σχετικά με εμένα", "Projects": "Πρότζεκτ",
            "Professional button clicker. Occasional bug creator. Sometimes software developer.": "Επαγγελματίας πατητής κουμπιών. Περιστασιακός δημιουργός σφαλμάτων. Μερικές φορές προγραμματιστής.",
            "I spend my days telling computers exactly what to do and then acting surprised when they do something completely different.": "Περνώ τις μέρες μου λέγοντας στους υπολογιστές ακριβώς τι να κάνουν και μετά εκπλήσσομαι όταν κάνουν κάτι τελείως διαφορετικό.",
            "This website is an effort to showcase my work because apparently keeping projects hidden in random folders isn't considered a portfolio.": "Αυτός ο ιστότοπος παρουσιάζει τη δουλειά μου, επειδή το να κρύβω πρότζεκτ σε τυχαίους φακέλους μάλλον δεν θεωρείται «portfolio».",
            "When I'm not coding, I'm usually:": "Όταν δεν προγραμματίζω, συνήθως:", "Starting a new project.": "Ξεκινάω ένα νέο πρότζεκτ.", "Thinking about another new project.": "Σκέφτομαι ένα ακόμη νέο πρότζεκτ.", "Ignoring the project I was already working on.": "Αγνοώ το πρότζεκτ που ήδη έφτιαχνα.", "Feel free to look around. The bugs are mostly friendly.": "Ρίξτε μια ματιά. Τα bugs είναι ως επί το πλείστον φιλικά.",
            "Machine Learning, Computer Vision and Software Development": "Μηχανική μάθηση, υπολογιστική όραση και ανάπτυξη λογισμικού",
            "Digit Recognition": "Αναγνώριση ψηφίων", "A handwritten-digit recognition application.": "Εφαρμογή αναγνώρισης χειρόγραφων ψηφίων.",
            "View Project": "Προβολή πρότζεκτ", "Pathfinding Algorithms": "Αλγόριθμοι εύρεσης διαδρομής",
            "An interactive visualizer for BFS, DFS, Greedy BFS, and A* Search.": "Διαδραστική απεικόνιση των BFS, DFS, Greedy BFS και A*.",
            "INTERACTIVE PROJECT": "ΔΙΑΔΡΑΣΤΙΚΟ ΕΡΓΟ", "Pathfinding Visualizer": "Οπτικοποίηση εύρεσης διαδρομής",
            "Draw a maze, choose a search algorithm, and watch it find a route across the grid.": "Σχεδιάστε έναν λαβύρινθο, επιλέξτε αλγόριθμο αναζήτησης και δείτε πώς βρίσκει διαδρομή στο πλέγμα.",
            "The grid": "Το πλέγμα", "Click or drag on the grid. You can also focus the grid and use the arrow keys and Space.": "Κάντε κλικ ή σύρετε στο πλέγμα. Μπορείτε επίσης να εστιάσετε στο πλέγμα και να χρησιμοποιήσετε τα βέλη και το Space.",
            "Start": "Αφετηρία", "Goal": "Στόχος", "Wall": "Τοίχος", "Explored": "Εξερεύνηση", "Path": "Διαδρομή",
            "Algorithm": "Αλγόριθμος", "Breadth-First Search": "Αναζήτηση κατά πλάτος", "Depth-First Search": "Αναζήτηση κατά βάθος", "Greedy Best-First Search": "Άπληστη αναζήτηση πρώτα του καλύτερου", "A* Search": "Αναζήτηση A*",
            "Distance estimate": "Εκτίμηση απόστασης", "Used by A* and Greedy": "Χρησιμοποιείται από A* και Greedy", "Manhattan": "Μανχάταν", "Euclidean": "Ευκλείδεια",
            "Grid tool": "Εργαλείο πλέγματος", "Draw walls": "Σχεδίαση τοίχων", "Erase walls": "Σβήσιμο τοίχων", "Move start": "Μετακίνηση αφετηρίας", "Move goal": "Μετακίνηση στόχου",
            "Animation speed": "Ταχύτητα κίνησης", "Cells shown per frame": "Κελιά ανά καρέ", "Find Path": "Εύρεση διαδρομής", "Randomize Walls": "Τυχαίοι τοίχοι", "Clear Walls": "Καθαρισμός τοίχων", "Nodes explored": "Κόμβοι που εξερευνήθηκαν", "Path length": "Μήκος διαδρομής", "← Back to projects": "← Επιστροφή στα πρότζεκτ",
            "Draw a digit from 0 to 9 and see the magic unfold!": "Σχεδιάστε ένα ψηφίο από 0 έως 9 και δείτε τι θα συμβεί!", "Draw a digit (0–9)": "Σχεδιάστε ένα ψηφίο (0–9)", "Clear": "Καθαρισμός", "Predict": "Πρόβλεψη", "Prediction": "Πρόβλεψη", "← Back to Projects": "← Επιστροφή στα πρότζεκτ"
        },
        sq: {
            "Click to enter": "Klikoni për të hyrë", "View projects": "Shiko projektet", "About Me": "Rreth meje", "Projects": "Projektet",
            "Professional button clicker. Occasional bug creator. Sometimes software developer.": "Klikues profesionist butonash. Krijues i rastësishëm defektesh. Ndonjëherë zhvillues softueri.",
            "I spend my days telling computers exactly what to do and then acting surprised when they do something completely different.": "I kaloj ditët duke u treguar kompjuterëve saktësisht çfarë të bëjnë, pastaj habitem kur bëjnë diçka krejt tjetër.",
            "This website is an effort to showcase my work because apparently keeping projects hidden in random folders isn't considered a portfolio.": "Kjo faqe prezanton punën time, sepse projektet e fshehura në dosje të rastësishme me sa duket nuk quhen «portofol».",
            "When I'm not coding, I'm usually:": "Kur nuk programoj, zakonisht:", "Starting a new project.": "Nis një projekt të ri.", "Thinking about another new project.": "Mendoj për një projekt tjetër të ri.", "Ignoring the project I was already working on.": "Injoroj projektin me të cilin po punoja.", "Feel free to look around. The bugs are mostly friendly.": "Shikoje faqen lirisht. Defektet janë pjesë e përvojës.",
            "Machine Learning, Computer Vision and Software Development": "Mësimi makinerik, vizioni kompjuterik dhe zhvillimi i softuerit", "Digit Recognition": "Njohja e shifrave", "A handwritten-digit recognition application.": "Aplikacion për njohjen e shifrave të shkruara me dorë.", "View Project": "Shiko projektin", "Pathfinding Algorithms": "Algoritmet e gjetjes së rrugës", "An interactive visualizer for BFS, DFS, Greedy BFS, and A* Search.": "Vizualizues interaktiv për BFS, DFS, Greedy BFS dhe kërkimin A*.",
            "INTERACTIVE PROJECT": "PROJEKT NDËRVEPRUES", "Pathfinding Visualizer": "Vizualizues i gjetjes së rrugës", "Draw a maze, choose a search algorithm, and watch it find a route across the grid.": "Vizato një labirint, zgjidh algoritmin dhe shiko si gjen rrugën në rrjetë.", "The grid": "Rrjeta", "Click or drag on the grid. You can also focus the grid and use the arrow keys and Space.": "Kliko ose tërhiq në rrjetë. Mund ta fokusosh rrjetën dhe të përdorësh shigjetat dhe Space.", "Start": "Nisja", "Goal": "Synimi", "Wall": "Mur", "Explored": "Eksploruar", "Path": "Rruga", "Algorithm": "Algoritmi", "Breadth-First Search": "Kërkim në gjerësi", "Depth-First Search": "Kërkim në thellësi", "Greedy Best-First Search": "Kërkimi lakmitar më i mirë", "A* Search": "Kërkimi A*", "Distance estimate": "Vlerësimi i distancës", "Used by A* and Greedy": "Përdoret nga A* dhe Greedy", "Manhattan": "Manhattan", "Euclidean": "Euklidiane", "Grid tool": "Mjeti i rrjetës", "Draw walls": "Vizato mure", "Erase walls": "Fshi mure", "Move start": "Lëviz nisjen", "Move goal": "Lëviz synimin", "Animation speed": "Shpejtësia e animacionit", "Cells shown per frame": "Qeliza për kuadër", "Find Path": "Gjej rrugën", "Randomize Walls": "Mure rastësore", "Clear Walls": "Pastro muret", "Nodes explored": "Nyje të eksploruara", "Path length": "Gjatësia e rrugës", "← Back to projects": "← Kthehu te projektet", "Draw a digit from 0 to 9 and see the magic unfold!": "Vizato një shifër nga 0 në 9 dhe shiko rezultatin!", "Draw a digit (0–9)": "Vizato një shifër (0–9)", "Clear": "Pastro", "Predict": "Parashiko", "Prediction": "Parashikimi", "← Back to Projects": "← Kthehu te projektet"
        },
        sv: {
            "Click to enter": "Klicka för att gå in", "View projects": "Visa projekt", "About Me": "Om mig", "Projects": "Projekt",
            "Professional button clicker. Occasional bug creator. Sometimes software developer.": "Professionell knapptryckare. Skapar buggar ibland. Utvecklare emellanåt.",
            "I spend my days telling computers exactly what to do and then acting surprised when they do something completely different.": "Jag ägnar dagarna åt att tala om för datorer exakt vad de ska göra och blir sedan förvånad när de gör något helt annat.",
            "This website is an effort to showcase my work because apparently keeping projects hidden in random folders isn't considered a portfolio.": "Den här webbplatsen visar upp mitt arbete eftersom projekt i slumpmässiga mappar tydligen inte räknas som en portfolio.",
            "When I'm not coding, I'm usually:": "När jag inte kodar brukar jag:", "Starting a new project.": "Börja på ett nytt projekt.", "Thinking about another new project.": "Fundera på ännu ett nytt projekt.", "Ignoring the project I was already working on.": "Ignorera projektet jag redan arbetade med.", "Feel free to look around. The bugs are mostly friendly.": "Titta gärna runt. Buggarna är oftast vänliga.",
            "Machine Learning, Computer Vision and Software Development": "Maskininlärning, datorseende och mjukvaruutveckling", "Digit Recognition": "Sifferigenkänning", "A handwritten-digit recognition application.": "En app för att känna igen handskrivna siffror.", "View Project": "Visa projekt", "Pathfinding Algorithms": "Vägsökningsalgoritmer", "An interactive visualizer for BFS, DFS, Greedy BFS, and A* Search.": "En interaktiv visualisering av BFS, DFS, Greedy BFS och A*-sökning.",
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
    const pageTranslations = {
        el: {
            "Home": "Αρχική", "About": "Σχετικά", "Contact": "Επικοινωνία", "Primary navigation": "Κύρια πλοήγηση",
            "Enter site": "Είσοδος στον ιστότοπο", "Hi, I'm NaK0.": "Γεια, είμαι ο NaK0.", "I build software projects focused on machine learning, computer vision, and algorithms.": "Δημιουργώ πρότζεκτ λογισμικού με έμφαση στη μηχανική μάθηση, την υπολογιστική όραση και τους αλγορίθμους.", "Explore my projects": "Δείτε τα πρότζεκτ μου", "Find me online or send me an email.": "Βρείτε με στο διαδίκτυο ή στείλτε μου email.", "GitHub profile": "Προφίλ GitHub", "LinkedIn profile": "Προφίλ LinkedIn", "Email me": "Στείλτε μου email",
            "NaK0 | Software and Machine Learning Projects": "NaK0 | Πρότζεκτ λογισμικού και μηχανικής μάθησης", "About NaK0": "Σχετικά με τον NaK0", "Projects | NaK0": "Πρότζεκτ | NaK0", "Digit Recognition | NaK0": "Αναγνώριση ψηφίων | NaK0", "Pathfinding Visualizer | NaK0": "Οπτικοποίηση εύρεσης διαδρομής | NaK0"
        },
        sq: {
            "Home": "Kryefaqja", "About": "Rreth meje", "Contact": "Kontakti", "Primary navigation": "Navigimi kryesor",
            "Enter site": "Hyr në faqe", "Hi, I'm NaK0.": "Përshëndetje, jam NaK0.", "I build software projects focused on machine learning, computer vision, and algorithms.": "Krijoj projekte softuerike të përqendruara te mësimi makinerik, vizioni kompjuterik dhe algoritmet.", "Explore my projects": "Shiko projektet e mia", "Find me online or send me an email.": "Më gjeni në internet ose më dërgoni një email.", "GitHub profile": "Profili në GitHub", "LinkedIn profile": "Profili në LinkedIn", "Email me": "Më dërgoni email",
            "NaK0 | Software and Machine Learning Projects": "NaK0 | Projekte softuerike dhe të mësimit makinerik", "About NaK0": "Rreth NaK0", "Projects | NaK0": "Projektet | NaK0", "Digit Recognition | NaK0": "Njohja e shifrave | NaK0", "Pathfinding Visualizer | NaK0": "Vizualizues i gjetjes së rrugës | NaK0"
        },
        sv: {
            "Home": "Hem", "About": "Om", "Contact": "Kontakt", "Primary navigation": "Huvudnavigation",
            "Enter site": "Gå in på webbplatsen", "Hi, I'm NaK0.": "Hej, jag är NaK0.", "I build software projects focused on machine learning, computer vision, and algorithms.": "Jag bygger mjukvaruprojekt med fokus på maskininlärning, datorseende och algoritmer.", "Explore my projects": "Utforska mina projekt", "Find me online or send me an email.": "Hitta mig online eller skicka ett mejl.", "GitHub profile": "GitHub-profil", "LinkedIn profile": "LinkedIn-profil", "Email me": "Skicka ett mejl",
            "NaK0 | Software and Machine Learning Projects": "NaK0 | Programvaru- och maskininlärningsprojekt", "About NaK0": "Om NaK0", "Projects | NaK0": "Projekt | NaK0", "Digit Recognition | NaK0": "Sifferigenkänning | NaK0", "Pathfinding Visualizer | NaK0": "Visualisering av vägsökning | NaK0"
        }
    };
    for (const [language, dictionary] of Object.entries(pageTranslations)) {
        Object.assign(translations[language], dictionary);
    }

    const refinedTranslations = {
        el: {
            "Enter NaK0's portfolio.": "Είσοδος στο portfolio του NaK0.",
            "NaK0's software, machine learning, computer vision, and algorithm projects.": "Πρότζεκτ λογισμικού, μηχανικής μάθησης, υπολογιστικής όρασης και αλγορίθμων του NaK0.",
            "Click to enter": "Κάντε κλικ για να εισέλθετε",
            "This website is an effort to showcase my work because apparently keeping projects hidden in random folders isn't considered a portfolio.": "Αυτός ο ιστότοπος παρουσιάζει τη δουλειά μου, γιατί, προφανώς, τα πρότζεκτ κρυμμένα σε τυχαίους φακέλους δεν θεωρούνται portfolio.",
            "Pathfinding Algorithms": "Αλγόριθμοι εύρεσης διαδρομών",
            "An interactive visualizer for BFS, DFS, Greedy BFS, and A* Search.": "Διαδραστική οπτικοποίηση των BFS, DFS, Greedy BFS και A*.",
            "Pathfinding Visualizer": "Οπτικοποίηση εύρεσης διαδρομών",
            "The grid": "Πλέγμα",
            "Click or drag on the grid. You can also focus the grid and use the arrow keys and Space.": "Κάντε κλικ ή σύρετε στο πλέγμα. Μπορείτε επίσης να εστιάσετε στο πλέγμα και να χρησιμοποιήσετε τα πλήκτρα βέλους και το Space.",
            "Greedy Best-First Search": "Άπληστη αναζήτηση βέλτιστου κόμβου",
            "Draw walls": "Σχεδιάστε τοίχους",
            "Erase walls": "Σβήστε τοίχους",
            "Randomize Walls": "Δημιουργία τυχαίων τοίχων",
            "Clear Walls": "Αφαίρεση τοίχων",
            "Pathfinding controls": "Στοιχεία ελέγχου εύρεσης διαδρομών",
            "Pathfinding grid. Use arrow keys to move the cell cursor and Space to apply the selected tool.": "Πλέγμα εύρεσης διαδρομών. Χρησιμοποιήστε τα πλήκτρα βέλους για να μετακινήσετε τον δείκτη κελιού και το Space για να εφαρμόσετε το επιλεγμένο εργαλείο.",
            "Grid legend": "Υπόμνημα πλέγματος",
            "Search results": "Αποτελέσματα αναζήτησης",
            "Language": "Γλώσσα",
            "About Olen Shofiti": "Σχετικά με τον Olen Shofiti",
            "Learn about me and explore software projects in machine learning, computer vision, and algorithms.": "Μάθετε περισσότερα για μένα και εξερευνήστε πρότζεκτ λογισμικού στη μηχανική μάθηση, την υπολογιστική όραση και τους αλγορίθμους.",
            "Learn about Olen and explore software projects in machine learning, computer vision, and algorithms.": "Μάθετε περισσότερα για τον Olen και εξερευνήστε πρότζεκτ λογισμικού στη μηχανική μάθηση, την υπολογιστική όραση και τους αλγορίθμους.",
            "Learn about NaK0 and explore software projects in machine learning, computer vision, and algorithms.": "Μάθετε περισσότερα για τον NaK0 και εξερευνήστε πρότζεκτ λογισμικού στη μηχανική μάθηση, την υπολογιστική όραση και τους αλγορίθμους.",
            "Explore NaK0's interactive digit recognition and pathfinding projects.": "Εξερευνήστε τα διαδραστικά πρότζεκτ αναγνώρισης ψηφίων και εύρεσης διαδρομών του NaK0.",
            "Draw a handwritten digit and run an in-browser machine learning model to recognize it.": "Σχεδιάστε ένα χειρόγραφο ψηφίο και αναγνωρίστε το με ένα μοντέλο μηχανικής μάθησης που εκτελείται στον φυλλομετρητή.",
            "Try BFS, DFS, Greedy Best-First, and A* pathfinding in an interactive grid visualizer.": "Δοκιμάστε BFS, DFS, Greedy Best-First και A* σε μια διαδραστική οπτικοποίηση πλέγματος.",
            "Projects | NaK0": "Πρότζεκτ | NaK0",
            "Digit Recognition | NaK0": "Αναγνώριση ψηφίων | NaK0",
            "Pathfinding Visualizer | NaK0": "Οπτικοποίηση εύρεσης διαδρομών | NaK0"
        },
        sq: {
            "Enter NaK0's portfolio.": "Hyr në portofolin e NaK0.",
            "NaK0's software, machine learning, computer vision, and algorithm projects.": "Projektet e NaK0 në softuer, mësim makinerik, vizion kompjuterik dhe algoritme.",
            "Click to enter": "Kliko për të hyrë",
            "This website is an effort to showcase my work because apparently keeping projects hidden in random folders isn't considered a portfolio.": "Kjo faqe paraqet punën time, sepse projektet e fshehura në dosje të rastësishme, më duket se nuk quhen portofol.",
            "Pathfinding Algorithms": "Algoritme për gjetjen e rrugës",
            "An interactive visualizer for BFS, DFS, Greedy BFS, and A* Search.": "Vizualizues interaktiv për BFS, DFS, Greedy BFS dhe A*.",
            "Pathfinding Visualizer": "Vizualizues për gjetjen e rrugës",
            "The grid": "Rrjeti",
            "Click or drag on the grid. You can also focus the grid and use the arrow keys and Space.": "Kliko ose tërhiq në rrjet. Mund ta fokusosh edhe rrjetin dhe të përdorësh tastet e shigjetave dhe Space.",
            "Greedy Best-First Search": "Kërkim lakmitar me përparësi për më të mirin",
            "Draw walls": "Vizato mure",
            "Erase walls": "Hiq muret",
            "Randomize Walls": "Vendos mure rastësisht",
            "Clear Walls": "Hiqi muret",
            "Pathfinding controls": "Kontrollet e gjetjes së rrugës",
            "Pathfinding grid. Use arrow keys to move the cell cursor and Space to apply the selected tool.": "Rrjet për gjetjen e rrugës. Përdor tastet e shigjetave për të lëvizur kursorin e qelisë dhe Space për të zbatuar mjetin e zgjedhur.",
            "Grid legend": "Legjenda e rrjetit",
            "Search results": "Rezultatet e kërkimit",
            "Language": "Gjuha",
            "About Olen Shofiti": "Rreth Olen Shofiti",
            "Learn about me and explore software projects in machine learning, computer vision, and algorithms.": "Mëso më shumë për mua dhe eksploro projekte softuerike në mësimin makinerik, vizionin kompjuterik dhe algoritmet.",
            "Learn about Olen and explore software projects in machine learning, computer vision, and algorithms.": "Mëso më shumë për Olen dhe eksploro projekte softuerike në mësimin makinerik, vizionin kompjuterik dhe algoritmet.",
            "Learn about NaK0 and explore software projects in machine learning, computer vision, and algorithms.": "Mëso më shumë për NaK0 dhe eksploro projekte softuerike në mësimin makinerik, vizionin kompjuterik dhe algoritmet.",
            "Explore NaK0's interactive digit recognition and pathfinding projects.": "Eksploro projektet ndërvepruese të NaK0 për njohjen e shifrave dhe gjetjen e rrugës.",
            "Draw a handwritten digit and run an in-browser machine learning model to recognize it.": "Vizato një shifër të shkruar me dorë dhe përdor një model të mësimit makinerik në shfletues për ta njohur.",
            "Try BFS, DFS, Greedy Best-First, and A* pathfinding in an interactive grid visualizer.": "Provo BFS, DFS, Greedy Best-First dhe A* në një vizualizues ndërveprues të rrjetit.",
            "Projects | NaK0": "Projektet | NaK0",
            "Digit Recognition | NaK0": "Njohja e shifrave | NaK0",
            "Pathfinding Visualizer | NaK0": "Vizualizues për gjetjen e rrugës | NaK0"
        },
        sv: {
            "Enter NaK0's portfolio.": "Gå in i NaK0:s portfolio.",
            "NaK0's software, machine learning, computer vision, and algorithm projects.": "NaK0:s projekt inom mjukvara, maskininlärning, datorseende och algoritmer.",
            "Click to enter": "Klicka för att komma in",
            "This website is an effort to showcase my work because apparently keeping projects hidden in random folders isn't considered a portfolio.": "Den här webbplatsen visar upp mitt arbete, eftersom projekt gömda i slumpmässiga mappar tydligen inte räknas som en portfolio.",
            "Pathfinding Algorithms": "Vägsökningsalgoritmer",
            "An interactive visualizer for BFS, DFS, Greedy BFS, and A* Search.": "En interaktiv visualisering av BFS, DFS, Greedy BFS och A*.",
            "Pathfinding Visualizer": "Vägsökningsvisualiserare",
            "The grid": "Rutnät",
            "Click or drag on the grid. You can also focus the grid and use the arrow keys and Space.": "Klicka eller dra i rutnätet. Du kan också fokusera rutnätet och använda piltangenterna och mellanslag.",
            "Greedy Best-First Search": "Girig bäst-först-sökning",
            "Erase walls": "Ta bort väggar",
            "Cells shown per frame": "Celler per bildruta",
            "Pathfinding controls": "Kontroller för vägsökning",
            "Pathfinding grid. Use arrow keys to move the cell cursor and Space to apply the selected tool.": "Rutnät för vägsökning. Använd piltangenterna för att flytta cellmarkören och mellanslag för att använda det valda verktyget.",
            "Grid legend": "Teckenförklaring för rutnätet",
            "Search results": "Sökresultat",
            "Language": "Språk",
            "About Olen Shofiti": "Om Olen Shofiti",
            "Learn about me and explore software projects in machine learning, computer vision, and algorithms.": "Läs mer om mig och utforska mjukvaruprojekt inom maskininlärning, datorseende och algoritmer.",
            "Learn about Olen and explore software projects in machine learning, computer vision, and algorithms.": "Läs mer om Olen och utforska mjukvaruprojekt inom maskininlärning, datorseende och algoritmer.",
            "Learn about NaK0 and explore software projects in machine learning, computer vision, and algorithms.": "Läs mer om NaK0 och utforska mjukvaruprojekt inom maskininlärning, datorseende och algoritmer.",
            "Explore NaK0's interactive digit recognition and pathfinding projects.": "Utforska NaK0:s interaktiva projekt för sifferigenkänning och vägsökning.",
            "Draw a handwritten digit and run an in-browser machine learning model to recognize it.": "Rita en handskriven siffra och låt en maskininlärningsmodell i webbläsaren känna igen den.",
            "Try BFS, DFS, Greedy Best-First, and A* pathfinding in an interactive grid visualizer.": "Prova BFS, DFS, Greedy Best-First och A* i en interaktiv visualisering av ett rutnät.",
            "Projects | NaK0": "Projekt | NaK0",
            "Digit Recognition | NaK0": "Sifferigenkänning | NaK0",
            "Pathfinding Visualizer | NaK0": "Vägsökningsvisualiserare | NaK0"
        }
    };
    for (const [language, dictionary] of Object.entries(refinedTranslations)) {
        Object.assign(translations[language], dictionary);
    }

    const writingTranslations = {
        el: {
            "Writing": "Γραφή", "WRITING": "ΓΡΑΦΗ", "Thoughts, experiments & discoveries.": "Σκέψεις, πειράματα και ανακαλύψεις.", "A collection of technical explorations, lessons learned, and occasional reflections on technology and beyond.": "Μια συλλογή τεχνικών εξερευνήσεων, μαθημάτων και περιστασιακών σκέψεων για την τεχνολογία και πέρα από αυτήν.", "Featured article": "Προτεινόμενο άρθρο", "Article collection": "Άρθρα", "Search articles": "Αναζήτηση άρθρων", "All": "Όλα", "Software Engineering": "Μηχανική λογισμικού", "Artificial Intelligence": "Τεχνητή νοημοσύνη", "Machine Learning": "Μηχανική μάθηση", "Tutorials": "Οδηγοί", "Thoughts": "Σκέψεις", "Read article": "Διαβάστε το άρθρο", "Example article": "Δείγμα άρθρου", "min read": "λεπτά ανάγνωσης", "No articles available yet.": "Δεν υπάρχουν ακόμη άρθρα.", "No articles match your search.": "Δεν βρέθηκαν άρθρα που να ταιριάζουν στην αναζήτησή σας.", "No articles in this category.": "Δεν υπάρχουν άρθρα σε αυτή την κατηγορία.", "← Back to Writing": "← Επιστροφή στη γραφή", "By": "Από", "Published": "Δημοσιεύτηκε", "Updated": "Ενημερώθηκε", "Share": "Κοινοποίηση", "Copy link": "Αντιγραφή συνδέσμου", "Link copied": "Ο σύνδεσμος αντιγράφηκε", "Copy failed": "Η αντιγραφή απέτυχε", "Copy code": "Αντιγραφή κώδικα", "Copied": "Αντιγράφηκε", "Table of contents": "Πίνακας περιεχομένων", "Related articles": "Σχετικά άρθρα", "No related articles yet.": "Δεν υπάρχουν ακόμη σχετικά άρθρα.", "Previous article": "Προηγούμενο άρθρο", "Next article": "Επόμενο άρθρο"
        },
        sq: {
            "Writing": "Shkrime", "WRITING": "SHKRIME", "Thoughts, experiments & discoveries.": "Mendime, eksperimente dhe zbulime.", "A collection of technical explorations, lessons learned, and occasional reflections on technology and beyond.": "Një përmbledhje eksplorimesh teknike, mësimesh të nxjerra dhe reflektimesh të herëpashershme mbi teknologjinë e më gjerë.", "Featured article": "Artikull i veçuar", "Article collection": "Artikuj", "Search articles": "Kërko artikuj", "All": "Të gjitha", "Software Engineering": "Inxhinieri softuerike", "Artificial Intelligence": "Inteligjencë artificiale", "Machine Learning": "Mësim makinerik", "Tutorials": "Udhëzues", "Thoughts": "Mendime", "Read article": "Lexo artikullin", "Example article": "Artikull shembull", "min read": "min lexim", "No articles available yet.": "Nuk ka ende artikuj.", "No articles match your search.": "Nuk u gjetën artikuj që përputhen me kërkimin tënd.", "No articles in this category.": "Nuk ka artikuj në këtë kategori.", "← Back to Writing": "← Kthehu te shkrimet", "By": "Nga", "Published": "Publikuar", "Updated": "Përditësuar", "Share": "Ndaje", "Copy link": "Kopjo lidhjen", "Link copied": "Lidhja u kopjua", "Copy failed": "Kopjimi dështoi", "Copy code": "Kopjo kodin", "Copied": "U kopjua", "Table of contents": "Përmbajtja", "Related articles": "Artikuj të ngjashëm", "No related articles yet.": "Nuk ka ende artikuj të ngjashëm.", "Previous article": "Artikulli i mëparshëm", "Next article": "Artikulli tjetër"
        },
        sv: {
            "Writing": "Texter", "WRITING": "TEXTER", "Thoughts, experiments & discoveries.": "Tankar, experiment och upptäckter.", "A collection of technical explorations, lessons learned, and occasional reflections on technology and beyond.": "En samling tekniska utforskningar, lärdomar och tillfälliga reflektioner om teknik och annat.", "Featured article": "Utvalt artikel", "Article collection": "Artiklar", "Search articles": "Sök artiklar", "All": "Alla", "Software Engineering": "Mjukvaruutveckling", "Artificial Intelligence": "Artificiell intelligens", "Machine Learning": "Maskininlärning", "Tutorials": "Guider", "Thoughts": "Tankar", "Read article": "Läs artikeln", "Example article": "Exempelartikel", "min read": "min läsning", "No articles available yet.": "Det finns inga artiklar ännu.", "No articles match your search.": "Inga artiklar matchar din sökning.", "No articles in this category.": "Det finns inga artiklar i den här kategorin.", "← Back to Writing": "← Tillbaka till texter", "By": "Av", "Published": "Publicerad", "Updated": "Uppdaterad", "Share": "Dela", "Copy link": "Kopiera länk", "Link copied": "Länken kopierades", "Copy failed": "Kopieringen misslyckades", "Copy code": "Kopiera kod", "Copied": "Kopierad", "Table of contents": "Innehållsförteckning", "Related articles": "Relaterade artiklar", "No related articles yet.": "Det finns inga relaterade artiklar ännu.", "Previous article": "Föregående artikel", "Next article": "Nästa artikel"
        }
    };
    for (const [language, dictionary] of Object.entries(writingTranslations)) {
        Object.assign(translations[language], dictionary);
    }

    const terminalTranslations = {
        el: {
            "About me terminal": "Τερματικό σχετικά με εμένα",
            "Choose a command": "Επιλέξτε μια εντολή", "Interactive profile commands": "Διαδραστικές εντολές προφίλ", "Interactive profile ready.": "Το διαδραστικό προφίλ είναι έτοιμο.",
            "Olen Shofiti — a curious software developer and problem solver with a fully developed frontal lobe.": "Olen Shofiti — περίεργος προγραμματιστής λογισμικού και λύτης προβλημάτων με πλήρως ανεπτυγμένο μετωπιαίο λοβό.",
            "Software, machine learning, computer vision, microcontrollers, algorithms, robotics.": "Λογισμικό, μηχανική μάθηση, υπολογιστική όραση, μικροελεγκτές, αλγόριθμοι, ρομποτική.",
            "Philosophy, technology, geopolitics, psychology, spirituality": "Φιλοσοφία, τεχνολογία, γεωπολιτική, ψυχολογία, πνευματικότητα",
            "Building, learning, and occasionally debugging friendly bugs.": "Δημιουργώ, μαθαίνω, και που και που κυνηγάω bugs.", "Find me online or send me an email.": "Βρείτε με στο διαδίκτυο ή στείλτε μου email."
        },
        sq: {
            "About me terminal": "Terminali rreth meje",
            "Choose a command": "Zgjidh një komandë", "Interactive profile commands": "Komandat interaktive të profilit", "Interactive profile ready.": "Profili interaktiv është gati.",
            "Olen Shofiti — a curious software developer and problem solver with a fully developed frontal lobe.": "Olen Shofiti — zhvillues softueri kureshtar dhe zgjidhës problemesh me lob frontal plotësisht të zhvilluar.",
            "Software, machine learning, computer vision, microcontrollers, algorithms, robotics.": "Softuer, mësim makinerik, vizion kompjuterik, mikrokontrollues, algoritme, robotikë.",
            "Philosophy, technology, geopolitics, psychology, spirituality": "Filozofi, teknologji, gjeopolitikë, psikologji, spiritualitet",
            "Building, learning, and occasionally debugging friendly bugs.": "Ndërtoj, mësoj, dhe herë pas here korrigjoj defektet që krijova.", "Find me online or send me an email.": "Më gjej online ose më dërgo një email."
        },
        sv: {
            "About me terminal": "Terminal för information om mig",
            "Choose a command": "Välj ett kommando", "Interactive profile commands": "Interaktiva profilkommandon", "Interactive profile ready.": "Den interaktiva profilen är klar.",
            "Olen Shofiti — a curious software developer and problem solver with a fully developed frontal lobe.": "Olen Shofiti — en nyfiken mjukvaruutvecklare och problemlösare med en fullt utvecklad pannlob.",
            "Software, machine learning, computer vision, microcontrollers, algorithms, robotics.": "Mjukvara, maskininlärning, datorseende, mikrokontroller, algoritmer, robotik.",
            "Philosophy, technology, geopolitics, psychology, spirituality": "Filosofi, teknik, geopolitik, psykologi, andlighet",
            "Building, learning, and occasionally debugging friendly bugs.": "Bygger, lär mig och felsöker ibland vänliga buggar.", "Find me online or send me an email.": "Hitta mig online eller skicka ett mejl."
        }
    };
    for (const [language, dictionary] of Object.entries(terminalTranslations)) {
        Object.assign(translations[language], dictionary);
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
        document.querySelectorAll("[data-language-content]").forEach(element => {
            const key = element.dataset.languageContent;
            element.setAttribute("content", dictionary[key] || key);
        });
        document.querySelectorAll("[data-language-placeholder]").forEach(element => {
            const key = element.dataset.languagePlaceholder;
            element.setAttribute("placeholder", dictionary[key] || key);
        });
        const select = document.getElementById("language-select");
        if (select) {
            select.value = language;
            select.setAttribute("aria-label", dictionary["Language"] || "Language");
        }
        window.siteLanguage = language;
        window.siteTranslate = key => dictionary[key] || key;
        document.dispatchEvent(new CustomEvent("site-language-change", { detail: { language } }));
    }

    if (!document.body.classList.contains("landing-page")) {
        const select = document.createElement("select");
        select.id = "language-select";
        select.className = "language-select";
        select.setAttribute("aria-label", "Language");
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
    }
    translate(detectLanguage());
})();
