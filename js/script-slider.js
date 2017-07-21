var slider = document.getElementById('range-slider');

noUiSlider.create(slider, {
	start: [100, 500],
	connect: true,
	step: 5,
	range: {
		'min': 0,
		'max': 690
	},
	
	format: {
	  to: function (value ) {
		return parseInt(value+0.1, 10) + ' руб' + '.' + ' ';
	  },
	  from: function (value ) {
		return value.replace(' руб' + '.' + ' ');
	  }
	}	
});

var snapValues = [
  document.getElementById('win1'),
  document.getElementById('win2')
];

slider.noUiSlider.on('update', function( values, handle ) {
  snapValues[handle].innerHTML = values[handle];
});