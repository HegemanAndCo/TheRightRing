let questionStack = [];

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function createQuestionElement(question) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.id = `question-${question.id}`;

    const titleElement = document.createElement('h2');
    titleElement.classList.add('question-title');
    titleElement.textContent = question.title;
    questionElement.appendChild(titleElement);

    if (question.id === 95) {
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = question.description;
        questionElement.appendChild(descriptionElement);

        const iframeElement = document.createElement('iframe');
        iframeElement.id = 'iframe-question95';
        iframeElement.src = '';
        iframeElement.style.maxWidth = '800px';
        iframeElement.style.width = '80%';
        iframeElement.style.height = '500px';
        questionElement.appendChild(iframeElement);
    } else {
        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options-container');

        const options = document.createElement('div');
        options.classList.add('options');

        if (question.id === 92 || question.id === 93 || question.id === 94) {
            const inputBox = document.createElement('input');
            inputBox.type = 'text';
            inputBox.name = `question${question.id}`;
            inputBox.classList.add('text-input');
            options.appendChild(inputBox);

            inputBox.addEventListener('input', () => {
                const nextButton = document.getElementById(`next-${question.id}`);
                if (question.id === 93) {
                    if (validateEmail(inputBox.value.trim())) {
                        nextButton.style.display = 'inline-block';
                    } else {
                        nextButton.style.display = 'none';
                    }
                } else {
                    if (inputBox.value.trim() !== '') {
                        nextButton.style.display = 'inline-block';
                    } else {
                        nextButton.style.display = 'none';
                    }
                }
            });
        } else if (question.id === 89 || question.id === 90) {
            const selectBox = document.createElement('select');
            selectBox.name = `question${question.id}`;
            selectBox.classList.add('dropdown');

            // Add default "Select" option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Select';
            selectBox.appendChild(defaultOption);

            question.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.label;
                selectBox.appendChild(optionElement);
            });

            selectBox.addEventListener('change', () => {
                const nextButton = document.getElementById(`next-${question.id}`);
                if (selectBox.value !== '') {
                    nextButton.style.display = 'inline-block';
                    selectBox.querySelector('option[value=""]').disabled = true; // Disable the "Select" option
                } else {
                    nextButton.style.display = 'none';
                }
            });

            options.appendChild(selectBox);
        } else if (question.id === 91) {
            const textArea = document.createElement('textarea');
            textArea.name = `question${question.id}`;
            textArea.classList.add('text-area');
            textArea.placeholder = 'Want a different gemstone? Have a creative idea? Add your notes, comments, or anything else here.'; // Set placeholder for question 91
            options.appendChild(textArea);
        } else {
            question.options.forEach(option => {
                const label = document.createElement('label');
                label.classList.add('option-container');

                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `question${question.id}`;
                input.value = option.value;
                input.dataset.nextQuestion = option.nextQuestion;
                input.dataset.iframeUrl = option.iframeUrl;
                input.dataset.title = option.label;
                input.dataset.description = option.description || "";

                if (option.sidebarName) {
                    input.setAttribute('sidebar-name', option.sidebarName);
                }

                const optionContent = document.createElement('div');
                optionContent.classList.add('option-content');
                if (option.imageUrl) {
                    const imageBox = document.createElement('div');
                    imageBox.classList.add('image-box');
                    imageBox.style.backgroundImage = `url(${option.imageUrl})`;
                    optionContent.appendChild(imageBox);
                } else if (option.color) {
                    const colorBox = document.createElement('div');
                    colorBox.classList.add('color-box');
                    colorBox.style.backgroundColor = option.color;
                    optionContent.appendChild(colorBox);
                }
                const optionLabel = document.createElement('p');
                optionLabel.textContent = option.label;
                optionContent.appendChild(optionLabel);

                label.appendChild(input);
                label.appendChild(optionContent);
                options.appendChild(label);

                label.addEventListener('click', () => {
                    showPopup(option);
                    const nextButton = document.getElementById(`next-${question.id}`);
                    if (nextButton) {
                        nextButton.style.display = 'inline-block';
                    }
                    saveProgress();
                    updateIframeAndSidebar(question.id, option);
                    updateProgress(question.id); // Update progress tracker
                });
            });
        }

        optionsContainer.appendChild(options);
        questionElement.appendChild(optionsContainer);
    }

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    if (question.id !== 1) {
        const backButton = document.createElement('button');
        backButton.textContent = 'Back';
        backButton.onclick = prevQuestion;
        buttonContainer.appendChild(backButton);
    }

    const nextButton = document.createElement('button');
    nextButton.id = `next-${question.id}`;
    nextButton.textContent = 'Next';
    if (question.id === 95 || question.id === 91) {
        nextButton.style.display = 'inline-block'; // Always visible for questions 95 and 91
    } else {
        nextButton.style.display = 'none'; // Initially hidden for other questions
    }
    nextButton.onclick = () => {
        if (question.id === 95) {
            updateQuestion95Iframe();
            nextQuestion(89); // Navigate to question 89 after question 95
        } else {
            nextQuestion();
        }
    };
    buttonContainer.appendChild(nextButton);

    questionElement.appendChild(buttonContainer);

    return questionElement;
}

