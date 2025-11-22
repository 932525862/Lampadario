/// <reference types="vite/client" />

// Allow importing image assets in TypeScript (e.g. `import img from './photo.jpg'`)
declare module '*.avif';
declare module '*.bmp';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.webp';
declare module '*.svg' {
	import type React from 'react';
	const src: string;
	export default src;
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
