function loadAvailableClasses() {
    const tutors = JSON.parse(localStorage.getItem('tutors')) || [];
    const registeredClasses = JSON.parse(localStorage.getItem('registeredClasses')) || [];
    const classesContainer = document.getElementById('classesContainer');

    console.log('Dados carregados:', tutors);

    if (tutors.length === 0) {
        classesContainer.innerHTML = '<p>Nenhuma aula disponível no momento.</p>';
        return;
    }

    classesContainer.classList.add('classes-grid');

    tutors.forEach((tutor, index) => {
        const classElement = document.createElement('div');
        classElement.classList.add('class-card');

        classElement.innerHTML = `
            <h3>${tutor.subject}</h3>
            <p><strong>Tutor:</strong> ${tutor.name}</p>
            <p><strong>Email:</strong> ${tutor.email}</p>
            <p><strong>Horário:</strong> ${tutor.start_time} - ${tutor.end_time}</p>
            <p><strong>Dias:</strong> ${tutor.days.join(', ')}</p>
            <p><strong>Vagas:</strong> <span id="slots-${index}">${tutor.slots}</span></p>
            <p><strong>Link:</strong> <a href="${tutor.meeting_link}" target="_blank">${tutor.link}</a></p>
            <p><strong>Descrição:</strong> ${tutor.description}</p>
            <button id="register-${index}" onclick="openModal(${index})">Cadastrar</button>
        `;

        classesContainer.appendChild(classElement);
        const registerButton = document.getElementById(`register-${index}`);
        
        if (registeredClasses.includes(index)) {
            registerButton.disabled = true;
            registerButton.style.backgroundColor = '#ccc'; 
            registerButton.style.color = '#000'; 
            registerButton.innerText = 'Já cadastrado'; 
        } else if (tutor.slots === 0) {
            registerButton.disabled = true;
            registerButton.style.backgroundColor = '#ccc'; 
            registerButton.style.color = '#000'; 
            registerButton.innerText = 'Vagas Esgotadas';  
        }
    });
}

// Torne a função globalmente acessível
window.loadAvailableClasses = loadAvailableClasses;