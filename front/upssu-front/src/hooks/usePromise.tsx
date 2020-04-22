import { useState, useEffect } from 'react'

export default function usePromise(promiseCreator: any, deps: any) {

    const [ loading, setLoading ] = useState<boolean>(false)
    const [ resolved, setResolved ] = useState<any>(null)
    const [ error, setError ] = useState<any>(null)

    useEffect(() => {
        const process = async () => {
            setLoading(true)

            try {
                const resolved = await promiseCreator()
                setResolved(resolved)
            } catch(e) {
                setError(e)
            }

            setLoading(false)
        }

        process()
    }, deps)

    return [ loading, resolved, error ]
}