document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copyBtn');
    const codeBlock = document.getElementById('codeBlock');

    if (copyBtn && codeBlock) {
        copyBtn.addEventListener('click', () => {
            const textToCopy = codeBlock.innerText || codeBlock.textContent;

            // Uso de la API moderna del portapapeles
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Cambiar estilo del botón temporalmente
                const originalText = copyBtn.innerHTML;
                copyBtn.classList.add('copied');
                copyBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>¡Copiado!</span>
                `;

                // Volver a la normalidad después de 2.5 segundos
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyBtn.innerHTML = originalText;
                }, 2500);
            }).catch(err => {
                console.error('Error al copiar al portapapeles: ', err);
                alert('No se pudo copiar el código. Por favor, selecciónalo y cópialo manualmente.');
            });
        });
    }
});
