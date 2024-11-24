function openModal(index) {
    const modal = document.getElementById('modal');
    if (modal) {
        const tutors = JSON.parse(localStorage.getItem('tutors')) || [];
        const tutor = tutors[index];
        const modalText = document.getElementById('modalText');
        modalText.innerText = `Você deseja se inscrever nesta aula de ${tutor.subject}?`;

        modal.style.display = 'block';

        const confirmButton = document.getElementById('confirmButton');
        confirmButton.onclick = () => {
            registerForClass(index);
            modal.style.display = 'none';
        };

        const cancelButton = document.getElementById('cancelButton');
        cancelButton.onclick = () => {
            modal.style.display = 'none';
        };
    } else {
        console.error('Modal não encontrado');
    }
}

function registerForClass(index) {
    let tutors = JSON.parse(localStorage.getItem('tutors')) || [];
    let registeredClasses = JSON.parse(localStorage.getItem('registeredClasses')) || [];
    if (tutors[index].slots > 0) {
        tutors[index].slots -= 1;
        localStorage.setItem('tutors', JSON.stringify(tutors));
        const slotsElement = document.getElementById(`slots-${index}`);
        if (slotsElement) {
            slotsElement.innerText = tutors[index].slots;
        } else {
            console.error(`Elemento com ID slots-${index} não encontrado`);
        }
        const registerButton = document.getElementById(`register-${index}`);
        if (registerButton) {
            registerButton.disabled = true;
            registerButton.style.backgroundColor = '#ccc'; 
            registerButton.style.color = '#000';
            registerButton.innerText = 'Já cadastrado'; 
        } else {
            console.error(`Botão com ID register-${index} não encontrado`);
        }
        registeredClasses.push(index);
        localStorage.setItem('registeredClasses', JSON.stringify(registeredClasses));
    } else {
        const registerButton = document.getElementById(`register-${index}`);
        if (registerButton) {
            registerButton.disabled = true;
            registerButton.style.backgroundColor = '#ccc'; 
            registerButton.style.color = '#000';
            registerButton.innerText = 'Vagas Esgotadas'; 
        } else {
            console.error(`Botão com ID register-${index} não encontrado`);
        }
    }
}

window.openModal = openModal;
window.registerForClass = registerForClass;