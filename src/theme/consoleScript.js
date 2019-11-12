const log = logger();

function logger() {
    // Define your custom commands and emoji
    const commands = Object.freeze([
        ["unicorn", "🦄"],
        ["pizza", "🍕"],
        ["beer", "🍺"],
        ["poo", "💩"],
        ["gohst", "👻"],
        ["crystal", "🔮"],
        ["swords", "⚔️"],
        ["stupid", "🤦🏻‍"],
        ["ufo", "👽"],
        ["male", "👱🏼"],
        ["female", "👱🏼‍♀️"]
    ]);

    function _swords(text) {
        if (Array.isArray(text)) {
            text.forEach(line => console.swords(line))
        } else {
            console.swords(text)
        }
    }

    function _stupid(text) {
        if (Array.isArray(text)) {
            text.forEach(line => console.stupid(line))
        } else {
            console.stupid(text)
        }
    }

    function _gohst(text) {
        if (Array.isArray(text)) {
            text.forEach(line => console.gohst(line))
        } else {
            console.gohst(text)
        }
    }

    function _pizza(text) {
        if (Array.isArray(text)) {
            text.forEach(line => console.pizza(line))
        } else {
            console.pizza(text)
        }
    }

    const _male = text => {
        if (Array.isArray(text)) {
            text.forEach(line => console.male(line))
        } else {
            console.male(text)
        }
    }

    const _female = text => {
        if (Array.isArray(text)) {
            text.forEach(line => console.female(line))
        } else {
            console.female(text)
        }
    }

    const _ufo = text => {
        if (Array.isArray(text)) {
            text.forEach(line => console.ufo(line))
        } else {
            console.ufo(text)
        }
    }


    const _unicorn = text => {
        if (Array.isArray(text)) {
            text.forEach(line => console.unicorn(line))
        } else {
            console.unicorn(text)
        }
    }

    const _crystal = text => {
        if (Array.isArray(text)) {
            text.forEach(line => console.crystal(line))
        } else {
            console.crystal(text)
        }
    }

    return {
        commands,
        _female,
        _gohst,
        _male,
        _pizza,
        _stupid,
        _swords,
        _ufo,
        _unicorn,
        _crystal,
    }

}

// Initiate console with emojis

(() => {
    if (!window.console) return;

    // Create custom commands
    log.commands.forEach(command => {
        window.console[command[0]] = function () {

            // Get arguments as a string
            var args = Array.prototype.slice.call(arguments).toString().split(',').join(', ');

            // Log to the console with emoji
            console.log(command[1] + "  " + args);
        }
    });
})();

export default log ;
