function receivesAFunction(callback) {
    return callback();
};


// function namedFunction( (2) => {1 + 1});

function returnsANamedFunction() {
    return function receivesAFunction() {
        console.log('text');
    };
};

function returnsAnAnonymousFunction() {
    return () => 'before all';
};
