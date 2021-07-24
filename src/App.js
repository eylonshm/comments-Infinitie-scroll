import { useCallback, useRef, useState } from 'react'
import './App.css'
import './assets/fonts/fonts.css'
import colors from './assets/colors/colors'
import Comment from './components/comment'
import useCommentsLoader from './utils/useCommentsLoader'
import Title from './components/title'
import ClipLoader from 'react-spinners/ClipLoader'
function App() {
    const [sliceIndex, setSliceIndex] = useState(0)
    const [isFirstLoad, setIsFirstLoad] = useState(true)

    const observer = useRef()
    const { comments, hasMore, loading, error } = useCommentsLoader(sliceIndex)

    const lastCommentElementRef = useCallback(
        (node) => {
            if (loading) return
            if (observer.current) observer.current.disconnect()
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setIsFirstLoad(false)
                    setSliceIndex((prevSliceIndex) => prevSliceIndex + 20)
                }
            })
            if (node) observer.current.observe(node)
            console.log(node)
        },
        [loading]
    )

    return (
        <div style={styles.appWrapper}>
            <Title />
            {comments.map((comment, index) => {
                if (comments.length === index + 1) {
                    return <Comment key={comment.id} comment={comment} reference={lastCommentElementRef} />
                } else {
                    return <Comment key={comment} comment={comment} />
                }
            })}

            <ClipLoader loadin={loading} color={colors.textDark} loading={loading} size={35} css={{ margin: '10px 0' }} />

            {error && (
                <p>
                    We got an Error{' '}
                    <span role="img" aria-label="smile">
                        😥
                    </span>
                </p>
            )}

            {!hasMore && !isFirstLoad && (
                <p>
                    Well, that's all for now{' '}
                    <span role="img" aria-label="smile">
                        🤐
                    </span>
                </p>
            )}
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
        backgroundColor: colors.background,
        color: colors.textDark,
    },
}
