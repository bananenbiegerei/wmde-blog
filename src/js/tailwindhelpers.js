import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig, { theme } from './../../tailwind.config';

export const fullConfig = resolveConfig(tailwindConfig);

export const getBreakpointValue = (bpName) => {
	if (bpName == '' || typeof bpName == 'undefined') {
		return 0;
	} else {
		let bpValue = fullConfig.theme.screens[bpName];
		bpValue = bpValue.slice(0, bpValue.indexOf('px'));
		return parseInt(bpValue);
	}
};

export const getCurrentBreakpoint = (width) => {
	let currentBreakpoint = '';
	let biggestBreakpointValue = 0;

	for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
		const breakpointValue = getBreakpointValue(breakpoint);
		if (breakpointValue > biggestBreakpointValue && window.innerWidth >= breakpointValue) {
			biggestBreakpointValue = breakpointValue;
			currentBreakpoint = breakpoint;
		}
	}

	return currentBreakpoint;
};

export const isMinBreakpoint = (width, bpName) => {
	return width >= getBreakpointValue(bpName);
};
