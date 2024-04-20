
/*  
 +-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+
 |b|o|t|o|n| |p|a|r|a| |c|a|m|b|i|a|r| |t|e|m|a|
 +-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+ 
*/
    const btn = document.getElementById('theme-switch');
    btn.addEventListener('click', function() {
        // Esta línea alterna el atributo 'data-theme' entre 'dark' y null
        document.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme') === 'dark' ? null : 'dark');
    });

    