function renderQuestions() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';
    questions.forEach(question => {
        const questionElement = createQuestionElement(question);
        questionContainer.appendChild(questionElement);
    });

    // Ensure question 95 iframe URL is updated when rendered
    if (document.getElementById('question-95')) {
        updateQuestion95Iframe();
    }
}

function showPopup(option) {
    const popup = document.getElementById('option-popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupIframe = document.getElementById('popup-iframe');
    const nextButton = document.getElementById('popup-next-button');

    popupTitle.textContent = option.label;
    popupDescription.textContent = option.description || "";
    popupIframe.src = option.iframeUrl;
    nextButton.dataset.nextQuestion = option.nextQuestion;

    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('minimized')) {
        popup.style.left = '0';
        popup.style.width = '100%';
    } else {
        popup.style.left = '0';
        popup.style.width = 'calc(100% - 18%)';
    }

    popup.style.display = 'flex';
    popup.classList.add('fade-in');
    popup.classList.remove('fade-out');
}

function closePopup() {
    const popup = document.getElementById('option-popup');
    popup.classList.add('fade-out');
    popup.classList.remove('fade-in');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500);
}

function closePopupOnClick(event) {
    const popupContent = document.querySelector('.option-popup-content');
    if (!popupContent.contains(event.target)) {
        closePopup();
    }
}

function nextQuestionFromPopup() {
    closePopup();
    nextQuestion();
}

function updateIframeAndSidebar(questionId, option) {
    const iframe = document.getElementById(`iframe-question${questionId}`);
    if (iframe) {
        iframe.src = option.iframeUrl;
    }

    const sidebarName = option.sidebarName || `question${questionId}`;
    const sidebarItem = document.getElementById(`selected-${sidebarName}`);
    if (sidebarItem) {
        sidebarItem.querySelector('span').textContent = option.label;
        sidebarItem.style.display = 'list-item';
        sidebarItem.classList.add('show');
    }
    updateQuestion95Iframe(); // Ensure the iframe is updated
}

function updateQuestion95Iframe() {
    const sidebarValues = [];
    for (let i = 1; i <= 6; i++) {
        const selectedItem = document.querySelector(`#selected-question${i} span`).textContent.trim();
        console.log(`Selected item for question ${i}: ${selectedItem}`);
        if (selectedItem) {
            sidebarValues.push(selectedItem.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '-'));
        }
    }
    const iframeUrl = `https://hegemanandco.github.io/rightringhtmlfiles/${sidebarValues.join('-')}.html`;
    console.log(`Generated iframe URL: ${iframeUrl}`);
    document.getElementById('iframe-question95').src = iframeUrl;
}

function showFinalScreen() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const finalScreen = document.createElement('div');
    finalScreen.classList.add('final-screen');

    const finalText = document.createElement('h2');
    finalText.textContent = 'Are you ready to submit?';
    finalScreen.appendChild(finalText);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.onclick = prevQuestionFromFinalScreen;
    buttonContainer.appendChild(backButton);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.onclick = submitForm;
    buttonContainer.appendChild(submitButton);

    finalScreen.appendChild(buttonContainer);
    questionContainer.appendChild(finalScreen);
}

