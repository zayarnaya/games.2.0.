declare module '*.module.css';
declare module '*.module.scss';
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg";
declare module "*.html" {
    const content: string;
    export default content;
}
