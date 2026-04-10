function analyzePage() {
    const paragraphs = document.querySelectorAll("p");
    let paragraphCount = paragraphs.length;

    const bodyText = document.body.innerText;
    const words = bodyText.trim().split(/\s+/);
    const wordCount = words.length;
    const readingTimeMinutes = Math.ceil(wordCount / 200);

    return {
        words: wordCount,
        paragraphs: paragraphCount,
        readingTime: readingTimeMinutes
    };
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "analyze") {
        const result = analyzePage();
        sendResponse(result);
    }
});