function submitForm() {
    const questionLabels = [
        "Type of Gem: ",
        "Gem Shape: ",
        "Type of Metal: ",
        "Head: ",
        "Shank/Band: ",
        "Side Stones: ",
        "Ring Size: ",
        "Budget: ",
        "Additional Comments: ",
        "Name: ",
        "Email: ",
        "Phone #: "
    ];

    const selectedOptions = document.querySelectorAll('#sidebar .question-item span');
    const answers = [];

    selectedOptions.forEach((option, index) => {
        if (option.textContent.trim() !== '') {
            answers.push(questionLabels[index] + option.textContent.trim());
        }
    });

    const combinedAnswers = answers.join(", ");
    document.getElementById('combinedAnswers').value = combinedAnswers;

    const form = document.getElementById('radioForm');
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData
    }).then(response => {
        console.log("Form submitted successfully");
    }).catch(error => {
        console.error("Error submitting form:", error);
    });

    window.top.location.href = "https://www.therightring.com/confirm-your-ring";
}

function prevQuestionFromFinalScreen() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const prevQuestionId = questionStack.pop();

    renderQuestions();

    const prevQuestion = document.getElementById(prevQuestionId);
    prevQuestion.classList.add('current-question', 'slide-in-reverse');
    updateProgress(parseInt(prevQuestion.id.split('-')[1])); // Update progress tracker
}

function nextQuestion(nextQuestionId = null) {
    const currentQuestion = document.querySelector('.current-question');
    const currentQuestionId = parseInt(currentQuestion.id.split('-')[1]);

    if (currentQuestionId === 95) {
        updateQuestion95Iframe();
        nextQuestionId = 89; // Ensure navigation to question 89 after question 95
    }

    if (currentQuestionId === 91 || currentQuestionId === 92 || currentQuestionId === 93 || currentQuestionId === 94 || currentQuestionId === 89 || currentQuestionId === 90) {
        const inputBox = currentQuestionId === 91 ? currentQuestion.querySelector('textarea') : currentQuestion.querySelector('input[type="text"]');
        const selectBox = currentQuestionId === 89 || currentQuestionId === 90 ? currentQuestion.querySelector('select') : null;

        if ((inputBox && inputBox.value.trim() !== '') || currentQuestionId === 91 || (selectBox && selectBox.value !== '')) {
            if (nextQuestionId === null) {
                nextQuestionId = questions.find(q => q.id === currentQuestionId).options[0].nextQuestion;
            }

            const sidebarItem = document.getElementById(`selected-question${currentQuestionId}`);
            if (sidebarItem) {
                sidebarItem.querySelector('span').textContent = inputBox ? inputBox.value : selectBox.value;
                sidebarItem.style.display = 'list-item';
                sidebarItem.classList.add('show');  // Ensure the sidebar item is displayed
            }

            if (currentQuestionId === 93) {
                questionStack.push(currentQuestion.id);
                currentQuestion.classList.remove('current-question');
                currentQuestion.classList.remove('slide-in-reverse');
                currentQuestion.classList.add('slide-out');
                showFinalScreen();
            } else if (nextQuestionId !== null) {
                questionStack.push(currentQuestion.id);
                currentQuestion.classList.remove('current-question');
                currentQuestion.classList.remove('slide-in-reverse');
                currentQuestion.classList.add('slide-out');

                const nextQuestion = document.getElementById(`question-${nextQuestionId}`);
                nextQuestion.classList.remove('slide-out-reverse');
                nextQuestion.classList.add('current-question', 'slide-in');
            }
            saveProgress();
            updateProgress(nextQuestionId); // Update progress tracker
        } else {
            alert('Please enter a response to proceed.');
        }
    } else {
        const selectedOption = currentQuestion.querySelector('input[type="radio"]:checked');

        if (selectedOption || currentQuestionId === 95 || currentQuestionId === 91) { // Allow navigation without selection for questions 95 and 91
            if (nextQuestionId === null) {
                nextQuestionId = selectedOption ? selectedOption.getAttribute('data-next-question') : null;
            }

            if (nextQuestionId) {
                questionStack.push(currentQuestion.id);
                currentQuestion.classList.remove('current-question');
                currentQuestion.classList.remove('slide-in-reverse');
                currentQuestion.classList.add('slide-out');

                const nextQuestion = document.getElementById(`question-${nextQuestionId}`);
                nextQuestion.classList.remove('slide-out-reverse');
                nextQuestion.classList.add('current-question', 'slide-in');
            }
            if (selectedOption) {
                updateIframeAndSidebar(currentQuestionId, {
                    label: selectedOption.nextElementSibling.querySelector('p').textContent,
                    iframeUrl: selectedOption.dataset.iframeUrl,
                    sidebarName: selectedOption.getAttribute('sidebar-name')
                });
            }
            saveProgress();
            updateProgress(nextQuestionId); // Update progress tracker
        } else {
            alert('Please select an option to proceed.');
        }
    }
}

