// ### Content → Article / Video (Shared + Specific)
// **Goal:** Show base + child-specific fields.

// **Classes:**
// - `Content(title)` → `details()`
// - `Article(title, wordCount)` → override `details()`
// - `Video(title, durationSec)` → override `details()`

//     **Acceptance Criteria:** 
// - Each subclass prints its specific metric clearly.


// B3: Content → Article/Video
class Content {
    // TODO: constructor(title)
    constructor(title) {
        this.title = title;
    }
    // TODO: details()
    details() {
        console.log(`Title: ${this.title}`);
    }
}

class Article extends Content {
    // TODO: constructor(title, wordCount)
    constructor(title, wordCount) {
        super(title);
        this.wordCount = wordCount;
    }
    // TODO: details() // override
    details() {
        console.log(`Title: ${this.title}, Word Count: ${this.wordCount}`);
    }
}

class Video extends Content {
    // TODO: constructor(title, durationSec)
    constructor(title, durationSec) {
        super(title);
        this.durationSec = durationSec;
    }
    // TODO: details() // override
    details() {
        console.log(`Title: ${this.title}, Duration(in sec): ${this.durationSec}`);
    }
}

// TODO: demo list of mixed contents
const c1 = new Content("Business");
c1.details();
const a1 = new Article("Forbes 30 under 30", "523");
a1.details();
const v1 = new Video("List of Forbes 30 under 30 released", "1200 sec");
v1.details();