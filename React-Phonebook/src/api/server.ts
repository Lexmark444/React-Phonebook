let token ='48400953024c1ba642f6b411aa98ba6bcd0ea0ece192dc55'

// if you want to use brandon's site... remove token, use https://plankton-app-46k8b.ondigitalocean.app/api/contacts

export const server_calls = {
    get:async () => {
        const response = await fetch('https://gabby-cooked-flute.glitch.me/',
        {
            method: 'GET',
            mode: "cors",
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    }

    // TODO: Finish server calls
}