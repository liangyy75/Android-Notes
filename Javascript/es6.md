- [类型扩展](#类型扩展)
    - [数字扩展](#数字扩展)
    - [字符串扩展](#字符串扩展)
    - [模板字面量](#模板字面量)
    - [Unicode扩展](#unicode扩展)
    - [正则扩展](#正则扩展)
    - [函数扩展](#函数扩展)
    - [对象扩展](#对象扩展)
    - [Symbol类型](#symbol类型)
    - [Set和Map集合](#set和map集合)
    - [数组扩展](#数组扩展)
    - [定型数组](#定型数组)
- [功能扩展](#功能扩展)
    - [块级作用域](#块级作用域)
    - [解构赋值](#解构赋值)
    - [类](#类)
    - [代理(Proxy)和反射(Reflection)](#代理proxy和反射reflection)
    - [模块](#模块)

## 类型扩展

### 数字扩展

**【指数运算符】**

ES2016引入的唯一一个JS语法变化是求幂运算符，它是一种将指数应用于基数的数学运算。JS已有的Math.pow()方法可以执行求幂运算，但它也是为数不多的需要通过方法而不是正式的运算符来进行求幂
```js
let result = 5 ** 2;
console.log(result) // 25
console.log(result === Math.pow(5,2) ) // true
```

指数运算符可以与等号结合，形成一个新的赋值运算符（\*\*=）。[注意]在 V8 引擎中，指数运算符与Math.pow的实现不相同，对于特别大的运算结果，两者会有细微的差异。求幂运算符具有JS中所有二进制运算符的优先级(一元运算符的优先级高于**)，这意味着它首先应用于所有复合操作。取幂运算符确实有其他运算符没有的一些不寻常的限制，它左侧的一元表达式只能使用++或--。
```js
//可以包裹5**2
let result1 =-(5 ** 2) //-25
//也可以包裹-5
let result2 = (-5) ** 2 // 等于25
```

在求幕运算符左侧无须用括号就可以使用++和--，因为这两个运算符都明确定义了作用于操作数的行为。前缀++或--会在其他所有操作发生之前更改操作数，而后缀版本直到整个表达式被计算过后才会进行改变。这两个用法在运算付左侧都是安全的。

**【不同进制】**

ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。从 ES5 开始，在严格模式之中，八进制就不再允许使用前缀0表示，ES6 进一步明确，要使用前缀0o表示。如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法。
```js
Number('0b111')  // 7
Number('0o10')  // 8
```

**【Number方法】**

ES6 在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。与原有的isFinite()方法的不同之处在于，Number.isFinite()方法没有隐式的Number()类型转换，对于非数值一律返回false。ES5 可以通过下面的代码，部署Number.isFinite方法。
```js
(function (global) {
    var global_isFinite = global.isFinite;
    Object.defineProperty(Number, 'isFinite', {
        value: function isFinite(value) {
            return typeof value === 'number' && global_isFinite(value);
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
})(this);
```

Number.isNaN()用来检查一个值是否为NaN。与原有的isNaN()方法不同，不存在隐式的Number()类型转换，非NaN一律返回false。ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。

Number.isInteger()用来判断一个值是否为整数。需要注意的是，在JS内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。ES5 可以通过下面的代码，部署Number.isInteger()。
```js
(function (global) {
    var floor = Math.floor,
        isFinite = global.isFinite;
    Object.defineProperty(Number, 'isInteger', {
        value: function isInteger(value) {
            return typeof value === 'number' && isFinite(value) && floor(value) === value;
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
})(this);
```

**【Number常量】**

1. Number.EPSILON：ES6在Number对象上面，新增一个极小的常量Number.EPSILON。引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。但是如果这个误差能够小于Number.EPSILON，我们就可以认为得到了正确结果。
2. 安全整数：JS能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。ES6引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。实际使用这个函数时，需要注意验证运算结果是否落在安全整数的范围内，不要只验证运算结果，而要同时验证参与运算的每个值。

```js
Number.EPSILON  // 2.220446049250313e-16
Number.EPSILON.toFixed(20)  // '0.00000000000000022204'
function withinErrorMargin (left, right) { return Math.abs(left - right) < Number.EPSILON; }
withinErrorMargin(0.1 + 0.2, 0.3)  // true
withinErrorMargin(0.2 + 0.2, 0.3)  // false
```

**【Math对象】**

ES6在Math对象上新增了17个与数学相关的方法。所有这些方法都是静态方法，只能在Math对象上调用。

### 字符串扩展

### 模板字面量

### Unicode扩展

### 正则扩展

### 函数扩展

### 对象扩展

### Symbol类型

### Set和Map集合

### 数组扩展

### 定型数组

## 功能扩展

### 块级作用域

### 解构赋值

### 类

### 代理(Proxy)和反射(Reflection)

### 模块

