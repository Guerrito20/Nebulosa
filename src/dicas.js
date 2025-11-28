function toggleDica(header) {
    const item = header.parentElement;
    const content = item.querySelector('.dica-content');
    const icon = item.querySelector('.toggle-icon');

    // 1. Alterna a classe 'active' e o ícone APENAS no item clicado
    item.classList.toggle('active');
    icon.classList.toggle('rotate');

    // 2. Ajusta o maxHeight para abrir ou fechar
    if (item.classList.contains('active')) {
        // Abre (define a altura real do conteúdo)
        content.style.maxHeight = content.scrollHeight + "px"; 
    } else {
        // Fecha (reseta a altura)
        content.style.maxHeight = null;
    }
    

}