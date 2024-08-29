const docs = [
	{
		title: '格式化秒数',
		content: `<pre><code>const formatSeconds = (s) => 
  [parseInt(s / 60 / 60), parseInt((s / 60) % 60), parseInt(s % 60)]
  .join(':')
  .replace(/\\b(\\d)\\b/g, '0$1')<code></pre>`
	},
	{
		title: '为什么是SVG而不是PNG',
		content: '在web开发中我们经常会有图片icon的处理需求，但是因为不同屏幕尺寸不一样，所以我们前端一般使用图片时都会使用2倍或者3倍尺寸png图，以便在更大尺寸的屏幕上，拥有更好的视觉体验，不会出现放大后的图片失真。PNG 图像适用于复杂的照片和图像，但对于包含大量线条和文本的图形，可能不太适合，因为它们在缩放时可能会失去清晰度。SVG 图像非常适合包含线条、文本和复杂形状的图形，因为它们可以无损缩放，而不会失去质量。 这使得SVG成为Webp图片展示更好的解决方案。'
	}
]

;(() => {
	const _supper_ = window._supper_ || {}
	_supper_.docs = docs
	window._supper_ = _supper_
})(window)
