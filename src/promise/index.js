const somethingWillHapped = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Woooops!');
        }
    });
};

somethingWillHapped()
    .then(response => console.log(response))
    .catch(err => console.log(err));

const somethingWillHapped2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whooops!')
            reject(error);
        }
    })
}

somethingWillHapped2()
    .then(response => console.log(response))
    .catch(err => console.log(err));

Promise.all([somethingWillHapped(), somethingWillHapped2()])
    .then(response => {
        console.log('Array of Results', response);
    })
    .catch(err => {
        console.log(err);
    })