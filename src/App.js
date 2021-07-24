import './App.css'
import colors from './assets/colors/colors'
import Comment from './components/comment'

function App() {
    return (
        <div style={styles.appWrapper}>
            <Comment
                comment={{
                    email: 'email@gmail.com',
                    name: 'lorem ipsum jfofof okjfiui',
                    body: 'dsjdosajdiosaj doai jdosia jdsoai djsoai djsaoi djsaoi djsaoid sajodi asjio',
                }}
            />
        </div>
    )
}

export default App

const styles = {
    appWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat',
    },
}
