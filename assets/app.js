import './bootstrap.js';
import './styles/output.css';
import { registerReactControllerComponents } from '@symfony/ux-react';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));
registerReactControllerComponents();