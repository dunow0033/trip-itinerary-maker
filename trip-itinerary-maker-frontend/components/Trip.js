class Trip {
    constructor(data){
        this.id = data.id
        this.destination = data.destination
    }

    renderTrip(){
        main.innerHTML += `
        <h2>${this.destination}</h2>
        </div>
        `
    }

    renderButtons(){
        let view = document.createElement("button")
        view.setAttribute("id", "viewBtn")
        view.setAttribute("data-id", `${this.id}`)
        view.setAttribute("class", "btn btn-secondary")
        
        main.appendChild(view)
    }
}