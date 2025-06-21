$(function(){
    const fonts = ['Fraktur', 'Roman', 'S blood', 'ANSI Regular', 'Bloody', 'Delta Corps Priest 1', 'The Edge'];
    const font = ($(window).width() < 600)? 'The Edge' : fonts[Math.floor(Math.random() * 7)];

    figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts' });
    figlet.preloadFonts([font], ready);

    const commands = {
        hello: function(what) {
            this.echo('Hello, ' + what +
                      '. Welcome to this terminal.');
        },
        help: function(){
            term.echo(`List of available commands: ${help}`, {raw: true});
        },
        echo: function(...args) {
            if(args.length > 0){
                term.echo(args.join(' '));
            }
        },
        cat: function() {
        term.echo($('<img src="https://placecats.com/neo/300/200">'));
        }
    };
    const formatter = new Intl.ListFormat("en", {
        style: "long",
        type: "conjunction",
    });
    const command_list = ['clear'].concat(Object.keys(commands));
    const formatted_list = command_list.map(cmd => {
        return `<span class="command">${cmd}</span>`;
    });
    const help = formatter.format(formatted_list);
    const re = new RegExp(`^\s*(${command_list.join('|')})(\s?.*)`);

    $.terminal.new_formatter([re, function(_, command, args) {
         return `[[;white;]${command}][[;aqua;]${args}]`;
    }]);


    const options = {
        greetings: false,
        prompt: '[[;#0f0;]guest@v41k0.xyz:~$ ]',
        checkArity: false,
        exit: false,
        completion: true
    };

    const term = $('#terminal').terminal(commands, options);
    term.on('click', '.command', function() {
        const command = $(this).text();
        term.exec(command);
    });
    function ready(){
        term.echo(() => render('valko'), { ansi: true });
        term.echo('[[b;#ff0;]\n!UNDER CONSTRUCTION!]')
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

