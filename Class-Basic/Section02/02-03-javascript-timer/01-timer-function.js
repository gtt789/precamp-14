function 나의기능() {
    alert(기능이 실행됐어요!")
VM8506:2 Uncaught SyntaxError: missing ) after argument listUnderstand this error
}
VM8510:1 Uncaught SyntaxError: Unexpected token '}'Understand this error
나의기능()
VM8538:1 Uncaught ReferenceError: 나의기능 is not defined
    at <anonymous>:1:1
(anonymous) @ VM8538:1Understand this error
setTimeout(나의기능, 3000)
VM8646:1 Uncaught ReferenceError: 나의기능 is not defined
    at <anonymous>:1:12
(anonymous) @ VM8646:1Understand this error
15
setInterval(나의기능, 2000)
VM8782:2 Uncaught ReferenceError: 나의기능 is not defined
    at <anonymous>:2:13
(anonymous) @ VM8782:2Understand this error
17
clearInterval(17)
[Violation] 

VM8898:3 Uncaught ReferenceError: Violation is not defined
    at <anonymous>:3:2
(anonymous) @ VM8898:3Understand this error