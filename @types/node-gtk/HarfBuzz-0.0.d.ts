/**
 * HarfBuzz-0.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace HarfBuzz {

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
export function aatLayoutFeatureTypeGetNameId(face: face_t, featureType: aat_layout_feature_type_t): ot_name_id_t
export function aatLayoutFeatureTypeGetSelectorInfos(face: face_t, featureType: aat_layout_feature_type_t, startOffset: number): [ /* returnType */ number, /* selectors */ aat_layout_feature_selector_info_t[] | null, /* defaultIndex */ number | null ]
export function aatLayoutGetFeatureTypes(face: face_t, startOffset: number): [ /* returnType */ number, /* features */ aat_layout_feature_type_t[] ]
export function aatLayoutHasPositioning(face: face_t): bool_t
export function aatLayoutHasSubstitution(face: face_t): bool_t
export function aatLayoutHasTracking(face: face_t): bool_t
export function blobCopyWritableOrFail(blob: blob_t): blob_t
export function blobCreateFromFile(fileName: string): blob_t
export function blobCreateSubBlob(parent: blob_t, offset: number, length: number): blob_t
export function blobGetData(blob: blob_t): string[]
export function blobGetDataWritable(blob: blob_t): string[]
export function blobGetEmpty(): blob_t
export function blobGetLength(blob: blob_t): number
export function blobIsImmutable(blob: blob_t): bool_t
export function blobMakeImmutable(blob: blob_t): void
export function bufferAdd(buffer: buffer_t, codepoint: codepoint_t, cluster: number): void
export function bufferAddCodepoints(buffer: buffer_t, text: codepoint_t[], itemOffset: number, itemLength: number): void
export function bufferAddLatin1(buffer: buffer_t, text: any, itemOffset: number, itemLength: number): void
export function bufferAddUtf16(buffer: buffer_t, text: number[], itemOffset: number, itemLength: number): void
export function bufferAddUtf32(buffer: buffer_t, text: number[], itemOffset: number, itemLength: number): void
export function bufferAddUtf8(buffer: buffer_t, text: any, itemOffset: number, itemLength: number): void
export function bufferAllocationSuccessful(buffer: buffer_t): bool_t
export function bufferAppend(buffer: buffer_t, source: buffer_t, start: number, end: number): void
export function bufferClearContents(buffer: buffer_t): void
export function bufferCreate(): buffer_t
export function bufferDeserializeGlyphs(buffer: buffer_t, buf: string[], font: font_t | null, format: buffer_serialize_format_t): [ /* returnType */ bool_t, /* endPtr */ string | null ]
export function bufferDeserializeUnicode(buffer: buffer_t, buf: string[], format: buffer_serialize_format_t): [ /* returnType */ bool_t, /* endPtr */ string | null ]
export function bufferDiff(buffer: buffer_t, reference: buffer_t, dottedcircleGlyph: codepoint_t, positionFuzz: number): buffer_diff_flags_t
export function bufferGetClusterLevel(buffer: buffer_t): buffer_cluster_level_t
export function bufferGetContentType(buffer: buffer_t): buffer_content_type_t
export function bufferGetDirection(buffer: buffer_t): direction_t
export function bufferGetEmpty(): buffer_t
export function bufferGetFlags(buffer: buffer_t): buffer_flags_t
export function bufferGetGlyphInfos(buffer: buffer_t): glyph_info_t[]
export function bufferGetGlyphPositions(buffer: buffer_t): glyph_position_t[]
export function bufferGetInvisibleGlyph(buffer: buffer_t): codepoint_t
export function bufferGetLanguage(buffer: buffer_t): language_t
export function bufferGetLength(buffer: buffer_t): number
export function bufferGetReplacementCodepoint(buffer: buffer_t): codepoint_t
export function bufferGetScript(buffer: buffer_t): script_t
export function bufferGetSegmentProperties(buffer: buffer_t): /* props */ segment_properties_t
export function bufferGetUnicodeFuncs(buffer: buffer_t): unicode_funcs_t
export function bufferGuessSegmentProperties(buffer: buffer_t): void
export function bufferHasPositions(buffer: buffer_t): bool_t
export function bufferNormalizeGlyphs(buffer: buffer_t): void
export function bufferPreAllocate(buffer: buffer_t, size: number): bool_t
export function bufferReset(buffer: buffer_t): void
export function bufferReverse(buffer: buffer_t): void
export function bufferReverseClusters(buffer: buffer_t): void
export function bufferReverseRange(buffer: buffer_t, start: number, end: number): void
export function bufferSerialize(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ any, /* bufConsumed */ number | null ]
export function bufferSerializeFormatFromString(str: any): buffer_serialize_format_t
export function bufferSerializeFormatToString(format: buffer_serialize_format_t): string
export function bufferSerializeGlyphs(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ any, /* bufConsumed */ number | null ]
export function bufferSerializeListFormats(): string[]
export function bufferSerializeUnicode(buffer: buffer_t, start: number, end: number, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ any, /* bufConsumed */ number | null ]
export function bufferSetClusterLevel(buffer: buffer_t, clusterLevel: buffer_cluster_level_t): void
export function bufferSetContentType(buffer: buffer_t, contentType: buffer_content_type_t): void
export function bufferSetDirection(buffer: buffer_t, direction: direction_t): void
export function bufferSetFlags(buffer: buffer_t, flags: buffer_flags_t): void
export function bufferSetInvisibleGlyph(buffer: buffer_t, invisible: codepoint_t): void
export function bufferSetLanguage(buffer: buffer_t, language: language_t): void
export function bufferSetLength(buffer: buffer_t, length: number): bool_t
export function bufferSetMessageFunc(buffer: buffer_t, func: buffer_message_func_t): void
export function bufferSetReplacementCodepoint(buffer: buffer_t, replacement: codepoint_t): void
export function bufferSetScript(buffer: buffer_t, script: script_t): void
export function bufferSetSegmentProperties(buffer: buffer_t, props: segment_properties_t): void
export function bufferSetUnicodeFuncs(buffer: buffer_t, unicodeFuncs: unicode_funcs_t): void
export function colorGetAlpha(color: color_t): number
export function colorGetBlue(color: color_t): number
export function colorGetGreen(color: color_t): number
export function colorGetRed(color: color_t): number
export function directionFromString(str: any): direction_t
export function directionToString(direction: direction_t): string
export function faceBuilderAddTable(face: face_t, tag: tag_t, blob: blob_t): bool_t
export function faceBuilderCreate(): face_t
export function faceCollectUnicodes(face: face_t, out: set_t): void
export function faceCollectVariationSelectors(face: face_t, out: set_t): void
export function faceCollectVariationUnicodes(face: face_t, variationSelector: codepoint_t, out: set_t): void
export function faceCount(blob: blob_t): number
export function faceCreate(blob: blob_t, index: number): face_t
export function faceCreateForTables(referenceTableFunc: reference_table_func_t): face_t
export function faceGetEmpty(): face_t
export function faceGetGlyphCount(face: face_t): number
export function faceGetIndex(face: face_t): number
export function faceGetTableTags(face: face_t, startOffset: number): [ /* returnType */ number, /* tableTags */ tag_t[] ]
export function faceGetUpem(face: face_t): number
export function faceIsImmutable(face: face_t): bool_t
export function faceMakeImmutable(face: face_t): void
export function faceReferenceBlob(face: face_t): blob_t
export function faceReferenceTable(face: face_t, tag: tag_t): blob_t
export function faceSetGlyphCount(face: face_t, glyphCount: number): void
export function faceSetIndex(face: face_t, index: number): void
export function faceSetUpem(face: face_t, upem: number): void
export function featureFromString(str: any): [ /* returnType */ bool_t, /* feature */ feature_t ]
export function featureToString(feature: feature_t): /* buf */ string[]
export function fontAddGlyphOriginForDirection(font: font_t, glyph: codepoint_t, direction: direction_t, x: position_t, y: position_t): [ /* x */ position_t, /* y */ position_t ]
export function fontCreate(face: face_t): font_t
export function fontCreateSubFont(parent: font_t): font_t
export function fontFuncsCreate(): font_funcs_t
export function fontFuncsGetEmpty(): font_funcs_t
export function fontFuncsIsImmutable(ffuncs: font_funcs_t): bool_t
export function fontFuncsMakeImmutable(ffuncs: font_funcs_t): void
export function fontFuncsSetFontHExtentsFunc(ffuncs: font_funcs_t, func: font_get_font_h_extents_func_t): void
export function fontFuncsSetFontVExtentsFunc(ffuncs: font_funcs_t, func: font_get_font_v_extents_func_t): void
export function fontFuncsSetGlyphContourPointFunc(ffuncs: font_funcs_t, func: font_get_glyph_contour_point_func_t): void
export function fontFuncsSetGlyphExtentsFunc(ffuncs: font_funcs_t, func: font_get_glyph_extents_func_t): void
export function fontFuncsSetGlyphFromNameFunc(ffuncs: font_funcs_t, func: font_get_glyph_from_name_func_t): void
export function fontFuncsSetGlyphFunc(ffuncs: font_funcs_t, func: font_get_glyph_func_t): void
export function fontFuncsSetGlyphHAdvanceFunc(ffuncs: font_funcs_t, func: font_get_glyph_h_advance_func_t): void
export function fontFuncsSetGlyphHAdvancesFunc(ffuncs: font_funcs_t, func: font_get_glyph_h_advances_func_t): void
export function fontFuncsSetGlyphHKerningFunc(ffuncs: font_funcs_t, func: font_get_glyph_h_kerning_func_t): void
export function fontFuncsSetGlyphHOriginFunc(ffuncs: font_funcs_t, func: font_get_glyph_h_origin_func_t): void
export function fontFuncsSetGlyphNameFunc(ffuncs: font_funcs_t, func: font_get_glyph_name_func_t): void
export function fontFuncsSetGlyphVAdvanceFunc(ffuncs: font_funcs_t, func: font_get_glyph_v_advance_func_t): void
export function fontFuncsSetGlyphVAdvancesFunc(ffuncs: font_funcs_t, func: font_get_glyph_v_advances_func_t): void
export function fontFuncsSetGlyphVKerningFunc(ffuncs: font_funcs_t, func: font_get_glyph_v_kerning_func_t): void
export function fontFuncsSetGlyphVOriginFunc(ffuncs: font_funcs_t, func: font_get_glyph_v_origin_func_t): void
export function fontFuncsSetNominalGlyphFunc(ffuncs: font_funcs_t, func: font_get_nominal_glyph_func_t): void
export function fontFuncsSetNominalGlyphsFunc(ffuncs: font_funcs_t, func: font_get_nominal_glyphs_func_t): void
export function fontFuncsSetVariationGlyphFunc(ffuncs: font_funcs_t, func: font_get_variation_glyph_func_t): void
export function fontGetEmpty(): font_t
export function fontGetExtentsForDirection(font: font_t, direction: direction_t): /* extents */ font_extents_t
export function fontGetFace(font: font_t): face_t
export function fontGetGlyph(font: font_t, unicode: codepoint_t, variationSelector: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function fontGetGlyphAdvanceForDirection(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
export function fontGetGlyphAdvancesForDirection(font: font_t, direction: direction_t, count: number, firstGlyph: codepoint_t, glyphStride: number): [ /* firstAdvance */ position_t, /* advanceStride */ number ]
export function fontGetGlyphContourPoint(font: font_t, glyph: codepoint_t, pointIndex: number): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function fontGetGlyphContourPointForOrigin(font: font_t, glyph: codepoint_t, pointIndex: number, direction: direction_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function fontGetGlyphExtents(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* extents */ glyph_extents_t ]
export function fontGetGlyphExtentsForOrigin(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* returnType */ bool_t, /* extents */ glyph_extents_t ]
export function fontGetGlyphFromName(font: font_t, name: string[]): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function fontGetGlyphHAdvance(font: font_t, glyph: codepoint_t): position_t
export function fontGetGlyphHAdvances(font: font_t, count: number, firstGlyph: codepoint_t, glyphStride: number, advanceStride: number): /* firstAdvance */ position_t
export function fontGetGlyphHKerning(font: font_t, leftGlyph: codepoint_t, rightGlyph: codepoint_t): position_t
export function fontGetGlyphHOrigin(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function fontGetGlyphKerningForDirection(font: font_t, firstGlyph: codepoint_t, secondGlyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
export function fontGetGlyphName(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* name */ string[] ]
export function fontGetGlyphOriginForDirection(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
export function fontGetGlyphVAdvance(font: font_t, glyph: codepoint_t): position_t
export function fontGetGlyphVAdvances(font: font_t, count: number, firstGlyph: codepoint_t, glyphStride: number): [ /* firstAdvance */ position_t, /* advanceStride */ number ]
export function fontGetGlyphVKerning(font: font_t, topGlyph: codepoint_t, bottomGlyph: codepoint_t): position_t
export function fontGetGlyphVOrigin(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function fontGetHExtents(font: font_t): [ /* returnType */ bool_t, /* extents */ font_extents_t ]
export function fontGetNominalGlyph(font: font_t, unicode: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function fontGetNominalGlyphs(font: font_t, count: number, firstUnicode: codepoint_t, unicodeStride: number, glyphStride: number): [ /* returnType */ number, /* firstGlyph */ codepoint_t ]
export function fontGetParent(font: font_t): font_t
export function fontGetPpem(font: font_t): [ /* xPpem */ number, /* yPpem */ number ]
export function fontGetPtem(font: font_t): number
export function fontGetScale(font: font_t): [ /* xScale */ number, /* yScale */ number ]
export function fontGetVExtents(font: font_t): [ /* returnType */ bool_t, /* extents */ font_extents_t ]
export function fontGetVarCoordsNormalized(font: font_t, length: number): number
export function fontGetVariationGlyph(font: font_t, unicode: codepoint_t, variationSelector: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function fontGlyphFromString(font: font_t, s: any): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function fontGlyphToString(font: font_t, glyph: codepoint_t): /* s */ string[]
export function fontIsImmutable(font: font_t): bool_t
export function fontMakeImmutable(font: font_t): void
export function fontSetFace(font: font_t, face: face_t): void
export function fontSetFuncs(font: font_t, klass: font_funcs_t): void
export function fontSetFuncsData(font: font_t, fontData?: object | null): void
export function fontSetParent(font: font_t, parent: font_t): void
export function fontSetPpem(font: font_t, xPpem: number, yPpem: number): void
export function fontSetPtem(font: font_t, ptem: number): void
export function fontSetScale(font: font_t, xScale: number, yScale: number): void
export function fontSetVarCoordsDesign(font: font_t, coords: number[]): void
export function fontSetVarCoordsNormalized(font: font_t, coords: number[]): void
export function fontSetVarNamedInstance(font: font_t, instanceIndex: number): void
export function fontSetVariations(font: font_t, variations: variation_t[]): void
export function fontSubtractGlyphOriginForDirection(font: font_t, glyph: codepoint_t, direction: direction_t, x: position_t, y: position_t): [ /* x */ position_t, /* y */ position_t ]
export function ftFontChanged(font: font_t): void
export function ftFontGetLoadFlags(font: font_t): number
export function ftFontSetFuncs(font: font_t): void
export function ftFontSetLoadFlags(font: font_t, loadFlags: number): void
export function ftFontUnlockFace(font: font_t): void
export function glibBlobCreate(gbytes: any): blob_t
export function glibGetUnicodeFuncs(): unicode_funcs_t
export function glibScriptFromScript(script: script_t): GLib.UnicodeScript
export function glibScriptToScript(script: GLib.UnicodeScript): script_t
export function glyphInfoGetGlyphFlags(info: glyph_info_t): glyph_flags_t
export function languageFromString(str: any): language_t
export function languageGetDefault(): language_t
export function languageToString(language: language_t): string
export function mapAllocationSuccessful(map: map_t): bool_t
export function mapClear(map: map_t): void
export function mapCreate(): map_t
export function mapDel(map: map_t, key: codepoint_t): void
export function mapGet(map: map_t, key: codepoint_t): codepoint_t
export function mapGetEmpty(): map_t
export function mapGetPopulation(map: map_t): number
export function mapHas(map: map_t, key: codepoint_t): bool_t
export function mapIsEmpty(map: map_t): bool_t
export function mapSet(map: map_t, key: codepoint_t, value: codepoint_t): void
export function otColorGlyphGetLayers(face: face_t, glyph: codepoint_t, startOffset: number): [ /* returnType */ number, /* layers */ ot_color_layer_t[] | null ]
export function otColorGlyphReferencePng(font: font_t, glyph: codepoint_t): blob_t
export function otColorGlyphReferenceSvg(face: face_t, glyph: codepoint_t): blob_t
export function otColorHasLayers(face: face_t): bool_t
export function otColorHasPalettes(face: face_t): bool_t
export function otColorHasPng(face: face_t): bool_t
export function otColorHasSvg(face: face_t): bool_t
export function otColorPaletteColorGetNameId(face: face_t, colorIndex: number): ot_name_id_t
export function otColorPaletteGetColors(face: face_t, paletteIndex: number, startOffset: number): [ /* returnType */ number, /* colors */ color_t[] | null ]
export function otColorPaletteGetCount(face: face_t): number
export function otColorPaletteGetFlags(face: face_t, paletteIndex: number): ot_color_palette_flags_t
export function otColorPaletteGetNameId(face: face_t, paletteIndex: number): ot_name_id_t
export function otFontSetFuncs(font: font_t): void
export function otLayoutCollectFeatures(face: face_t, tableTag: tag_t, scripts: tag_t, languages: tag_t, features: tag_t): /* featureIndexes */ set_t
export function otLayoutCollectLookups(face: face_t, tableTag: tag_t, scripts: tag_t, languages: tag_t, features: tag_t): /* lookupIndexes */ set_t
export function otLayoutFeatureGetCharacters(face: face_t, tableTag: tag_t, featureIndex: number, startOffset: number): [ /* returnType */ number, /* characters */ codepoint_t[] ]
export function otLayoutFeatureGetLookups(face: face_t, tableTag: tag_t, featureIndex: number, startOffset: number): [ /* returnType */ number, /* lookupIndexes */ number[] ]
export function otLayoutFeatureGetNameIds(face: face_t, tableTag: tag_t, featureIndex: number): [ /* returnType */ bool_t, /* labelId */ ot_name_id_t | null, /* tooltipId */ ot_name_id_t | null, /* sampleId */ ot_name_id_t | null, /* numNamedParameters */ number | null, /* firstParamId */ ot_name_id_t | null ]
export function otLayoutFeatureWithVariationsGetLookups(face: face_t, tableTag: tag_t, featureIndex: number, variationsIndex: number, startOffset: number): [ /* returnType */ number, /* lookupIndexes */ number[] ]
export function otLayoutGetAttachPoints(face: face_t, glyph: codepoint_t, startOffset: number): [ /* returnType */ number, /* pointArray */ number[] ]
export function otLayoutGetBaseline(font: font_t, baselineTag: ot_layout_baseline_tag_t, direction: direction_t, scriptTag: tag_t, languageTag: tag_t): [ /* returnType */ bool_t, /* coord */ position_t ]
export function otLayoutGetGlyphClass(face: face_t, glyph: codepoint_t): ot_layout_glyph_class_t
export function otLayoutGetGlyphsInClass(face: face_t, klass: ot_layout_glyph_class_t): /* glyphs */ set_t
export function otLayoutGetLigatureCarets(font: font_t, direction: direction_t, glyph: codepoint_t, startOffset: number): [ /* returnType */ number, /* caretArray */ position_t[] ]
export function otLayoutGetSizeParams(face: face_t): [ /* returnType */ bool_t, /* designSize */ number, /* subfamilyId */ number, /* subfamilyNameId */ ot_name_id_t, /* rangeStart */ number, /* rangeEnd */ number ]
export function otLayoutHasGlyphClasses(face: face_t): bool_t
export function otLayoutHasPositioning(face: face_t): bool_t
export function otLayoutHasSubstitution(face: face_t): bool_t
export function otLayoutLanguageFindFeature(face: face_t, tableTag: tag_t, scriptIndex: number, languageIndex: number, featureTag: tag_t): [ /* returnType */ bool_t, /* featureIndex */ number ]
export function otLayoutLanguageGetFeatureIndexes(face: face_t, tableTag: tag_t, scriptIndex: number, languageIndex: number, startOffset: number): [ /* returnType */ number, /* featureIndexes */ number[] ]
export function otLayoutLanguageGetFeatureTags(face: face_t, tableTag: tag_t, scriptIndex: number, languageIndex: number, startOffset: number): [ /* returnType */ number, /* featureTags */ tag_t[] ]
export function otLayoutLanguageGetRequiredFeature(face: face_t, tableTag: tag_t, scriptIndex: number, languageIndex: number): [ /* returnType */ bool_t, /* featureIndex */ number, /* featureTag */ tag_t ]
export function otLayoutLanguageGetRequiredFeatureIndex(face: face_t, tableTag: tag_t, scriptIndex: number, languageIndex: number): [ /* returnType */ bool_t, /* featureIndex */ number ]
export function otLayoutLookupCollectGlyphs(face: face_t, tableTag: tag_t, lookupIndex: number): [ /* glyphsBefore */ set_t, /* glyphsInput */ set_t, /* glyphsAfter */ set_t, /* glyphsOutput */ set_t ]
export function otLayoutLookupGetGlyphAlternates(face: face_t, lookupIndex: number, glyph: codepoint_t, startOffset: number): [ /* returnType */ number, /* alternateGlyphs */ codepoint_t[] ]
export function otLayoutLookupSubstituteClosure(face: face_t, lookupIndex: number): /* glyphs */ set_t
export function otLayoutLookupWouldSubstitute(face: face_t, lookupIndex: number, glyphs: codepoint_t, glyphsLength: number, zeroContext: bool_t): bool_t
export function otLayoutLookupsSubstituteClosure(face: face_t, lookups: set_t): /* glyphs */ set_t
export function otLayoutScriptFindLanguage(face: face_t, tableTag: tag_t, scriptIndex: number, languageTag: tag_t, languageIndex: number): bool_t
export function otLayoutScriptGetLanguageTags(face: face_t, tableTag: tag_t, scriptIndex: number, startOffset: number): [ /* returnType */ number, /* languageTags */ tag_t[] ]
export function otLayoutScriptSelectLanguage(face: face_t, tableTag: tag_t, scriptIndex: number, languageCount: number, languageTags: tag_t): [ /* returnType */ bool_t, /* languageIndex */ number ]
export function otLayoutTableChooseScript(face: face_t, tableTag: tag_t, scriptTags: tag_t): [ /* returnType */ bool_t, /* scriptIndex */ number, /* chosenScript */ tag_t ]
export function otLayoutTableFindFeatureVariations(face: face_t, tableTag: tag_t, coords: number, numCoords: number): [ /* returnType */ bool_t, /* variationsIndex */ number ]
export function otLayoutTableFindScript(face: face_t, tableTag: tag_t, scriptTag: tag_t): [ /* returnType */ bool_t, /* scriptIndex */ number ]
export function otLayoutTableGetFeatureTags(face: face_t, tableTag: tag_t, startOffset: number): [ /* returnType */ number, /* featureTags */ tag_t[] ]
export function otLayoutTableGetLookupCount(face: face_t, tableTag: tag_t): number
export function otLayoutTableGetScriptTags(face: face_t, tableTag: tag_t, startOffset: number): [ /* returnType */ number, /* scriptTags */ tag_t[] ]
export function otLayoutTableSelectScript(face: face_t, tableTag: tag_t, scriptCount: number, scriptTags: tag_t): [ /* returnType */ bool_t, /* scriptIndex */ number | null, /* chosenScript */ tag_t | null ]
export function otMathGetConstant(font: font_t, constant: ot_math_constant_t): position_t
export function otMathGetGlyphAssembly(font: font_t, glyph: codepoint_t, direction: direction_t, startOffset: number): [ /* returnType */ number, /* parts */ ot_math_glyph_part_t[], /* italicsCorrection */ position_t ]
export function otMathGetGlyphItalicsCorrection(font: font_t, glyph: codepoint_t): position_t
export function otMathGetGlyphKerning(font: font_t, glyph: codepoint_t, kern: ot_math_kern_t, correctionHeight: position_t): position_t
export function otMathGetGlyphTopAccentAttachment(font: font_t, glyph: codepoint_t): position_t
export function otMathGetGlyphVariants(font: font_t, glyph: codepoint_t, direction: direction_t, startOffset: number): [ /* returnType */ number, /* variants */ ot_math_glyph_variant_t[] ]
export function otMathGetMinConnectorOverlap(font: font_t, direction: direction_t): position_t
export function otMathHasData(face: face_t): bool_t
export function otMathIsGlyphExtendedShape(face: face_t, glyph: codepoint_t): bool_t
export function otMetaGetEntryTags(face: face_t, startOffset: number): [ /* returnType */ number, /* entries */ ot_meta_tag_t[] ]
export function otMetaReferenceEntry(face: face_t, metaTag: ot_meta_tag_t): blob_t
export function otMetricsGetPosition(font: font_t, metricsTag: ot_metrics_tag_t): [ /* returnType */ bool_t, /* position */ position_t | null ]
export function otMetricsGetVariation(font: font_t, metricsTag: ot_metrics_tag_t): number
export function otMetricsGetXVariation(font: font_t, metricsTag: ot_metrics_tag_t): position_t
export function otMetricsGetYVariation(font: font_t, metricsTag: ot_metrics_tag_t): position_t
export function otNameGetUtf16(face: face_t, nameId: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ number[] ]
export function otNameGetUtf32(face: face_t, nameId: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ number[] ]
export function otNameGetUtf8(face: face_t, nameId: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ string[] ]
export function otNameListNames(face: face_t): ot_name_entry_t[]
export function otShapeGlyphsClosure(font: font_t, buffer: buffer_t, features: feature_t[]): /* glyphs */ set_t
export function otShapePlanCollectLookups(shapePlan: shape_plan_t, tableTag: tag_t): /* lookupIndexes */ set_t
export function otTagFromLanguage(language: language_t): tag_t
export function otTagToLanguage(tag: tag_t): language_t | null
export function otTagToScript(tag: tag_t): script_t
export function otTagsFromScript(script: script_t, scriptTag1: tag_t, scriptTag2: tag_t): void
export function otTagsFromScriptAndLanguage(script: script_t, language: language_t, scriptCount?: number | null, languageCount?: number | null): [ /* scriptCount */ number | null, /* scriptTags */ tag_t | null, /* languageCount */ number | null, /* languageTags */ tag_t | null ]
export function otTagsToScriptAndLanguage(scriptTag: tag_t, languageTag: tag_t): [ /* script */ script_t | null, /* language */ language_t | null ]
export function otVarFindAxis(face: face_t, axisTag: tag_t, axisIndex: number): [ /* returnType */ bool_t, /* axisInfo */ ot_var_axis_t ]
export function otVarFindAxisInfo(face: face_t, axisTag: tag_t): [ /* returnType */ bool_t, /* axisInfo */ ot_var_axis_info_t ]
export function otVarGetAxes(face: face_t, startOffset: number): [ /* returnType */ number, /* axesArray */ ot_var_axis_t[] ]
export function otVarGetAxisCount(face: face_t): number
export function otVarGetAxisInfos(face: face_t, startOffset: number): [ /* returnType */ number, /* axesArray */ ot_var_axis_info_t[] ]
export function otVarGetNamedInstanceCount(face: face_t): number
export function otVarHasData(face: face_t): bool_t
export function otVarNamedInstanceGetDesignCoords(face: face_t, instanceIndex: number): [ /* returnType */ number, /* coords */ number[] ]
export function otVarNamedInstanceGetPostscriptNameId(face: face_t, instanceIndex: number): ot_name_id_t
export function otVarNamedInstanceGetSubfamilyNameId(face: face_t, instanceIndex: number): ot_name_id_t
export function otVarNormalizeCoords(face: face_t, coordsLength: number, designCoords: number): /* normalizedCoords */ number
export function otVarNormalizeVariations(face: face_t, variations: variation_t, variationsLength: number): /* coords */ number[]
export function scriptFromIso15924Tag(tag: tag_t): script_t
export function scriptFromString(str: any): script_t
export function scriptGetHorizontalDirection(script: script_t): direction_t
export function scriptToIso15924Tag(script: script_t): tag_t
export function segmentPropertiesEqual(a: segment_properties_t, b: segment_properties_t): bool_t
export function segmentPropertiesHash(p: segment_properties_t): number
export function setAdd(set: set_t, codepoint: codepoint_t): void
export function setAddRange(set: set_t, first: codepoint_t, last: codepoint_t): void
export function setAllocationSuccessful(set: set_t): bool_t
export function setClear(set: set_t): void
export function setCreate(): set_t
export function setDel(set: set_t, codepoint: codepoint_t): void
export function setDelRange(set: set_t, first: codepoint_t, last: codepoint_t): void
export function setGetEmpty(): set_t
export function setGetMax(set: set_t): codepoint_t
export function setGetMin(set: set_t): codepoint_t
export function setGetPopulation(set: set_t): number
export function setHas(set: set_t, codepoint: codepoint_t): bool_t
export function setIntersect(set: set_t, other: set_t): void
export function setInvert(set: set_t): void
export function setIsEmpty(set: set_t): bool_t
export function setIsEqual(set: set_t, other: set_t): bool_t
export function setIsSubset(set: set_t, largerSet: set_t): bool_t
export function setNext(set: set_t, codepoint: codepoint_t): [ /* returnType */ bool_t, /* codepoint */ codepoint_t ]
export function setNextRange(set: set_t, last: codepoint_t): [ /* returnType */ bool_t, /* first */ codepoint_t, /* last */ codepoint_t ]
export function setPrevious(set: set_t, codepoint: codepoint_t): [ /* returnType */ bool_t, /* codepoint */ codepoint_t ]
export function setPreviousRange(set: set_t, first: codepoint_t): [ /* returnType */ bool_t, /* first */ codepoint_t, /* last */ codepoint_t ]
export function setSet(set: set_t, other: set_t): void
export function setSubtract(set: set_t, other: set_t): void
export function setSymmetricDifference(set: set_t, other: set_t): void
export function setUnion(set: set_t, other: set_t): void
export function shape(font: font_t, buffer: buffer_t, features: feature_t[] | null): void
export function shapeFull(font: font_t, buffer: buffer_t, features: feature_t[] | null, shaperList?: string[] | null): bool_t
export function shapeListShapers(): string[]
export function shapePlanCreate(face: face_t, props: segment_properties_t, userFeatures: feature_t[], shaperList: string[]): shape_plan_t
export function shapePlanCreate2(face: face_t, props: segment_properties_t, userFeatures: feature_t[], coords: number[], shaperList: string[]): shape_plan_t
export function shapePlanCreateCached(face: face_t, props: segment_properties_t, userFeatures: feature_t[], shaperList: string[]): shape_plan_t
export function shapePlanCreateCached2(face: face_t, props: segment_properties_t, userFeatures: feature_t[], coords: number[], shaperList: string[]): shape_plan_t
export function shapePlanExecute(shapePlan: shape_plan_t, font: font_t, buffer: buffer_t, features: feature_t[]): bool_t
export function shapePlanGetEmpty(): shape_plan_t
export function shapePlanGetShaper(shapePlan: shape_plan_t): string
export function tagFromString(str: any): tag_t
export function tagToString(tag: tag_t): /* buf */ any
export function unicodeCombiningClass(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t
export function unicodeCompose(ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): [ /* returnType */ bool_t, /* ab */ codepoint_t ]
export function unicodeDecompose(ufuncs: unicode_funcs_t, ab: codepoint_t): [ /* returnType */ bool_t, /* a */ codepoint_t, /* b */ codepoint_t ]
export function unicodeDecomposeCompatibility(ufuncs: unicode_funcs_t, u: codepoint_t): [ /* returnType */ number, /* decomposed */ codepoint_t ]
export function unicodeEastasianWidth(ufuncs: unicode_funcs_t, unicode: codepoint_t): number
export function unicodeFuncsCreate(parent?: unicode_funcs_t | null): unicode_funcs_t
export function unicodeFuncsGetDefault(): unicode_funcs_t
export function unicodeFuncsGetEmpty(): unicode_funcs_t
export function unicodeFuncsGetParent(ufuncs: unicode_funcs_t): unicode_funcs_t
export function unicodeFuncsIsImmutable(ufuncs: unicode_funcs_t): bool_t
export function unicodeFuncsMakeImmutable(ufuncs: unicode_funcs_t): void
export function unicodeFuncsSetCombiningClassFunc(ufuncs: unicode_funcs_t, func: unicode_combining_class_func_t): void
export function unicodeFuncsSetComposeFunc(ufuncs: unicode_funcs_t, func: unicode_compose_func_t): void
export function unicodeFuncsSetDecomposeCompatibilityFunc(ufuncs: unicode_funcs_t, func: unicode_decompose_compatibility_func_t): void
export function unicodeFuncsSetDecomposeFunc(ufuncs: unicode_funcs_t, func: unicode_decompose_func_t): void
export function unicodeFuncsSetEastasianWidthFunc(ufuncs: unicode_funcs_t, func: unicode_eastasian_width_func_t): void
export function unicodeFuncsSetGeneralCategoryFunc(ufuncs: unicode_funcs_t, func: unicode_general_category_func_t): void
export function unicodeFuncsSetMirroringFunc(ufuncs: unicode_funcs_t, func: unicode_mirroring_func_t): void
export function unicodeFuncsSetScriptFunc(ufuncs: unicode_funcs_t, func: unicode_script_func_t): void
export function unicodeGeneralCategory(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t
export function unicodeMirroring(ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t
export function unicodeScript(ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t
export function variationFromString(str: any): [ /* returnType */ bool_t, /* variation */ variation_t ]
export function variationToString(variation: variation_t): /* buf */ string[]
export interface buffer_message_func_t {
    (buffer: buffer_t, font: font_t, message: string): bool_t
}
export interface destroy_func_t {
    (): void
}
export interface font_get_font_extents_func_t {
    (font: font_t, fontData?: object | null): bool_t
}
export interface font_get_glyph_advance_func_t {
    (font: font_t, fontData: object | null, glyph: codepoint_t): position_t
}
export interface font_get_glyph_advances_func_t {
    (font: font_t, fontData: object | null, count: number, firstGlyph: codepoint_t, glyphStride: number, advanceStride: number): void
}
export interface font_get_glyph_contour_point_func_t {
    (font: font_t, fontData: object | null, glyph: codepoint_t, pointIndex: number): bool_t
}
export interface font_get_glyph_extents_func_t {
    (font: font_t, fontData: object | null, glyph: codepoint_t): bool_t
}
export interface font_get_glyph_from_name_func_t {
    (font: font_t, fontData: object | null, name: string[]): bool_t
}
export interface font_get_glyph_func_t {
    (font: font_t, fontData: object | null, unicode: codepoint_t, variationSelector: codepoint_t): bool_t
}
export interface font_get_glyph_kerning_func_t {
    (font: font_t, fontData: object | null, firstGlyph: codepoint_t, secondGlyph: codepoint_t): position_t
}
export interface font_get_glyph_name_func_t {
    (font: font_t, fontData: object | null, glyph: codepoint_t): bool_t
}
export interface font_get_glyph_origin_func_t {
    (font: font_t, fontData: object | null, glyph: codepoint_t): bool_t
}
export interface font_get_nominal_glyph_func_t {
    (font: font_t, fontData: object | null, unicode: codepoint_t): bool_t
}
export interface font_get_nominal_glyphs_func_t {
    (font: font_t, fontData: object | null, count: number, firstUnicode: codepoint_t, unicodeStride: number, glyphStride: number): number
}
export interface font_get_variation_glyph_func_t {
    (font: font_t, fontData: object | null, unicode: codepoint_t, variationSelector: codepoint_t): bool_t
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
    nameId: ot_name_id_t
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
    string(): /* buf */ string[]
    static name: string
}
export class font_extents_t {
    /* Fields of HarfBuzz.font_extents_t */
    ascender: position_t
    descender: position_t
    lineGap: position_t
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
    xBearing: position_t
    yBearing: position_t
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
    xAdvance: position_t
    yAdvance: position_t
    xOffset: position_t
    yOffset: position_t
    static name: string
}
export class language_t {
    /* Methods of HarfBuzz.language_t */
    string(): string
    static name: string
}
export class map_t {
    static name: string
}
export class ot_color_layer_t {
    /* Fields of HarfBuzz.ot_color_layer_t */
    glyph: codepoint_t
    colorIndex: number
    static name: string
}
export class ot_math_glyph_part_t {
    /* Fields of HarfBuzz.ot_math_glyph_part_t */
    glyph: codepoint_t
    startConnectorLength: position_t
    endConnectorLength: position_t
    fullAdvance: position_t
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
    nameId: ot_name_id_t
    language: language_t
    static name: string
}
export class ot_var_axis_info_t {
    /* Fields of HarfBuzz.ot_var_axis_info_t */
    axisIndex: number
    tag: tag_t
    nameId: ot_name_id_t
    flags: ot_var_axis_flags_t
    minValue: number
    defaultValue: number
    maxValue: number
    static name: string
}
export class ot_var_axis_t {
    /* Fields of HarfBuzz.ot_var_axis_t */
    tag: tag_t
    nameId: ot_name_id_t
    minValue: number
    defaultValue: number
    maxValue: number
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
    string(): /* buf */ string[]
    static name: string
}
export class var_int_t {
    /* Fields of HarfBuzz.var_int_t */
    u32: number
    i32: number
    u16: number[]
    i16: number[]
    u8: any
    i8: any
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
}