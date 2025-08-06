const 내이메일 = "codecamp@gmail.com"
undefined
내이
VM2972:1 Uncaught ReferenceError: 내이 is not defined
    at <anonymous>:1:1
(anonymous) @ VM2972:1Understand this error
'codecamo@gmail.com'
내이메일.split("@")
(2) ['codecamp', 'gmail.com']
내이메일
'codecamp@gmail.com'
const 분리한결과 = 내이메일.sp;it("@")
VM3311:1 Uncaught ReferenceError: it is not defined
    at <anonymous>:1:23
(anonymous) @ VM3311:1Understand this error
분리한결과
undefined
(2) ['codecamp', 'gmail.com]
분리한결과[0]
'codecamp'
분리한결과[1]
'gmail.com'
const 이메일앞부분 = 분리한결과 [0]
VM3782:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
const 이메일뒷부분 = 브
VM3877:1 Uncaught ReferenceError: 브 is not defined
    at <anonymous>:1:16
(anonymous) @ VM3877:1Understand this error
이메일앞부분
'codecamp'
이메일앞부분.slice(0,4)
'code'
const 새로운이메일앞부분 = 이메일앞부분.slice(0,4) + "****"
VM4248:1 Uncaught ReferenceError: 이메일앞부분 is not defined
    at <anonymous>:1:1
(anonymous) @ VM4248:1Understand this error
새로운이메일앞부분
'code****'
const 새로운이메일 = 새로운이메일앞부분 + 이메일뒷부분
VM4531:1 Uncaught ReferenceError: 새로운이메일앞부분 is not defined
    at <anonymous>:1:1
(anonymous) @ VM4531:1Understand this error
새로운이메일
'code****gmail.com'
const 새로운이메일 = 세로운이메일앞부분 
VM4751:1 Uncaught ReferenceError: 새로운이메일 is not defined
    at <anonymous>:1:1
(anonymous) @ VM4751:1Understand this error
새로운이메일
'code****@gmail.com'