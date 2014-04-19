cpSmoothAnchorScroll
====================

jQuery Plugin for smooth anchor scrolling.


Basic usage
-----

Create anchor-links:

	<a href="#firstTarget" class=".smoothScroll">Click to scroll to first target</a>
	<a href="#secondTarget" class=".smoothScroll">Click to scroll to second target</a>
	

Create target elements where you want scroll to:
	
	<div id="firstTarget" style="height: 300px; background-color: #FFFF00"></div>
	<div id="secondTarget" style="height: 300px; background-color: #269ABC"></div>

	
Include jQuery and cpSmoothAnchorScroll.js or cpSmoothAnchorScroll-min.js in your project:

	<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
	<script type="text/javascript" src="cpSmoothAnchorScroll-min.js"></script>

	<script type="text/javascript">
		$('.smoothScroll').cpSmoothAnchorScroll();
	</script>


When scrolling is finished an event "scrollingFinished" is fired. 


You find this example in examples/index.html



Options
-----

<table style="width: 100%; border: 1px solid #000000; margin-bottom: 25px;" border="1" cellspacing="0" cellpadding="3">
<tbody>
<tr>
<th style="width: 200px; background-color: #6690bc;" align="center" valign="middle"><span style="color: #ffffff;">Option</span></th>
<th style="background-color: #6690bc;" align="center" valign="middle"><span style="color: #ffffff;">Explanation</span></th>
<th style="background-color: #6690bc;" align="center" valign="middle"><span style="color: #ffffff;">Default</span></th>
</tr>
<tr>
<td style="text-align: right; padding-right: 10px;"><em>offset</em></td>
<td style="padding-left: 10px;">An integer to offset the position by a number of pixels. Positive or negative values are allowed</td>
<td style="padding-left: 10px;">0</td>
</tr>
<tr>
<td style="text-align: right; padding-right: 10px;"><em>duration</em></td>
<td style="padding-left: 10px;">A string or number determining how long the animation will run.</td>
<td style="padding-left: 10px;">400</td>
</tr>
<tr>
<td style="text-align: right; padding-right: 10px;"><em>easing</em></td>
<td style="padding-left: 10px;">A string indicating which easing function to use for the transition.</td>
<td style="padding-left: 10px;">'swing'</td>
</tr>
</tbody>
</table>


Usage with options
-----

	<script type="text/javascript">
		$('.smoothScroll').cpSmoothAnchorScroll({
			offset: -20,
			duration: 'fast',
			easing: 'linear'
		});
	</script>

If you include jQuery UI you can use all jQuery UI easing features.

