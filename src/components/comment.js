import React from 'react'
import colors from '../assets/colors/colors'

const comment = ({ comment }) => {
    return (
        <div style={styles.commentWrapper}>
            <p style={styles.email}>{comment.email}</p>
            <h3 style={styles.name}>{comment.name}</h3>
            <p>{comment.body}</p>
        </div>
    )
}

export default comment

const styles = {
    commentWrapper: {
        backgroundColor: colors.white,
        color: colors.textLight,
        marginTop: '20px',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '15px',
        overflow: 'hidden',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },
    name: {
        margin: '0 0 20px 0',
        fontWeight: '600',
    },
    email: {
        marginBottom: '10px',
        fontSize: '13px',
    },
}