function prevQuestion() {
    const currentQuestion = document.querySelector('.current-question');
    const prevQuestionId = questionStack.pop();
    const currentQuestionId = parseInt(currentQuestion.id.split('-')[1]);

    const sidebarItem = document.getElementById(`selected-question${currentQuestionId}`);
    if (sidebarItem) {
        sidebarItem.querySelector('span').textContent = '';
        sidebarItem.classList.remove('show');
        sidebarItem.style.display = 'none';
    }

    currentQuestion.classList.remove('current-question', 'slide-in', 'slide-out');
    currentQuestion.classList.add('slide-out-reverse');

    const prevQuestion = document.getElementById(prevQuestionId);
    prevQuestion.classList.remove('slide-out', 'slide-out-reverse');
    prevQuestion.classList.add('current-question', 'slide-in-reverse');
    updateProgress(parseInt(prevQuestion.id.split('-')[1])); // Update progress tracker
}

function saveProgress() {
    questions.forEach(question => {
        const element = document.querySelector(`#question-${question.id} input:checked`);
        if (element) {
            localStorage.setItem(`question-${question.id}`, element.value);
        } else {
            const textInput = document.querySelector(`#question-${question.id} input[type="text"]`);
            const textArea = document.querySelector(`#question-${question.id} textarea`);
            const selectBox = document.querySelector(`#question-${question.id} select`);
            if (textInput) {
                localStorage.setItem(`question-${question.id}`, textInput.value);
            }
            if (textArea) {
                localStorage.setItem(`question-${question.id}`, textArea.value);
            }
            if (selectBox) {
                localStorage.setItem(`question-${question.id}`, selectBox.value);
            }
        }
    });

    // Save current question ID
    const currentQuestion = document.querySelector('.current-question');
    if (currentQuestion) {
        localStorage.setItem('currentQuestionId', currentQuestion.id.split('-')[1]);
    }
}

function loadProgress() {
    questions.forEach(question => {
        const savedValue = localStorage.getItem(`question-${question.id}`);
        if (savedValue) {
            const radio = document.querySelector(`#question-${question.id} input[value="${savedValue}"]`);
            const textInput = document.querySelector(`#question-${question.id} input[type="text"]`);
            const textArea = document.querySelector(`#question-${question.id} textarea`);
            const selectBox = document.querySelector(`#question-${question.id} select`);
            if (radio) {
                radio.checked = true;
                updateIframeAndSidebar(question.id, { label: radio.nextElementSibling.textContent, iframeUrl: radio.dataset.iframeUrl });
                const nextButton = document.getElementById(`next-${question.id}`);
                if (nextButton) {
                    nextButton.style.display = 'inline-block';
                }
            } else if (textInput) {
                textInput.value = savedValue;
                const nextButton = document.getElementById(`next-${question.id}`);
                if (nextButton) {
                    nextButton.style.display = 'inline-block';
                }
            } else if (textArea) {
                textArea.value = savedValue;
                const nextButton = document.getElementById(`next-${question.id}`);
                if (nextButton) {
                    nextButton.style.display = 'inline-block';
                }
            } else if (selectBox) {
                selectBox.value = savedValue;
                const nextButton = document.getElementById(`next-${question.id}`);
                if (nextButton) {
                    nextButton.style.display = 'inline-block';
                }
            }
        }
    });

    // Load current question ID and set it as the current question
    const savedCurrentQuestionId = localStorage.getItem('currentQuestionId');
    if (savedCurrentQuestionId) {
        const currentQuestion = document.getElementById(`question-${savedCurrentQuestionId}`);
        if (currentQuestion) {
            document.querySelectorAll('.question').forEach(questionElement => {
                questionElement.classList.remove('current-question');
            });
            currentQuestion.classList.add('current-question');
        }
    }
}

