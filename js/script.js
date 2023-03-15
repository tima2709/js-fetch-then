//
// fetch('https://swapi.dev/api/people/5')
//     .then(res => res.json())
//     // .then((data) => console.log(`name: ${data.name}, age: ${data.birth_year}, gender: ${data.gender}, vehicles: ${data.vehicles[0]}, Starships: ${data.starships[0]}`))
//     .then((data) => alert(`name: ${data.name}, age: ${data.birth_year}, gender: ${data.gender}, vehicles name: ${data.vehicles}, skin ${data.skin_color}`))


// id = 1
// fetch(`https://swapi.dev/api/people/${id}`)
//     .then(res => res.json())
//     .then((data) => console.log(`name: ${data.name}, age: ${data.birth_year}, gender: ${data.gender}, vehicles: ${data.vehicles[0]}, Starships: ${data.starships[0]}`))
//     .then((data) => alert(`name: ${data.name}, age: ${data.birth_year}, gender: ${data.gender}, vehicles: ${data.vehicles[0]}, Starships: ${data.starships[0]}`))

id = 2
fetch(`https://swapi.dev/api/people/${id}`)
    .then(res => res.json())
    .then((data) => console.log(`name: ${data.name}, age: ${data.birth_year}, gender: ${data.gender}, homeworld: ${data.homeworld}, eye_color: ${data.eye_color}`))
    // .then((data) => alert(`name: ${data.name}, age: ${data.birth_year}, gender: ${data.gender}, homeworld    : ${data.homeworld}, eye_color: ${data.eye_color}`))