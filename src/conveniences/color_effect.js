const { GLib, GObject, Gio, Clutter } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Preferences = new Prefs(Keys);

// new Clutter Shader Effect that simply mixes a color in, The class applies the GLSL shader programmed into
// vfunc_get_static_shader_source and applies it to an Actor
// 
// Clutter Shader Source Code https://github.com/GNOME/clutter/blob/master/clutter/clutter-shader-effect.c
// GJS Doc https://gjs-docs.gnome.org/clutter10~10_api/clutter.shadereffect

var ColorEffect = new GObject.registerClass({
  GTypeName: "Color_Effect",
  Properties: {
    'red' : GObject.ParamSpec.double(
      `red`,
      `red`,
      `Red value in shader`,
      GObject.ParamFlags.READWRITE,
      0.0,
      1.0,
      0.4,
    ),
    'green' : GObject.ParamSpec.double(
      `green`,
      `green`,
      `Green value in shader`,
      GObject.ParamFlags.READWRITE,
      0.0,
      1.0,
      0.4,
    ),
    'blue' : GObject.ParamSpec.double(
      `blue`,
      `blue`,
      `Blue value in shader`,
      GObject.ParamFlags.READWRITE,
      0.0,
      1.0,
      0.4,
    ),
    'blend' : GObject.ParamSpec.double(
      `blend`,
      `blend`,
      `Blend value in shader`,
      GObject.ParamFlags.READWRITE,
      0.0,
      1.0,
      0.4,
    ),
  }

}, class ColorShader extends Clutter.ShaderEffect {

  _init(params = {}) {


    super._init(params);

    this.set_shader_source(`

    uniform sampler2D tex;
  
    void main() {
      vec4 c = texture2D(tex, cogl_tex_coord_in[0].st);
      vec3 color = vec3(c.x,c.y,c.z);
  
      vec3 red = vec3(` + this.red + "," + this.green + "," + this.blue + `);
  
     cogl_color_out = vec4(mix(color, red,` + this.blend + `),1.0);
    }
  `);

  }

  get red() {

    if (this._red === undefined)
      this._red = null;

    return this._red;
  }

  set red(value) {

    if (this._red !== value) {
      this._red = value;

      this.notify('red');
    }
  }

  get green() {

    if (this._green === undefined)
      this._green = null;

    return this._green;
  }

  set green(value) {

    if (this._green !== value) {
      this._green = value;

      this.notify('green');
    }
  }

  get blue() {

    if (this._blue === undefined)
      this._blue = null;

    return this._blue;
  }

  set blue(value) {

    if (this._blue !== value) {
      this._blue = value;

      this.notify('blue');
    }
  }

  get blend() {

    if (this._blend === undefined)
      this._blend = null;

    return this._blend;
  }

  set blend(value) {

    if (this._blend !== value) {
      this._blend = value;

      this.notify('blend');
    }
  }


  vfunc_paint_target(paint_node = null, paint_context = null) {
    this.set_uniform_value("tex", 0);

    if (paint_node && paint_context)
      super.vfunc_paint_target(paint_node, paint_context);
    else if (paint_node) super.vfunc_paint_target(paint_node);
    else super.vfunc_paint_target();
  }
})
