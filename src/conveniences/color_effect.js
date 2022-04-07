const GObject = imports.gi.GObject
const Clutter = imports.gi.Clutter

var ColorEffect = new GObject.registerClass(
  {
    Name: "ColorEffect",
  },
  class ColorShader extends Clutter.ShaderEffect {

    /**
     * I would like to thank the person who made this extension for showing me this is possible https://github.com/vn971/linux-color-inversion
     */

    vfunc_get_static_shader_source() {
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

              vec3 red = vec3(1.0,0.2,0.2);

             cogl_color_out = vec4(mix(hsv2rgb(color), red,0.1),1.0);
            }
          `;
    }

    vfunc_paint_target(paint_node = null, paint_context = null) {
      this.set_uniform_value("tex", 0);

      if (paint_node && paint_context)
        super.vfunc_paint_target(paint_node, paint_context);
      else if (paint_node) super.vfunc_paint_target(paint_node);
      else super.vfunc_paint_target();
    }
  }
);



//let color_effect = new GObject.registerClass(
//  {},
//  class ColorEffect extends Clutter.ShaderEffect {
//    /**
//     * I would like to thank the person who made this extension for showing me this is possible https://github.com/vn971/linux-color-inversion
//     */
//
//    vfunc_get_static_shader_source() {
//      return `
//           
//            uniform sampler2D tex;
//    
//    
//            // RGB to HSV functions taken from https://gist.github.com/983/e170a24ae8eba2cd174f
//    
//            vec3 rgb2hsv(vec3 c) {
//              vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
//              vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
//              vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
//    
//              float d = q.x - min(q.w, q.y);
//              float e = 1.0e-10;
//              return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
//            }
//    
//            vec3 hsv2rgb(vec3 c)
//            {
//                vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
//                vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
//                return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
//            }
//    
//            
//            
//            void main() {
//              vec4 c = texture2D(tex, cogl_tex_coord_in[0].st);
//              vec3 color = rgb2hsv(vec3(c.x,c.y,c.z));
//    
//              // Saturate Image
//              color.y =  0.03 + color.y;
//              
//              vec3 red = vec3(0.6.0,0,0);
//            
//             cogl_color_out = vec4(mix(hsv2rgb(color), red,0.1),1.0);
//            }
//          `
//    }
//
//    //vec3 red = vec3(${prefs.red} ,${prefs.green},${prefs.blue});
//    vfunc_paint_target(paint_node = null, paint_context = null) {
//      this.set_uniform_value("tex", 0)
//
//      if (paint_node && paint_context)
//        super.vfunc_paint_target(paint_node, paint_context)
//      else if (paint_node) super.vfunc_paint_target(paint_node)
//      else super.vfunc_paint_target()
//    }
//  }
//)
//
//function new_color_effect() {
//  return new GObject.g_object_new(color_effect);
//}
//