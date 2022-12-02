function samplePromise() {
    return Promise.resolve('Azizi');
}
async function run() {
    const name = await samplePromise();
    console.log(name);
}

run();