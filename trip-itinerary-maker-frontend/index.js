const apiService = new ApiService();
let formDiv = document.getElementById("trip-form")
let main = document.querySelector("#main")

async function renderTrips() {
    main.innerHTML = ''
    const trips = await apiService.fetchTrips()
    trips.map(t => {
        const trip = new Trip(t)
        trip.renderTrip()
    })
}