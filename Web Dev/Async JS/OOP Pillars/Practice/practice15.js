// ### UserAuth (Encapsulation + Abstraction)
// **Goal:** Hide password storage; expose safe API.
// **Must use:** private field `#passwordHash` (or any private representation).

// **Features:**
// - `setPassword(plain)` → store hidden representation (simple reversible method is fine)
// - `checkPassword(plain)` → true/false

//     **Acceptance Criteria:**
// - No direct access to internal secret storage.


// E3: UserAuth
class UserAuth {
    // TODO: #passwordHash = ""
    #passwordHash = "";

    // TODO: setPassword(plain) // convert to hidden form
    setPassword(plain) {
        
    }

    // TODO: checkPassword(plain) // compare hidden forms
}

// TODO: demo: set, check right/wrong; keep commented line showing private access is blocked