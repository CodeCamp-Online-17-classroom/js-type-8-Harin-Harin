# js-lab-17
Lab17 Dynamic Type: Challenge
a มีค่าเท่าไหร่และเพราะอะไร
หริณ มาเบ้า มิก

```JavaScript
let a = 1 * '4' + +null + +' ' - '5' * 2 + +(7 + 2 + '' + +!!undefined);
```

```shell
Result 1 * '4' =  4
Result +null =  0
Result +' ' =  0
Result '5' * 2 =  -10
Result 7 + 2 + '' +!!undefined =  90
Result a = 4 + 0 + 0 + -10 + 90 = 84
```
