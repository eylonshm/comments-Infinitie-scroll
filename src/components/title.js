import React from 'react'
import Typist from 'react-typist'

const title = () => {
    return (
        <>
            <h2 style={styles.header}>
                Hey{' '}
                <span role="img" aria-label="smile">
                    👋
                </span>
            </h2>
            <Typist className="typist" cursor={{ show: true, blink: true, hideWhenDone: true }}>
                Scroll down to load more comments.
                <Typist.Backspace count={50} delay={800} />
                Type your comment and click the 'SEND' button.
            </Typist>
        </>
    )
}

export default title

const styles = {
    header: {
        margin: '10px, 0, 0 0',
    },
}
