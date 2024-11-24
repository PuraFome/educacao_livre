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
    } else {
        const registerButton = document.getElementById(`register-${index}`);
        if (registerButton) {
            registerButton.disabled = true;
            registerButton.style.backgroundColor = '#ccc'; // Muda a cor do botão
            registerButton.style.color = '#000'; // Muda a cor do texto do botão
            registerButton.innerText = 'Vagas Esgotadas'; // Muda o texto do botão
        } else {
            console.error(`Botão com ID register-${index} não encontrado`);
        }
    }
}

// Torne as funções globalmente acessíveis
window.openModal = openModal;
window.registerForClass = registerForClass;