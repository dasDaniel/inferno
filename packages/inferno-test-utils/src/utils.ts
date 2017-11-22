/**
 * @module Inferno-Test-Utils
 */ /** TypeDoc Comment */

import { Component, createVNode, render, VNode } from "inferno";
import VNodeFlags from "inferno-vnode-flags";
import {isInvalid, isNumber, isObject} from "inferno-shared";

export function isVNode(instance: any): instance is VNode {
  return (
    !isInvalid(instance) &&
    isObject(instance) &&
    isNumber((instance as any).flags)
  );
}

export function isFunctionalVNode(instance: VNode): boolean {
  return (
    isVNode(instance) && (instance.flags & VNodeFlags.ComponentFunction) > 0
  );
}

export function isClassVNode(instance: VNode): boolean {
  return (
    isVNode(instance) && (instance.flags & VNodeFlags.ComponentClass) > 0
  );
}

export function isComponentVNode(inst: VNode): boolean {
  return (
    isVNode(inst) && (inst.flags & VNodeFlags.Component) > 0
  );
}

export function getTagNameOfVNode(inst: any) {
  return (
    (inst && inst.dom && inst.dom.tagName.toLowerCase()) ||
    (inst && inst.$V && inst.$V.dom && inst.$V.dom.tagName.toLowerCase()) ||
    undefined
  );
}

export function isDOMVNode(inst: VNode): boolean {
  return !isComponentVNode(inst);
}

export class Wrapper extends Component<any, any> {
  public render() {
    return this.props.children;
  }

  public repaint() {
    return new Promise<void>(resolve => this.setState({}, resolve));
  }
}

export function renderIntoDocument(input): Wrapper {
  const wrappedInput = createVNode(
    VNodeFlags.ComponentClass,
    Wrapper,
    null,
    null,
    { children: input }
  );
  const parent = document.createElement("div");
  document.body.appendChild(parent);
  return render(wrappedInput, parent) as any;
}