function updateProgress(currentQuestionId) {
    const steps = ['stone', 'shape', 'metal', 'head', 'band', 'sidestones', 'finalinfo'];
    const stepIds = {
        1: 'stone',
        201: 'shape',
        202: 'shape',
        3: 'metal',
        201301: 'metal',
        201302: 'metal',
        201303: 'metal',
        201304: 'metal',
        201305: 'metal',
        201306: 'metal',
        201307: 'metal',
        201308: 'metal',
        201309: 'metal',
        201310: 'metal',
        201311: 'metal',
        202301: 'metal',
        202302: 'metal',
        202303: 'metal',
        202304: 'metal',
        202305: 'metal',
        202306: 'metal',
        202307: 'metal',
        202308: 'metal',
        202309: 'metal',
        202310: 'metal',
        202311: 'metal',
        401: 'head',
        402: 'head',
        403: 'head',
        404: 'head',
        405: 'head',
        406: 'head',
        407: 'head',
        408: 'head',
        409: 'head',
        410: 'head',
        411: 'head',
        412: 'head',
        413: 'head',
        414: 'head',
        415: 'head',
        416: 'head',
        417: 'head',
        418: 'head',
        419: 'head',
        420: 'head',
        421: 'head',
        422: 'head',
        423: 'head',
        424: 'head',
        425: 'head',
        426: 'head',
        427: 'head',
        428: 'head',
        429: 'head',
        430: 'head',
        431: 'head',
        432: 'head',
        433: 'head',
        434: 'head',
        435: 'head',
        436: 'head',
        437: 'head',
        438: 'head',
        439: 'head',
        440: 'head',
        441: 'head',
        442: 'head',
        443: 'head',
        444: 'head',
        445: 'head',
        446: 'head',
        447: 'head',
        448: 'head',
        449: 'head',
        450: 'head',
        451: 'head',
        452: 'head',
        453: 'head',
        454: 'head',
        455: 'head',
        456: 'head',
        457: 'head',
        458: 'head',
        459: 'head',
        460: 'head',
        461: 'head',
        462: 'head',
        463: 'head',
        464: 'head',
        465: 'head',
        466: 'head',
        801: 'band',
        802: 'band',
        803: 'band',
        901: 'sidestones',
        902: 'sidestones',
        903: 'sidestones',
        904: 'sidestones',
        905: 'sidestones',
        906: 'sidestones',
        907: 'sidestones',
        908: 'sidestones',
        909: 'sidestones',
        910: 'sidestones',
        911: 'sidestones',
        912: 'sidestones',
        89: 'finalinfo',
        90: 'finalinfo',
        91: 'finalinfo',
        92: 'finalinfo',
        95: 'finalinfo',
        93: 'finalinfo'
    };

    steps.forEach(step => {
        const stepElement = document.getElementById(`step-${step}`);
        stepElement.classList.remove('active', 'previous');
    });

    const currentStep = stepIds[currentQuestionId];
    if (currentStep) {
        const currentStepIndex = steps.indexOf(currentStep);
        steps.forEach((step, index) => {
            const stepElement = document.getElementById(`step-${step}`);
            if (index < currentStepIndex) {
                stepElement.classList.add('previous');
            } else if (index === currentStepIndex) {
                stepElement.classList.add('active');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = document.getElementById('loading-text');
    const mainContainer = document.querySelector('.main-container');
    const newPopup = document.getElementById('new-popup');
    const sidebar = document.getElementById('sidebar');
    const minimizeButton = document.getElementById('minimize-sidebar');
    const questionContainer = document.getElementById('question-container');
    const popups = document.querySelectorAll('.popup, .option-popup');

    // Minimize sidebar if the screen width is less than 809px
    if (window.innerWidth <= 809) {
        sidebar.classList.add('minimized');
        questionContainer.classList.add('expanded');
        mainContainer.classList.add('expanded');
        minimizeButton.innerHTML = '&gt;';
        minimizeButton.style.top = '70px'; /* Adjust the top position */
    }

    const loadingMessages = [
        "Getting your options ready.",
        "Getting your options ready..",
        "Getting your options ready...",
        "Looking through our catalog.",
        "Looking through our catalog..",
        "Looking through our catalog...",
        "Bringing your imagination to life.",
        "Bringing your imagination to life..",
        "Bringing your imagination to life..."
    ];

    let messageIndex = 0;
    const changeMessage = () => {
        loadingText.textContent = loadingMessages[messageIndex];
        messageIndex = (messageIndex + 1) % loadingMessages.length;
    };

    changeMessage();
    const messageInterval = setInterval(changeMessage, 300);

    setTimeout(() => {
        clearInterval(messageInterval);
        loadingScreen.classList.add('fade-out');
        mainContainer.style.display = 'flex';
        renderQuestions();
        const firstQuestion = document.querySelector('.question');
        firstQuestion.classList.add('current-question');

        setTimeout(() => {
            loadingScreen.style.display = 'none';
            newPopup.style.display = 'flex';
            newPopup.classList.add('fade-in');
        }, 500);
    }, 2700);

    document.querySelectorAll('input[type="radio"], input[type="text"], textarea, select').forEach(input => {
        input.addEventListener('change', saveProgress);
        input.addEventListener('input', saveProgress);
    });
});

document.getElementById('minimize-sidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const questionContainer = document.getElementById('question-container');
    const mainContainer = document.querySelector('.main-container');
    const minimizeButton = document.getElementById('minimize-sidebar');
    const popups = document.querySelectorAll('.popup, .option-popup');

    if (sidebar.classList.contains('minimized')) {
        sidebar.classList.remove('minimized');
        sidebar.classList.add('expanded');
        questionContainer.classList.remove('expanded');
        mainContainer.classList.remove('expanded');
        minimizeButton.innerHTML = '&gt;';
        minimizeButton.style.top = '70px'; /* Ensure consistent top position */
        popups.forEach(popup => {
            popup.style.left = '0';
            popup.style.width = 'calc(100% - 18%)';
        });
    } else {
        sidebar.classList.add('minimized');
        sidebar.classList.remove('expanded');
        questionContainer.classList.add('expanded');
        mainContainer.classList.add('expanded');
        minimizeButton.innerHTML = '&lt;';
        minimizeButton.style.top = '70px'; /* Ensure consistent top position */
        popups.forEach(popup => {
            popup.style.left = '0';
            popup.style.width = '100%';
        });
    }
});

document.getElementById('shank-link').addEventListener('mouseover', function() {
    const popup = document.getElementById('shank-popup');
    const linkPosition = this.getBoundingClientRect();
    popup.style.top = linkPosition.bottom + 'px';
    popup.style.left = linkPosition.left + 'px';
    popup.style.display = 'block';
});

document.getElementById('shank-link').addEventListener('mouseout', function() {
    const popup = document.getElementById('shank-popup');
    popup.style.display = 'none';
});

document.getElementById('shank-popup').addEventListener('mouseover', function() {
    this.style.display = 'block';
});

document.getElementById('shank-popup').addEventListener('mouseout', function() {
    this.style.display = 'none';
});

function goBack() {
    window.open('https://www.therightring.com', '_blank'); // Open in a new tab
}

function closeNewPopup() {
    const newPopup = document.getElementById('new-popup');
    newPopup.classList.add('fade-out');
    newPopup.classList.remove('fade-in');
    setTimeout(() => {
        newPopup.style.display = 'none';
    }, 500);
}

function closeNewPopupOnClick(event) {
    const newPopupContent = document.querySelector('#new-popup .option-popup-content');
    if (!newPopupContent.contains(event.target)) {
        closeNewPopup();
    }
}
