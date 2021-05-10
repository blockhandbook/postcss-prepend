module.exports = (opts = {}) => {
	// checkOpts(opts)
	return {
	  postcssPlugin: 'postcss-prepend',
	  Once (root, { result }) {
		  console.log( root )
			  root.walkAtRules(atrule => {
				  console.log( atrule )
				  atrule.selectors = atrule.selectors.map( function (selector) {
					  if(/^([0-9]*[.])?[0-9]+\%$|^from$|^to$/.test(selector)) {
							  // This is part of a keyframe
							  return selector;
					  }

					  if (selector.startsWith(opts.selector.trim())) {
							  return selector;
					  }

					  return opts.selector + selector;
			  });
			  })
	  }
	}
  }
  module.exports.postcss = true
