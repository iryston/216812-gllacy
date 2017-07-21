var paginator = document.querySelector(".paginator");
var prev = paginator.querySelector(".prev");
var next = paginator.querySelector(".next");
var $link = paginator.getElementsByTagName("a");

[].forEach.call($link, function(item, i) 
{

	$link[i].addEventListener("click", function(evt) 
    {
		if (this.classList.contains("paginator-current"))
			{
				evt.preventDefault();
				return false;
			}

		[].forEach.call($link, function(item, i) 
			{
				$link[i].classList.remove("paginator-current");
			});
  
		this.classList.add("paginator-current");
  
		if (this.classList.contains("first-page")) 
			{
				prev.classList.add("paginator-disabled");
				next.classList.remove("paginator-disabled");
			} 
		else if (this.classList.contains("last-page"))
			{
				prev.classList.remove("paginator-disabled");
				next.classList.add("paginator-disabled");
			}
		else 
			{
				prev.classList.remove("paginator-disabled");
				next.classList.remove("paginator-disabled");
			}

	});
});

prev.addEventListener("click", function ()
{
	var current = paginator.querySelector(".paginator-current");
	var prevSibl = current.previousElementSibling;
  
	if (current.classList.contains("first-page")) 
		{ 
			return false;    
		}
  
	next.classList.remove("paginator-disabled");
  
	[].forEach.call($link, function(item, i) 
		{
			item.classList.remove("paginator-current");
		});
  
	
	prevSibl.click();
	prevSibl.classList.add("paginator-current");
	
	if (prevSibl.classList.contains("first-page")) 
		{
			this.classList.add("paginator-disabled");
		} 
});


next.addEventListener("click", function ()
{
	var current = paginator.querySelector(".paginator-current");
	var nextSibl = current.nextElementSibling;
	
	if (current.classList.contains("last-page")) 
		{ 
			return false;    
		} 
  
	prev.classList.remove("paginator-disabled");
  
	[].forEach.call($link, function(item, i) 
		{
			item.classList.remove("paginator-current");
		});

	nextSibl.click();
	nextSibl.classList.add("paginator-current");
	
  	if (nextSibl.classList.contains("last-page")) 
		{
			this.classList.add("paginator-disabled");
		}

});
