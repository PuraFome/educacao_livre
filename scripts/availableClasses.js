const loadAvailableClasses = () => {
    const tutors = JSON.parse(localStorage.getItem('tutors')) || [];
    const registeredClasses = JSON.parse(localStorage.getItem('registeredClasses')) || [];
    const classesContainer = document.getElementById('classesContainer');

    if (!classesContainer) return;

    if (tutors.length === 0) {
        classesContainer.innerHTML = '<p>Nenhuma aula disponível no momento.</p>';
        return;
    }

    classesContainer.classList.add('classes-grid');
    tutors.forEach((tutor, index) => createClassCard(tutor, index, registeredClasses, classesContainer));
};

const createClassCard = (tutor, index, registeredClasses, container) => {
    const classElement = document.createElement('div');
    classElement.classList.add('class-card');

    classElement.innerHTML = `
        <h2><strong>${tutor.subject}</strong></h2>
        <p><strong>Tutor:</strong> ${tutor.name}</p>
        <p><strong>Email:</strong> ${tutor.email}</p>
        <p><strong>Horário:</strong> ${tutor.start_time} - ${tutor.end_time}</p>
        <p><strong>Dias:</strong> ${tutor.days.join(', ')}</p>
        <p><strong>Vagas:</strong> <span id="slots-${index}">${tutor.slots}</span></p>
        <p><strong>Link:</strong> <a href="${tutor.meeting_link}" target="_blank" class="meeting-link">${tutor.meeting_link}</a></p>
        <p><strong>Descrição:</strong> ${tutor.description}</p>
        <button id="register-${index}" onclick="openModal(${index})">Cadastrar</button>
    `;

    container.appendChild(classElement);
    updateRegisterButtonState(index, tutor.slots, registeredClasses);
};

const updateRegisterButtonState = (index, slots, registeredClasses) => {
    const registerButton = document.getElementById(`register-${index}`);
    if (!registerButton) return;

    if (registeredClasses.includes(index)) {
        registerButton.disabled = true;
        registerButton.style.backgroundColor = '#ccc';
        registerButton.style.color = '#000';
        registerButton.innerText = 'Já cadastrado';
    } else if (slots == 0) {
        registerButton.disabled = true;
        registerButton.style.backgroundColor = '#ccc';
        registerButton.style.color = '#000';
        registerButton.innerText = 'Vagas Esgotadas';
    }
};

window.loadAvailableClasses = loadAvailableClasses;