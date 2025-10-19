// ### FileCompressor (Abstraction with private pipeline)
// **Goal:** `compress(fileName)` exposes high-level action only.
// **Must use:** `#readFile`, `#pack`, `#writeArchive`.

// **Acceptance Criteria:**
// - Log messages indicate each internal step.



// D2: FileCompressor
class FileCompressor {
    // TODO: compress(fileName) → orchestrate private steps
    compress(fileName) {
        console.log(`${fileName}.pdf`);
        this.#readFile();
        this.#pack();
        this.#writeArchive();
    }

    // TODO: #readFile()
    #readFile() {
        console.log("read file");
    }

    // TODO: #pack()
    #pack() {
        console.log("pack");
    }

    // TODO: #writeArchive()
    #writeArchive() {
        console.log("Write Archive");
    }
}

// TODO: demo: compress("report.pdf")
const c1 = new FileCompressor();
c1.compress("report");