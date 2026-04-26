// Đề bài: Xây dựng một hệ thống log, mà khi log sẽ đính kèm thời điểm log
// Lệnh chạy: npx tsx 05_HOF_injection.ts  

const logWithTime_old = (message: string) => {
  const now = new Date().toISOString()
  console.log(`${now}: ${message}`)
}

const warnWithTime_old = (message: string) => {
  const now = new Date().toISOString()
  console.warn(`${now}: ${message}`)
}
logWithTime_old('Hello world')
warnWithTime_old('Warning!')

// ✅ HOF : Higher Order Function
// HOF: Được dùng trong lập trình hàm, giúp tăng tính tái sử dụng code, giảm trùng lặp và dễ dàng testing

const createLogWithTime = (logFn: (message: string) => void) => {
  return (message: string) => {
    const now = new Date().toISOString()
    logFn(`${now}: ${message}`)
  }
}

const logWithTime_0 = createLogWithTime(console.log)
const warnWithTime_0 = createLogWithTime(console.warn)
const errorWithTime_0 = createLogWithTime(console.error)

logWithTime_0('Hello world')
warnWithTime_0('Warning 2!')
errorWithTime_0('Error 3!')

// ✅ Dependency Injection: Là một design pattern trong lập trình hướng đối tượng. Giúp tăng tính tái sử dụng code, giảm trùng lặp và dễ dàng testing
// ==============================================================================

class TimeLogger {
  constructor(private logFn: (message: string) => void) { }

  log(message: string) {
    const now = new Date().toISOString()
    this.logFn(`${now}: ${message}`)
  }
}

const logWithTime = new TimeLogger(console.log)
const warnWithTime = new TimeLogger(console.warn)

const errorWithTime = new TimeLogger(console.error)

logWithTime.log('Hello world')
warnWithTime.log('Warning 2!')
errorWithTime.log('Error 3!')