;(function($, window, document, undefined){

	var quantitySelector = function(ele, options){
		this.$ele = ele;
		this.defaultOpt = {
			value: 0,
			increase: function(value){},
			decrease: function(value){}
		};
		this.setting = $.extend({}, this.defaultOpt, options);
	}

	quantitySelector.prototype = {

		init: function(){
			this.$selectBox = $('<div class="number-select-box"></div>');
			this.$reduceBtn = $('<button class="select-btn remove"><span>-</span></button>');
			this.$addBtn = $('<button class="select-btn add"><span>+</span></button>');
			this.$num = $('<span class="number">'+this.setting.value+'</span></div>');
			
			this.$selectBox.append(this.$reduceBtn).append(this.$addBtn).append(this.$num);
			this.$ele.append(this.$selectBox);

			this.$reduceBtn.show();
			this.$addBtn.show();
		},

		add: function(){
			var that = this;
			var val = that.setting.value;
			that.$addBtn.off().on('click', function(){
				val = parseInt(that.$num.text());
				val = val +1;
				that.$num.text(val);
				that.setting.increase(val);
			})
		},

		reduce: function(){
			var that = this;
			var val = that.setting.value;
			that.$reduceBtn.off().on('click', function(){
				val = parseInt(that.$num.text());
				if(val <= 0) return
				val = val -1;
				that.$num.text(val);
				that.setting.decrease(val);
			})
		},

	}

	$.fn.quantitySelector = function(options){
		var quantitySelectorObj = new quantitySelector(this, options);
		quantitySelectorObj.init();
		quantitySelectorObj.add();
		quantitySelectorObj.reduce();
	}

})(jQuery, window, document)