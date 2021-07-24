import axios from 'axios'

export default async function postComment(name, email, body) {
    const comment = JSON.stringify({ name: name, email: email, body: body, postId: 1, id: 1 })
    try {
        const response = await axios.post('https://test.steps.me/test/testAssignComment', comment, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const responseJson = await response.json()
        console.log(responseJson)
        return responseJson
    } catch (err) {
        return err
    }
}
