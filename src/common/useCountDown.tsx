/** 倒计时Hook  */
import {
    useState, useCallback, useRef, useEffect 
} from "react"

interface UseCountDown {
    /** count 剩余秒数 */
    count: number
    /** 开始倒数 countValue 倒数秒数 */
    startCount (countValue: number): void
    /** 停止倒数 */
    stopCount (): void
    /** 倒数是否结束 */
    isEnd: boolean
}

export default function useCountDown (initValue: number = 0):UseCountDown {
    const [count, setCount] = useState(initValue)
    const [isEnd, setIsEnd] = useState(true)
    const timer = useRef<number>()
    
    /** 停止倒数 */
    const stopCount = useCallback(() => {
        clearInterval(timer.current)
        setIsEnd(true)
        setCount(0)
    }, [])

    /** 开始倒数 */
    const startCount = useCallback((countValue: number) => {
        setIsEnd(false)
        setCount(countValue)
        timer.current = setInterval(() => {
            setCount(count => {
                if (count === 1) {
                    stopCount()
                    return 0
                }
                return count - 1
            })
        }, 1000)
    }, [stopCount])

    // 如果有初始值就开始倒数
    useEffect(() => {
        initValue && startCount(initValue)
    }, [initValue, startCount])

    return {
        count,
        startCount,
        stopCount,
        isEnd
    }
}
