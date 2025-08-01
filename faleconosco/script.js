document.addEventListener('DOMContentLoaded', () => {

    const formContatoFunc = document.getElementById('formContato');
    const formSugestFunc = document.getElementById('formSugest');

    /*FORM CONTATO*/

    if (formContatoFunc) {
        formContatoFunc.addEventListener('submit', (event) => {
                
            event.preventDefault();

            const nomeContato = document.getElementById('nomeContatoIn').value.trim();
            const emailContato = document.getElementById('emailContatoIn').value.trim();
            const mensagemContato = document.getElementById('mensagemContatoIn').value.trim();

            if (nomeContato === '' || emailContato === '' || mensagemContato === '') {
                displayMessage('Por favor, preencha todos os campos.', 'error');
                return;
            }

            if (!isValidEmail(emailContato)) {
                displayMessage('Por favor, insira um endereço de e-mail válido.', 'error');
                return;
            }

            const formContato = {
                nome: nomeContato,
                email: emailContato,
                mensagem: mensagemContato,
                timestamp: new Date().toISOString()
                };

            saveFormData(formContato);

            displayMessage('Mensagem enviada com sucesso!', 'success');

            formContatoFunc.reset();

            /**
            @param {string} msg
            @param {string} type
            */

            function displayMessage(msg, type) {

                formMessageContato.textContent = msg;
                formMessageContato.className = `form-message ${type}`;
                formMessageContato.style.display = 'block';

                setTimeout(() => {
                    formMessageContato.style.display = 'none';
                    formMessageContato.textContent = '';
                    formMessageContato.className = 'form-message';
                }, 5000);
            }

            /**
            @param {object} data
            */
            function saveFormData(data) {
                let contatos = JSON.parse(localStorage.getItem('envioContatos')) || [];

                contatos.push(data);

                localStorage.setItem('envioContatos', JSON.stringify(contatos));

                console.log('Dados salvos no localStorage:',contatos);  
            }
        });
    }

    /*FORM SUGESTÕES*/

    if (formSugestFunc) {
        formSugestFunc.addEventListener('submit', (event) => {
                
            event.preventDefault();

            const nomeSugest = document.getElementById('nomeSugestIn').value.trim();
            const emailSugest = document.getElementById('emailSugestIn').value.trim();
            const mensagemSugest = document.getElementById('mensagemSugestIn').value.trim();

            if (nomeSugest === '' || emailSugest === '' || mensagemSugest === '') {
                displayMessage('Por favor, preencha todos os campos.', 'error');
                return;
            }

            if (!isValidEmail(emailSugest)) {
                displayMessage('Por favor, insira um endereço de e-mail válido.', 'error');
                return;
            }

            const formSugest = {
                nome: nomeSugest,
                email: emailSugest,
                mensagem: mensagemSugest,
                timestamp: new Date().toISOString()
                };

            saveFormData(formSugest);

            displayMessage('Mensagem enviada com sucesso!', 'success');

            formSugestFunc.reset();
            
            /**
            @param {string} msg
            @param {string} type
            */

            function displayMessage(msg, type) {
                formMessageSugest.textContent = msg;
                formMessageSugest.className = `form-message ${type}`;
                formMessageSugest.style.display = 'block';

                setTimeout(() => {
                    formMessageSugest.style.display = 'none';
                    formMessageSugest.textContent = '';
                    formMessageSugest.className = 'form-message';
                }, 5000);
            }
            /**
            @param {object} data
            */
            function saveFormData(data) {
                let sugestoes = JSON.parse(localStorage.getItem('envioSugestoes')) || [];

                sugestoes.push(data);

                localStorage.setItem('envioSugestoes', JSON.stringify(sugestoes));

                console.log('Dados salvos no localStorage:',sugestoes);
                
            }
        });
    }

    /**
    @param {string} email
    @returns {boolean}
    */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

function OpenNav(){
  const nav = document.getElementById("nav")
  nav.classList.toggle("nav-open")
}


  const clicknav = document.getElementById("pop-nav")
  clicknav.addEventListener("click", OpenNav)
