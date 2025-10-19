// ### WashingMachine (Hide steps with private methods)
// **Goal:** Expose a simple `start()` that orchestrates hidden steps.
// **Must use:** private methods `#fillWater`, `#wash`, `#rinse`, `#spin`.

// **Acceptance Criteria:**
// - Calling any private step directly should be impossible (keep commented line to indicate).


// D1: WashingMachine (Abstraction)
class WashingMachine {
    // TODO: start() → call private steps in order
    start() {
        console.log("Starting the Machine...");
        this.#fillWater();
        this.#wash();
        this.#rinse();
        this.#spin();
        console.log("Beep... Beep... Beep... Washing Complete");
    }

    // TODO: #fillWater()
    #fillWater() {
        console.log("Filling Water....");
    }

    // TODO: #wash()
    #wash() {
        console.log("Wash level in process!");
    }

    // TODO: #rinse()
    #rinse() {
        console.log("Rinse level in process!");
    }

    // TODO: #spin()
    #spin() {
        console.log("Spin level in process");
    }
}

// TODO: demo: call start(); keep commented line calling a private method
let machine = new WashingMachine();
machine.start();
// machine.#fillwater();     // error
// machine.#wash();          // error
// machine.#rinse();         // error
// machine.#spin();          // error