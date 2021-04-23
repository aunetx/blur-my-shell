/**
 * GModule-2.0
 */

import * as Gjs from './Gjs';
import * as GLib from './GLib-2.0';
import * as GObject from './GObject-2.0';

export enum ModuleFlags {
    LAZY,
    LOCAL,
    MASK,
}
export function module_build_path(directory: string | null, module_name: string): string
export function module_error(): string
export function module_supported(): boolean
export interface ModuleCheckInit {
    (module: Module): string
}
export interface ModuleUnload {
    (module: Module): void
}
export class Module {
    /* Methods of GModule.Module */
    close(): boolean
    make_resident(): void
    name(): string
    symbol(symbol_name: string): [ /* returnType */ boolean, /* symbol */ object | null ]
    static name: string
    /* Static methods and pseudo-constructors */
    static build_path(directory: string | null, module_name: string): string
    static error(): string
    static supported(): boolean
}