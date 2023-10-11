console.log(data);

function makeDogNav() {
    data.forEach(dog => {
        const headerLi = document.createElement('li')
        headerLi.setAttribute('class', 'dogs-list__button')
        headerLi.innerText = dog.name

        const headerUl = document.querySelector('.dogs-list')
        headerUl.append(headerLi)

        headerLi.addEventListener('click', () => {
            const section = document.querySelector('.main__dog-section')
            section.remove()
            makeDogCard(dog)
        })
    });
}

makeDogNav()

function makeSection() {
    const section = document.createElement('section')
    section.className = 'main__dog-section'

    return section
}

function createDesc(dog) {
    const div = document.createElement('div')
    div.className = 'main__dog-section__desc'

    const h3 = document.createElement('h3')
    h3.innerText = 'Bio'

    const p = document.createElement('p')
    p.innerText = dog.bio

    div.append(h3, p)

    return div

}

function createBottomCard(dog) {
    const button = document.createElement('button')
    const text = document.createElement('p')
    const div = document.createElement('div')

    div.className = 'main__dog-section__desc'

    text.innerText = 'Is naughty? Yes!'

    if (dog.isGoodDog === true){
        button.innerText = 'Good dog'
    } else {
        button.innerText = 'Bad dog'
    }

    div.append(text, button)

    return div
}

function makeDogCard(dog) {
    const  main = document.querySelector('.main')
    const section = makeSection()

    const header = document.createElement('h2')
    header.innerText = dog.name

    const image = document.createElement('img')
    image.src = dog.image

    const desc = createDesc(dog)
    const bottomCard = createBottomCard(dog)

    section.append(header, desc, image, bottomCard)
    main.append(section)

    return section
}


