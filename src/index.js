console.log(data);

function makeDogNav() {
    const main = document.querySelector('.main')

    renderList()

    const plusButton = document.querySelector('.dogs-list__button--add')
    plusButton.addEventListener('click', () => {
        const section = document.querySelector('.main__dog-section')
        section.remove()
        main.append(renderForm())
    })
}

// makeDogNav()

function renderList() {
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


function makeForm(dog) {
    const  main = document.querySelector('.main')

    const form = document.createElement('form')

    const nameLabel = makeLabel('name', "Dog's name")
    const imageLabel = makeLabel('image', "Dog's picture")
    const bioLabel = makeLabel('bio', "Dog's bio")
    const isGoodLabel = makeLabel('isGood', 'Is this dog good?')

    const nameInput = makeInput('name')
    const imageInput = makeInput('image', 'url')
    const bioInput = makeInput('bio', 'textarea')
    const isGoodInput = makeInput('isGood', 'text')
    const submitButton = makeInput('submit', 'submit', "Let's add a dog!")

    form.className = 'form'
    submitButton.className = 'form__button'


    submitButton.addEventListener('click', (e) => {
        e.preventDefault()
        const headerLis = document.querySelectorAll('li')
        headerLis.forEach((dogList) => dogList.remove()) 

        const name = document.querySelector('input[name="name"]')
        const image = document.querySelector("input[name = 'image']")
        const biograph = document.querySelector("textarea[name = 'bio']")
        const isGood = document.querySelector("input[name = 'isGood']")

        // let isGoodValue = true
        // if (isGood.value === 'no') {
        //     isGoodValue = false
        // }else return isGoodValue
        
        const nameValue = name.value
        data.push({
            name: nameValue,
            bio: biograph.value,
            image: image.value
        })

        name.value = ''
        image.value = ''
        biograph.value = ''
        isGood.value = ''

        renderList()
    })

    form.append(
        nameLabel,
        nameInput,
        imageLabel,
        imageInput,
        bioLabel,
        bioInput,
        isGoodLabel,
        isGoodInput,
        submitButton,
        
        )

    main.append(form)

    return form
}

function makeLabel(forAttr, text){
    const label = document.createElement('label')
    label.attributes.for = forAttr
    label.innerText = text

    return label
}

function makeInput(idName, type, value) {
    // let input = null

    let input = document.createElement('input')
    if (type === 'textarea') {
        input = document.createElement('textarea')
        input.setAttribute('row', '5')
    } else {
        input = document.createElement('input')
        input.setAttribute('type', 'text')
    }

    input.setAttribute('id', idName)
    input.setAttribute('name', idName)

    if (value) {
        input.setAttribute('value', value)
    }

    return input
}

function renderForm() {
    const section = makeSection()
    const form = makeForm()

    const h2 = document.createElement('h2')
    h2.innerText = 'Add a dog!'

    section.append(h2, form)

    return section
}


makeDogNav()
