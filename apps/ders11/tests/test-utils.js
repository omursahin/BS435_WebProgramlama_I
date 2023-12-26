const request = require('supertest');

export const recursiveTimeoutCheck = (predicate, totalTimeMS, intervalMS, start, resolve) =>{
    const elapsed = Date.now() - start;
    if(elapsed > totalTimeMS){
        resolve(false);
    } else if(predicate()){
        resolve(true);
    } else {
        setTimeout(() => {
            recursiveTimeoutCheck(predicate, totalTimeMS, intervalMS, start, resolve);
        }, intervalMS);
    }
}
export const asyncCheckCondition = (predicate, totalTimeMS, intervalMS) => {

    const start = Date.now();

    return new Promise((resolve) => {
        recursiveTimeoutCheck(predicate, totalTimeMS, intervalMS, start, resolve);
    });
}

export const overrideFetch = (app) => {

    const agent = request.agent(app);

    global.fetch = async (url, init) => {

        let response;

        if(!init || !init.method || init.method.toUpperCase() === "GET"){
            response = await agent.get(url);
        } else if(init.method.toUpperCase() === "POST"){
            response = await agent.post(url)
                .send(init.body)
                .set('Content-Type', init.headers ? init.headers['Content-Type'] : "application/json");
        } else if(init.method.toUpperCase() === "PUT"){
            response = await agent.put(url)
                .send(init.body)
                .set('Content-Type', init.headers ? init.headers['Content-Type'] : "application/json");
        } else if(init.method.toUpperCase() === "DELETE"){
            response = await agent.delete(url);
        } else {
            throw "Unhandled HTTP method: " + init.method;
        }

        const payload = response.body;

        return new Promise( (resolve, reject) => {

            const httpResponse = {
                status: response.statusCode,
                json: () => {return new Promise(
                    (res, rej) => {res(payload);}
                )}
            };

            resolve(httpResponse);
        });
    };
}