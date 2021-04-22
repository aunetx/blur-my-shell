import * as Gjs from "./Gjs";
import * as Shell01 from "./Shell-0.1";
import * as GLib20 from "./GLib-2.0";
import * as Gio20 from "./Gio-2.0";
import * as Meta8 from "./Meta-8";
import * as GObject20 from "./GObject-2.0";
import * as St10 from "./St-1.0";
import * as Gtk40 from "./Gtk-4.0";
import * as Xlib20 from "./xlib-2.0";
import * as Xfixes40 from "./xfixes-4.0";
import * as Gdk40 from "./Gdk-4.0";
import * as GDesktopEnums30 from "./GDesktopEnums-3.0";
import * as CoglPango8 from "./CoglPango-8";
import * as Cogl8 from "./Cogl-8";
import * as Clutter8 from "./Clutter-8";
import * as Cally8 from "./Cally-8";
import * as PolkitAgent10 from "./PolkitAgent-1.0";
import * as NM10 from "./NM-1.0";
import * as Gvc10 from "./Gvc-1.0";
import * as Gcr3 from "./Gcr-3";
import * as ClutterX118 from "./ClutterX11-8";
import * as Cairo10 from "./cairo-1.0";
import * as Pango10 from "./Pango-1.0";
import * as GdkPixbuf20 from "./GdkPixbuf-2.0";
import * as Atk10 from "./Atk-1.0";
import * as PangoCairo10 from "./PangoCairo-1.0";
import * as Graphene10 from "./Graphene-1.0";
import * as GL10 from "./GL-1.0";
import * as Json10 from "./Json-1.0";
import * as Polkit10 from "./Polkit-1.0";
import * as Gck1 from "./Gck-1";
import * as HarfBuzz00 from "./HarfBuzz-0.0";
import * as GModule20 from "./GModule-2.0";
import * as Gsk40 from "./Gsk-4.0";


declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]
    const imports: typeof Gjs & {
        [key: string]: any
        gi: {
          Shell: typeof Shell01
          GLib: typeof GLib20
          Gio: typeof Gio20
          Meta: typeof Meta8
          GObject: typeof GObject20
          St: typeof St10
          Gtk: typeof Gtk40
          xlib: typeof Xlib20
          xfixes: typeof Xfixes40
          Gdk: typeof Gdk40
          GDesktopEnums: typeof GDesktopEnums30
          CoglPango: typeof CoglPango8
          Cogl: typeof Cogl8
          Clutter: typeof Clutter8
          Cally: typeof Cally8
          PolkitAgent: typeof PolkitAgent10
          NM: typeof NM10
          Gvc: typeof Gvc10
          Gcr: typeof Gcr3
          ClutterX11: typeof ClutterX118
          cairo: typeof Cairo10
          Pango: typeof Pango10
          GdkPixbuf: typeof GdkPixbuf20
          Atk: typeof Atk10
          PangoCairo: typeof PangoCairo10
          Graphene: typeof Graphene10
          GL: typeof GL10
          Json: typeof Json10
          Polkit: typeof Polkit10
          Gck: typeof Gck1
          HarfBuzz: typeof HarfBuzz00
          GModule: typeof GModule20
          Gsk: typeof Gsk40
        }
        versions: {
            Shell: string
            GLib: string
            Gio: string
            Meta: string
            GObject: string
            St: string
            Gtk: string
            xlib: string
            xfixes: string
            Gdk: string
            GDesktopEnums: string
            CoglPango: string
            Cogl: string
            Clutter: string
            Cally: string
            PolkitAgent: string
            NM: string
            Gvc: string
            Gcr: string
            ClutterX11: string
            cairo: string
            Pango: string
            GdkPixbuf: string
            Atk: string
            PangoCairo: string
            Graphene: string
            GL: string
            Json: string
            Polkit: string
            Gck: string
            HarfBuzz: string
            GModule: string
            Gsk: string
        }
        searchPath: string[];
    }
}

export { imports }
