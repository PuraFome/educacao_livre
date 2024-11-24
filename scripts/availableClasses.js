function loadAvailableClasses() {
    const tutors = JSON.parse(localStorage.getItem('tutors')) || [];
    const classesContainer = document.getElementById('classesContainer');

    console.log('Dados carregados:', tutors); // Adicione um console.log para verificar os dados carregados

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
        if (tutor.slots === 0) {
            registerButton.disabled = true;
            registerButton.style.backgroundColor = '#ccc'; // Muda a cor do botão
            registerButton.style.color = '#000'; // Muda a cor do texto do botão
            registerButton.innerText = 'Vagas Esgotadas'; // Muda o texto do botão
        }
    });
}

// Torne a função globalmente acessível
window.loadAvailableClasses = loadAvailableClasses;