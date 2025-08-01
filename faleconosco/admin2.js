document.addEventListener('DOMContentLoaded', () => {

    /*LISTA DE Sugest*/

    /* FIM DA LISTA DE Sugest */

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
        mensagemAdminSugest.className = `admin-message ${type}`;
        mensagemAdminSugest.style.display = 'block';

        setTimeout(() => {
            mensagemAdminSugest.style.display = 'none';
            mensagemAdminSugest.textContent = '';
            mensagemAdminSugest.className = 'admin-message';
        }, 5000);
    }

    carregaMensagensSugest();

    /* FIM DA LISTA DE SUGESTÕES */
});