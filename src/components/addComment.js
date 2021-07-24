import React, { useState } from 'react'
import postComment from '../utils/postComment'
// Material UI Components
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

const AddComment = () => {
    const [titleInputValue, setTitleInputValue] = useState()
    const [emailInputValue, setEmailInputValue] = useState()
    const [contentInputValue, setContentInputValue] = useState()
    const [modalOpen, setModalOpen] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const handleSendButtonClick = async (e) => {
        e.preventDefault()
        if (titleInputValue?.length > 0 && emailInputValue?.length > 0 && contentInputValue?.length > 0) {
            console.log('doing')
            setTitleInputValue('')
            setEmailInputValue('')
            setContentInputValue('')
            try {
                await postComment(titleInputValue, emailInputValue, contentInputValue)
                setModalOpen(true)
            } catch (err) {
                setModalOpen(true)
                setErrorMessage(err)
            }
        }
    }

    const handleModalClose = () => {
        setModalOpen(false)
        setErrorMessage(false)
    }
    return (
        <>
            <form style={styles.form}>
                <div>
                    <TextField
                        style={styles.titleInput}
                        value={titleInputValue}
                        label="title"
                        onChange={(e) => setTitleInputValue(e.target.value)}
                    ></TextField>
                    <TextField value={emailInputValue} label="email" onChange={(e) => setEmailInputValue(e.target.value)}></TextField>
                </div>
                <TextField
                    style={styles.contentInput}
                    label="content"
                    multiline
                    maxRows={4}
                    value={contentInputValue}
                    onChange={(e) => setContentInputValue(e.target.value)}
                />
                <Button variant="outlined" color="default" style={styles.button} type="submit" onClick={(e) => handleSendButtonClick(e)}>
                    Send
                </Button>
            </form>
            <Dialog open={modalOpen} onClose={handleModalClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle>
                    {'Thank you for posting a comment'}{' '}
                    <span role="img" aria-label="smile">
                        🥳
                    </span>
                </DialogTitle>
            </Dialog>
        </>
    )
}

export default AddComment

const styles = {
    form: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
        overflow: 'hidden',
        justifyContent: 'center',
    },
    titleInput: {
        margin: '0 20px 5px 0',
    },
    contentInput: {
        margin: '15px 0',
    },
    button: {
        width: '20%',
        marginLeft: 'auto',
        borderRadius: '5px',
    },
}
