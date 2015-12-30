// -------版本2--------
/*
----	简单工厂模式，通过定义一个单独的创建对象的方法creatSomething.factory来解决这些问题，
	由子类实现这个方法来创建具体类型的对象。
*/
$(document).ready(function() {
	var creatSomething = {
		// 子类，添加鼠标进入事件
		whenMouseenter: function(hideOrShow, idName, targetID) {
			// 隐藏或出现，鼠标进入的元素，需要达到效果的元素
			var hideOrShow = hideOrShow;
			var idName = idName;
			var hs = undefined;
			// 根据传入的参数，设置目标元素的CSS，display
			if (hideOrShow == 'hide') {
				hs = 'none';
			} else {
				hs = 'block';
			}
			// 绑定事件
			$('#' + idName).bind("mouseenter",function() {
				$('#' + targetID).css("display", hs);
			})
		},
		// 子类，添加鼠标移出事件
		whenMouseleave: function(hideOrShow, idName, targetID) {
			// 隐藏或出现，鼠标进入的元素，需要达到效果的元素
			var hideOrShow = hideOrShow;
			var idName = idName;
			var hs = undefined;
			// 根据传入的参数，设置目标元素的CSS，display
			if (hideOrShow == 'hide') {
				hs = 'none';
			} else {
				hs = 'block';
			}
			// 绑定事件
			$('#' + idName).bind("mouseleave",function() {
				$('#' + targetID).css("display", 'none');
			})
		},
		// 根据changeType决定创建哪个对象
		factory: function(changeType, hideOrShow, idName, targetID) {
			return new Object(creatSomething[changeType](hideOrShow, idName, targetID));
		}
	};
	// test1,test2 是sidebar的
	var sidebarIn = creatSomething.factory('whenMouseenter', "show", 'moreInfo', 'sidebar');
	var sidebarOut = creatSomething.factory('whenMouseleave', "hide", 'sidebar', 'sidebar');
	// test3,test4,5,6是设置下拉菜单
	var settingIn = creatSomething.factory('whenMouseenter', "show", 'setting', 'menu_setting');
	var settingOut = creatSomething.factory('whenMouseleave', "hide", 'menu_setting', 'menu_setting');
	var menu_settingIn = creatSomething.factory('whenMouseenter', "show", 'menu_setting', 'menu_setting');
	var menu_settingOut = creatSomething.factory('whenMouseleave', "hide", 'setting', 'menu_setting');
});


// -------版本1--------
// $(document).ready(function() {
// 	/*
// 	      希望这算是个工厂模式吧，new一个对象，并传入为元素添加出现或消失（触发事件元素，出现或消失，
// 	  需要实现或消失的元素，什么事件触发），执行实例下的init方法。
// 	*/
// 	function hideOrShow(idName, doWhat, targetID, event_trigger) {
// 		var o = new Object();
// 		o.idSelet = "#" + idName;
// 		o.target = "#" + targetID;
// 		o.doWhat = doWhat;
// 		o.event_trigger = event_trigger;
// 		o.init = function() {
// 			bind(o.idSelet, o.doWhat, o.target, o.event_trigger);
// 		};
// 		return o;
// 	}

// 	function bind(idName, doWhat, targetID, event_trigger) {
// 		if (doWhat == 'hide') {
// 			$(idName).bind(event_trigger, function() {
// 				$(targetID).css("display", "none");
// 			});
// 		} else if (doWhat == 'show') {
// 			$(idName).bind(event_trigger, function() {
// 				$(targetID).css("display", "block");
// 			});
// 		} else {
// 			throw new Error('出错了');
// 		}
// 	};
// 	var test1 = new hideOrShow('moreInfo', 'show', 'sidebar', 'mouseenter');
// 	var test2 = new hideOrShow('sidebar', 'hide', 'sidebar', 'mouseleave');

// 	test1.init();
// 	test2.init();
// })

