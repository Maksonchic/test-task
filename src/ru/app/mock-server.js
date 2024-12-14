const postCode = (lang, code) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve(JSON.stringify({
                    status: "success",
                    output: "Hello, world!"
                }))
            } else {
                reject(JSON.stringify({
                    status: "error",
                    error: "SyntaxError: Unexpected token"
                }))
            }
        }, 2000);
    });
}

export default postCode;