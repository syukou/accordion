/**
 * Created by taguchimunetaka on 2015/11/17.
 */

var SYUKOU = SYUKOU || {};

SYUKOU.COMMON = {};

SYUKOU.COMMON.ACCORDION = function ($target) {
	this.$target = $target;
	this.init();
};

SYUKOU.COMMON.ACCORDION.prototype = {
	init: function () {
		this.setParameters();
		this.runEvent();
	},
	setParameters: function () {
		this.$trigger = this.$target.find('dt');
		this.$target = this.$target.find('dd');
	},
	runEvent: function () {
		var _self = this;
		this.$trigger.on('click', function () {
			if (_self.$target.is(':visible')) {
				$(this).removeClass('open');
				_self.$target.slideUp();
			} else {
				$(this).addClass('open');
				_self.$target.slideDown();
			}
		});
	}
};


$(function () {
	$('.jsc-accordion').each(function () {
		new SYUKOU.COMMON.ACCORDION($(this));
	});
});