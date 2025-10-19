// ### DoorLock (Private State + Public API)
// **Goal:** Hide PIN & expose `setPin`/`unlock`.
// **Must use:** private field `#pin`.

// **Features:**
// - `setPin(pin)` → only 4 characters (string)
// - `unlock(tryPin)` → logs success/failure

//     **Acceptance Criteria:**
// - Cannot read/change `#pin` directly.


// D3: DoorLock
class DoorLock {
    // TODO: #pin = ""
    #pin = "";

    // TODO: setPin(pin) // require 4 chars (string)
    setPin(pin) {
        this.#pin = pin;
    }

    // TODO: unlock(tryPin) // compare with #pin
    unlock(tryPin) {
        if (this.#pin === tryPin) {
            console.log("Success");
        }
        else {
            console.log("Failure");
        }
    }
}

// TODO: demo: set pin, try wrong & correct pin; avoid direct access
const d1 = new DoorLock();
d1.setPin("1234");
d1.unlock("1234");