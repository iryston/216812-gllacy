//index page---------------------------------------------------------------------------------------------------------------------------------------------------

if (document.getElementById("index-page")) 
{
// modal window
	var modalContent = document.querySelector(".modal-content"),
		modalWindow = document.querySelector(".modal-window"),
		feedbackBtn = document.querySelector(".feedback-btn"),
		modalClose = modalContent.querySelector(".modal-close"),
		nameInFocus = modalContent.querySelector("#name-in-focus");

	feedbackBtn.addEventListener("click", function(evt)
	{
		evt.preventDefault();
		modalContent.classList.add("modal-show");
		nameInFocus.focus();
	});

	modalClose.addEventListener("click", function()
	{
		modalContent.classList.remove("modal-show");
	});

	modalContent.addEventListener("click", function(event)
	{
		event.stopPropagation();
		modalContent.classList.remove("modal-show");
	});

	modalWindow.addEventListener("click", function(event)
	{
		event.stopPropagation();
	});
	

// interactive map
	function initMap() 
	{
		var LatLng = {lat: 59.93858424, lng: 30.32290441};
			
		var map = new google.maps.Map(document.getElementById("map"), 
		{
			zoom: 16,
			center: LatLng
		});
		
		var image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAACOCAYAAABg6Y4nAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4V2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTctMDYtMDNUMjI6Mzg6MjMrMDM6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNy0wNi0wM1QyMjo0MzowNCswMzowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTctMDYtMDNUMjI6NDM6MDQrMDM6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6Njk2ZTM2MjYtNDIwNS1hNTQ3LWI4NWQtZWMzNDZlNTUwZmRkPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjY5NmUzNjI2LTQyMDUtYTU0Ny1iODVkLWVjMzQ2ZTU1MGZkZDwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjY5NmUzNjI2LTQyMDUtYTU0Ny1iODVkLWVjMzQ2ZTU1MGZkZDwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6Njk2ZTM2MjYtNDIwNS1hNTQ3LWI4NWQtZWMzNDZlNTUwZmRkPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTA2LTAzVDIyOjQzOjA0KzAzOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjMwMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNDI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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";
		
		var marker = new google.maps.Marker
		({
			position: LatLng,
			map: map,
			icon: image
		});	
	}
}



//catalog page--------------------------------------------------------------------------------------------------------------------------------------------------

if (document.getElementById("catalog-page")) 
{
//ranger 
	var slider = document.getElementById("range-slider");

	noUiSlider.create(slider, 
	{
		start: [100, 500],
		connect: true,
		step: 5,
		range: 
		{
			"min": 0,
			"max": 690
		},
	
		format: 
		{
			to: function (value )
			{
				return parseInt(value+0.1, 10) + " руб" + "." + " ";
			},
			
			from: function (value )
			{
				return value.replace(" руб" + "." + " ");
			}
		}	
	});

	var snapValues = 
	[
		document.getElementById("win1"),
		document.getElementById("win2")
	];

	slider.noUiSlider.on("update", function( values, handle ) 
	{
		snapValues[handle].innerHTML = values[handle];
	});

	
//paginator
	var paginator = document.querySelector(".paginator"),
	prev = paginator.querySelector(".prev"),
	next = paginator.querySelector(".next"),
	$link = paginator.getElementsByTagName("a");

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
}