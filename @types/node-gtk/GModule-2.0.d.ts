/**
 * GModule-2.0
 */

/// <reference types="node" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />

declare namespace GModule {

export enum ModuleFlags {
    LAZY,
    LOCAL,
    MASK,
}
export function moduleBuildPath(directory: string | null, moduleName: string): string
export function moduleError(): string
export function moduleSupported(): boolean
export interface ModuleCheckInit {
    (module: Module): string
}
export interface ModuleUnload {
    (module: Module): void
}
export class Module {
    /* Methods of GModule.Module */
    close(): boolean
    makeResident(): void
    name(): string
    symbol(symbolName: string): [ /* returnType */ boolean, /* symbol */ object | null ]
    static name: string
    /* Static methods and pseudo-constructors */
    static buildPath(directory: string | null, moduleName: string): string
    static error(): string
    static supported(): boolean
}
}