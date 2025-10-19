// ### Media Playlist (Polymorphism + Inheritance)
// **Goal:** Uniform `play()` on different media types.

// **Classes:**
// - `Media(title)` → `play()` default
// - `Song(title)` → override
// - `Video(title)` → override

//     **Acceptance Criteria:**
// - Single loop calls `play()` on all items.



// E2: Media Playlist
class Media {
    // TODO: constructor(title)
    constructor(title) {
        this.title = title;
    }
    // TODO: play()
    play() {
        console.log(`Play... ${this.title}`);
    }
}
class Song extends Media {
    // TODO: constructor(title)
    constructor(title) {
        super(title);
    }
    // TODO: play()
    play() {
        console.log(`${this.title}.mp3`);
    }
}
class Video extends Media {
    // TODO: constructor(title)
    constructor(title) {
        super(title);
    }
    // TODO: play()
    play() {
        console.log(`${this.title}.mp4`);
    }
}

// TODO: demo: playlist array → loop → play()
const songs = [new Media("Sahiba"), new Song("Sahiba"), new Video("Sahiba")];

songs.forEach(s => {
    s.play();
});