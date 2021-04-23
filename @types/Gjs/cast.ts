import * as GObject from './GObject-2.0';

const inheritanceTable: { [key: string]: string[] } = {
    'Shell.App': [
    'GObject.Object',
],
    'Shell.AppSystem': [
    'GObject.Object',
],
    'Shell.AppUsage': [
    'GObject.Object',
],
    'Shell.BlurEffect': [
    'Clutter.Effect',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Shell.EmbeddedWindow': [
    'Gtk.Window',
    'Atk.ImplementorIface',
    'Gtk.Buildable',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Shell.GLSLEffect': [
    'Clutter.OffscreenEffect',
    'Clutter.Effect',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Shell.Global': [
    'GObject.Object',
],
    'Shell.GtkEmbed': [
    'Clutter.Clone',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Shell.InvertLightnessEffect': [
    'Clutter.OffscreenEffect',
    'Clutter.Effect',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Shell.KeyringPrompt': [
    'GObject.Object',
    'Gcr.Prompt',
],
    'Shell.MountOperation': [
    'Gio.MountOperation',
    'GObject.Object',
],
    'Shell.NetworkAgent': [
    'NM.SecretAgentOld',
    'Gio.AsyncInitable',
    'Gio.Initable',
    'GObject.Object',
],
    'Shell.PerfLog': [
    'GObject.Object',
],
    'Shell.PolkitAuthenticationAgent': [
    'PolkitAgent.Listener',
    'GObject.Object',
],
    'Shell.Screenshot': [
    'GObject.Object',
],
    'Shell.SecureTextBuffer': [
    'Clutter.TextBuffer',
    'GObject.Object',
],
    'Shell.SquareBin': [
    'St.Bin',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'St.Widget',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Shell.Stack': [
    'St.Widget',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Shell.TrayIcon': [
    'Shell.GtkEmbed',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'Clutter.Clone',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Shell.TrayManager': [
    'GObject.Object',
],
    'Shell.WM': [
    'GObject.Object',
],
    'Shell.WindowPreview': [
    'St.Widget',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Shell.WindowPreviewLayout': [
    'Clutter.LayoutManager',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Shell.WindowTracker': [
    'GObject.Object',
],
    'Gio.AppInfoMonitor': [
    'GObject.Object',
],
    'Gio.AppLaunchContext': [
    'GObject.Object',
],
    'Gio.Application': [
    'GObject.Object',
    'Gio.ActionGroup',
    'Gio.ActionMap',
],
    'Gio.ApplicationCommandLine': [
    'GObject.Object',
],
    'Gio.BufferedInputStream': [
    'Gio.FilterInputStream',
    'Gio.Seekable',
    'Gio.InputStream',
    'GObject.Object',
],
    'Gio.BufferedOutputStream': [
    'Gio.FilterOutputStream',
    'Gio.Seekable',
    'Gio.OutputStream',
    'GObject.Object',
],
    'Gio.BytesIcon': [
    'GObject.Object',
    'Gio.Icon',
    'Gio.LoadableIcon',
],
    'Gio.Cancellable': [
    'GObject.Object',
],
    'Gio.CharsetConverter': [
    'GObject.Object',
    'Gio.Converter',
    'Gio.Initable',
],
    'Gio.ConverterInputStream': [
    'Gio.FilterInputStream',
    'Gio.PollableInputStream',
    'Gio.InputStream',
    'GObject.Object',
],
    'Gio.ConverterOutputStream': [
    'Gio.FilterOutputStream',
    'Gio.PollableOutputStream',
    'Gio.OutputStream',
    'GObject.Object',
],
    'Gio.Credentials': [
    'GObject.Object',
],
    'Gio.DBusActionGroup': [
    'GObject.Object',
    'Gio.ActionGroup',
    'Gio.RemoteActionGroup',
],
    'Gio.DBusAuthObserver': [
    'GObject.Object',
],
    'Gio.DBusConnection': [
    'GObject.Object',
    'Gio.AsyncInitable',
    'Gio.Initable',
],
    'Gio.DBusInterfaceSkeleton': [
    'GObject.Object',
    'Gio.DBusInterface',
],
    'Gio.DBusMenuModel': [
    'Gio.MenuModel',
    'GObject.Object',
],
    'Gio.DBusMessage': [
    'GObject.Object',
],
    'Gio.DBusMethodInvocation': [
    'GObject.Object',
],
    'Gio.DBusObjectManagerClient': [
    'GObject.Object',
    'Gio.AsyncInitable',
    'Gio.DBusObjectManager',
    'Gio.Initable',
],
    'Gio.DBusObjectManagerServer': [
    'GObject.Object',
    'Gio.DBusObjectManager',
],
    'Gio.DBusObjectProxy': [
    'GObject.Object',
    'Gio.DBusObject',
],
    'Gio.DBusObjectSkeleton': [
    'GObject.Object',
    'Gio.DBusObject',
],
    'Gio.DBusProxy': [
    'GObject.Object',
    'Gio.AsyncInitable',
    'Gio.DBusInterface',
    'Gio.Initable',
],
    'Gio.DBusServer': [
    'GObject.Object',
    'Gio.Initable',
],
    'Gio.DataInputStream': [
    'Gio.BufferedInputStream',
    'Gio.Seekable',
    'Gio.FilterInputStream',
    'Gio.InputStream',
    'GObject.Object',
],
    'Gio.DataOutputStream': [
    'Gio.FilterOutputStream',
    'Gio.Seekable',
    'Gio.OutputStream',
    'GObject.Object',
],
    'Gio.DesktopAppInfo': [
    'GObject.Object',
    'Gio.AppInfo',
],
    'Gio.Emblem': [
    'GObject.Object',
    'Gio.Icon',
],
    'Gio.EmblemedIcon': [
    'GObject.Object',
    'Gio.Icon',
],
    'Gio.FileEnumerator': [
    'GObject.Object',
],
    'Gio.FileIOStream': [
    'Gio.IOStream',
    'Gio.Seekable',
    'GObject.Object',
],
    'Gio.FileIcon': [
    'GObject.Object',
    'Gio.Icon',
    'Gio.LoadableIcon',
],
    'Gio.FileInfo': [
    'GObject.Object',
],
    'Gio.FileInputStream': [
    'Gio.InputStream',
    'Gio.Seekable',
    'GObject.Object',
],
    'Gio.FileMonitor': [
    'GObject.Object',
],
    'Gio.FileOutputStream': [
    'Gio.OutputStream',
    'Gio.Seekable',
    'GObject.Object',
],
    'Gio.FilenameCompleter': [
    'GObject.Object',
],
    'Gio.FilterInputStream': [
    'Gio.InputStream',
    'GObject.Object',
],
    'Gio.FilterOutputStream': [
    'Gio.OutputStream',
    'GObject.Object',
],
    'Gio.IOModule': [
    'GObject.TypeModule',
    'GObject.TypePlugin',
    'GObject.Object',
],
    'Gio.IOStream': [
    'GObject.Object',
],
    'Gio.InetAddress': [
    'GObject.Object',
],
    'Gio.InetAddressMask': [
    'GObject.Object',
    'Gio.Initable',
],
    'Gio.InetSocketAddress': [
    'Gio.SocketAddress',
    'Gio.SocketConnectable',
    'GObject.Object',
],
    'Gio.InputStream': [
    'GObject.Object',
],
    'Gio.ListStore': [
    'GObject.Object',
    'Gio.ListModel',
],
    'Gio.MemoryInputStream': [
    'Gio.InputStream',
    'Gio.PollableInputStream',
    'Gio.Seekable',
    'GObject.Object',
],
    'Gio.MemoryOutputStream': [
    'Gio.OutputStream',
    'Gio.PollableOutputStream',
    'Gio.Seekable',
    'GObject.Object',
],
    'Gio.Menu': [
    'Gio.MenuModel',
    'GObject.Object',
],
    'Gio.MenuAttributeIter': [
    'GObject.Object',
],
    'Gio.MenuItem': [
    'GObject.Object',
],
    'Gio.MenuLinkIter': [
    'GObject.Object',
],
    'Gio.MenuModel': [
    'GObject.Object',
],
    'Gio.MountOperation': [
    'GObject.Object',
],
    'Gio.NativeSocketAddress': [
    'Gio.SocketAddress',
    'Gio.SocketConnectable',
    'GObject.Object',
],
    'Gio.NativeVolumeMonitor': [
    'Gio.VolumeMonitor',
    'GObject.Object',
],
    'Gio.NetworkAddress': [
    'GObject.Object',
    'Gio.SocketConnectable',
],
    'Gio.NetworkService': [
    'GObject.Object',
    'Gio.SocketConnectable',
],
    'Gio.Notification': [
    'GObject.Object',
],
    'Gio.OutputStream': [
    'GObject.Object',
],
    'Gio.Permission': [
    'GObject.Object',
],
    'Gio.PropertyAction': [
    'GObject.Object',
    'Gio.Action',
],
    'Gio.ProxyAddress': [
    'Gio.InetSocketAddress',
    'Gio.SocketConnectable',
    'Gio.SocketAddress',
    'GObject.Object',
],
    'Gio.ProxyAddressEnumerator': [
    'Gio.SocketAddressEnumerator',
    'GObject.Object',
],
    'Gio.Resolver': [
    'GObject.Object',
],
    'Gio.Settings': [
    'GObject.Object',
],
    'Gio.SettingsBackend': [
    'GObject.Object',
],
    'Gio.SimpleAction': [
    'GObject.Object',
    'Gio.Action',
],
    'Gio.SimpleActionGroup': [
    'GObject.Object',
    'Gio.ActionGroup',
    'Gio.ActionMap',
],
    'Gio.SimpleAsyncResult': [
    'GObject.Object',
    'Gio.AsyncResult',
],
    'Gio.SimpleIOStream': [
    'Gio.IOStream',
    'GObject.Object',
],
    'Gio.SimplePermission': [
    'Gio.Permission',
    'GObject.Object',
],
    'Gio.SimpleProxyResolver': [
    'GObject.Object',
    'Gio.ProxyResolver',
],
    'Gio.Socket': [
    'GObject.Object',
    'Gio.DatagramBased',
    'Gio.Initable',
],
    'Gio.SocketAddress': [
    'GObject.Object',
    'Gio.SocketConnectable',
],
    'Gio.SocketAddressEnumerator': [
    'GObject.Object',
],
    'Gio.SocketClient': [
    'GObject.Object',
],
    'Gio.SocketConnection': [
    'Gio.IOStream',
    'GObject.Object',
],
    'Gio.SocketControlMessage': [
    'GObject.Object',
],
    'Gio.SocketListener': [
    'GObject.Object',
],
    'Gio.SocketService': [
    'Gio.SocketListener',
    'GObject.Object',
],
    'Gio.Subprocess': [
    'GObject.Object',
    'Gio.Initable',
],
    'Gio.SubprocessLauncher': [
    'GObject.Object',
],
    'Gio.Task': [
    'GObject.Object',
    'Gio.AsyncResult',
],
    'Gio.TcpConnection': [
    'Gio.SocketConnection',
    'Gio.IOStream',
    'GObject.Object',
],
    'Gio.TcpWrapperConnection': [
    'Gio.TcpConnection',
    'Gio.SocketConnection',
    'Gio.IOStream',
    'GObject.Object',
],
    'Gio.TestDBus': [
    'GObject.Object',
],
    'Gio.ThemedIcon': [
    'GObject.Object',
    'Gio.Icon',
],
    'Gio.ThreadedSocketService': [
    'Gio.SocketService',
    'Gio.SocketListener',
    'GObject.Object',
],
    'Gio.TlsCertificate': [
    'GObject.Object',
],
    'Gio.TlsConnection': [
    'Gio.IOStream',
    'GObject.Object',
],
    'Gio.TlsDatabase': [
    'GObject.Object',
],
    'Gio.TlsInteraction': [
    'GObject.Object',
],
    'Gio.TlsPassword': [
    'GObject.Object',
],
    'Gio.UnixConnection': [
    'Gio.SocketConnection',
    'Gio.IOStream',
    'GObject.Object',
],
    'Gio.UnixCredentialsMessage': [
    'Gio.SocketControlMessage',
    'GObject.Object',
],
    'Gio.UnixFDList': [
    'GObject.Object',
],
    'Gio.UnixFDMessage': [
    'Gio.SocketControlMessage',
    'GObject.Object',
],
    'Gio.UnixInputStream': [
    'Gio.InputStream',
    'Gio.FileDescriptorBased',
    'Gio.PollableInputStream',
    'GObject.Object',
],
    'Gio.UnixMountMonitor': [
    'GObject.Object',
],
    'Gio.UnixOutputStream': [
    'Gio.OutputStream',
    'Gio.FileDescriptorBased',
    'Gio.PollableOutputStream',
    'GObject.Object',
],
    'Gio.UnixSocketAddress': [
    'Gio.SocketAddress',
    'Gio.SocketConnectable',
    'GObject.Object',
],
    'Gio.Vfs': [
    'GObject.Object',
],
    'Gio.VolumeMonitor': [
    'GObject.Object',
],
    'Gio.ZlibCompressor': [
    'GObject.Object',
    'Gio.Converter',
],
    'Gio.ZlibDecompressor': [
    'GObject.Object',
    'Gio.Converter',
],
    'Meta.Backend': [
    'GObject.Object',
    'Gio.Initable',
],
    'Meta.Background': [
    'GObject.Object',
],
    'Meta.BackgroundActor': [
    'Clutter.Actor',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Meta.BackgroundContent': [
    'GObject.Object',
    'Clutter.Content',
],
    'Meta.BackgroundGroup': [
    'Clutter.Actor',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Meta.BackgroundImage': [
    'GObject.Object',
],
    'Meta.BackgroundImageCache': [
    'GObject.Object',
],
    'Meta.Barrier': [
    'GObject.Object',
],
    'Meta.Compositor': [
    'GObject.Object',
],
    'Meta.CursorTracker': [
    'GObject.Object',
],
    'Meta.Display': [
    'GObject.Object',
],
    'Meta.Dnd': [
    'GObject.Object',
],
    'Meta.IdleMonitor': [
    'GObject.Object',
],
    'Meta.LaunchContext': [
    'Gio.AppLaunchContext',
    'GObject.Object',
],
    'Meta.MonitorManager': [
    'GObject.Object',
],
    'Meta.Plugin': [
    'GObject.Object',
],
    'Meta.RemoteAccessController': [
    'GObject.Object',
],
    'Meta.RemoteAccessHandle': [
    'GObject.Object',
],
    'Meta.Selection': [
    'GObject.Object',
],
    'Meta.SelectionSource': [
    'GObject.Object',
],
    'Meta.SelectionSourceMemory': [
    'Meta.SelectionSource',
    'GObject.Object',
],
    'Meta.ShadowFactory': [
    'GObject.Object',
],
    'Meta.ShapedTexture': [
    'GObject.Object',
    'Clutter.Content',
],
    'Meta.SoundPlayer': [
    'GObject.Object',
],
    'Meta.Stage': [
    'Clutter.Stage',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Meta.StartupNotification': [
    'GObject.Object',
],
    'Meta.StartupSequence': [
    'GObject.Object',
],
    'Meta.WaylandClient': [
    'GObject.Object',
],
    'Meta.Window': [
    'GObject.Object',
],
    'Meta.WindowActor': [
    'Clutter.Actor',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Meta.WindowGroup': [
    'Clutter.Actor',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Meta.Workspace': [
    'GObject.Object',
],
    'Meta.WorkspaceManager': [
    'GObject.Object',
],
    'Meta.X11Display': [
    'GObject.Object',
],
    'GObject.Binding': [
    'GObject.Object',
],
    'GObject.InitiallyUnowned': [
    'GObject.Object',
],
    'GObject.ParamSpecBoolean': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecBoxed': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecChar': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecDouble': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecEnum': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecFlags': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecFloat': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecGType': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecInt': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecInt64': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecLong': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecObject': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecOverride': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecParam': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecPointer': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecString': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecUChar': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecUInt': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecUInt64': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecULong': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecUnichar': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecValueArray': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecVariant': [
    'GObject.ParamSpec',
],
    'GObject.TypeModule': [
    'GObject.Object',
    'GObject.TypePlugin',
],
    'St.Adjustment': [
    'GObject.Object',
    'Clutter.Animatable',
],
    'St.Bin': [
    'St.Widget',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'St.BorderImage': [
    'GObject.Object',
],
    'St.BoxLayout': [
    'St.Viewport',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'St.Scrollable',
    'St.Widget',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'St.Button': [
    'St.Bin',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'St.Widget',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'St.Clipboard': [
    'GObject.Object',
],
    'St.DrawingArea': [
    'St.Widget',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'St.Entry': [
    'St.Widget',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'St.FocusManager': [
    'GObject.Object',
],
    'St.GenericAccessible': [
    'St.WidgetAccessible',
    'Atk.Action',
    'Atk.Component',
    'Atk.Value',
    'Cally.Actor',
    'Atk.GObjectAccessible',
    'Atk.Object',
    'GObject.Object',
],
    'St.Icon': [
    'St.Widget',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'St.ImageContent': [
    'Clutter.Image',
    'Clutter.Content',
    'Gio.Icon',
    'Gio.LoadableIcon',
    'GObject.Object',
],
    'St.Label': [
    'St.Widget',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'St.PasswordEntry': [
    'St.Entry',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'St.Widget',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'St.ScrollBar': [
    'St.Widget',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'St.ScrollView': [
    'St.Bin',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'St.Widget',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'St.ScrollViewFade': [
    'Clutter.ShaderEffect',
    'Clutter.OffscreenEffect',
    'Clutter.Effect',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'St.Settings': [
    'GObject.Object',
],
    'St.TextureCache': [
    'GObject.Object',
],
    'St.Theme': [
    'GObject.Object',
],
    'St.ThemeContext': [
    'GObject.Object',
],
    'St.ThemeNode': [
    'GObject.Object',
],
    'St.Viewport': [
    'St.Widget',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'St.Scrollable',
    'Clutter.Actor',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'St.Widget': [
    'Clutter.Actor',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'St.WidgetAccessible': [
    'Cally.Actor',
    'Atk.Action',
    'Atk.Component',
    'Atk.GObjectAccessible',
    'Atk.Object',
    'GObject.Object',
],
    'Gtk.ATContext': [
    'GObject.Object',
],
    'Gtk.AboutDialog': [
    'Gtk.Window',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.Root',
    'Gtk.ShortcutManager',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ActionBar': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ActivateAction': [
    'Gtk.ShortcutAction',
    'GObject.Object',
],
    'Gtk.Adjustment': [
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.AlternativeTrigger': [
    'Gtk.ShortcutTrigger',
    'GObject.Object',
],
    'Gtk.AnyFilter': [
    'Gtk.MultiFilter',
    'Gio.ListModel',
    'Gtk.Buildable',
    'Gtk.Filter',
    'GObject.Object',
],
    'Gtk.AppChooserButton': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.AppChooser',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.AppChooserDialog': [
    'Gtk.Dialog',
    'Gtk.Accessible',
    'Gtk.AppChooser',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.Root',
    'Gtk.ShortcutManager',
    'Gtk.Window',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.AppChooserWidget': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.AppChooser',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Application': [
    'Gio.Application',
    'Gio.ActionGroup',
    'Gio.ActionMap',
    'GObject.Object',
],
    'Gtk.ApplicationWindow': [
    'Gtk.Window',
    'Gio.ActionGroup',
    'Gio.ActionMap',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.Root',
    'Gtk.ShortcutManager',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.AspectFrame': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Assistant': [
    'Gtk.Window',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.Root',
    'Gtk.ShortcutManager',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.AssistantPage': [
    'GObject.Object',
],
    'Gtk.BinLayout': [
    'Gtk.LayoutManager',
    'GObject.Object',
],
    'Gtk.BookmarkList': [
    'GObject.Object',
    'Gio.ListModel',
],
    'Gtk.BoolFilter': [
    'Gtk.Filter',
    'GObject.Object',
],
    'Gtk.Box': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.BoxLayout': [
    'Gtk.LayoutManager',
    'Gtk.Orientable',
    'GObject.Object',
],
    'Gtk.Builder': [
    'GObject.Object',
],
    'Gtk.BuilderCScope': [
    'GObject.Object',
    'Gtk.BuilderScope',
],
    'Gtk.BuilderListItemFactory': [
    'Gtk.ListItemFactory',
    'GObject.Object',
],
    'Gtk.Button': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Actionable',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.CClosureExpression': [
    'Gtk.Expression',
],
    'Gtk.Calendar': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.CallbackAction': [
    'Gtk.ShortcutAction',
    'GObject.Object',
],
    'Gtk.CellArea': [
    'GObject.InitiallyUnowned',
    'Gtk.Buildable',
    'Gtk.CellLayout',
    'GObject.Object',
],
    'Gtk.CellAreaBox': [
    'Gtk.CellArea',
    'Gtk.Buildable',
    'Gtk.CellLayout',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.CellAreaContext': [
    'GObject.Object',
],
    'Gtk.CellRenderer': [
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.CellRendererAccel': [
    'Gtk.CellRendererText',
    'Gtk.CellRenderer',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.CellRendererCombo': [
    'Gtk.CellRendererText',
    'Gtk.CellRenderer',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.CellRendererPixbuf': [
    'Gtk.CellRenderer',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.CellRendererProgress': [
    'Gtk.CellRenderer',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.CellRendererSpin': [
    'Gtk.CellRendererText',
    'Gtk.CellRenderer',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.CellRendererSpinner': [
    'Gtk.CellRenderer',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.CellRendererText': [
    'Gtk.CellRenderer',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.CellRendererToggle': [
    'Gtk.CellRenderer',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.CellView': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.CellLayout',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.CenterBox': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.CenterLayout': [
    'Gtk.LayoutManager',
    'GObject.Object',
],
    'Gtk.CheckButton': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Actionable',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ClosureExpression': [
    'Gtk.Expression',
],
    'Gtk.ColorButton': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ColorChooser',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ColorChooserDialog': [
    'Gtk.Dialog',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ColorChooser',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.Root',
    'Gtk.ShortcutManager',
    'Gtk.Window',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ColorChooserWidget': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ColorChooser',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ColumnView': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Scrollable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ColumnViewColumn': [
    'GObject.Object',
],
    'Gtk.ComboBox': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.CellEditable',
    'Gtk.CellLayout',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ComboBoxText': [
    'Gtk.ComboBox',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.CellEditable',
    'Gtk.CellLayout',
    'Gtk.ConstraintTarget',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ConstantExpression': [
    'Gtk.Expression',
],
    'Gtk.Constraint': [
    'GObject.Object',
],
    'Gtk.ConstraintGuide': [
    'GObject.Object',
    'Gtk.ConstraintTarget',
],
    'Gtk.ConstraintLayout': [
    'Gtk.LayoutManager',
    'Gtk.Buildable',
    'GObject.Object',
],
    'Gtk.ConstraintLayoutChild': [
    'Gtk.LayoutChild',
    'GObject.Object',
],
    'Gtk.CssProvider': [
    'GObject.Object',
    'Gtk.StyleProvider',
],
    'Gtk.CustomFilter': [
    'Gtk.Filter',
    'GObject.Object',
],
    'Gtk.CustomLayout': [
    'Gtk.LayoutManager',
    'GObject.Object',
],
    'Gtk.CustomSorter': [
    'Gtk.Sorter',
    'GObject.Object',
],
    'Gtk.Dialog': [
    'Gtk.Window',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.Root',
    'Gtk.ShortcutManager',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.DirectoryList': [
    'GObject.Object',
    'Gio.ListModel',
],
    'Gtk.DragIcon': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.Root',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.DragSource': [
    'Gtk.GestureSingle',
    'Gtk.Gesture',
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.DrawingArea': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.DropControllerMotion': [
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.DropDown': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.DropTarget': [
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.DropTargetAsync': [
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.EditableLabel': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Editable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.EmojiChooser': [
    'Gtk.Popover',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.ShortcutManager',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Entry': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.CellEditable',
    'Gtk.ConstraintTarget',
    'Gtk.Editable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.EntryBuffer': [
    'GObject.Object',
],
    'Gtk.EntryCompletion': [
    'GObject.Object',
    'Gtk.Buildable',
    'Gtk.CellLayout',
],
    'Gtk.EventController': [
    'GObject.Object',
],
    'Gtk.EventControllerFocus': [
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.EventControllerKey': [
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.EventControllerLegacy': [
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.EventControllerMotion': [
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.EventControllerScroll': [
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.EveryFilter': [
    'Gtk.MultiFilter',
    'Gio.ListModel',
    'Gtk.Buildable',
    'Gtk.Filter',
    'GObject.Object',
],
    'Gtk.Expander': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.FileChooserDialog': [
    'Gtk.Dialog',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.FileChooser',
    'Gtk.Native',
    'Gtk.Root',
    'Gtk.ShortcutManager',
    'Gtk.Window',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.FileChooserNative': [
    'Gtk.NativeDialog',
    'Gtk.FileChooser',
    'GObject.Object',
],
    'Gtk.FileChooserWidget': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.FileChooser',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.FileFilter': [
    'Gtk.Filter',
    'Gtk.Buildable',
    'GObject.Object',
],
    'Gtk.Filter': [
    'GObject.Object',
],
    'Gtk.FilterListModel': [
    'GObject.Object',
    'Gio.ListModel',
],
    'Gtk.Fixed': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.FixedLayout': [
    'Gtk.LayoutManager',
    'GObject.Object',
],
    'Gtk.FixedLayoutChild': [
    'Gtk.LayoutChild',
    'GObject.Object',
],
    'Gtk.FlattenListModel': [
    'GObject.Object',
    'Gio.ListModel',
],
    'Gtk.FlowBox': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.FlowBoxChild': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.FontButton': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.FontChooser',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.FontChooserDialog': [
    'Gtk.Dialog',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.FontChooser',
    'Gtk.Native',
    'Gtk.Root',
    'Gtk.ShortcutManager',
    'Gtk.Window',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.FontChooserWidget': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.FontChooser',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Frame': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.GLArea': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Gesture': [
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.GestureClick': [
    'Gtk.GestureSingle',
    'Gtk.Gesture',
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.GestureDrag': [
    'Gtk.GestureSingle',
    'Gtk.Gesture',
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.GestureLongPress': [
    'Gtk.GestureSingle',
    'Gtk.Gesture',
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.GesturePan': [
    'Gtk.GestureDrag',
    'Gtk.GestureSingle',
    'Gtk.Gesture',
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.GestureRotate': [
    'Gtk.Gesture',
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.GestureSingle': [
    'Gtk.Gesture',
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.GestureStylus': [
    'Gtk.GestureSingle',
    'Gtk.Gesture',
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.GestureSwipe': [
    'Gtk.GestureSingle',
    'Gtk.Gesture',
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.GestureZoom': [
    'Gtk.Gesture',
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.Grid': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.GridLayout': [
    'Gtk.LayoutManager',
    'GObject.Object',
],
    'Gtk.GridLayoutChild': [
    'Gtk.LayoutChild',
    'GObject.Object',
],
    'Gtk.GridView': [
    'Gtk.ListBase',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'Gtk.Scrollable',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.HeaderBar': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.IMContext': [
    'GObject.Object',
],
    'Gtk.IMContextSimple': [
    'Gtk.IMContext',
    'GObject.Object',
],
    'Gtk.IMMulticontext': [
    'Gtk.IMContext',
    'GObject.Object',
],
    'Gtk.IconPaintable': [
    'GObject.Object',
    'Gdk.Paintable',
],
    'Gtk.IconTheme': [
    'GObject.Object',
],
    'Gtk.IconView': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.CellLayout',
    'Gtk.ConstraintTarget',
    'Gtk.Scrollable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Image': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.InfoBar': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.KeyvalTrigger': [
    'Gtk.ShortcutTrigger',
    'GObject.Object',
],
    'Gtk.Label': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.LayoutChild': [
    'GObject.Object',
],
    'Gtk.LayoutManager': [
    'GObject.Object',
],
    'Gtk.LevelBar': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.LinkButton': [
    'Gtk.Button',
    'Gtk.Accessible',
    'Gtk.Actionable',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ListBase': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'Gtk.Scrollable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ListBox': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ListBoxRow': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Actionable',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ListItem': [
    'GObject.Object',
],
    'Gtk.ListItemFactory': [
    'GObject.Object',
],
    'Gtk.ListStore': [
    'GObject.Object',
    'Gtk.Buildable',
    'Gtk.TreeDragDest',
    'Gtk.TreeDragSource',
    'Gtk.TreeModel',
    'Gtk.TreeSortable',
],
    'Gtk.ListView': [
    'Gtk.ListBase',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'Gtk.Scrollable',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.LockButton': [
    'Gtk.Button',
    'Gtk.Accessible',
    'Gtk.Actionable',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.MapListModel': [
    'GObject.Object',
    'Gio.ListModel',
],
    'Gtk.MediaControls': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.MediaFile': [
    'Gtk.MediaStream',
    'Gdk.Paintable',
    'GObject.Object',
],
    'Gtk.MediaStream': [
    'GObject.Object',
    'Gdk.Paintable',
],
    'Gtk.MenuButton': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.MessageDialog': [
    'Gtk.Dialog',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.Root',
    'Gtk.ShortcutManager',
    'Gtk.Window',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.MnemonicAction': [
    'Gtk.ShortcutAction',
    'GObject.Object',
],
    'Gtk.MnemonicTrigger': [
    'Gtk.ShortcutTrigger',
    'GObject.Object',
],
    'Gtk.MountOperation': [
    'Gio.MountOperation',
    'GObject.Object',
],
    'Gtk.MultiFilter': [
    'Gtk.Filter',
    'Gio.ListModel',
    'Gtk.Buildable',
    'GObject.Object',
],
    'Gtk.MultiSelection': [
    'GObject.Object',
    'Gio.ListModel',
    'Gtk.SelectionModel',
],
    'Gtk.MultiSorter': [
    'Gtk.Sorter',
    'Gio.ListModel',
    'Gtk.Buildable',
    'GObject.Object',
],
    'Gtk.NamedAction': [
    'Gtk.ShortcutAction',
    'GObject.Object',
],
    'Gtk.NativeDialog': [
    'GObject.Object',
],
    'Gtk.NeverTrigger': [
    'Gtk.ShortcutTrigger',
    'GObject.Object',
],
    'Gtk.NoSelection': [
    'GObject.Object',
    'Gio.ListModel',
    'Gtk.SelectionModel',
],
    'Gtk.Notebook': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.NotebookPage': [
    'GObject.Object',
],
    'Gtk.NothingAction': [
    'Gtk.ShortcutAction',
    'GObject.Object',
],
    'Gtk.NumericSorter': [
    'Gtk.Sorter',
    'GObject.Object',
],
    'Gtk.ObjectExpression': [
    'Gtk.Expression',
],
    'Gtk.Overlay': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.OverlayLayout': [
    'Gtk.LayoutManager',
    'GObject.Object',
],
    'Gtk.OverlayLayoutChild': [
    'Gtk.LayoutChild',
    'GObject.Object',
],
    'Gtk.PadController': [
    'Gtk.EventController',
    'GObject.Object',
],
    'Gtk.PageSetup': [
    'GObject.Object',
],
    'Gtk.PageSetupUnixDialog': [
    'Gtk.Dialog',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.Root',
    'Gtk.ShortcutManager',
    'Gtk.Window',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Paned': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ParamSpecExpression': [
    'GObject.ParamSpec',
],
    'Gtk.PasswordEntry': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Editable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Picture': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Popover': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.ShortcutManager',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.PopoverMenu': [
    'Gtk.Popover',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.ShortcutManager',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.PopoverMenuBar': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.PrintContext': [
    'GObject.Object',
],
    'Gtk.PrintJob': [
    'GObject.Object',
],
    'Gtk.PrintOperation': [
    'GObject.Object',
    'Gtk.PrintOperationPreview',
],
    'Gtk.PrintSettings': [
    'GObject.Object',
],
    'Gtk.PrintUnixDialog': [
    'Gtk.Dialog',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.Root',
    'Gtk.ShortcutManager',
    'Gtk.Window',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Printer': [
    'GObject.Object',
],
    'Gtk.ProgressBar': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.PropertyExpression': [
    'Gtk.Expression',
],
    'Gtk.Range': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.RecentManager': [
    'GObject.Object',
],
    'Gtk.Revealer': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Scale': [
    'Gtk.Range',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ScaleButton': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Scrollbar': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ScrolledWindow': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.SearchBar': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.SearchEntry': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Editable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.SelectionFilterModel': [
    'GObject.Object',
    'Gio.ListModel',
],
    'Gtk.Separator': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Settings': [
    'GObject.Object',
    'Gtk.StyleProvider',
],
    'Gtk.Shortcut': [
    'GObject.Object',
],
    'Gtk.ShortcutAction': [
    'GObject.Object',
],
    'Gtk.ShortcutController': [
    'Gtk.EventController',
    'Gio.ListModel',
    'Gtk.Buildable',
    'GObject.Object',
],
    'Gtk.ShortcutLabel': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ShortcutTrigger': [
    'GObject.Object',
],
    'Gtk.ShortcutsGroup': [
    'Gtk.Box',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ShortcutsSection': [
    'Gtk.Box',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ShortcutsShortcut': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ShortcutsWindow': [
    'Gtk.Window',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.Root',
    'Gtk.ShortcutManager',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.SignalAction': [
    'Gtk.ShortcutAction',
    'GObject.Object',
],
    'Gtk.SignalListItemFactory': [
    'Gtk.ListItemFactory',
    'GObject.Object',
],
    'Gtk.SingleSelection': [
    'GObject.Object',
    'Gio.ListModel',
    'Gtk.SelectionModel',
],
    'Gtk.SizeGroup': [
    'GObject.Object',
    'Gtk.Buildable',
],
    'Gtk.SliceListModel': [
    'GObject.Object',
    'Gio.ListModel',
],
    'Gtk.Snapshot': [
    'Gdk.Snapshot',
    'GObject.Object',
],
    'Gtk.SortListModel': [
    'GObject.Object',
    'Gio.ListModel',
],
    'Gtk.Sorter': [
    'GObject.Object',
],
    'Gtk.SpinButton': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.CellEditable',
    'Gtk.ConstraintTarget',
    'Gtk.Editable',
    'Gtk.Orientable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Spinner': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Stack': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.StackPage': [
    'GObject.Object',
    'Gtk.Accessible',
],
    'Gtk.StackSidebar': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.StackSwitcher': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Statusbar': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.StringFilter': [
    'Gtk.Filter',
    'GObject.Object',
],
    'Gtk.StringList': [
    'GObject.Object',
    'Gio.ListModel',
    'Gtk.Buildable',
],
    'Gtk.StringObject': [
    'GObject.Object',
],
    'Gtk.StringSorter': [
    'Gtk.Sorter',
    'GObject.Object',
],
    'Gtk.StyleContext': [
    'GObject.Object',
],
    'Gtk.Switch': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Actionable',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Text': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Editable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.TextBuffer': [
    'GObject.Object',
],
    'Gtk.TextChildAnchor': [
    'GObject.Object',
],
    'Gtk.TextMark': [
    'GObject.Object',
],
    'Gtk.TextTag': [
    'GObject.Object',
],
    'Gtk.TextTagTable': [
    'GObject.Object',
    'Gtk.Buildable',
],
    'Gtk.TextView': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Scrollable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.ToggleButton': [
    'Gtk.Button',
    'Gtk.Accessible',
    'Gtk.Actionable',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Tooltip': [
    'GObject.Object',
],
    'Gtk.TreeExpander': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.TreeListModel': [
    'GObject.Object',
    'Gio.ListModel',
],
    'Gtk.TreeListRow': [
    'GObject.Object',
],
    'Gtk.TreeListRowSorter': [
    'Gtk.Sorter',
    'GObject.Object',
],
    'Gtk.TreeModelFilter': [
    'GObject.Object',
    'Gtk.TreeDragSource',
    'Gtk.TreeModel',
],
    'Gtk.TreeModelSort': [
    'GObject.Object',
    'Gtk.TreeDragSource',
    'Gtk.TreeModel',
    'Gtk.TreeSortable',
],
    'Gtk.TreeSelection': [
    'GObject.Object',
],
    'Gtk.TreeStore': [
    'GObject.Object',
    'Gtk.Buildable',
    'Gtk.TreeDragDest',
    'Gtk.TreeDragSource',
    'Gtk.TreeModel',
    'Gtk.TreeSortable',
],
    'Gtk.TreeView': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Scrollable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.TreeViewColumn': [
    'GObject.InitiallyUnowned',
    'Gtk.Buildable',
    'Gtk.CellLayout',
    'GObject.Object',
],
    'Gtk.Video': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Viewport': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Scrollable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.VolumeButton': [
    'Gtk.ScaleButton',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Orientable',
    'Gtk.Widget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.Widget': [
    'GObject.InitiallyUnowned',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.Object',
],
    'Gtk.WidgetPaintable': [
    'GObject.Object',
    'Gdk.Paintable',
],
    'Gtk.Window': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'Gtk.Native',
    'Gtk.Root',
    'Gtk.ShortcutManager',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.WindowControls': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gtk.WindowGroup': [
    'GObject.Object',
],
    'Gtk.WindowHandle': [
    'Gtk.Widget',
    'Gtk.Accessible',
    'Gtk.Buildable',
    'Gtk.ConstraintTarget',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Gdk.AppLaunchContext': [
    'Gio.AppLaunchContext',
    'GObject.Object',
],
    'Gdk.ButtonEvent': [
    'Gdk.Event',
],
    'Gdk.CairoContext': [
    'Gdk.DrawContext',
    'GObject.Object',
],
    'Gdk.Clipboard': [
    'GObject.Object',
],
    'Gdk.ContentDeserializer': [
    'GObject.Object',
    'Gio.AsyncResult',
],
    'Gdk.ContentProvider': [
    'GObject.Object',
],
    'Gdk.ContentSerializer': [
    'GObject.Object',
    'Gio.AsyncResult',
],
    'Gdk.CrossingEvent': [
    'Gdk.Event',
],
    'Gdk.Cursor': [
    'GObject.Object',
],
    'Gdk.DNDEvent': [
    'Gdk.Event',
],
    'Gdk.DeleteEvent': [
    'Gdk.Event',
],
    'Gdk.Device': [
    'GObject.Object',
],
    'Gdk.DeviceTool': [
    'GObject.Object',
],
    'Gdk.Display': [
    'GObject.Object',
],
    'Gdk.DisplayManager': [
    'GObject.Object',
],
    'Gdk.Drag': [
    'GObject.Object',
],
    'Gdk.DrawContext': [
    'GObject.Object',
],
    'Gdk.Drop': [
    'GObject.Object',
],
    'Gdk.FocusEvent': [
    'Gdk.Event',
],
    'Gdk.FrameClock': [
    'GObject.Object',
],
    'Gdk.GLContext': [
    'Gdk.DrawContext',
    'GObject.Object',
],
    'Gdk.GLTexture': [
    'Gdk.Texture',
    'Gdk.Paintable',
    'GObject.Object',
],
    'Gdk.GrabBrokenEvent': [
    'Gdk.Event',
],
    'Gdk.KeyEvent': [
    'Gdk.Event',
],
    'Gdk.MemoryTexture': [
    'Gdk.Texture',
    'Gdk.Paintable',
    'GObject.Object',
],
    'Gdk.Monitor': [
    'GObject.Object',
],
    'Gdk.MotionEvent': [
    'Gdk.Event',
],
    'Gdk.PadEvent': [
    'Gdk.Event',
],
    'Gdk.ProximityEvent': [
    'Gdk.Event',
],
    'Gdk.ScrollEvent': [
    'Gdk.Event',
],
    'Gdk.Seat': [
    'GObject.Object',
],
    'Gdk.Snapshot': [
    'GObject.Object',
],
    'Gdk.Surface': [
    'GObject.Object',
],
    'Gdk.Texture': [
    'GObject.Object',
    'Gdk.Paintable',
],
    'Gdk.TouchEvent': [
    'Gdk.Event',
],
    'Gdk.TouchpadEvent': [
    'Gdk.Event',
],
    'Gdk.VulkanContext': [
    'Gdk.DrawContext',
    'Gio.Initable',
    'GObject.Object',
],
    'CoglPango.Renderer': [
    'Pango.Renderer',
    'GObject.Object',
],
    'Cogl.Bitmap': [
    'Cogl.Object',
],
    'Cogl.Context': [
    'Cogl.Object',
],
    'Cogl.FrameInfo': [
    'Cogl.Object',
],
    'Cogl.Framebuffer': [
    'GObject.Object',
],
    'Cogl.Offscreen': [
    'Cogl.Framebuffer',
    'GObject.Object',
],
    'Cogl.Onscreen': [
    'Cogl.Framebuffer',
    'GObject.Object',
],
    'Cogl.Pipeline': [
    'Cogl.Object',
],
    'Cogl.Texture2D': [
    'Cogl.Object',
    'Cogl.Texture',
],
    'Cogl.Texture2DSliced': [
    'Cogl.Object',
    'Cogl.Texture',
],
    'Clutter.Action': [
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.Actor': [
    'GObject.InitiallyUnowned',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'GObject.Object',
],
    'Clutter.ActorMeta': [
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.ActorNode': [
    'Clutter.PaintNode',
],
    'Clutter.AlignConstraint': [
    'Clutter.Constraint',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.Backend': [
    'GObject.Object',
],
    'Clutter.BinLayout': [
    'Clutter.LayoutManager',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.BindConstraint': [
    'Clutter.Constraint',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.BindingPool': [
    'GObject.Object',
],
    'Clutter.BlitNode': [
    'Clutter.PaintNode',
],
    'Clutter.BlurEffect': [
    'Clutter.OffscreenEffect',
    'Clutter.Effect',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.BlurNode': [
    'Clutter.LayerNode',
    'Clutter.PaintNode',
],
    'Clutter.BoxLayout': [
    'Clutter.LayoutManager',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.BrightnessContrastEffect': [
    'Clutter.OffscreenEffect',
    'Clutter.Effect',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.Canvas': [
    'GObject.Object',
    'Clutter.Content',
],
    'Clutter.ChildMeta': [
    'GObject.Object',
],
    'Clutter.ClickAction': [
    'Clutter.Action',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.ClipNode': [
    'Clutter.PaintNode',
],
    'Clutter.Clone': [
    'Clutter.Actor',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.ColorNode': [
    'Clutter.PipelineNode',
    'Clutter.PaintNode',
],
    'Clutter.ColorizeEffect': [
    'Clutter.OffscreenEffect',
    'Clutter.Effect',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.Constraint': [
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.DeformEffect': [
    'Clutter.OffscreenEffect',
    'Clutter.Effect',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.DesaturateEffect': [
    'Clutter.OffscreenEffect',
    'Clutter.Effect',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.Effect': [
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.FixedLayout': [
    'Clutter.LayoutManager',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.FlowLayout': [
    'Clutter.LayoutManager',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.FrameClock': [
    'GObject.Object',
],
    'Clutter.GestureAction': [
    'Clutter.Action',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.GridLayout': [
    'Clutter.LayoutManager',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.Image': [
    'GObject.Object',
    'Clutter.Content',
],
    'Clutter.InputDevice': [
    'GObject.Object',
],
    'Clutter.InputDeviceTool': [
    'GObject.Object',
],
    'Clutter.InputFocus': [
    'GObject.Object',
],
    'Clutter.InputMethod': [
    'GObject.Object',
],
    'Clutter.Interval': [
    'GObject.InitiallyUnowned',
    'Clutter.Scriptable',
    'GObject.Object',
],
    'Clutter.KeyframeTransition': [
    'Clutter.PropertyTransition',
    'Clutter.Scriptable',
    'Clutter.Transition',
    'Clutter.Timeline',
    'GObject.Object',
],
    'Clutter.Keymap': [
    'GObject.Object',
],
    'Clutter.LayerNode': [
    'Clutter.PaintNode',
],
    'Clutter.LayoutManager': [
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.LayoutMeta': [
    'Clutter.ChildMeta',
    'GObject.Object',
],
    'Clutter.OffscreenEffect': [
    'Clutter.Effect',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.PageTurnEffect': [
    'Clutter.DeformEffect',
    'Clutter.OffscreenEffect',
    'Clutter.Effect',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.PanAction': [
    'Clutter.GestureAction',
    'Clutter.Action',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.ParamSpecColor': [
    'GObject.ParamSpec',
],
    'Clutter.ParamSpecUnit': [
    'GObject.ParamSpec',
],
    'Clutter.Path': [
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.PathConstraint': [
    'Clutter.Constraint',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.PipelineNode': [
    'Clutter.PaintNode',
],
    'Clutter.PropertyTransition': [
    'Clutter.Transition',
    'Clutter.Scriptable',
    'Clutter.Timeline',
    'GObject.Object',
],
    'Clutter.RootNode': [
    'Clutter.PaintNode',
],
    'Clutter.RotateAction': [
    'Clutter.GestureAction',
    'Clutter.Action',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.Script': [
    'GObject.Object',
],
    'Clutter.ScrollActor': [
    'Clutter.Actor',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.Seat': [
    'GObject.Object',
],
    'Clutter.Settings': [
    'GObject.Object',
],
    'Clutter.ShaderEffect': [
    'Clutter.OffscreenEffect',
    'Clutter.Effect',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.SnapConstraint': [
    'Clutter.Constraint',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.Stage': [
    'Clutter.Actor',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.StageManager': [
    'GObject.Object',
],
    'Clutter.StageView': [
    'GObject.Object',
],
    'Clutter.SwipeAction': [
    'Clutter.GestureAction',
    'Clutter.Action',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.TapAction': [
    'Clutter.GestureAction',
    'Clutter.Action',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.Text': [
    'Clutter.Actor',
    'Atk.ImplementorIface',
    'Clutter.Animatable',
    'Clutter.Container',
    'Clutter.Scriptable',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Clutter.TextBuffer': [
    'GObject.Object',
],
    'Clutter.TextNode': [
    'Clutter.PaintNode',
],
    'Clutter.TextureNode': [
    'Clutter.PipelineNode',
    'Clutter.PaintNode',
],
    'Clutter.Timeline': [
    'GObject.Object',
    'Clutter.Scriptable',
],
    'Clutter.TransformNode': [
    'Clutter.PaintNode',
],
    'Clutter.Transition': [
    'Clutter.Timeline',
    'Clutter.Scriptable',
    'GObject.Object',
],
    'Clutter.TransitionGroup': [
    'Clutter.Transition',
    'Clutter.Scriptable',
    'Clutter.Timeline',
    'GObject.Object',
],
    'Clutter.VirtualInputDevice': [
    'GObject.Object',
],
    'Clutter.ZoomAction': [
    'Clutter.GestureAction',
    'Clutter.Action',
    'Clutter.ActorMeta',
    'GObject.InitiallyUnowned',
    'GObject.Object',
],
    'Cally.Actor': [
    'Atk.GObjectAccessible',
    'Atk.Action',
    'Atk.Component',
    'Atk.Object',
    'GObject.Object',
],
    'Cally.Clone': [
    'Cally.Actor',
    'Atk.Action',
    'Atk.Component',
    'Atk.GObjectAccessible',
    'Atk.Object',
    'GObject.Object',
],
    'Cally.Root': [
    'Atk.GObjectAccessible',
    'Atk.Object',
    'GObject.Object',
],
    'Cally.Stage': [
    'Cally.Actor',
    'Atk.Action',
    'Atk.Component',
    'Atk.Window',
    'Atk.GObjectAccessible',
    'Atk.Object',
    'GObject.Object',
],
    'Cally.Text': [
    'Cally.Actor',
    'Atk.Action',
    'Atk.Component',
    'Atk.EditableText',
    'Atk.Text',
    'Atk.GObjectAccessible',
    'Atk.Object',
    'GObject.Object',
],
    'Cally.Util': [
    'Atk.Util',
    'GObject.Object',
],
    'PolkitAgent.Listener': [
    'GObject.Object',
],
    'PolkitAgent.Session': [
    'GObject.Object',
],
    'PolkitAgent.TextListener': [
    'PolkitAgent.Listener',
    'Gio.Initable',
    'GObject.Object',
],
    'NM.AccessPoint': [
    'NM.Object',
    'GObject.Object',
],
    'NM.ActiveConnection': [
    'NM.Object',
    'GObject.Object',
],
    'NM.Checkpoint': [
    'NM.Object',
    'GObject.Object',
],
    'NM.Client': [
    'GObject.Object',
    'Gio.AsyncInitable',
    'Gio.Initable',
],
    'NM.Device': [
    'NM.Object',
    'GObject.Object',
],
    'NM.Device6Lowpan': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceAdsl': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceBond': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceBridge': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceBt': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceDummy': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceEthernet': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceGeneric': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceIPTunnel': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceInfiniband': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceMacsec': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceMacvlan': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceModem': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceOlpcMesh': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceOvsBridge': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceOvsInterface': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceOvsPort': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DevicePpp': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceTeam': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceTun': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceVeth': [
    'NM.DeviceEthernet',
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceVlan': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceVrf': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceVxlan': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceWifi': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceWifiP2P': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceWimax': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceWireGuard': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DeviceWpan': [
    'NM.Device',
    'NM.Object',
    'GObject.Object',
],
    'NM.DhcpConfig': [
    'NM.Object',
    'GObject.Object',
],
    'NM.IPConfig': [
    'NM.Object',
    'GObject.Object',
],
    'NM.Object': [
    'GObject.Object',
],
    'NM.RemoteConnection': [
    'NM.Object',
    'NM.Connection',
    'GObject.Object',
],
    'NM.SecretAgentOld': [
    'GObject.Object',
    'Gio.AsyncInitable',
    'Gio.Initable',
],
    'NM.Setting': [
    'GObject.Object',
],
    'NM.Setting6Lowpan': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.Setting8021x': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingAdsl': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingBluetooth': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingBond': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingBridge': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingBridgePort': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingCdma': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingConnection': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingDcb': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingDummy': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingEthtool': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingGeneric': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingGsm': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingHostname': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingIP4Config': [
    'NM.SettingIPConfig',
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingIP6Config': [
    'NM.SettingIPConfig',
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingIPConfig': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingIPTunnel': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingInfiniband': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingMacsec': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingMacvlan': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingMatch': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingOlpcMesh': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingOvsBridge': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingOvsDpdk': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingOvsExternalIDs': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingOvsInterface': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingOvsPatch': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingOvsPort': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingPpp': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingPppoe': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingProxy': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingSerial': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingSriov': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingTCConfig': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingTeam': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingTeamPort': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingTun': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingUser': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingVeth': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingVlan': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingVpn': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingVrf': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingVxlan': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingWifiP2P': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingWimax': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingWireGuard': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingWired': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingWireless': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingWirelessSecurity': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SettingWpan': [
    'NM.Setting',
    'GObject.Object',
],
    'NM.SimpleConnection': [
    'GObject.Object',
    'NM.Connection',
],
    'NM.VpnConnection': [
    'NM.ActiveConnection',
    'NM.Object',
    'GObject.Object',
],
    'NM.VpnPluginInfo': [
    'GObject.Object',
    'Gio.Initable',
],
    'NM.VpnPluginOld': [
    'GObject.Object',
    'Gio.Initable',
],
    'NM.VpnServicePlugin': [
    'GObject.Object',
    'Gio.Initable',
],
    'NM.WifiP2PPeer': [
    'NM.Object',
    'GObject.Object',
],
    'NM.WimaxNsp': [
    'NM.Object',
    'GObject.Object',
],
    'Gvc.ChannelMap': [
    'GObject.Object',
],
    'Gvc.MixerCard': [
    'GObject.Object',
],
    'Gvc.MixerControl': [
    'GObject.Object',
],
    'Gvc.MixerEventRole': [
    'Gvc.MixerStream',
    'GObject.Object',
],
    'Gvc.MixerSink': [
    'Gvc.MixerStream',
    'GObject.Object',
],
    'Gvc.MixerSinkInput': [
    'Gvc.MixerStream',
    'GObject.Object',
],
    'Gvc.MixerSource': [
    'Gvc.MixerStream',
    'GObject.Object',
],
    'Gvc.MixerSourceOutput': [
    'Gvc.MixerStream',
    'GObject.Object',
],
    'Gvc.MixerStream': [
    'GObject.Object',
],
    'Gvc.MixerUIDevice': [
    'GObject.Object',
],
    'Gcr.CertificateChain': [
    'GObject.Object',
],
    'Gcr.CertificateRequest': [
    'GObject.Object',
],
    'Gcr.FilterCollection': [
    'GObject.Object',
    'Gcr.Collection',
],
    'Gcr.Parser': [
    'GObject.Object',
],
    'Gcr.Pkcs11Certificate': [
    'Gck.Object',
    'Gcr.Certificate',
    'Gcr.Comparable',
    'GObject.Object',
],
    'Gcr.SecretExchange': [
    'GObject.Object',
],
    'Gcr.SimpleCertificate': [
    'GObject.Object',
    'Gcr.Certificate',
    'Gcr.Comparable',
],
    'Gcr.SimpleCollection': [
    'GObject.Object',
    'Gcr.Collection',
],
    'Gcr.SshAskpass': [
    'GObject.Object',
],
    'Gcr.SystemPrompt': [
    'GObject.Object',
    'Gcr.Prompt',
    'Gio.AsyncInitable',
    'Gio.Initable',
],
    'Gcr.SystemPrompter': [
    'GObject.Object',
],
    'Gcr.UnionCollection': [
    'GObject.Object',
    'Gcr.Collection',
],
    'Pango.Context': [
    'GObject.Object',
],
    'Pango.Coverage': [
    'GObject.Object',
],
    'Pango.Font': [
    'GObject.Object',
],
    'Pango.FontFace': [
    'GObject.Object',
],
    'Pango.FontFamily': [
    'GObject.Object',
],
    'Pango.FontMap': [
    'GObject.Object',
],
    'Pango.Fontset': [
    'GObject.Object',
],
    'Pango.FontsetSimple': [
    'Pango.Fontset',
    'GObject.Object',
],
    'Pango.Layout': [
    'GObject.Object',
],
    'Pango.Renderer': [
    'GObject.Object',
],
    'GdkPixbuf.Pixbuf': [
    'GObject.Object',
    'Gio.Icon',
    'Gio.LoadableIcon',
],
    'GdkPixbuf.PixbufAnimation': [
    'GObject.Object',
],
    'GdkPixbuf.PixbufAnimationIter': [
    'GObject.Object',
],
    'GdkPixbuf.PixbufLoader': [
    'GObject.Object',
],
    'GdkPixbuf.PixbufNonAnim': [
    'GdkPixbuf.PixbufAnimation',
    'GObject.Object',
],
    'GdkPixbuf.PixbufSimpleAnim': [
    'GdkPixbuf.PixbufAnimation',
    'GObject.Object',
],
    'GdkPixbuf.PixbufSimpleAnimIter': [
    'GdkPixbuf.PixbufAnimationIter',
    'GObject.Object',
],
    'Atk.GObjectAccessible': [
    'Atk.Object',
    'GObject.Object',
],
    'Atk.Hyperlink': [
    'GObject.Object',
    'Atk.Action',
],
    'Atk.Misc': [
    'GObject.Object',
],
    'Atk.NoOpObject': [
    'Atk.Object',
    'Atk.Action',
    'Atk.Component',
    'Atk.Document',
    'Atk.EditableText',
    'Atk.Hypertext',
    'Atk.Image',
    'Atk.Selection',
    'Atk.Table',
    'Atk.TableCell',
    'Atk.Text',
    'Atk.Value',
    'Atk.Window',
    'GObject.Object',
],
    'Atk.NoOpObjectFactory': [
    'Atk.ObjectFactory',
    'GObject.Object',
],
    'Atk.Object': [
    'GObject.Object',
],
    'Atk.ObjectFactory': [
    'GObject.Object',
],
    'Atk.Plug': [
    'Atk.Object',
    'Atk.Component',
    'GObject.Object',
],
    'Atk.Registry': [
    'GObject.Object',
],
    'Atk.Relation': [
    'GObject.Object',
],
    'Atk.RelationSet': [
    'GObject.Object',
],
    'Atk.Socket': [
    'Atk.Object',
    'Atk.Component',
    'GObject.Object',
],
    'Atk.StateSet': [
    'GObject.Object',
],
    'Atk.Util': [
    'GObject.Object',
],
    'Json.Builder': [
    'GObject.Object',
],
    'Json.Generator': [
    'GObject.Object',
],
    'Json.Parser': [
    'GObject.Object',
],
    'Json.Path': [
    'GObject.Object',
],
    'Json.Reader': [
    'GObject.Object',
],
    'Polkit.ActionDescription': [
    'GObject.Object',
],
    'Polkit.Authority': [
    'GObject.Object',
    'Gio.AsyncInitable',
    'Gio.Initable',
],
    'Polkit.AuthorizationResult': [
    'GObject.Object',
],
    'Polkit.Details': [
    'GObject.Object',
],
    'Polkit.Permission': [
    'Gio.Permission',
    'Gio.AsyncInitable',
    'Gio.Initable',
    'GObject.Object',
],
    'Polkit.SystemBusName': [
    'GObject.Object',
    'Polkit.Subject',
],
    'Polkit.TemporaryAuthorization': [
    'GObject.Object',
],
    'Polkit.UnixGroup': [
    'GObject.Object',
    'Polkit.Identity',
],
    'Polkit.UnixNetgroup': [
    'GObject.Object',
    'Polkit.Identity',
],
    'Polkit.UnixProcess': [
    'GObject.Object',
    'Polkit.Subject',
],
    'Polkit.UnixSession': [
    'GObject.Object',
    'Gio.AsyncInitable',
    'Gio.Initable',
    'Polkit.Subject',
],
    'Polkit.UnixUser': [
    'GObject.Object',
    'Polkit.Identity',
],
    'Gck.Enumerator': [
    'GObject.Object',
],
    'Gck.Module': [
    'GObject.Object',
],
    'Gck.Object': [
    'GObject.Object',
],
    'Gck.Password': [
    'Gio.TlsPassword',
    'GObject.Object',
],
    'Gck.Session': [
    'GObject.Object',
    'Gio.AsyncInitable',
    'Gio.Initable',
],
    'Gck.Slot': [
    'GObject.Object',
],
    'Gsk.BlendNode': [
    'Gsk.RenderNode',
],
    'Gsk.BlurNode': [
    'Gsk.RenderNode',
],
    'Gsk.BorderNode': [
    'Gsk.RenderNode',
],
    'Gsk.BroadwayRenderer': [
    'Gsk.Renderer',
    'GObject.Object',
],
    'Gsk.CairoNode': [
    'Gsk.RenderNode',
],
    'Gsk.CairoRenderer': [
    'Gsk.Renderer',
    'GObject.Object',
],
    'Gsk.ClipNode': [
    'Gsk.RenderNode',
],
    'Gsk.ColorMatrixNode': [
    'Gsk.RenderNode',
],
    'Gsk.ColorNode': [
    'Gsk.RenderNode',
],
    'Gsk.ConicGradientNode': [
    'Gsk.RenderNode',
],
    'Gsk.ContainerNode': [
    'Gsk.RenderNode',
],
    'Gsk.CrossFadeNode': [
    'Gsk.RenderNode',
],
    'Gsk.DebugNode': [
    'Gsk.RenderNode',
],
    'Gsk.GLRenderer': [
    'Gsk.Renderer',
    'GObject.Object',
],
    'Gsk.GLShader': [
    'GObject.Object',
],
    'Gsk.GLShaderNode': [
    'Gsk.RenderNode',
],
    'Gsk.InsetShadowNode': [
    'Gsk.RenderNode',
],
    'Gsk.LinearGradientNode': [
    'Gsk.RenderNode',
],
    'Gsk.NglRenderer': [
    'Gsk.Renderer',
    'GObject.Object',
],
    'Gsk.OpacityNode': [
    'Gsk.RenderNode',
],
    'Gsk.OutsetShadowNode': [
    'Gsk.RenderNode',
],
    'Gsk.RadialGradientNode': [
    'Gsk.RenderNode',
],
    'Gsk.Renderer': [
    'GObject.Object',
],
    'Gsk.RepeatNode': [
    'Gsk.RenderNode',
],
    'Gsk.RepeatingLinearGradientNode': [
    'Gsk.RenderNode',
],
    'Gsk.RepeatingRadialGradientNode': [
    'Gsk.RenderNode',
],
    'Gsk.RoundedClipNode': [
    'Gsk.RenderNode',
],
    'Gsk.ShadowNode': [
    'Gsk.RenderNode',
],
    'Gsk.TextNode': [
    'Gsk.RenderNode',
],
    'Gsk.TextureNode': [
    'Gsk.RenderNode',
],
    'Gsk.TransformNode': [
    'Gsk.RenderNode',
],
    'Gsk.VulkanRenderer': [
    'Gsk.Renderer',
    'GObject.Object',
],
}


interface StaticNamedClass<T> {
    new (...args: any[]): T
    name: string
}

/**
 * Casts between derived classes, performing a run-time type-check
 * and raising an exception if the cast fails. Allows casting to implemented
 * interfaces, too.
 */
export function giCast<T>(from_: GObject.Object, to_: StaticNamedClass<T>): T {
    const desc: string = from_.toString()
    let clsName: string|null = null
    for (const k of desc.split(" ")) {
        if (k.substring(0, 7) == "GIName:") {
            clsName = k.substring(7)
            break
        }
    }
    const toName = to_.name.replace("_", ".")

    if (toName === clsName)
        return ((from_ as any) as T)

    if (clsName) {
        const parents = inheritanceTable[clsName]
        if (parents) {
            if (parents.indexOf(toName) >= 0)
                return ((from_ as any) as T)
        }
    }

    throw Error("Invalid cast of " + desc + "(" + clsName + ") to " + toName)
}    
