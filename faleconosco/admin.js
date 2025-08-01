document.addEventListener('DOMContentLoaded', () => {

    /*LISTA DE CONTATOS*/

    const listaMensagensContatos = document.getElementById('lista-contatos');
    const botaoLimpaTudoContatos = document.getElementById('limpaTudoContatos');
    const mensagemAdminContatos = document.getElementById('mensagemAdminContatos');

    function carregaMensagensContatos() {
        const mensagensContato = JSON.parse(localStorage.getItem('envioContatos')) || [];

        listaMensagensContatos.innerHTML = '';

        if (mensagensContato.length === 0) {
            listaMensagensContatos.innerHTML = '<p class="sem-mensagem">Nenhum novo contato</p>';
            botaoLimpaTudoContatos.style.display = 'none';
            return;
        }

        botaoLimpaTudoContatos.style.display = 'block'; 

        mensagensContato.forEach((mensagensContato, index) => {
            const itemMensagemContatos = document.createElement('div');
            itemMensagemContatos.classList.add('itemMensagemContatos');
            const dataContato = new Date(mensagensContato.timestamp);
            const dataFormatadaContato = dataContato.toLocaleString('pt-BR', {
                year: 'numeric', month: 'long', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit'
                });

            itemMensagemContatos.innerHTML = `
                    <div class="message-header">
                        <div class="message-info">
                            <strong>Nome:</strong> ${mensagensContato.nome}<br>
                            <strong>Email:</strong> ${mensagensContato.email}
                        </div>
                        <span class="message-date"> ${dataFormatadaContato}</span>
                    </div>
                    <div class="message-body">
                        <strong>Mensagem:</strong><br> ${mensagensContato.mensagem}
                    </div>
                    <button class="delete-button" data-index="${index}">Excluir</button>        
                `;

            const botaoDeleteContatos = itemMensagemContatos.querySelector('.delete-button');
            botaoDeleteContatos.addEventListener('click', () => {
                if (confirm('Tem certeza que deseja excluir esta mensagem?')) {
                    deletarMensagemContatos(index);
                }
            });

            listaMensagensContatos.appendChild(itemMensagemContatos);
        });
    }


    /**
    @param {number} indexToDelete
    */

    function deletarMensagemContatos(indexToDelete) {
        let mensagensContato = JSON.parse(localStorage.getItem('envioContatos')) || [];

        mensagensContato.splice(indexToDelete, 1);

        localStorage.setItem('envioContatos', JSON.stringify(mensagensContato));

        carregaMensagensContatos();

        displaymensagemAdminContatos('Mensagem excluída com sucesso!', 'success');
    }

    function limpaTudoContatos() {
        if (confirm('Tem certeza que deseja excluir todas as mensagens?')) {
            localStorage.removeItem('envioContatos');
            carregaMensagensContatos();
            displaymensagemAdminContatos('Todas as mensagens foram excluídas!', 'success');
        }
    }

    botaoLimpaTudoContatos.addEventListener('click', limpaTudoContatos);

    /**
     * @param {string} msg
     * @param {string} type
     */

    function displaymensagemAdminContatos(msg, type) {
        mensagemAdminContatos.textContent = msg;
        mensagemAdminContatos.className = `mensagemAdminContatos ${type}`;
        mensagemAdminContatos.style.display = 'block';

        setTimeout(() => {
            mensagemAdminContatos.style.display = 'none';
            mensagemAdminContatos.textContent = '';
            mensagemAdminContatos.className = 'mensagemAdminContatos';
        }, 5000);
    }

    carregaMensagensContatos();

    /* FIM DA LISTA DE CONTATOS */

    /* LISTA DE SUGESTÕES */

    const listaMensagensSugest = document.getElementById('lista-sugestoes');
    const botaoLimpaTudoSugest = document.getElementById('limpaTudoSugest');
    const mensagemAdminSugest = document.getElementById('mensagemAdminSugest');

    function carregaMensagensSugest() {
        const mensagensSugest = JSON.parse(localStorage.getItem('envioSugestoes')) || [];

        listaMensagensSugest.innerHTML = '';

        if (mensagensSugest.length === 0) {
            listaMensagensSugest.innerHTML = '<p class="sem-mensagem">Nenhuma nova sugestão</p>';
            botaoLimpaTudoSugest.style.display = 'none';
            return;
        }

        botaoLimpaTudoSugest.style.display = 'block'; 

        mensagensSugest.forEach((mensagensSugest, index) => {
            const itemMensagemSugest = document.createElement('div');
            itemMensagemSugest.classList.add('itemMensagemSugest');
            const dataSugest = new Date(mensagensSugest.timestamp);
            const dataFormatadaSugest = dataSugest.toLocaleString('pt-BR', {
                year: 'numeric', month: 'long', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit'
                });

            itemMensagemSugest.innerHTML = `
                    <div class="message-header">
                        <div class="message-info">
                            <strong>Nome:</strong> ${mensagensSugest.nome}<br>
                            <strong>Email:</strong> ${mensagensSugest.email}
                        </div>
                        <span class="message-date"> ${dataFormatadaSugest}</span>
                    </div>
                    <div class="message-body">
                        <strong>Mensagem:</strong><br> ${mensagensSugest.mensagem}
                    </div>
                    <button class="delete-button" data-index="${index}">Excluir</button>        
                `;

            const botaoDeleteSugest = itemMensagemSugest.querySelector('.delete-button');
            botaoDeleteSugest.addEventListener('click', () => {
                if (confirm('Tem certeza que deseja excluir esta mensagem?')) {
                    deletarMensagemSugest(index);
                }
            });

            listaMensagensSugest.appendChild(itemMensagemSugest);
        });
    }


    /**
    @param {number} indexToDelete
    */

    function deletarMensagemSugest(indexToDelete) {
        let mensagensSugest = JSON.parse(localStorage.getItem('envioSugestoes')) || [];

        mensagensSugest.splice(indexToDelete, 1);

        localStorage.setItem('envioSugestoes', JSON.stringify(mensagensSugest));

        carregaMensagensSugest();

        displaymensagemAdminSugest('Mensagem excluída com sucesso!', 'success');
    }

    function limpaTudoSugest() {
        if (confirm('Tem certeza que deseja excluir todas as mensagens?')) {
            localStorage.removeItem('envioSugestoes');
            carregaMensagensSugest();
            displaymensagemAdminSugest('Todas as mensagens foram excluídas!', 'success');
        }
    }

    botaoLimpaTudoSugest.addEventListener('click', limpaTudoSugest);

    /**
     * @param {string} msg
     * @param {string} type
     */

    function displaymensagemAdminSugest(msg, type) {
        mensagemAdminSugest.textContent = msg;
        mensagemAdminSugest.className = `mensagemAdminSugest ${type}`;
        mensagemAdminSugest.style.display = 'block';

        setTimeout(() => {
            mensagemAdminSugest.style.display = 'none';
            mensagemAdminSugest.textContent = '';
            mensagemAdminSugest.className = 'mensagemAdminSugest';
        }, 5000);
    }

    carregaMensagensSugest();

    /* FIM DA LISTA DE SUGESTÕES */
});


function OpenNav(){
  const nav = document.getElementById("nav")
  nav.classList.toggle("nav-open")
}


  const clicknav = document.getElementById("pop-nav")
  clicknav.addEventListener("click", OpenNav)