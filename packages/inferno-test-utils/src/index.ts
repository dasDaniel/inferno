/**
 * @module Inferno-Test-Utils
 */ /** TypeDoc Comment */

import { VNode, Component } from "inferno";
import {
  isArray,
  isFunction,
  isObject,
  isString,
  throwError
} from "inferno-shared";
import {
  getTagNameOfVNode as _getTagNameOfVNode,
  isClassVNode as _isClassVNode,
  isComponentVNode as _isComponentVNode,
  isDOMVNode as _isDOMVNode,
  isFunctionalVNode as _isFunctionalVNode,
  isVNode as _isVNode,
  renderIntoDocument as _renderIntoDocument,
  Wrapper as _Wrapper
} from "./utils";
import {
  renderToSnapshot as _renderToSnapshot,
  vNodeToSnapshot as _vNodeToSnapshot
} from "./jest";
import any = jasmine.any;

// Type Checkers

export function isVNodeOfType(
  instance: VNode,
  type: string | Function
): boolean {
  return _isVNode(instance) && instance.type === type;
}

export function isDOMVNodeOfType(instance: VNode, type: string): boolean {
  return _isDOMVNode(instance) && instance.type === type;
}

export function isFunctionalVNodeOfType(
  instance: VNode,
  type: Function
): boolean {
  return _isFunctionalVNode(instance) && instance.type === type;
}

export function isClassVNodeOfType(instance: VNode, type: Function): boolean {
  return _isClassVNode(instance) && instance.type === type;
}

export function isComponentVNodeOfType(inst: VNode, type: Function): boolean {
  return (
    (_isFunctionalVNode(inst) || _isClassVNode(inst)) && inst.type === type
  );
}

export function isDOMElement(instance: any): boolean {
  return (
    Boolean(instance) &&
    isObject(instance) &&
    (instance as any).nodeType === 1 &&
    isString((instance as any).tagName)
  );
}

export function isDOMElementOfType(instance: any, type: string): boolean {
  return (
    isDOMElement(instance) &&
    isString(type) &&
    instance.tagName.toLowerCase() === type.toLowerCase()
  );
}

export function isRenderedClassComponent(instance: any): instance is Component<any, any> {
  return (
    Boolean(instance) &&
    isObject(instance) &&
    _isVNode((instance as any).$V) &&
    isFunction((instance as any).render) &&
    isFunction((instance as any).setState)
  );
}

export function isRenderedClassComponentOfType(
  instance: any,
  type: Function
): boolean {
  return (
    isRenderedClassComponent(instance) &&
    isFunction(type) &&
    instance.$V.type === type
  );
}

// Recursive Finder Functions

export function findAllInRenderedTree(
  renderedTree: any,
  predicate: (vNode: VNode) => boolean
): VNode[] | any {
  if (isRenderedClassComponent(renderedTree)) {
    return findAllInVNodeTree(renderedTree.$IV.v, predicate);
  } else {
    throwError(
      "findAllInRenderedTree(renderedTree, predicate) renderedTree must be a rendered class component"
    );
  }
}

export function findAllInVNodeTree(
  vNodeTree: VNode,
  predicate: (vNode: VNode) => boolean
): any {
  if (_isVNode(vNodeTree)) {
    let result: VNode[] = predicate(vNodeTree) ? [vNodeTree] : [];
    const children: any = vNodeTree.children;

    if (isRenderedClassComponent(children)) {
      result = result.concat(findAllInVNodeTree(
        children.$IV.v,
        predicate
      ) as VNode[]);
    } else if (_isVNode(children)) {
      result = result.concat(findAllInVNodeTree(
        children,
        predicate
      ) as VNode[]);
    } else if (isArray(children)) {
      children.forEach(child => {
        result = result.concat(findAllInVNodeTree(child, predicate) as VNode[]);
      });
    }
    return result;
  } else {
    throwError(
      "findAllInVNodeTree(vNodeTree, predicate) vNodeTree must be a VNode instance"
    );
  }
}

// Finder Helpers

function findOneOf(
  tree: any,
  filter: any,
  name: string,
  finder: Function
): any {
  const all = finder(tree, filter);
  if (all.length > 1) {
    throwError(
      `Did not find exactly one match (found ${all.length}) for ${name}: ${filter}`
    );
  } else {
    return all[0];
  }
}

// Scry Utilities

export function scryRenderedVNodesWithType(
  renderedTree: any,
  type: string | Function
): VNode[] {
  return findAllInRenderedTree(renderedTree, instance =>
    isVNodeOfType(instance, type)
  );
}

export function scryVNodesWithType(
  vNodeTree: VNode,
  type: Function
): VNode[] {
  return findAllInVNodeTree(vNodeTree, instance =>
    isVNodeOfType(instance, type)
  );
}

// Find Utilities

export function findRenderedVNodeWithType(
  renderedTree: any,
  type: string | Function
): VNode {
  return findOneOf(renderedTree, type, "component", scryRenderedVNodesWithType);
}

export function findVNodeWithType(
  vNodeTree: VNode,
  type: string | Function
): VNode {
  return findOneOf(vNodeTree, type, "VNode", scryVNodesWithType);
}

export const vNodeToSnapshot = _vNodeToSnapshot;
export const renderToSnapshot = _renderToSnapshot;
export const getTagNameOfVNode = _getTagNameOfVNode;
export const isClassVNode = _isClassVNode;
export const isComponentVNode = _isComponentVNode;
export const isDOMVNode = _isDOMVNode;
export const isFunctionalVNode = _isFunctionalVNode;
export const isVNode = _isVNode;
export const renderIntoDocument = _renderIntoDocument;
export const Wrapper = _Wrapper;

export default {
  Wrapper: _Wrapper,
  findAllInRenderedTree,
  findAllInVNodeTree,
  findRenderedVNodeWithType,
  findVNodeWithType,
  getTagNameOfVNode: _getTagNameOfVNode,
  isClassVNode: _isClassVNode,
  isClassVNodeOfType,
  isComponentVNode: _isComponentVNode,
  isComponentVNodeOfType,
  isDOMElement,
  isDOMElementOfType,
  isDOMVNode: _isDOMVNode,
  isDOMVNodeOfType,
  isFunctionalVNode: _isFunctionalVNode,
  isFunctionalVNodeOfType,
  isRenderedClassComponent,
  isRenderedClassComponentOfType,
  isVNode: _isVNode,
  isVNodeOfType,
  renderIntoDocument: _renderIntoDocument,
  renderToSnapshot: _renderToSnapshot,
  scryRenderedVNodesWithType,
  scryVNodesWithType,
  vNodeToSnapshot: _vNodeToSnapshot
};
