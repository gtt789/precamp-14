180 / 60
3
179 / 60
2.9833333333333334
75 / 60
1.25
const Math.floor(172 / 60)
VM9028:1 Uncaught SyntaxError: Missing initializer in const declarationUnderstand this error
const 초 =172 
undefined
const 초 = 172 % 60
undefined
분
VM9169:1 Uncaught ReferenceError: 분 is not defined
    at <anonymous>:1:1
(anonymous) @ VM9169:1Understand this error
2
2
초
52
분 + ":" + 초
VM9224:1 Uncaught ReferenceError: 분 is not defined
    at <anonymous>:1:1
(anonymous) @ VM9224:1Understand this error
'2:52'
setInterval(functional(){
    
}, 1000)
VM9350:2 Uncaught SyntaxError: missing ) after argument listUnderstand this error
setInterval(functional(){
    const 분 = Math.floor(172 / 60)
    const 초 = 172 % 60
    console.log(분 + ":" + 초)
    시간 = 시간 - 1
}, 1000)