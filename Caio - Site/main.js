const carList = document.getElementById('car-list');

// Exemplo de dados de carros
const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2022 },
    { make: 'Honda', model: 'Civic', year: 2023 },
    { make: 'Ford', model: 'Mustang', year: 2024 }
];

// Função para exibir carros na página
function displayCars() {
    cars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add('car');
        carElement.innerHTML = `
            <h2>${car.make} ${car.model}</h2>
            <p>Ano: ${car.year}</p>
        `;
        carList.appendChild(carElement);
    });
}