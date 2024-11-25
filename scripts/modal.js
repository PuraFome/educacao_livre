const openModal = (index) => {
    const modal = document.getElementById('modal');
    if (!modal) {
        console.error('Modal não encontrado');
        return;
    }

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
};

const registerForClass = (index) => {
    let tutors = JSON.parse(localStorage.getItem('tutors')) || [];
    let registeredClasses = JSON.parse(localStorage.getItem('registeredClasses')) || [];
    const tutor = tutors[index];

    if (tutor.slots > 0) {
        tutor.slots -= 1;
        localStorage.setItem('tutors', JSON.stringify(tutors));
        updateUIAfterRegistration(index, tutor.slots, 'Já cadastrado');
        registeredClasses.push(index);
        localStorage.setItem('registeredClasses', JSON.stringify(registeredClasses));
    } else {
        updateUIAfterRegistration(index, tutor.slots, 'Vagas Esgotadas');
    }
};

const updateUIAfterRegistration = (index, slots, buttonText) => {
    const slotsElement = document.getElementById(`slots-${index}`);
    if (slotsElement) {
        slotsElement.innerText = slots;
    } else {
        console.error(`Elemento com ID slots-${index} não encontrado`);
    }

    const registerButton = document.getElementById(`register-${index}`);
    if (registerButton) {
        registerButton.disabled = true;
        registerButton.style.backgroundColor = '#ccc';
        registerButton.style.color = '#000';
        registerButton.innerText = buttonText;
    } else {
        console.error(`Botão com ID register-${index} não encontrado`);
    }
};

window.openModal = openModal;
window.registerForClass = registerForClass;