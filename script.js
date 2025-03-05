document.addEventListener('DOMContentLoaded', function() {
    // Add copy buttons to all pre and command-block elements
    document.querySelectorAll('pre, .command-block').forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        block.appendChild(button);

        button.addEventListener('click', async () => {
            const text = block.querySelector('code') ? block.querySelector('code').textContent : block.textContent;
            try {
                await navigator.clipboard.writeText(text);
                button.textContent = 'Copied!';
                button.classList.add('copied');
                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
                button.textContent = 'Failed';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            }
        });
    });
}); 