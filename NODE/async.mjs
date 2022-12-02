function samplePromise() {
    return Promise.resolve('Azizi');
}

const name = await samplePromise();
console.log(name);