$(function(){
    const fonts = ['Fraktur', 'Roman', 'S blood', 'ANSI Regular', 'Bloody', 'Delta Corps Priest 1', 'The Edge'];
    const font = ($(window).width() < 600)? 'The Edge' : fonts[Math.floor(Math.random() * 7)];

    figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts' });
    figlet.preloadFonts([font], ready);

    const commands = {
        hello: function(what) {
            this.echo('Hello, ' + what +
                      '. Welcome to this terminal.');
        }
    };
    const options = {
        greetings: false,
        prompt: '[[;#0f0;]guest@v41k0.xyz:~$ ]'
    };

    const term = $('#terminal').terminal(commands, options);

    function ready(){
        term.echo(() => render('valko'), { ansi: true });
        term.echo('Welcome to my profile, take a look around. For the available commands type ' + '[[b;#fff;]help\n]');
    }
    
    function render(text) {
        const cols = term.cols();
        return figlet.textSync(text, {
            font: font,
            width: cols,
            whitespaceBreak: true
    });
}
});

