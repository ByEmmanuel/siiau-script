document.addEventListener('DOMContentLoaded', () => {
    const copyBtns = document.querySelectorAll('.copy-btn');

    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Find the associated code block. It is the next sibling element's pre code.
            const codeContentDiv = btn.closest('.code-section-block').querySelector('.code-content code');
            const textToCopy = codeContentDiv.innerText || codeContentDiv.textContent;

            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = btn.innerHTML;
                btn.classList.add('copied');
                btn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>¡Copiado!</span>
                `;

                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.innerHTML = originalText;
                }, 2500);
            }).catch(err => {
                console.error('Error al copiar al portapapeles: ', err);
                alert('No se pudo copiar el código. Por favor, selecciónalo y cópialo manualmente.');
            });
        });
    });
});
