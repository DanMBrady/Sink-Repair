import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests, fetchRequestsP } from "./dataAccess.js"
import { sendRequest } from "./dataAccess.js"
import { fetchCompletions } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchRequestsP())
    .then(()=> fetchCompletions())
    .then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)