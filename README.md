# 自定义Hook大全

### 倒计时Hook - [useCountDown](https://github.com/RicholeYu/react-hooks/blob/master/src/common/useCountDown.tsx)
interface UseCountDown {
    /** count 剩余秒数 */
    count: number
    /** 开始倒数 countValue 倒数秒数 */
    startCount (countValue: number): void,
    /** 倒数是否结束 */
    isEnd: boolean
}