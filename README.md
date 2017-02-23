##初始化
<ul>
    <li>value: 初始化数字，默认为0</li>
    <li>increase：增加按钮回调，参数为增加后的数字</li>
    <li>decrease：减少按钮回调，参数为减少后的数字</li>
</ul>


```javascript
$('#numBox').quantitySelector({
    value: 1,
	increase: function(value) {},
	decrease: function(value) {}
})
```
