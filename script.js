
// =========================================================
// FUNÇÃO PARA ABRIR E FECHAR A JANELA (MODAL)
// =========================================================

// 1. FUNÇÃO PARA ABRIR O MODAL
function openModal() {
    // Busca a janela inteira pelo ID "contact-modal"
    const modal = document.getElementById('contact-modal');
    
    // Se a janela existe, a torna visível
    if (modal) {
        modal.style.display = 'block'; // Ou 'flex', dependendo do seu CSS. 'block' deve funcionar.
    }
}

// 2. FUNÇÃO PARA FECHAR O MODAL (Você tem um "X" que precisa dela)
function closeModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) {
        modal.style.display = 'none'; // Esconde a janela
    }
}
// =========================================================

//ATENÇÃO: Substitua '5511999999999' pelo SEU número de WhatsApp no formato internacional sem símbolos (Ex: 55 DDD NÚMERO)
const whatsappNumber = '554797420790'; 

// 1. Aguarda o carregamento completo da página antes de tentar interagir com os elementos HTML
document.addEventListener('DOMContentLoaded', function() {
    
    // Tenta encontrar o formulário (ID: 'contact-form')
    const form = document.getElementById('contact-form'); 

    if (!form) {
        console.error('Erro: Elemento com ID "contact-form" não encontrado no HTML. Verifique o index.html.');
        return; 
    }

    // Adiciona o ouvinte de evento 'submit' (A lógica deve estar aqui DENTRO)
    form.addEventListener('submit', function(event) {
        
        // 1. Impedir o recarregamento da página ao clicar no botão
        event.preventDefault(); 
        
        // 2. Coleta e limpa os dados
        const name = document.getElementById('contact-name').value.trim();
        
        // CORREÇÃO DE SINTAXE: Removido o '()' extra após .trim()
        const userWhatsapp = document.getElementById('contact-whatsapp').value.trim(); 
        
        const service = document.getElementById('contact-service').value.trim();

        // 3. VALIDAÇÃO: Se algum campo estiver vazio (O 'return' está dentro das chaves {})
        if (!name || !userWhatsapp || !service) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        // 4. VALIDAÇÃO: Verifica se o número de WhatsApp tem pelo menos 10 dígitos (opcional, mas recomendado)
        if (userWhatsapp.length < 10) {
            alert('Por favor, insira um WhatsApp válido (ex: 61999999999).');
            return;
        }

        // 5. MONTAGEM DA MENSAGEM (CORRIGIDO: Usando crases ` ` para Template Literal)
    const message = `Olá, meu nome é ${name}. Meu Whatsapp é ${userWhatsapp}. Gostaria de solicitar um orçamento para o seguinte serviço: ${service}.`;

        // 6. Codifica a mensagem para o formato de URL
        const encodedMessage = encodeURIComponent(message);

        // 7. Monta o link final do WhatsApp
    const whatsappLink =`https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // 8. Abre o link em uma nova aba (CORRIGIDO: Ponto e vírgula no final da linha)
        window.open(whatsappLink,'https://wa.me/${whatsappNumber}?text=${encodedMessage}') ; 
        
    });
});