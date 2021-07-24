import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useCommentsLoader(sliceIndex) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [comments, setComments] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/comments?_start=${sliceIndex}&_limit=20`,
        })
            .then((res) => {
                console.log(res.data)
                setComments((prevComments) => [...new Set([...prevComments, ...res.data.map((comment) => comment)])])
                setHasMore(res.data.length > 0)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                console.log(err)
            })
    }, [sliceIndex])

    return { loading, error, comments, hasMore }
}
