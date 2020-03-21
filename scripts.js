const films = fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        response.json().then((data) => {
            // console.log(data);
            data.forEach(movie => {
                const card = document.createElement('div');
                card.setAttribute('class', 'card')

                const h1 = document.createElement('h1')
                h1.textContent = movie.title

                const p = document.createElement('p')
                movie.description = movie.description.substring(0, 300);
                p.textContent = `${movie.description}...`

                container.appendChild(card)

                card.appendChild(h1)
                card.appendChild(p)
            })
        })
    })
    .catch((err) => {
        console.log('Fetch Error: -S', err);
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `It ain't working!!!!`
        app.appendChild(errorMessage)
    })

const app = document.getElementById("root");

const logo = document.createElement('img');
logo.src = 'logo.png'

const container = document.createElement('div');
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)
