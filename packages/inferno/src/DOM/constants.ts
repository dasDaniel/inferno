export const xlinkNS = 'http://www.w3.org/1999/xlink';
export const xmlNS = 'http://www.w3.org/XML/1998/namespace';
export const svgNS = 'http://www.w3.org/2000/svg';
const TRUE = true;

export const strictProps = Object.create(null);
strictProps.volume = TRUE;
strictProps.defaultChecked = TRUE;
Object.freeze(strictProps);

export const booleanProps = Object.create(null);
booleanProps.muted= TRUE;
booleanProps.scoped= TRUE;
booleanProps.loop= TRUE;
booleanProps.open= TRUE;
booleanProps.checked= TRUE;
booleanProps.default= TRUE;
booleanProps.capture= TRUE;
booleanProps.disabled= TRUE;
booleanProps.readOnly= TRUE;
booleanProps.required= TRUE;
booleanProps.autoplay= TRUE;
booleanProps.controls= TRUE;
booleanProps.seamless= TRUE;
booleanProps.reversed= TRUE;
booleanProps.allowfullscreen= TRUE;
booleanProps.novalidate= TRUE;
booleanProps.hidden= TRUE;
Object.freeze(booleanProps);

export const namespaces = Object.create(null);
namespaces['xlink:href'] = xlinkNS;
namespaces['xlink:arcrole'] = xlinkNS;
namespaces['xlink:actuate'] = xlinkNS;
namespaces['xlink:show'] = xlinkNS;
namespaces['xlink:role'] = xlinkNS;
namespaces['xlink:title'] = xlinkNS;
namespaces['xlink:type'] = xlinkNS;
namespaces['xml:base'] = xmlNS;
namespaces['xml:lang'] = xmlNS;
namespaces['xml:space'] = xmlNS;
Object.freeze(namespaces);

export const isUnitlessNumber = Object.create(null);
isUnitlessNumber.animationIterationCount= TRUE;
isUnitlessNumber.borderImageOutset= TRUE;
isUnitlessNumber.borderImageSlice= TRUE;
isUnitlessNumber.borderImageWidth= TRUE;
isUnitlessNumber.boxFlex= TRUE;
isUnitlessNumber.boxFlexGroup= TRUE;
isUnitlessNumber.boxOrdinalGroup= TRUE;
isUnitlessNumber.columnCount= TRUE;
isUnitlessNumber.flex= TRUE;
isUnitlessNumber.flexGrow= TRUE;
isUnitlessNumber.flexPositive= TRUE;
isUnitlessNumber.flexShrink= TRUE;
isUnitlessNumber.flexNegative= TRUE;
isUnitlessNumber.flexOrder= TRUE;
isUnitlessNumber.gridRow= TRUE;
isUnitlessNumber.gridColumn= TRUE;
isUnitlessNumber.fontWeight= TRUE;
isUnitlessNumber.lineClamp= TRUE;
isUnitlessNumber.lineHeight= TRUE;
isUnitlessNumber.opacity= TRUE;
isUnitlessNumber.order= TRUE;
isUnitlessNumber.orphans= TRUE;
isUnitlessNumber.tabSize= TRUE;
isUnitlessNumber.widows= TRUE;
isUnitlessNumber.zIndex= TRUE;
isUnitlessNumber.zoom= TRUE;
isUnitlessNumber.fillOpacity= TRUE;
isUnitlessNumber.floodOpacity= TRUE;
isUnitlessNumber.stopOpacity= TRUE;
isUnitlessNumber.strokeDasharray= TRUE;
isUnitlessNumber.strokeDashoffset= TRUE;
isUnitlessNumber.strokeMiterlimit= TRUE;
isUnitlessNumber.strokeOpacity= TRUE;
isUnitlessNumber.strokeWidth= TRUE;
Object.freeze(isUnitlessNumber);

export const skipProps = Object.create(null);
skipProps.children= TRUE;
skipProps.childrenType= TRUE;
skipProps.defaultValue= TRUE;
skipProps.ref= TRUE;
skipProps.key= TRUE;
skipProps.selected= TRUE;
skipProps.checked= TRUE;
skipProps.multiple= TRUE;
Object.freeze(skipProps);

export const delegatedProps = Object.create(null);
delegatedProps.onClick= TRUE;
delegatedProps.onMouseDown= TRUE;
delegatedProps.onMouseUp= TRUE;
delegatedProps.onMouseMove= TRUE;
delegatedProps.onSubmit= TRUE;
delegatedProps.onDblClick= TRUE;
delegatedProps.onKeyDown= TRUE;
delegatedProps.onKeyUp= TRUE;
delegatedProps.onKeyPress= TRUE;
Object.freeze(delegatedProps);
