import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"

export const SinkRepair = () => {
    return `
    <h1 class ="header">Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
    </section>
    ${ServiceForm()}
    <section class="serviceRequests">
        <h2 class ="service">Service Requests</h2>
        ${Requests()}
    </section>
    `
}

