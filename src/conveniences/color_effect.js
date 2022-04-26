const { GLib, GObject, Gio, Clutter } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Preferences = new Prefs(Keys);




function get_new_color_effect(red,green,blue) {

  const color_effect = new Clutter.ShaderEffect();

  color_effect.set_shader_source( `

  uniform sampler2D tex;


  void main() {
    vec4 c = texture2D(tex, cogl_tex_coord_in[0].st);
    vec3 image = vec3(c.x,c.y,c.z);

    vec3 mixing_color = vec3(`+ red  + "," + green + "," + blue + `);

    cogl_color_out = vec4(mix(image, mixing_color,0.4),1.0);
  }
`);


  return color_effect;

}



const example = GObject.registerClass({
  GTypeName: 'ColorEffect',
}, class TestEffect extends Clutter.ShaderEffect {

  _init(params = {}) {


    super._init(params);

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


/*  vfunc_get_static_shader_source() {

    
    log(this.red + " abcfd")
    log(this.green + " abcfd")
    log(this.blue + " abcfd")
    log("abcdf")

    return `

    uniform sampler2D tex;


    // RGB to HSV functions taken from https://gist.github.com/983/e170a24ae8eba2cd174f

    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
      vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }

    vec3 hsv2rgb(vec3 c)
    {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    void main() {
      vec4 c = texture2D(tex, cogl_tex_coord_in[0].st);
      vec3 color = rgb2hsv(vec3(c.x,c.y,c.z));

      // Saturate Image
      color.y = color.y;

      vec3 red = vec3(`+ this.red  + "," + this.green + "," + this.blue`);

     cogl_color_out = vec4(mix(hsv2rgb(color), red,0.4),1.0);
    }
  `;

  
  } */

  vfunc_paint_target(paint_node = null, paint_context = null) {
    this.set_uniform_value("tex", 0);

    if (paint_node && paint_context)
      super.vfunc_paint_target(paint_node, paint_context);
    else if (paint_node) super.vfunc_paint_target(paint_node);
    else super.vfunc_paint_target();
  }
})