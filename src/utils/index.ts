export function formartTime(time: string) {
    let myTime = new Date(time);
    let str = myTime.toLocaleDateString();
    return str;
}
export function throttle(func: any, delay: number) {
    let prev = Date.now();
    return () => {
        let args = arguments;
        let now = Date.now();
        if (now - prev >= delay) {
            func(args);
            prev = Date.now();
        }
    }
}
