/**
 * HarfBuzz-0.0
 */

import * as Gjs from './Gjs';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';

export enum aat_layout_feature_selector_t {
    INVALID,
    ALL_TYPE_FEATURES_ON,
    ALL_TYPE_FEATURES_OFF,
    REQUIRED_LIGATURES_ON,
    REQUIRED_LIGATURES_OFF,
    COMMON_LIGATURES_ON,
    COMMON_LIGATURES_OFF,
    RARE_LIGATURES_ON,
    RARE_LIGATURES_OFF,
    LOGOS_ON,
    LOGOS_OFF,
    REBUS_PICTURES_ON,
    REBUS_PICTURES_OFF,
    DIPHTHONG_LIGATURES_ON,
    DIPHTHONG_LIGATURES_OFF,
    SQUARED_LIGATURES_ON,
    SQUARED_LIGATURES_OFF,
    ABBREV_SQUARED_LIGATURES_ON,
    ABBREV_SQUARED_LIGATURES_OFF,
    SYMBOL_LIGATURES_ON,
    SYMBOL_LIGATURES_OFF,
    CONTEXTUAL_LIGATURES_ON,
    CONTEXTUAL_LIGATURES_OFF,
    HISTORICAL_LIGATURES_ON,
    HISTORICAL_LIGATURES_OFF,
    UNCONNECTED,
    PARTIALLY_CONNECTED,
    CURSIVE,
    UPPER_AND_LOWER_CASE,
    ALL_CAPS,
    ALL_LOWER_CASE,
    SMALL_CAPS,
    INITIAL_CAPS,
    INITIAL_CAPS_AND_SMALL_CAPS,
    SUBSTITUTE_VERTICAL_FORMS_ON,
    SUBSTITUTE_VERTICAL_FORMS_OFF,
    LINGUISTIC_REARRANGEMENT_ON,
    LINGUISTIC_REARRANGEMENT_OFF,
    MONOSPACED_NUMBERS,
    PROPORTIONAL_NUMBERS,
    THIRD_WIDTH_NUMBERS,
    QUARTER_WIDTH_NUMBERS,
    WORD_INITIAL_SWASHES_ON,
    WORD_INITIAL_SWASHES_OFF,
    WORD_FINAL_SWASHES_ON,
    WORD_FINAL_SWASHES_OFF,
    LINE_INITIAL_SWASHES_ON,
    LINE_INITIAL_SWASHES_OFF,
    LINE_FINAL_SWASHES_ON,
    LINE_FINAL_SWASHES_OFF,
    NON_FINAL_SWASHES_ON,
    NON_FINAL_SWASHES_OFF,
    SHOW_DIACRITICS,
    HIDE_DIACRITICS,
    DECOMPOSE_DIACRITICS,
    NORMAL_POSITION,
    SUPERIORS,
    INFERIORS,
    ORDINALS,
    SCIENTIFIC_INFERIORS,
    NO_FRACTIONS,
    VERTICAL_FRACTIONS,
    DIAGONAL_FRACTIONS,
    PREVENT_OVERLAP_ON,
    PREVENT_OVERLAP_OFF,
    HYPHENS_TO_EM_DASH_ON,
    HYPHENS_TO_EM_DASH_OFF,
    HYPHEN_TO_EN_DASH_ON,
    HYPHEN_TO_EN_DASH_OFF,
    SLASHED_ZERO_ON,
    SLASHED_ZERO_OFF,
    FORM_INTERROBANG_ON,
    FORM_INTERROBANG_OFF,
    SMART_QUOTES_ON,
    SMART_QUOTES_OFF,
    PERIODS_TO_ELLIPSIS_ON,
    PERIODS_TO_ELLIPSIS_OFF,
    HYPHEN_TO_MINUS_ON,
    HYPHEN_TO_MINUS_OFF,
    ASTERISK_TO_MULTIPLY_ON,
    ASTERISK_TO_MULTIPLY_OFF,
    SLASH_TO_DIVIDE_ON,
    SLASH_TO_DIVIDE_OFF,
    INEQUALITY_LIGATURES_ON,
    INEQUALITY_LIGATURES_OFF,
    EXPONENTS_ON,
    EXPONENTS_OFF,
    MATHEMATICAL_GREEK_ON,
    MATHEMATICAL_GREEK_OFF,
    NO_ORNAMENTS,
    DINGBATS,
    PI_CHARACTERS,
    FLEURONS,
    DECORATIVE_BORDERS,
    INTERNATIONAL_SYMBOLS,
    MATH_SYMBOLS,
    NO_ALTERNATES,
    DESIGN_LEVEL1,
    DESIGN_LEVEL2,
    DESIGN_LEVEL3,
    DESIGN_LEVEL4,
    DESIGN_LEVEL5,
    NO_STYLE_OPTIONS,
    DISPLAY_TEXT,
    ENGRAVED_TEXT,
    ILLUMINATED_CAPS,
    TITLING_CAPS,
    TALL_CAPS,
    TRADITIONAL_CHARACTERS,
    SIMPLIFIED_CHARACTERS,
    JIS1978_CHARACTERS,
    JIS1983_CHARACTERS,
    JIS1990_CHARACTERS,
    TRADITIONAL_ALT_ONE,
    TRADITIONAL_ALT_TWO,
    TRADITIONAL_ALT_THREE,
    TRADITIONAL_ALT_FOUR,
    TRADITIONAL_ALT_FIVE,
    EXPERT_CHARACTERS,
    JIS2004_CHARACTERS,
    HOJO_CHARACTERS,
    NLCCHARACTERS,
    TRADITIONAL_NAMES_CHARACTERS,
    LOWER_CASE_NUMBERS,
    UPPER_CASE_NUMBERS,
    PROPORTIONAL_TEXT,
    MONOSPACED_TEXT,
    HALF_WIDTH_TEXT,
    THIRD_WIDTH_TEXT,
    QUARTER_WIDTH_TEXT,
    ALT_PROPORTIONAL_TEXT,
    ALT_HALF_WIDTH_TEXT,
    NO_TRANSLITERATION,
    HANJA_TO_HANGUL,
    HIRAGANA_TO_KATAKANA,
    KATAKANA_TO_HIRAGANA,
    KANA_TO_ROMANIZATION,
    ROMANIZATION_TO_HIRAGANA,
    ROMANIZATION_TO_KATAKANA,
    HANJA_TO_HANGUL_ALT_ONE,
    HANJA_TO_HANGUL_ALT_TWO,
    HANJA_TO_HANGUL_ALT_THREE,
    NO_ANNOTATION,
    BOX_ANNOTATION,
    ROUNDED_BOX_ANNOTATION,
    CIRCLE_ANNOTATION,
    INVERTED_CIRCLE_ANNOTATION,
    PARENTHESIS_ANNOTATION,
    PERIOD_ANNOTATION,
    ROMAN_NUMERAL_ANNOTATION,
    DIAMOND_ANNOTATION,
    INVERTED_BOX_ANNOTATION,
    INVERTED_ROUNDED_BOX_ANNOTATION,
    FULL_WIDTH_KANA,
    PROPORTIONAL_KANA,
    FULL_WIDTH_IDEOGRAPHS,
    PROPORTIONAL_IDEOGRAPHS,
    HALF_WIDTH_IDEOGRAPHS,
    CANONICAL_COMPOSITION_ON,
    CANONICAL_COMPOSITION_OFF,
    COMPATIBILITY_COMPOSITION_ON,
    COMPATIBILITY_COMPOSITION_OFF,
    TRANSCODING_COMPOSITION_ON,
    TRANSCODING_COMPOSITION_OFF,
    NO_RUBY_KANA,
    RUBY_KANA,
    RUBY_KANA_ON,
    RUBY_KANA_OFF,
    NO_CJK_SYMBOL_ALTERNATIVES,
    CJK_SYMBOL_ALT_ONE,
    CJK_SYMBOL_ALT_TWO,
    CJK_SYMBOL_ALT_THREE,
    CJK_SYMBOL_ALT_FOUR,
    CJK_SYMBOL_ALT_FIVE,
    NO_IDEOGRAPHIC_ALTERNATIVES,
    IDEOGRAPHIC_ALT_ONE,
    IDEOGRAPHIC_ALT_TWO,
    IDEOGRAPHIC_ALT_THREE,
    IDEOGRAPHIC_ALT_FOUR,
    IDEOGRAPHIC_ALT_FIVE,
    CJK_VERTICAL_ROMAN_CENTERED,
    CJK_VERTICAL_ROMAN_HBASELINE,
    NO_CJK_ITALIC_ROMAN,
    CJK_ITALIC_ROMAN,
    CJK_ITALIC_ROMAN_ON,
    CJK_ITALIC_ROMAN_OFF,
    CASE_SENSITIVE_LAYOUT_ON,
    CASE_SENSITIVE_LAYOUT_OFF,
    CASE_SENSITIVE_SPACING_ON,
    CASE_SENSITIVE_SPACING_OFF,
    ALTERNATE_HORIZ_KANA_ON,
    ALTERNATE_HORIZ_KANA_OFF,
    ALTERNATE_VERT_KANA_ON,
    ALTERNATE_VERT_KANA_OFF,
    NO_STYLISTIC_ALTERNATES,
    STYLISTIC_ALT_ONE_ON,
    STYLISTIC_ALT_ONE_OFF,
    STYLISTIC_ALT_TWO_ON,
    STYLISTIC_ALT_TWO_OFF,
    STYLISTIC_ALT_THREE_ON,
    STYLISTIC_ALT_THREE_OFF,
    STYLISTIC_ALT_FOUR_ON,
    STYLISTIC_ALT_FOUR_OFF,
    STYLISTIC_ALT_FIVE_ON,
    STYLISTIC_ALT_FIVE_OFF,
    STYLISTIC_ALT_SIX_ON,
    STYLISTIC_ALT_SIX_OFF,
    STYLISTIC_ALT_SEVEN_ON,
    STYLISTIC_ALT_SEVEN_OFF,
    STYLISTIC_ALT_EIGHT_ON,
    STYLISTIC_ALT_EIGHT_OFF,
    STYLISTIC_ALT_NINE_ON,
    STYLISTIC_ALT_NINE_OFF,
    STYLISTIC_ALT_TEN_ON,
    STYLISTIC_ALT_TEN_OFF,
    STYLISTIC_ALT_ELEVEN_ON,
    STYLISTIC_ALT_ELEVEN_OFF,
    STYLISTIC_ALT_TWELVE_ON,
    STYLISTIC_ALT_TWELVE_OFF,
    STYLISTIC_ALT_THIRTEEN_ON,
    STYLISTIC_ALT_THIRTEEN_OFF,
    STYLISTIC_ALT_FOURTEEN_ON,
    STYLISTIC_ALT_FOURTEEN_OFF,
    STYLISTIC_ALT_FIFTEEN_ON,
    STYLISTIC_ALT_FIFTEEN_OFF,
    STYLISTIC_ALT_SIXTEEN_ON,
    STYLISTIC_ALT_SIXTEEN_OFF,
    STYLISTIC_ALT_SEVENTEEN_ON,
    STYLISTIC_ALT_SEVENTEEN_OFF,
    STYLISTIC_ALT_EIGHTEEN_ON,
    STYLISTIC_ALT_EIGHTEEN_OFF,
    STYLISTIC_ALT_NINETEEN_ON,
    STYLISTIC_ALT_NINETEEN_OFF,
    STYLISTIC_ALT_TWENTY_ON,
    STYLISTIC_ALT_TWENTY_OFF,
    CONTEXTUAL_ALTERNATES_ON,
    CONTEXTUAL_ALTERNATES_OFF,
    SWASH_ALTERNATES_ON,
    SWASH_ALTERNATES_OFF,
    CONTEXTUAL_SWASH_ALTERNATES_ON,
    CONTEXTUAL_SWASH_ALTERNATES_OFF,
    DEFAULT_LOWER_CASE,
    LOWER_CASE_SMALL_CAPS,
    LOWER_CASE_PETITE_CAPS,
    DEFAULT_UPPER_CASE,
    UPPER_CASE_SMALL_CAPS,
    UPPER_CASE_PETITE_CAPS,
    HALF_WIDTH_CJK_ROMAN,
    PROPORTIONAL_CJK_ROMAN,
    DEFAULT_CJK_ROMAN,
    FULL_WIDTH_CJK_ROMAN,
}
export enum aat_layout_feature_type_t {
    INVALID,
    ALL_TYPOGRAPHIC,
    LIGATURES,
    CURISVE_CONNECTION,
    LETTER_CASE,
    VERTICAL_SUBSTITUTION,
    LINGUISTIC_REARRANGEMENT,
    NUMBER_SPACING,
    SMART_SWASH_TYPE,
    DIACRITICS_TYPE,
    VERTICAL_POSITION,
    FRACTIONS,
    OVERLAPPING_CHARACTERS_TYPE,
    TYPOGRAPHIC_EXTRAS,
    MATHEMATICAL_EXTRAS,
    ORNAMENT_SETS_TYPE,
    CHARACTER_ALTERNATIVES,
    DESIGN_COMPLEXITY_TYPE,
    STYLE_OPTIONS,
    CHARACTER_SHAPE,
    NUMBER_CASE,
    TEXT_SPACING,
    TRANSLITERATION,
    ANNOTATION_TYPE,
    KANA_SPACING_TYPE,
    IDEOGRAPHIC_SPACING_TYPE,
    UNICODE_DECOMPOSITION_TYPE,
    RUBY_KANA,
    CJK_SYMBOL_ALTERNATIVES_TYPE,
    IDEOGRAPHIC_ALTERNATIVES_TYPE,
    CJK_VERTICAL_ROMAN_PLACEMENT_TYPE,
    ITALIC_CJK_ROMAN,
    CASE_SENSITIVE_LAYOUT,
    ALTERNATE_KANA,
    STYLISTIC_ALTERNATIVES,
    CONTEXTUAL_ALTERNATIVES,
    LOWER_CASE,
    UPPER_CASE,
    LANGUAGE_TAG_TYPE,
    CJK_ROMAN_SPACING_TYPE,
}
export enum buffer_cluster_level_t {
    MONOTONE_GRAPHEMES,
    MONOTONE_CHARACTERS,
    CHARACTERS,
    DEFAULT,
}
export enum buffer_content_type_t {
    INVALID,
    UNICODE,
    GLYPHS,
}
export enum buffer_serialize_format_t {
    TEXT,
    JSON,
    INVALID,
}
export enum direction_t {
    INVALID,
    LTR,
    RTL,
    TTB,
    BTT,
}
export enum memory_mode_t {
    DUPLICATE,
    READONLY,
    WRITABLE,
    READONLY_MAY_MAKE_WRITABLE,
}
export enum ot_layout_baseline_tag_t {
    ROMAN,
    HANGING,
    IDEO_FACE_BOTTOM_OR_LEFT,
    IDEO_FACE_TOP_OR_RIGHT,
    IDEO_EMBOX_BOTTOM_OR_LEFT,
    IDEO_EMBOX_TOP_OR_RIGHT,
    MATH,
}
export enum ot_layout_glyph_class_t {
    UNCLASSIFIED,
    BASE_GLYPH,
    LIGATURE,
    MARK,
    COMPONENT,
}
export enum ot_math_constant_t {
    SCRIPT_PERCENT_SCALE_DOWN,
    SCRIPT_SCRIPT_PERCENT_SCALE_DOWN,
    DELIMITED_SUB_FORMULA_MIN_HEIGHT,
    DISPLAY_OPERATOR_MIN_HEIGHT,
    MATH_LEADING,
    AXIS_HEIGHT,
    ACCENT_BASE_HEIGHT,
    FLATTENED_ACCENT_BASE_HEIGHT,
    SUBSCRIPT_SHIFT_DOWN,
    SUBSCRIPT_TOP_MAX,
    SUBSCRIPT_BASELINE_DROP_MIN,
    SUPERSCRIPT_SHIFT_UP,
    SUPERSCRIPT_SHIFT_UP_CRAMPED,
    SUPERSCRIPT_BOTTOM_MIN,
    SUPERSCRIPT_BASELINE_DROP_MAX,
    SUB_SUPERSCRIPT_GAP_MIN,
    SUPERSCRIPT_BOTTOM_MAX_WITH_SUBSCRIPT,
    SPACE_AFTER_SCRIPT,
    UPPER_LIMIT_GAP_MIN,
    UPPER_LIMIT_BASELINE_RISE_MIN,
    LOWER_LIMIT_GAP_MIN,
    LOWER_LIMIT_BASELINE_DROP_MIN,
    STACK_TOP_SHIFT_UP,
    STACK_TOP_DISPLAY_STYLE_SHIFT_UP,
    STACK_BOTTOM_SHIFT_DOWN,
    STACK_BOTTOM_DISPLAY_STYLE_SHIFT_DOWN,
    STACK_GAP_MIN,
    STACK_DISPLAY_STYLE_GAP_MIN,
    STRETCH_STACK_TOP_SHIFT_UP,
    STRETCH_STACK_BOTTOM_SHIFT_DOWN,
    STRETCH_STACK_GAP_ABOVE_MIN,
    STRETCH_STACK_GAP_BELOW_MIN,
    FRACTION_NUMERATOR_SHIFT_UP,
    FRACTION_NUMERATOR_DISPLAY_STYLE_SHIFT_UP,
    FRACTION_DENOMINATOR_SHIFT_DOWN,
    FRACTION_DENOMINATOR_DISPLAY_STYLE_SHIFT_DOWN,
    FRACTION_NUMERATOR_GAP_MIN,
    FRACTION_NUM_DISPLAY_STYLE_GAP_MIN,
    FRACTION_RULE_THICKNESS,
    FRACTION_DENOMINATOR_GAP_MIN,
    FRACTION_DENOM_DISPLAY_STYLE_GAP_MIN,
    SKEWED_FRACTION_HORIZONTAL_GAP,
    SKEWED_FRACTION_VERTICAL_GAP,
    OVERBAR_VERTICAL_GAP,
    OVERBAR_RULE_THICKNESS,
    OVERBAR_EXTRA_ASCENDER,
    UNDERBAR_VERTICAL_GAP,
    UNDERBAR_RULE_THICKNESS,
    UNDERBAR_EXTRA_DESCENDER,
    RADICAL_VERTICAL_GAP,
    RADICAL_DISPLAY_STYLE_VERTICAL_GAP,
    RADICAL_RULE_THICKNESS,
    RADICAL_EXTRA_ASCENDER,
    RADICAL_KERN_BEFORE_DEGREE,
    RADICAL_KERN_AFTER_DEGREE,
    RADICAL_DEGREE_BOTTOM_RAISE_PERCENT,
}
export enum ot_math_kern_t {
    TOP_RIGHT,
    TOP_LEFT,
    BOTTOM_RIGHT,
    BOTTOM_LEFT,
}
export enum ot_meta_tag_t {
    DESIGN_LANGUAGES,
    SUPPORTED_LANGUAGES,
}
export enum ot_metrics_tag_t {
    HORIZONTAL_ASCENDER,
    HORIZONTAL_DESCENDER,
    HORIZONTAL_LINE_GAP,
    HORIZONTAL_CLIPPING_ASCENT,
    HORIZONTAL_CLIPPING_DESCENT,
    VERTICAL_ASCENDER,
    VERTICAL_DESCENDER,
    VERTICAL_LINE_GAP,
    HORIZONTAL_CARET_RISE,
    HORIZONTAL_CARET_RUN,
    HORIZONTAL_CARET_OFFSET,
    VERTICAL_CARET_RISE,
    VERTICAL_CARET_RUN,
    VERTICAL_CARET_OFFSET,
    X_HEIGHT,
    CAP_HEIGHT,
    SUBSCRIPT_EM_X_SIZE,
    SUBSCRIPT_EM_Y_SIZE,
    SUBSCRIPT_EM_X_OFFSET,
    SUBSCRIPT_EM_Y_OFFSET,
    SUPERSCRIPT_EM_X_SIZE,
    SUPERSCRIPT_EM_Y_SIZE,
    SUPERSCRIPT_EM_X_OFFSET,
    SUPERSCRIPT_EM_Y_OFFSET,
    STRIKEOUT_SIZE,
    STRIKEOUT_OFFSET,
    UNDERLINE_SIZE,
    UNDERLINE_OFFSET,
}
export enum script_t {
    COMMON,
    INHERITED,
    UNKNOWN,
    ARABIC,
    ARMENIAN,
    BENGALI,
    CYRILLIC,
    DEVANAGARI,
    GEORGIAN,
    GREEK,
    GUJARATI,
    GURMUKHI,
    HANGUL,
    HAN,
    HEBREW,
    HIRAGANA,
    KANNADA,
    KATAKANA,
    LAO,
    LATIN,
    MALAYALAM,
    ORIYA,
    TAMIL,
    TELUGU,
    THAI,
    TIBETAN,
    BOPOMOFO,
    BRAILLE,
    CANADIAN_SYLLABICS,
    CHEROKEE,
    ETHIOPIC,
    KHMER,
    MONGOLIAN,
    MYANMAR,
    OGHAM,
    RUNIC,
    SINHALA,
    SYRIAC,
    THAANA,
    YI,
    DESERET,
    GOTHIC,
    OLD_ITALIC,
    BUHID,
    HANUNOO,
    TAGALOG,
    TAGBANWA,
    CYPRIOT,
    LIMBU,
    LINEAR_B,
    OSMANYA,
    SHAVIAN,
    TAI_LE,
    UGARITIC,
    BUGINESE,
    COPTIC,
    GLAGOLITIC,
    KHAROSHTHI,
    NEW_TAI_LUE,
    OLD_PERSIAN,
    SYLOTI_NAGRI,
    TIFINAGH,
    BALINESE,
    CUNEIFORM,
    NKO,
    PHAGS_PA,
    PHOENICIAN,
    CARIAN,
    CHAM,
    KAYAH_LI,
    LEPCHA,
    LYCIAN,
    LYDIAN,
    OL_CHIKI,
    REJANG,
    SAURASHTRA,
    SUNDANESE,
    VAI,
    AVESTAN,
    BAMUM,
    EGYPTIAN_HIEROGLYPHS,
    IMPERIAL_ARAMAIC,
    INSCRIPTIONAL_PAHLAVI,
    INSCRIPTIONAL_PARTHIAN,
    JAVANESE,
    KAITHI,
    LISU,
    MEETEI_MAYEK,
    OLD_SOUTH_ARABIAN,
    OLD_TURKIC,
    SAMARITAN,
    TAI_THAM,
    TAI_VIET,
    BATAK,
    BRAHMI,
    MANDAIC,
    CHAKMA,
    MEROITIC_CURSIVE,
    MEROITIC_HIEROGLYPHS,
    MIAO,
    SHARADA,
    SORA_SOMPENG,
    TAKRI,
    BASSA_VAH,
    CAUCASIAN_ALBANIAN,
    DUPLOYAN,
    ELBASAN,
    GRANTHA,
    KHOJKI,
    KHUDAWADI,
    LINEAR_A,
    MAHAJANI,
    MANICHAEAN,
    MENDE_KIKAKUI,
    MODI,
    MRO,
    NABATAEAN,
    OLD_NORTH_ARABIAN,
    OLD_PERMIC,
    PAHAWH_HMONG,
    PALMYRENE,
    PAU_CIN_HAU,
    PSALTER_PAHLAVI,
    SIDDHAM,
    TIRHUTA,
    WARANG_CITI,
    AHOM,
    ANATOLIAN_HIEROGLYPHS,
    HATRAN,
    MULTANI,
    OLD_HUNGARIAN,
    SIGNWRITING,
    ADLAM,
    BHAIKSUKI,
    MARCHEN,
    OSAGE,
    TANGUT,
    NEWA,
    MASARAM_GONDI,
    NUSHU,
    SOYOMBO,
    ZANABAZAR_SQUARE,
    DOGRA,
    GUNJALA_GONDI,
    HANIFI_ROHINGYA,
    MAKASAR,
    MEDEFAIDRIN,
    OLD_SOGDIAN,
    SOGDIAN,
    ELYMAIC,
    NANDINAGARI,
    NYIAKENG_PUACHUE_HMONG,
    WANCHO,
    CHORASMIAN,
    DIVES_AKURU,
    KHITAN_SMALL_SCRIPT,
    YEZIDI,
    INVALID,
}
export enum unicode_combining_class_t {
    NOT_REORDERED,
    OVERLAY,
    NUKTA,
    KANA_VOICING,
    VIRAMA,
    CCC10,
    CCC11,
    CCC12,
    CCC13,
    CCC14,
    CCC15,
    CCC16,
    CCC17,
    CCC18,
    CCC19,
    CCC20,
    CCC21,
    CCC22,
    CCC23,
    CCC24,
    CCC25,
    CCC26,
    CCC27,
    CCC28,
    CCC29,
    CCC30,
    CCC31,
    CCC32,
    CCC33,
    CCC34,
    CCC35,
    CCC36,
    CCC84,
    CCC91,
    CCC103,
    CCC107,
    CCC118,
    CCC122,
    CCC129,
    CCC130,
    CCC133,
    ATTACHED_BELOW_LEFT,
    ATTACHED_BELOW,
    ATTACHED_ABOVE,
    ATTACHED_ABOVE_RIGHT,
    BELOW_LEFT,
    BELOW,
    BELOW_RIGHT,
    LEFT,
    RIGHT,
    ABOVE_LEFT,
    ABOVE,
    ABOVE_RIGHT,
    DOUBLE_BELOW,
    DOUBLE_ABOVE,
    IOTA_SUBSCRIPT,
    INVALID,
}
export enum unicode_general_category_t {
    CONTROL,
    FORMAT,
    UNASSIGNED,
    PRIVATE_USE,
    SURROGATE,
    LOWERCASE_LETTER,
    MODIFIER_LETTER,
    OTHER_LETTER,
    TITLECASE_LETTER,
    UPPERCASE_LETTER,
    SPACING_MARK,
    ENCLOSING_MARK,
    NON_SPACING_MARK,
    DECIMAL_NUMBER,
    LETTER_NUMBER,
    OTHER_NUMBER,
    CONNECT_PUNCTUATION,
    DASH_PUNCTUATION,
    CLOSE_PUNCTUATION,
    FINAL_PUNCTUATION,
    INITIAL_PUNCTUATION,
    OTHER_PUNCTUATION,
    OPEN_PUNCTUATION,
    CURRENCY_SYMBOL,
    MODIFIER_SYMBOL,
    MATH_SYMBOL,
    OTHER_SYMBOL,
    LINE_SEPARATOR,
    PARAGRAPH_SEPARATOR,
    SPACE_SEPARATOR,
}
export enum buffer_diff_flags_t {
    EQUAL,
    CONTENT_TYPE_MISMATCH,
    LENGTH_MISMATCH,
    NOTDEF_PRESENT,
    DOTTED_CIRCLE_PRESENT,
    CODEPOINT_MISMATCH,
    CLUSTER_MISMATCH,
    GLYPH_FLAGS_MISMATCH,
    POSITION_MISMATCH,
}
export enum buffer_flags_t {
    DEFAULT,
    BOT,
    EOT,
    PRESERVE_DEFAULT_IGNORABLES,
    REMOVE_DEFAULT_IGNORABLES,
    DO_NOT_INSERT_DOTTED_CIRCLE,
}
export enum buffer_serialize_flags_t {
    DEFAULT,
    NO_CLUSTERS,
    NO_POSITIONS,
    NO_GLYPH_NAMES,
    GLYPH_EXTENTS,
    GLYPH_FLAGS,
    NO_ADVANCES,
}
export enum glyph_flags_t {
    UNSAFE_TO_BREAK,
    DEFINED,
}
export enum ot_color_palette_flags_t {
    DEFAULT,
    USABLE_WITH_LIGHT_BACKGROUND,
    USABLE_WITH_DARK_BACKGROUND,
}
export enum ot_math_glyph_part_flags_t {
    EXTENDER,
}
export enum ot_var_axis_flags_t {
    HIDDEN,
}
export const AAT_LAYOUT_NO_SELECTOR_INDEX: number
export const BUFFER_REPLACEMENT_CODEPOINT_DEFAULT: number
export const FEATURE_GLOBAL_START: number
export const LANGUAGE_INVALID: language_t
export const MAP_VALUE_INVALID: codepoint_t
export const OT_LAYOUT_DEFAULT_LANGUAGE_INDEX: number
export const OT_LAYOUT_NO_FEATURE_INDEX: number
export const OT_LAYOUT_NO_SCRIPT_INDEX: number
export const OT_LAYOUT_NO_VARIATIONS_INDEX: number
export const OT_MAX_TAGS_PER_LANGUAGE: number
export const OT_MAX_TAGS_PER_SCRIPT: number
export const OT_VAR_NO_AXIS_INDEX: number
export const SET_VALUE_INVALID: codepoint_t
export const UNICODE_MAX: number
export const UNICODE_MAX_DECOMPOSITION_LEN: number
export const VERSION_MAJOR: number
export const VERSION_MICRO: number
export const VERSION_MINOR: number
export const VERSION_STRING: string
export function aat_layout_feature_type_get_name_id(face: face_t, feature_type: aat_layout_feature_type_t): ot_name_id_t
export function aat_layout_feature_type_get_selector_infos(face: face_t, feature_type: aat_layout_feature_type_t, start_offset: number): [ /* returnType */ number, /* selectors */ aat_layout_feature_selector_info_t[] | null, /* default_index */ number | null ]
export function aat_layout_get_feature_types(face: face_t, start_offset: number): [ /* returnType */ number, /* features */ aat_layout_feature_type_t[] ]
export function aat_layout_has_positioning(face: face_t): bool_t
export function aat_layout_has_substitution(face: face_t): bool_t
export function aat_layout_has_tracking(face: face_t): bool_t
export function blob_copy_writable_or_fail(blob: blob_t): blob_t
export function blob_create_from_file(file_name: string): blob_t
export function blob_create_sub_blob(parent: blob_t, offset: number, length: number): blob_t
export function blob_get_data(blob: blob_t): string[]
export function blob_get_data_writable(blob: blob_t): string[]
export function blob_get_empty(): blob_t
export function blob_get_length(blob: blob_t): number
export function blob_is_immutable(blob: blob_t): bool_t
export function blob_make_immutable(blob: blob_t): void
export function buffer_add(buffer: buffer_t, codepoint: codepoint_t, cluster: number): void
export function buffer_add_codepoints(buffer: buffer_t, text: codepoint_t[], item_offset: number, item_length: number): void
export function buffer_add_latin1(buffer: buffer_t, text: Uint8Array, item_offset: number, item_length: number): void
export function buffer_add_utf16(buffer: buffer_t, text: number[], item_offset: number, item_length: number): void
export function buffer_add_utf32(buffer: buffer_t, text: number[], item_offset: number, item_length: number): void
export function buffer_add_utf8(buffer: buffer_t, text: Uint8Array, item_offset: number, item_length: number): void
export function buffer_allocation_successful(buffer: buffer_t): bool_t
export function buffer_append(buffer: buffer_t, source: buffer_t, start: number, end: number): void
export function buffer_clear_contents(buffer: buffer_t): void
export function buffer_create(): buffer_t
export function buffer_deserialize_glyphs(buffer: buffer_t, buf: string[], font: font_t | null, format: buffer_serialize_format_t): [ /* returnType */ bool_t, /* end_ptr */ string | null ]
export function buffer_deserialize_unicode(buffer: buffer_t, buf: string[], format: buffer_serialize_format_t): [ /* returnType */ bool_t, /* end_ptr */ string | null ]
export function buffer_diff(buffer: buffer_t, reference: buffer_t, dottedcircle_glyph: codepoint_t, position_fuzz: number): buffer_diff_flags_t
export function buffer_get_cluster_level(buffer: buffer_t): buffer_cluster_level_t
export function buffer_get_content_type(buffer: buffer_t): buffer_content_type_t
export function buffer_get_direction(buffer: buffer_t): direction_t
export function buffer_get_empty(): buffer_t
export function buffer_get_flags(buffer: buffer_t): buffer_flags_t
export function buffer_get_glyph_infos(buffer: buffer_t): glyph_info_t[]
export function buffer_get_glyph_positions(buffer: buffer_t): glyph_position_t[]
export function buffer_get_invisible_glyph(buffer: buffer_t): codepoint_t
export function buffer_get_language(buffer: buffer_t): language_t
export function buffer_get_length(buffer: buffer_t): number
export function buffer_get_replacement_codepoint(buffer: buffer_t): codepoint_t
export function buffer_get_script(buffer: buffer_t): script_t
export function buffer_get_segment_properties(buffer: buffer_t): /* props */ segment_properties_t
export function buffer_get_unicode_funcs(buffer: buffer_t): unicode_funcs_t
export function buffer_guess_segment_properties(buffer: buffer_t): void
export function buffer_has_positions(buffer: buffer_t): bool_t
export function buffer_normalize_glyphs(buffer: buffer_t): void
export function buffer_pre_allocate(buffer: buffer_t, size: number): bool_t
export function buffer_reset(buffer: buffer_t): void
export function buffer_reverse(buffer: buffer_t): void
export function buffer_reverse_clusters(buffer: buffer_t): void
export function buffer_reverse_range(buffer: buffer_t, start: number, end: number): void
export function buffer_serialize(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Uint8Array, /* buf_consumed */ number | null ]
export function buffer_serialize_format_from_string(str: Uint8Array): buffer_serialize_format_t
export function buffer_serialize_format_to_string(format: buffer_serialize_format_t): string
export function buffer_serialize_glyphs(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Uint8Array, /* buf_consumed */ number | null ]
export function buffer_serialize_list_formats(): string[]
export function buffer_serialize_unicode(buffer: buffer_t, start: number, end: number, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Uint8Array, /* buf_consumed */ number | null ]
export function buffer_set_cluster_level(buffer: buffer_t, cluster_level: buffer_cluster_level_t): void
export function buffer_set_content_type(buffer: buffer_t, content_type: buffer_content_type_t): void
export function buffer_set_direction(buffer: buffer_t, direction: direction_t): void
export function buffer_set_flags(buffer: buffer_t, flags: buffer_flags_t): void
export function buffer_set_invisible_glyph(buffer: buffer_t, invisible: codepoint_t): void
export function buffer_set_language(buffer: buffer_t, language: language_t): void
export function buffer_set_length(buffer: buffer_t, length: number): bool_t
export function buffer_set_message_func(buffer: buffer_t, func: buffer_message_func_t): void
export function buffer_set_replacement_codepoint(buffer: buffer_t, replacement: codepoint_t): void
export function buffer_set_script(buffer: buffer_t, script: script_t): void
export function buffer_set_segment_properties(buffer: buffer_t, props: segment_properties_t): void
export function buffer_set_unicode_funcs(buffer: buffer_t, unicode_funcs: unicode_funcs_t): void
export function color_get_alpha(color: color_t): number
export function color_get_blue(color: color_t): number
export function color_get_green(color: color_t): number
export function color_get_red(color: color_t): number
export function direction_from_string(str: Uint8Array): direction_t
export function direction_to_string(direction: direction_t): string
export function face_builder_add_table(face: face_t, tag: tag_t, blob: blob_t): bool_t
export function face_builder_create(): face_t
export function face_collect_unicodes(face: face_t, out: set_t): void
export function face_collect_variation_selectors(face: face_t, out: set_t): void
export function face_collect_variation_unicodes(face: face_t, variation_selector: codepoint_t, out: set_t): void
export function face_count(blob: blob_t): number
export function face_create(blob: blob_t, index: number): face_t
export function face_create_for_tables(reference_table_func: reference_table_func_t): face_t
export function face_get_empty(): face_t
export function face_get_glyph_count(face: face_t): number
export function face_get_index(face: face_t): number
export function face_get_table_tags(face: face_t, start_offset: number): [ /* returnType */ number, /* table_tags */ tag_t[] ]
export function face_get_upem(face: face_t): number
export function face_is_immutable(face: face_t): bool_t
export function face_make_immutable(face: face_t): void
export function face_reference_blob(face: face_t): blob_t
export function face_reference_table(face: face_t, tag: tag_t): blob_t
export function face_set_glyph_count(face: face_t, glyph_count: number): void
export function face_set_index(face: face_t, index: number): void
export function face_set_upem(face: face_t, upem: number): void
export function feature_from_string(str: Uint8Array): [ /* returnType */ bool_t, /* feature */ feature_t ]
export function feature_to_string(feature: feature_t): /* buf */ string[]
export function font_add_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t, x: position_t, y: position_t): [ /* x */ position_t, /* y */ position_t ]
export function font_create(face: face_t): font_t
export function font_create_sub_font(parent: font_t): font_t
export function font_funcs_create(): font_funcs_t
export function font_funcs_get_empty(): font_funcs_t
export function font_funcs_is_immutable(ffuncs: font_funcs_t): bool_t
export function font_funcs_make_immutable(ffuncs: font_funcs_t): void
export function font_funcs_set_font_h_extents_func(ffuncs: font_funcs_t, func: font_get_font_h_extents_func_t): void
export function font_funcs_set_font_v_extents_func(ffuncs: font_funcs_t, func: font_get_font_v_extents_func_t): void
export function font_funcs_set_glyph_contour_point_func(ffuncs: font_funcs_t, func: font_get_glyph_contour_point_func_t): void
export function font_funcs_set_glyph_extents_func(ffuncs: font_funcs_t, func: font_get_glyph_extents_func_t): void
export function font_funcs_set_glyph_from_name_func(ffuncs: font_funcs_t, func: font_get_glyph_from_name_func_t): void
export function font_funcs_set_glyph_func(ffuncs: font_funcs_t, func: font_get_glyph_func_t): void
export function font_funcs_set_glyph_h_advance_func(ffuncs: font_funcs_t, func: font_get_glyph_h_advance_func_t): void
export function font_funcs_set_glyph_h_advances_func(ffuncs: font_funcs_t, func: font_get_glyph_h_advances_func_t): void
export function font_funcs_set_glyph_h_kerning_func(ffuncs: font_funcs_t, func: font_get_glyph_h_kerning_func_t): void
export function font_funcs_set_glyph_h_origin_func(ffuncs: font_funcs_t, func: font_get_glyph_h_origin_func_t): void
export function font_funcs_set_glyph_name_func(ffuncs: font_funcs_t, func: font_get_glyph_name_func_t): void
export function font_funcs_set_glyph_v_advance_func(ffuncs: font_funcs_t, func: font_get_glyph_v_advance_func_t): void
export function font_funcs_set_glyph_v_advances_func(ffuncs: font_funcs_t, func: font_get_glyph_v_advances_func_t): void
export function font_funcs_set_glyph_v_kerning_func(ffuncs: font_funcs_t, func: font_get_glyph_v_kerning_func_t): void
export function font_funcs_set_glyph_v_origin_func(ffuncs: font_funcs_t, func: font_get_glyph_v_origin_func_t): void
export function font_funcs_set_nominal_glyph_func(ffuncs: font_funcs_t, func: font_get_nominal_glyph_func_t): void
export function font_funcs_set_nominal_glyphs_func(ffuncs: font_funcs_t, func: font_get_nominal_glyphs_func_t): void
export function font_funcs_set_variation_glyph_func(ffuncs: font_funcs_t, func: font_get_variation_glyph_func_t): void
export function font_get_empty(): font_t
export function font_get_extents_for_direction(font: font_t, direction: direction_t): /* extents */ font_extents_t
export function font_get_face(font: font_t): face_t
export function font_get_glyph(font: font_t, unicode: codepoint_t, variation_selector: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_get_glyph_advance_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_advances_for_direction(font: font_t, direction: direction_t, count: number, first_glyph: codepoint_t, glyph_stride: number): [ /* first_advance */ position_t, /* advance_stride */ number ]
export function font_get_glyph_contour_point(font: font_t, glyph: codepoint_t, point_index: number): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_contour_point_for_origin(font: font_t, glyph: codepoint_t, point_index: number, direction: direction_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_extents(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* extents */ glyph_extents_t ]
export function font_get_glyph_extents_for_origin(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* returnType */ bool_t, /* extents */ glyph_extents_t ]
export function font_get_glyph_from_name(font: font_t, name: string[]): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_get_glyph_h_advance(font: font_t, glyph: codepoint_t): position_t
export function font_get_glyph_h_advances(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number, advance_stride: number): /* first_advance */ position_t
export function font_get_glyph_h_kerning(font: font_t, left_glyph: codepoint_t, right_glyph: codepoint_t): position_t
export function font_get_glyph_h_origin(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_kerning_for_direction(font: font_t, first_glyph: codepoint_t, second_glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_name(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* name */ string[] ]
export function font_get_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_v_advance(font: font_t, glyph: codepoint_t): position_t
export function font_get_glyph_v_advances(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number): [ /* first_advance */ position_t, /* advance_stride */ number ]
export function font_get_glyph_v_kerning(font: font_t, top_glyph: codepoint_t, bottom_glyph: codepoint_t): position_t
export function font_get_glyph_v_origin(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function font_get_h_extents(font: font_t): [ /* returnType */ bool_t, /* extents */ font_extents_t ]
export function font_get_nominal_glyph(font: font_t, unicode: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_get_nominal_glyphs(font: font_t, count: number, first_unicode: codepoint_t, unicode_stride: number, glyph_stride: number): [ /* returnType */ number, /* first_glyph */ codepoint_t ]
export function font_get_parent(font: font_t): font_t
export function font_get_ppem(font: font_t): [ /* x_ppem */ number, /* y_ppem */ number ]
export function font_get_ptem(font: font_t): number
export function font_get_scale(font: font_t): [ /* x_scale */ number, /* y_scale */ number ]
export function font_get_v_extents(font: font_t): [ /* returnType */ bool_t, /* extents */ font_extents_t ]
export function font_get_var_coords_normalized(font: font_t, length: number): number
export function font_get_variation_glyph(font: font_t, unicode: codepoint_t, variation_selector: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_glyph_from_string(font: font_t, s: Uint8Array): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_glyph_to_string(font: font_t, glyph: codepoint_t): /* s */ string[]
export function font_is_immutable(font: font_t): bool_t
export function font_make_immutable(font: font_t): void
export function font_set_face(font: font_t, face: face_t): void
export function font_set_funcs(font: font_t, klass: font_funcs_t): void
export function font_set_funcs_data(font: font_t, font_data?: object | null): void
export function font_set_parent(font: font_t, parent: font_t): void
export function font_set_ppem(font: font_t, x_ppem: number, y_ppem: number): void
export function font_set_ptem(font: font_t, ptem: number): void
export function font_set_scale(font: font_t, x_scale: number, y_scale: number): void
export function font_set_var_coords_design(font: font_t, coords: number[]): void
export function font_set_var_coords_normalized(font: font_t, coords: number[]): void
export function font_set_var_named_instance(font: font_t, instance_index: number): void
export function font_set_variations(font: font_t, variations: variation_t[]): void
export function font_subtract_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t, x: position_t, y: position_t): [ /* x */ position_t, /* y */ position_t ]
export function ft_font_changed(font: font_t): void
export function ft_font_get_load_flags(font: font_t): number
export function ft_font_set_funcs(font: font_t): void
export function ft_font_set_load_flags(font: font_t, load_flags: number): void
export function ft_font_unlock_face(font: font_t): void
export function glib_blob_create(gbytes: GLib.Bytes): blob_t
export function glib_get_unicode_funcs(): unicode_funcs_t
export function glib_script_from_script(script: script_t): GLib.UnicodeScript
export function glib_script_to_script(script: GLib.UnicodeScript): script_t
export function glyph_info_get_glyph_flags(info: glyph_info_t): glyph_flags_t
export function language_from_string(str: Uint8Array): language_t
export function language_get_default(): language_t
export function language_to_string(language: language_t): string
export function map_allocation_successful(map: map_t): bool_t
export function map_clear(map: map_t): void
export function map_create(): map_t
export function map_del(map: map_t, key: codepoint_t): void
export function map_get(map: map_t, key: codepoint_t): codepoint_t
export function map_get_empty(): map_t
export function map_get_population(map: map_t): number
export function map_has(map: map_t, key: codepoint_t): bool_t
export function map_is_empty(map: map_t): bool_t
export function map_set(map: map_t, key: codepoint_t, value: codepoint_t): void
export function ot_color_glyph_get_layers(face: face_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* layers */ ot_color_layer_t[] | null ]
export function ot_color_glyph_reference_png(font: font_t, glyph: codepoint_t): blob_t
export function ot_color_glyph_reference_svg(face: face_t, glyph: codepoint_t): blob_t
export function ot_color_has_layers(face: face_t): bool_t
export function ot_color_has_palettes(face: face_t): bool_t
export function ot_color_has_png(face: face_t): bool_t
export function ot_color_has_svg(face: face_t): bool_t
export function ot_color_palette_color_get_name_id(face: face_t, color_index: number): ot_name_id_t
export function ot_color_palette_get_colors(face: face_t, palette_index: number, start_offset: number): [ /* returnType */ number, /* colors */ color_t[] | null ]
export function ot_color_palette_get_count(face: face_t): number
export function ot_color_palette_get_flags(face: face_t, palette_index: number): ot_color_palette_flags_t
export function ot_color_palette_get_name_id(face: face_t, palette_index: number): ot_name_id_t
export function ot_font_set_funcs(font: font_t): void
export function ot_layout_collect_features(face: face_t, table_tag: tag_t, scripts: tag_t, languages: tag_t, features: tag_t): /* feature_indexes */ set_t
export function ot_layout_collect_lookups(face: face_t, table_tag: tag_t, scripts: tag_t, languages: tag_t, features: tag_t): /* lookup_indexes */ set_t
export function ot_layout_feature_get_characters(face: face_t, table_tag: tag_t, feature_index: number, start_offset: number): [ /* returnType */ number, /* characters */ codepoint_t[] ]
export function ot_layout_feature_get_lookups(face: face_t, table_tag: tag_t, feature_index: number, start_offset: number): [ /* returnType */ number, /* lookup_indexes */ number[] ]
export function ot_layout_feature_get_name_ids(face: face_t, table_tag: tag_t, feature_index: number): [ /* returnType */ bool_t, /* label_id */ ot_name_id_t | null, /* tooltip_id */ ot_name_id_t | null, /* sample_id */ ot_name_id_t | null, /* num_named_parameters */ number | null, /* first_param_id */ ot_name_id_t | null ]
export function ot_layout_feature_with_variations_get_lookups(face: face_t, table_tag: tag_t, feature_index: number, variations_index: number, start_offset: number): [ /* returnType */ number, /* lookup_indexes */ number[] ]
export function ot_layout_get_attach_points(face: face_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* point_array */ number[] ]
export function ot_layout_get_baseline(font: font_t, baseline_tag: ot_layout_baseline_tag_t, direction: direction_t, script_tag: tag_t, language_tag: tag_t): [ /* returnType */ bool_t, /* coord */ position_t ]
export function ot_layout_get_glyph_class(face: face_t, glyph: codepoint_t): ot_layout_glyph_class_t
export function ot_layout_get_glyphs_in_class(face: face_t, klass: ot_layout_glyph_class_t): /* glyphs */ set_t
export function ot_layout_get_ligature_carets(font: font_t, direction: direction_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* caret_array */ position_t[] ]
export function ot_layout_get_size_params(face: face_t): [ /* returnType */ bool_t, /* design_size */ number, /* subfamily_id */ number, /* subfamily_name_id */ ot_name_id_t, /* range_start */ number, /* range_end */ number ]
export function ot_layout_has_glyph_classes(face: face_t): bool_t
export function ot_layout_has_positioning(face: face_t): bool_t
export function ot_layout_has_substitution(face: face_t): bool_t
export function ot_layout_language_find_feature(face: face_t, table_tag: tag_t, script_index: number, language_index: number, feature_tag: tag_t): [ /* returnType */ bool_t, /* feature_index */ number ]
export function ot_layout_language_get_feature_indexes(face: face_t, table_tag: tag_t, script_index: number, language_index: number, start_offset: number): [ /* returnType */ number, /* feature_indexes */ number[] ]
export function ot_layout_language_get_feature_tags(face: face_t, table_tag: tag_t, script_index: number, language_index: number, start_offset: number): [ /* returnType */ number, /* feature_tags */ tag_t[] ]
export function ot_layout_language_get_required_feature(face: face_t, table_tag: tag_t, script_index: number, language_index: number): [ /* returnType */ bool_t, /* feature_index */ number, /* feature_tag */ tag_t ]
export function ot_layout_language_get_required_feature_index(face: face_t, table_tag: tag_t, script_index: number, language_index: number): [ /* returnType */ bool_t, /* feature_index */ number ]
export function ot_layout_lookup_collect_glyphs(face: face_t, table_tag: tag_t, lookup_index: number): [ /* glyphs_before */ set_t, /* glyphs_input */ set_t, /* glyphs_after */ set_t, /* glyphs_output */ set_t ]
export function ot_layout_lookup_get_glyph_alternates(face: face_t, lookup_index: number, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* alternate_glyphs */ codepoint_t[] ]
export function ot_layout_lookup_substitute_closure(face: face_t, lookup_index: number): /* glyphs */ set_t
export function ot_layout_lookup_would_substitute(face: face_t, lookup_index: number, glyphs: codepoint_t, glyphs_length: number, zero_context: bool_t): bool_t
export function ot_layout_lookups_substitute_closure(face: face_t, lookups: set_t): /* glyphs */ set_t
export function ot_layout_script_find_language(face: face_t, table_tag: tag_t, script_index: number, language_tag: tag_t, language_index: number): bool_t
export function ot_layout_script_get_language_tags(face: face_t, table_tag: tag_t, script_index: number, start_offset: number): [ /* returnType */ number, /* language_tags */ tag_t[] ]
export function ot_layout_script_select_language(face: face_t, table_tag: tag_t, script_index: number, language_count: number, language_tags: tag_t): [ /* returnType */ bool_t, /* language_index */ number ]
export function ot_layout_table_choose_script(face: face_t, table_tag: tag_t, script_tags: tag_t): [ /* returnType */ bool_t, /* script_index */ number, /* chosen_script */ tag_t ]
export function ot_layout_table_find_feature_variations(face: face_t, table_tag: tag_t, coords: number, num_coords: number): [ /* returnType */ bool_t, /* variations_index */ number ]
export function ot_layout_table_find_script(face: face_t, table_tag: tag_t, script_tag: tag_t): [ /* returnType */ bool_t, /* script_index */ number ]
export function ot_layout_table_get_feature_tags(face: face_t, table_tag: tag_t, start_offset: number): [ /* returnType */ number, /* feature_tags */ tag_t[] ]
export function ot_layout_table_get_lookup_count(face: face_t, table_tag: tag_t): number
export function ot_layout_table_get_script_tags(face: face_t, table_tag: tag_t, start_offset: number): [ /* returnType */ number, /* script_tags */ tag_t[] ]
export function ot_layout_table_select_script(face: face_t, table_tag: tag_t, script_count: number, script_tags: tag_t): [ /* returnType */ bool_t, /* script_index */ number | null, /* chosen_script */ tag_t | null ]
export function ot_math_get_constant(font: font_t, constant: ot_math_constant_t): position_t
export function ot_math_get_glyph_assembly(font: font_t, glyph: codepoint_t, direction: direction_t, start_offset: number): [ /* returnType */ number, /* parts */ ot_math_glyph_part_t[], /* italics_correction */ position_t ]
export function ot_math_get_glyph_italics_correction(font: font_t, glyph: codepoint_t): position_t
export function ot_math_get_glyph_kerning(font: font_t, glyph: codepoint_t, kern: ot_math_kern_t, correction_height: position_t): position_t
export function ot_math_get_glyph_top_accent_attachment(font: font_t, glyph: codepoint_t): position_t
export function ot_math_get_glyph_variants(font: font_t, glyph: codepoint_t, direction: direction_t, start_offset: number): [ /* returnType */ number, /* variants */ ot_math_glyph_variant_t[] ]
export function ot_math_get_min_connector_overlap(font: font_t, direction: direction_t): position_t
export function ot_math_has_data(face: face_t): bool_t
export function ot_math_is_glyph_extended_shape(face: face_t, glyph: codepoint_t): bool_t
export function ot_meta_get_entry_tags(face: face_t, start_offset: number): [ /* returnType */ number, /* entries */ ot_meta_tag_t[] ]
export function ot_meta_reference_entry(face: face_t, meta_tag: ot_meta_tag_t): blob_t
export function ot_metrics_get_position(font: font_t, metrics_tag: ot_metrics_tag_t): [ /* returnType */ bool_t, /* position */ position_t | null ]
export function ot_metrics_get_variation(font: font_t, metrics_tag: ot_metrics_tag_t): number
export function ot_metrics_get_x_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t
export function ot_metrics_get_y_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t
export function ot_name_get_utf16(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ number[] ]
export function ot_name_get_utf32(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ number[] ]
export function ot_name_get_utf8(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ string[] ]
export function ot_name_list_names(face: face_t): ot_name_entry_t[]
export function ot_shape_glyphs_closure(font: font_t, buffer: buffer_t, features: feature_t[]): /* glyphs */ set_t
export function ot_shape_plan_collect_lookups(shape_plan: shape_plan_t, table_tag: tag_t): /* lookup_indexes */ set_t
export function ot_tag_from_language(language: language_t): tag_t
export function ot_tag_to_language(tag: tag_t): language_t | null
export function ot_tag_to_script(tag: tag_t): script_t
export function ot_tags_from_script(script: script_t, script_tag_1: tag_t, script_tag_2: tag_t): void
export function ot_tags_from_script_and_language(script: script_t, language: language_t, script_count?: number | null, language_count?: number | null): [ /* script_count */ number | null, /* script_tags */ tag_t | null, /* language_count */ number | null, /* language_tags */ tag_t | null ]
export function ot_tags_to_script_and_language(script_tag: tag_t, language_tag: tag_t): [ /* script */ script_t | null, /* language */ language_t | null ]
export function ot_var_find_axis(face: face_t, axis_tag: tag_t, axis_index: number): [ /* returnType */ bool_t, /* axis_info */ ot_var_axis_t ]
export function ot_var_find_axis_info(face: face_t, axis_tag: tag_t): [ /* returnType */ bool_t, /* axis_info */ ot_var_axis_info_t ]
export function ot_var_get_axes(face: face_t, start_offset: number): [ /* returnType */ number, /* axes_array */ ot_var_axis_t[] ]
export function ot_var_get_axis_count(face: face_t): number
export function ot_var_get_axis_infos(face: face_t, start_offset: number): [ /* returnType */ number, /* axes_array */ ot_var_axis_info_t[] ]
export function ot_var_get_named_instance_count(face: face_t): number
export function ot_var_has_data(face: face_t): bool_t
export function ot_var_named_instance_get_design_coords(face: face_t, instance_index: number): [ /* returnType */ number, /* coords */ number[] ]
export function ot_var_named_instance_get_postscript_name_id(face: face_t, instance_index: number): ot_name_id_t
export function ot_var_named_instance_get_subfamily_name_id(face: face_t, instance_index: number): ot_name_id_t
export function ot_var_normalize_coords(face: face_t, coords_length: number, design_coords: number): /* normalized_coords */ number
export function ot_var_normalize_variations(face: face_t, variations: variation_t, variations_length: number): /* coords */ number[]
export function script_from_iso15924_tag(tag: tag_t): script_t
export function script_from_string(str: Uint8Array): script_t
export function script_get_horizontal_direction(script: script_t): direction_t
export function script_to_iso15924_tag(script: script_t): tag_t
export function segment_properties_equal(a: segment_properties_t, b: segment_properties_t): bool_t
export function segment_properties_hash(p: segment_properties_t): number
export function set_add(set: set_t, codepoint: codepoint_t): void
export function set_add_range(set: set_t, first: codepoint_t, last: codepoint_t): void
export function set_allocation_successful(set: set_t): bool_t
export function set_clear(set: set_t): void
export function set_create(): set_t
export function set_del(set: set_t, codepoint: codepoint_t): void
export function set_del_range(set: set_t, first: codepoint_t, last: codepoint_t): void
export function set_get_empty(): set_t
export function set_get_max(set: set_t): codepoint_t
export function set_get_min(set: set_t): codepoint_t
export function set_get_population(set: set_t): number
export function set_has(set: set_t, codepoint: codepoint_t): bool_t
export function set_intersect(set: set_t, other: set_t): void
export function set_invert(set: set_t): void
export function set_is_empty(set: set_t): bool_t
export function set_is_equal(set: set_t, other: set_t): bool_t
export function set_is_subset(set: set_t, larger_set: set_t): bool_t
export function set_next(set: set_t, codepoint: codepoint_t): [ /* returnType */ bool_t, /* codepoint */ codepoint_t ]
export function set_next_range(set: set_t, last: codepoint_t): [ /* returnType */ bool_t, /* first */ codepoint_t, /* last */ codepoint_t ]
export function set_previous(set: set_t, codepoint: codepoint_t): [ /* returnType */ bool_t, /* codepoint */ codepoint_t ]
export function set_previous_range(set: set_t, first: codepoint_t): [ /* returnType */ bool_t, /* first */ codepoint_t, /* last */ codepoint_t ]
export function set_set(set: set_t, other: set_t): void
export function set_subtract(set: set_t, other: set_t): void
export function set_symmetric_difference(set: set_t, other: set_t): void
export function set_union(set: set_t, other: set_t): void
export function shape(font: font_t, buffer: buffer_t, features: feature_t[] | null): void
export function shape_full(font: font_t, buffer: buffer_t, features: feature_t[] | null, shaper_list?: string[] | null): bool_t
export function shape_list_shapers(): string[]
export function shape_plan_create(face: face_t, props: segment_properties_t, user_features: feature_t[], shaper_list: string[]): shape_plan_t
export function shape_plan_create2(face: face_t, props: segment_properties_t, user_features: feature_t[], coords: number[], shaper_list: string[]): shape_plan_t
export function shape_plan_create_cached(face: face_t, props: segment_properties_t, user_features: feature_t[], shaper_list: string[]): shape_plan_t
export function shape_plan_create_cached2(face: face_t, props: segment_properties_t, user_features: feature_t[], coords: number[], shaper_list: string[]): shape_plan_t
export function shape_plan_execute(shape_plan: shape_plan_t, font: font_t, buffer: buffer_t, features: feature_t[]): bool_t
export function shape_plan_get_empty(): shape_plan_t
export function shape_plan_get_shaper(shape_plan: shape_plan_t): string
export function tag_from_string(str: Uint8Array): tag_t
export function tag_to_string(tag: tag_t): /* buf */ Uint8Array
export function unicode_combining_class(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t
export function unicode_compose(ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): [ /* returnType */ bool_t, /* ab */ codepoint_t ]
export function unicode_decompose(ufuncs: unicode_funcs_t, ab: codepoint_t): [ /* returnType */ bool_t, /* a */ codepoint_t, /* b */ codepoint_t ]
export function unicode_decompose_compatibility(ufuncs: unicode_funcs_t, u: codepoint_t): [ /* returnType */ number, /* decomposed */ codepoint_t ]
export function unicode_eastasian_width(ufuncs: unicode_funcs_t, unicode: codepoint_t): number
export function unicode_funcs_create(parent?: unicode_funcs_t | null): unicode_funcs_t
export function unicode_funcs_get_default(): unicode_funcs_t
export function unicode_funcs_get_empty(): unicode_funcs_t
export function unicode_funcs_get_parent(ufuncs: unicode_funcs_t): unicode_funcs_t
export function unicode_funcs_is_immutable(ufuncs: unicode_funcs_t): bool_t
export function unicode_funcs_make_immutable(ufuncs: unicode_funcs_t): void
export function unicode_funcs_set_combining_class_func(ufuncs: unicode_funcs_t, func: unicode_combining_class_func_t): void
export function unicode_funcs_set_compose_func(ufuncs: unicode_funcs_t, func: unicode_compose_func_t): void
export function unicode_funcs_set_decompose_compatibility_func(ufuncs: unicode_funcs_t, func: unicode_decompose_compatibility_func_t): void
export function unicode_funcs_set_decompose_func(ufuncs: unicode_funcs_t, func: unicode_decompose_func_t): void
export function unicode_funcs_set_eastasian_width_func(ufuncs: unicode_funcs_t, func: unicode_eastasian_width_func_t): void
export function unicode_funcs_set_general_category_func(ufuncs: unicode_funcs_t, func: unicode_general_category_func_t): void
export function unicode_funcs_set_mirroring_func(ufuncs: unicode_funcs_t, func: unicode_mirroring_func_t): void
export function unicode_funcs_set_script_func(ufuncs: unicode_funcs_t, func: unicode_script_func_t): void
export function unicode_general_category(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t
export function unicode_mirroring(ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t
export function unicode_script(ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t
export function variation_from_string(str: Uint8Array): [ /* returnType */ bool_t, /* variation */ variation_t ]
export function variation_to_string(variation: variation_t): /* buf */ string[]
export interface buffer_message_func_t {
    (buffer: buffer_t, font: font_t, message: string): bool_t
}
export interface destroy_func_t {
    (): void
}
export interface font_get_font_extents_func_t {
    (font: font_t, font_data?: object | null): bool_t
}
export interface font_get_glyph_advance_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t): position_t
}
export interface font_get_glyph_advances_func_t {
    (font: font_t, font_data: object | null, count: number, first_glyph: codepoint_t, glyph_stride: number, advance_stride: number): void
}
export interface font_get_glyph_contour_point_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, point_index: number): bool_t
}
export interface font_get_glyph_extents_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t): bool_t
}
export interface font_get_glyph_from_name_func_t {
    (font: font_t, font_data: object | null, name: string[]): bool_t
}
export interface font_get_glyph_func_t {
    (font: font_t, font_data: object | null, unicode: codepoint_t, variation_selector: codepoint_t): bool_t
}
export interface font_get_glyph_kerning_func_t {
    (font: font_t, font_data: object | null, first_glyph: codepoint_t, second_glyph: codepoint_t): position_t
}
export interface font_get_glyph_name_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t): bool_t
}
export interface font_get_glyph_origin_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t): bool_t
}
export interface font_get_nominal_glyph_func_t {
    (font: font_t, font_data: object | null, unicode: codepoint_t): bool_t
}
export interface font_get_nominal_glyphs_func_t {
    (font: font_t, font_data: object | null, count: number, first_unicode: codepoint_t, unicode_stride: number, glyph_stride: number): number
}
export interface font_get_variation_glyph_func_t {
    (font: font_t, font_data: object | null, unicode: codepoint_t, variation_selector: codepoint_t): bool_t
}
export interface reference_table_func_t {
    (face: face_t, tag: tag_t): blob_t
}
export interface unicode_combining_class_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t
}
export interface unicode_compose_func_t {
    (ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): bool_t
}
export interface unicode_decompose_compatibility_func_t {
    (ufuncs: unicode_funcs_t, u: codepoint_t, decomposed: codepoint_t): number
}
export interface unicode_decompose_func_t {
    (ufuncs: unicode_funcs_t, ab: codepoint_t): bool_t
}
export interface unicode_eastasian_width_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): number
}
export interface unicode_general_category_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t
}
export interface unicode_mirroring_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t
}
export interface unicode_script_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t
}
export class aat_layout_feature_selector_info_t {
    /* Fields of HarfBuzz.aat_layout_feature_selector_info_t */
    name_id: ot_name_id_t
    enable: aat_layout_feature_selector_t
    disable: aat_layout_feature_selector_t
    static name: string
}
export class blob_t {
    static name: string
}
export class buffer_t {
    static name: string
}
export class face_t {
    static name: string
}
export class feature_t {
    /* Fields of HarfBuzz.feature_t */
    tag: tag_t
    value: number
    start: number
    end: number
    /* Methods of HarfBuzz.feature_t */
    _string(): /* buf */ string[]
    static name: string
}
export class font_extents_t {
    /* Fields of HarfBuzz.font_extents_t */
    ascender: position_t
    descender: position_t
    line_gap: position_t
    static name: string
}
export class font_funcs_t {
    static name: string
}
export class font_t {
    static name: string
}
export class glyph_extents_t {
    /* Fields of HarfBuzz.glyph_extents_t */
    x_bearing: position_t
    y_bearing: position_t
    width: position_t
    height: position_t
    static name: string
}
export class glyph_info_t {
    /* Fields of HarfBuzz.glyph_info_t */
    codepoint: codepoint_t
    cluster: number
    static name: string
}
export class glyph_position_t {
    /* Fields of HarfBuzz.glyph_position_t */
    x_advance: position_t
    y_advance: position_t
    x_offset: position_t
    y_offset: position_t
    static name: string
}
export class language_t {
    /* Methods of HarfBuzz.language_t */
    _string(): string
    static name: string
}
export class map_t {
    static name: string
}
export class ot_color_layer_t {
    /* Fields of HarfBuzz.ot_color_layer_t */
    glyph: codepoint_t
    color_index: number
    static name: string
}
export class ot_math_glyph_part_t {
    /* Fields of HarfBuzz.ot_math_glyph_part_t */
    glyph: codepoint_t
    start_connector_length: position_t
    end_connector_length: position_t
    full_advance: position_t
    flags: ot_math_glyph_part_flags_t
    static name: string
}
export class ot_math_glyph_variant_t {
    /* Fields of HarfBuzz.ot_math_glyph_variant_t */
    glyph: codepoint_t
    advance: position_t
    static name: string
}
export class ot_name_entry_t {
    /* Fields of HarfBuzz.ot_name_entry_t */
    name_id: ot_name_id_t
    language: language_t
    static name: string
}
export class ot_var_axis_info_t {
    /* Fields of HarfBuzz.ot_var_axis_info_t */
    axis_index: number
    tag: tag_t
    name_id: ot_name_id_t
    flags: ot_var_axis_flags_t
    min_value: number
    default_value: number
    max_value: number
    static name: string
}
export class ot_var_axis_t {
    /* Fields of HarfBuzz.ot_var_axis_t */
    tag: tag_t
    name_id: ot_name_id_t
    min_value: number
    default_value: number
    max_value: number
    static name: string
}
export class segment_properties_t {
    /* Fields of HarfBuzz.segment_properties_t */
    direction: direction_t
    script: script_t
    language: language_t
    static name: string
}
export class set_t {
    static name: string
}
export class shape_plan_t {
    static name: string
}
export class unicode_funcs_t {
    static name: string
}
export class user_data_key_t {
    static name: string
}
export class variation_t {
    /* Fields of HarfBuzz.variation_t */
    tag: tag_t
    value: number
    /* Methods of HarfBuzz.variation_t */
    _string(): /* buf */ string[]
    static name: string
}
export class var_int_t {
    /* Fields of HarfBuzz.var_int_t */
    u32: number
    i32: number
    u16: number[]
    i16: number[]
    u8: Uint8Array
    i8: Uint8Array
    static name: string
}
type bool_t = number
type codepoint_t = number
type color_t = number
type font_get_font_h_extents_func_t = font_get_font_extents_func_t
type font_get_font_v_extents_func_t = font_get_font_extents_func_t
type font_get_glyph_h_advance_func_t = font_get_glyph_advance_func_t
type font_get_glyph_h_advances_func_t = font_get_glyph_advances_func_t
type font_get_glyph_h_kerning_func_t = font_get_glyph_kerning_func_t
type font_get_glyph_h_origin_func_t = font_get_glyph_origin_func_t
type font_get_glyph_v_advance_func_t = font_get_glyph_advance_func_t
type font_get_glyph_v_advances_func_t = font_get_glyph_advances_func_t
type font_get_glyph_v_kerning_func_t = font_get_glyph_kerning_func_t
type font_get_glyph_v_origin_func_t = font_get_glyph_origin_func_t
type mask_t = number
type ot_name_id_t = number
type position_t = number
type tag_t = number