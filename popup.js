document.getElementById("analyzeBtn").addEventListener("click", () => {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            { action: "analyze" },
            (response) => {
                if (response) {
                    document.getElementById("words").textContent =
                        "Words: " + response.words;

                    document.getElementById("paragraphs").textContent =
                        "Paragraphs: " + response.paragraphs;

                    document.getElementById("readingTime").textContent =
                        "Reading Time: " + response.readingTime + " minutes";
                }
            }
        );
    });
});