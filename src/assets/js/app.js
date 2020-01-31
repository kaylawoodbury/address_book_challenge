
const storage = window.localStorage

const renderContacts = () => {
    const contacts = JSON.parse(storage.getItem('contacts'))

    let div = document.querySelector('#contact-list')
    if (contacts) {
        div.innerHTML = ''
        const ul = document.createElement('ul')

        contacts.forEach(contact => {
            let li = document.createElement('li')

            li.innerHTML = `
                <span>${contact.name}</span> |
                <span>${contact.email}</span> |
                <span>${contact.phone}</span> |
                <span>${contact.notes}</span>
                <button id="remove" button class="remove" data-email=${contact.email}>Remove</button>
                `;  
          
                // Adds a remove button next to each added contact
                let buttons = li.querySelectorAll(".remove");
                buttons.forEach(button => {
                  button.addEventListener("click", () => {
                    var contacts = JSON.parse(localStorage.contacts);
                    let newContacts = contacts.filter(
                      contact => contact.email !== event.target.dataset.email
                    );
                    storage.setItem("contacts", JSON.stringify(newContacts));
                    renderContacts();
                  });
                });

            ul.appendChild(li)
        })
        div.appendChild(ul)
    } 
    else {
        div.innerHTML = '<p>You have no contacts in your address book</p>'
    }
}

//'Save Contact' Button Functionality
document.addEventListener('DOMContentLoaded', () => {
    renderContacts()
    const contactForm = document.getElementById('new-contact-form')
   
    //toggle visibility of 'Add Contact'Button
    const toggleFormVisibilityButton = document.getElementById('add-contact')
    contactForm.style.display = 'none'
    toggleFormVisibilityButton.addEventListener('click', () => {
        if (contactForm.style.display === '') {
            contactForm.style.display = 'none'
        }
        else {
            contactForm.style.display = ''
        }
    })

    //Save and Store functionality
    contactForm.addEventListener('submit', event => {
        event.preventDefault()

        //1. Read all the input field and get their values
        const { name, email, phone, company, notes, twitter } = contactForm.elements

        const contact = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            notes: notes.value,
            twitter: twitter.value,
        }

        console.log(contact)

        let contacts = JSON.parse(storage.getItem('contacts')) || []

        contacts.push(contact)

        //2. Save them in the storage
        storage.setItem('contacts', JSON.stringify(contacts))
        renderContacts()
        contactForm.reset()
    })
})