/**
 * GLib-2.0
 */

import * as Gjs from './Gjs';
import * as GObject from './GObject-2.0';

export enum BookmarkFileError {
    INVALID_URI,
    INVALID_VALUE,
    APP_NOT_REGISTERED,
    URI_NOT_FOUND,
    READ,
    UNKNOWN_ENCODING,
    WRITE,
    FILE_NOT_FOUND,
}
export enum ChecksumType {
    MD5,
    SHA1,
    SHA256,
    SHA512,
    SHA384,
}
export enum ConvertError {
    NO_CONVERSION,
    ILLEGAL_SEQUENCE,
    FAILED,
    PARTIAL_INPUT,
    BAD_URI,
    NOT_ABSOLUTE_PATH,
    NO_MEMORY,
    EMBEDDED_NUL,
}
export enum DateDMY {
    DAY,
    MONTH,
    YEAR,
}
export enum DateMonth {
    BAD_MONTH,
    JANUARY,
    FEBRUARY,
    MARCH,
    APRIL,
    MAY,
    JUNE,
    JULY,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER,
    DECEMBER,
}
export enum DateWeekday {
    BAD_WEEKDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
}
export enum ErrorType {
    UNKNOWN,
    UNEXP_EOF,
    UNEXP_EOF_IN_STRING,
    UNEXP_EOF_IN_COMMENT,
    NON_DIGIT_IN_CONST,
    DIGIT_RADIX,
    FLOAT_RADIX,
    FLOAT_MALFORMED,
}
export enum FileError {
    EXIST,
    ISDIR,
    ACCES,
    NAMETOOLONG,
    NOENT,
    NOTDIR,
    NXIO,
    NODEV,
    ROFS,
    TXTBSY,
    FAULT,
    LOOP,
    NOSPC,
    NOMEM,
    MFILE,
    NFILE,
    BADF,
    INVAL,
    PIPE,
    AGAIN,
    INTR,
    IO,
    PERM,
    NOSYS,
    FAILED,
}
export enum IOChannelError {
    FBIG,
    INVAL,
    IO,
    ISDIR,
    NOSPC,
    NXIO,
    OVERFLOW,
    PIPE,
    FAILED,
}
export enum IOError {
    NONE,
    AGAIN,
    INVAL,
    UNKNOWN,
}
export enum IOStatus {
    ERROR,
    NORMAL,
    EOF,
    AGAIN,
}
export enum KeyFileError {
    UNKNOWN_ENCODING,
    PARSE,
    NOT_FOUND,
    KEY_NOT_FOUND,
    GROUP_NOT_FOUND,
    INVALID_VALUE,
}
export enum LogWriterOutput {
    HANDLED,
    UNHANDLED,
}
export enum MarkupError {
    BAD_UTF8,
    EMPTY,
    PARSE,
    UNKNOWN_ELEMENT,
    UNKNOWN_ATTRIBUTE,
    INVALID_CONTENT,
    MISSING_ATTRIBUTE,
}
export enum NormalizeMode {
    DEFAULT,
    NFD,
    DEFAULT_COMPOSE,
    NFC,
    ALL,
    NFKD,
    ALL_COMPOSE,
    NFKC,
}
export enum NumberParserError {
    INVALID,
    OUT_OF_BOUNDS,
}
export enum OnceStatus {
    NOTCALLED,
    PROGRESS,
    READY,
}
export enum OptionArg {
    NONE,
    STRING,
    INT,
    CALLBACK,
    FILENAME,
    STRING_ARRAY,
    FILENAME_ARRAY,
    DOUBLE,
    INT64,
}
export enum OptionError {
    UNKNOWN_OPTION,
    BAD_VALUE,
    FAILED,
}
export enum RegexError {
    COMPILE,
    OPTIMIZE,
    REPLACE,
    MATCH,
    INTERNAL,
    STRAY_BACKSLASH,
    MISSING_CONTROL_CHAR,
    UNRECOGNIZED_ESCAPE,
    QUANTIFIERS_OUT_OF_ORDER,
    QUANTIFIER_TOO_BIG,
    UNTERMINATED_CHARACTER_CLASS,
    INVALID_ESCAPE_IN_CHARACTER_CLASS,
    RANGE_OUT_OF_ORDER,
    NOTHING_TO_REPEAT,
    UNRECOGNIZED_CHARACTER,
    POSIX_NAMED_CLASS_OUTSIDE_CLASS,
    UNMATCHED_PARENTHESIS,
    INEXISTENT_SUBPATTERN_REFERENCE,
    UNTERMINATED_COMMENT,
    EXPRESSION_TOO_LARGE,
    MEMORY_ERROR,
    VARIABLE_LENGTH_LOOKBEHIND,
    MALFORMED_CONDITION,
    TOO_MANY_CONDITIONAL_BRANCHES,
    ASSERTION_EXPECTED,
    UNKNOWN_POSIX_CLASS_NAME,
    POSIX_COLLATING_ELEMENTS_NOT_SUPPORTED,
    HEX_CODE_TOO_LARGE,
    INVALID_CONDITION,
    SINGLE_BYTE_MATCH_IN_LOOKBEHIND,
    INFINITE_LOOP,
    MISSING_SUBPATTERN_NAME_TERMINATOR,
    DUPLICATE_SUBPATTERN_NAME,
    MALFORMED_PROPERTY,
    UNKNOWN_PROPERTY,
    SUBPATTERN_NAME_TOO_LONG,
    TOO_MANY_SUBPATTERNS,
    INVALID_OCTAL_VALUE,
    TOO_MANY_BRANCHES_IN_DEFINE,
    DEFINE_REPETION,
    INCONSISTENT_NEWLINE_OPTIONS,
    MISSING_BACK_REFERENCE,
    INVALID_RELATIVE_REFERENCE,
    BACKTRACKING_CONTROL_VERB_ARGUMENT_FORBIDDEN,
    UNKNOWN_BACKTRACKING_CONTROL_VERB,
    NUMBER_TOO_BIG,
    MISSING_SUBPATTERN_NAME,
    MISSING_DIGIT,
    INVALID_DATA_CHARACTER,
    EXTRA_SUBPATTERN_NAME,
    BACKTRACKING_CONTROL_VERB_ARGUMENT_REQUIRED,
    INVALID_CONTROL_CHAR,
    MISSING_NAME,
    NOT_SUPPORTED_IN_CLASS,
    TOO_MANY_FORWARD_REFERENCES,
    NAME_TOO_LONG,
    CHARACTER_VALUE_TOO_LARGE,
}
export enum SeekType {
    CUR,
    SET,
    END,
}
export enum ShellError {
    BAD_QUOTING,
    EMPTY_STRING,
    FAILED,
}
export enum SliceConfig {
    ALWAYS_MALLOC,
    BYPASS_MAGAZINES,
    WORKING_SET_MSECS,
    COLOR_INCREMENT,
    CHUNK_SIZES,
    CONTENTION_COUNTER,
}
export enum SpawnError {
    FORK,
    READ,
    CHDIR,
    ACCES,
    PERM,
    TOO_BIG,
    /* 2BIG (invalid, starts with a number) */
    NOEXEC,
    NAMETOOLONG,
    NOENT,
    NOMEM,
    NOTDIR,
    LOOP,
    TXTBUSY,
    IO,
    NFILE,
    MFILE,
    INVAL,
    ISDIR,
    LIBBAD,
    FAILED,
}
export enum TestFileType {
    DIST,
    BUILT,
}
export enum TestLogType {
    NONE,
    ERROR,
    START_BINARY,
    LIST_CASE,
    SKIP_CASE,
    START_CASE,
    STOP_CASE,
    MIN_RESULT,
    MAX_RESULT,
    MESSAGE,
    START_SUITE,
    STOP_SUITE,
}
export enum TestResult {
    SUCCESS,
    SKIPPED,
    FAILURE,
    INCOMPLETE,
}
export enum ThreadError {
    THREAD_ERROR_AGAIN,
}
export enum TimeType {
    STANDARD,
    DAYLIGHT,
    UNIVERSAL,
}
export enum TokenType {
    EOF,
    LEFT_PAREN,
    RIGHT_PAREN,
    LEFT_CURLY,
    RIGHT_CURLY,
    LEFT_BRACE,
    RIGHT_BRACE,
    EQUAL_SIGN,
    COMMA,
    NONE,
    ERROR,
    CHAR,
    BINARY,
    OCTAL,
    INT,
    HEX,
    FLOAT,
    STRING,
    SYMBOL,
    IDENTIFIER,
    IDENTIFIER_NULL,
    COMMENT_SINGLE,
    COMMENT_MULTI,
}
export enum TraverseType {
    IN_ORDER,
    PRE_ORDER,
    POST_ORDER,
    LEVEL_ORDER,
}
export enum UnicodeBreakType {
    MANDATORY,
    CARRIAGE_RETURN,
    LINE_FEED,
    COMBINING_MARK,
    SURROGATE,
    ZERO_WIDTH_SPACE,
    INSEPARABLE,
    NON_BREAKING_GLUE,
    CONTINGENT,
    SPACE,
    AFTER,
    BEFORE,
    BEFORE_AND_AFTER,
    HYPHEN,
    NON_STARTER,
    OPEN_PUNCTUATION,
    CLOSE_PUNCTUATION,
    QUOTATION,
    EXCLAMATION,
    IDEOGRAPHIC,
    NUMERIC,
    INFIX_SEPARATOR,
    SYMBOL,
    ALPHABETIC,
    PREFIX,
    POSTFIX,
    COMPLEX_CONTEXT,
    AMBIGUOUS,
    UNKNOWN,
    NEXT_LINE,
    WORD_JOINER,
    HANGUL_L_JAMO,
    HANGUL_V_JAMO,
    HANGUL_T_JAMO,
    HANGUL_LV_SYLLABLE,
    HANGUL_LVT_SYLLABLE,
    CLOSE_PARANTHESIS,
    CONDITIONAL_JAPANESE_STARTER,
    HEBREW_LETTER,
    REGIONAL_INDICATOR,
    EMOJI_BASE,
    EMOJI_MODIFIER,
    ZERO_WIDTH_JOINER,
}
export enum UnicodeScript {
    INVALID_CODE,
    COMMON,
    INHERITED,
    ARABIC,
    ARMENIAN,
    BENGALI,
    BOPOMOFO,
    CHEROKEE,
    COPTIC,
    CYRILLIC,
    DESERET,
    DEVANAGARI,
    ETHIOPIC,
    GEORGIAN,
    GOTHIC,
    GREEK,
    GUJARATI,
    GURMUKHI,
    HAN,
    HANGUL,
    HEBREW,
    HIRAGANA,
    KANNADA,
    KATAKANA,
    KHMER,
    LAO,
    LATIN,
    MALAYALAM,
    MONGOLIAN,
    MYANMAR,
    OGHAM,
    OLD_ITALIC,
    ORIYA,
    RUNIC,
    SINHALA,
    SYRIAC,
    TAMIL,
    TELUGU,
    THAANA,
    THAI,
    TIBETAN,
    CANADIAN_ABORIGINAL,
    YI,
    TAGALOG,
    HANUNOO,
    BUHID,
    TAGBANWA,
    BRAILLE,
    CYPRIOT,
    LIMBU,
    OSMANYA,
    SHAVIAN,
    LINEAR_B,
    TAI_LE,
    UGARITIC,
    NEW_TAI_LUE,
    BUGINESE,
    GLAGOLITIC,
    TIFINAGH,
    SYLOTI_NAGRI,
    OLD_PERSIAN,
    KHAROSHTHI,
    UNKNOWN,
    BALINESE,
    CUNEIFORM,
    PHOENICIAN,
    PHAGS_PA,
    NKO,
    KAYAH_LI,
    LEPCHA,
    REJANG,
    SUNDANESE,
    SAURASHTRA,
    CHAM,
    OL_CHIKI,
    VAI,
    CARIAN,
    LYCIAN,
    LYDIAN,
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
    NEWA,
    OSAGE,
    TANGUT,
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
}
export enum UnicodeType {
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
export enum UriError {
    FAILED,
    BAD_SCHEME,
    BAD_USER,
    BAD_PASSWORD,
    BAD_AUTH_PARAMS,
    BAD_HOST,
    BAD_PORT,
    BAD_PATH,
    BAD_QUERY,
    BAD_FRAGMENT,
}
export enum UserDirectory {
    DIRECTORY_DESKTOP,
    DIRECTORY_DOCUMENTS,
    DIRECTORY_DOWNLOAD,
    DIRECTORY_MUSIC,
    DIRECTORY_PICTURES,
    DIRECTORY_PUBLIC_SHARE,
    DIRECTORY_TEMPLATES,
    DIRECTORY_VIDEOS,
    N_DIRECTORIES,
}
export enum VariantClass {
    BOOLEAN,
    BYTE,
    INT16,
    UINT16,
    INT32,
    UINT32,
    INT64,
    UINT64,
    HANDLE,
    DOUBLE,
    STRING,
    OBJECT_PATH,
    SIGNATURE,
    VARIANT,
    MAYBE,
    ARRAY,
    TUPLE,
    DICT_ENTRY,
}
export enum VariantParseError {
    FAILED,
    BASIC_TYPE_EXPECTED,
    CANNOT_INFER_TYPE,
    DEFINITE_TYPE_EXPECTED,
    INPUT_NOT_AT_END,
    INVALID_CHARACTER,
    INVALID_FORMAT_STRING,
    INVALID_OBJECT_PATH,
    INVALID_SIGNATURE,
    INVALID_TYPE_STRING,
    NO_COMMON_TYPE,
    NUMBER_OUT_OF_RANGE,
    NUMBER_TOO_BIG,
    TYPE_ERROR,
    UNEXPECTED_TOKEN,
    UNKNOWN_KEYWORD,
    UNTERMINATED_STRING_CONSTANT,
    VALUE_EXPECTED,
    RECURSION,
}
export enum AsciiType {
    ALNUM,
    ALPHA,
    CNTRL,
    DIGIT,
    GRAPH,
    LOWER,
    PRINT,
    PUNCT,
    SPACE,
    UPPER,
    XDIGIT,
}
export enum FileSetContentsFlags {
    NONE,
    CONSISTENT,
    DURABLE,
    ONLY_EXISTING,
}
export enum FileTest {
    IS_REGULAR,
    IS_SYMLINK,
    IS_DIR,
    IS_EXECUTABLE,
    EXISTS,
}
export enum FormatSizeFlags {
    DEFAULT,
    LONG_FORMAT,
    IEC_UNITS,
    BITS,
}
export enum HookFlagMask {
    ACTIVE,
    IN_CALL,
    MASK,
}
export enum IOCondition {
    IN,
    OUT,
    PRI,
    ERR,
    HUP,
    NVAL,
}
export enum IOFlags {
    APPEND,
    NONBLOCK,
    IS_READABLE,
    IS_WRITABLE,
    IS_WRITEABLE,
    IS_SEEKABLE,
    MASK,
    GET_MASK,
    SET_MASK,
}
export enum KeyFileFlags {
    NONE,
    KEEP_COMMENTS,
    KEEP_TRANSLATIONS,
}
export enum LogLevelFlags {
    FLAG_RECURSION,
    FLAG_FATAL,
    LEVEL_ERROR,
    LEVEL_CRITICAL,
    LEVEL_WARNING,
    LEVEL_MESSAGE,
    LEVEL_INFO,
    LEVEL_DEBUG,
    LEVEL_MASK,
}
export enum MarkupCollectType {
    INVALID,
    STRING,
    STRDUP,
    BOOLEAN,
    TRISTATE,
    OPTIONAL,
}
export enum MarkupParseFlags {
    DO_NOT_USE_THIS_UNSUPPORTED_FLAG,
    TREAT_CDATA_AS_TEXT,
    PREFIX_ERROR_POSITION,
    IGNORE_QUALIFIED,
}
export enum OptionFlags {
    NONE,
    HIDDEN,
    IN_MAIN,
    REVERSE,
    NO_ARG,
    FILENAME,
    OPTIONAL_ARG,
    NOALIAS,
}
export enum RegexCompileFlags {
    CASELESS,
    MULTILINE,
    DOTALL,
    EXTENDED,
    ANCHORED,
    DOLLAR_ENDONLY,
    UNGREEDY,
    RAW,
    NO_AUTO_CAPTURE,
    OPTIMIZE,
    FIRSTLINE,
    DUPNAMES,
    NEWLINE_CR,
    NEWLINE_LF,
    NEWLINE_CRLF,
    NEWLINE_ANYCRLF,
    BSR_ANYCRLF,
    JAVASCRIPT_COMPAT,
}
export enum RegexMatchFlags {
    ANCHORED,
    NOTBOL,
    NOTEOL,
    NOTEMPTY,
    PARTIAL,
    NEWLINE_CR,
    NEWLINE_LF,
    NEWLINE_CRLF,
    NEWLINE_ANY,
    NEWLINE_ANYCRLF,
    BSR_ANYCRLF,
    BSR_ANY,
    PARTIAL_SOFT,
    PARTIAL_HARD,
    NOTEMPTY_ATSTART,
}
export enum SpawnFlags {
    DEFAULT,
    LEAVE_DESCRIPTORS_OPEN,
    DO_NOT_REAP_CHILD,
    SEARCH_PATH,
    STDOUT_TO_DEV_NULL,
    STDERR_TO_DEV_NULL,
    CHILD_INHERITS_STDIN,
    FILE_AND_ARGV_ZERO,
    SEARCH_PATH_FROM_ENVP,
    CLOEXEC_PIPES,
}
export enum TestSubprocessFlags {
    STDIN,
    STDOUT,
    STDERR,
}
export enum TestTrapFlags {
    SILENCE_STDOUT,
    SILENCE_STDERR,
    INHERIT_STDIN,
}
export enum TraverseFlags {
    LEAVES,
    NON_LEAVES,
    ALL,
    MASK,
    LEAFS,
    NON_LEAFS,
}
export enum UriFlags {
    NONE,
    PARSE_RELAXED,
    HAS_PASSWORD,
    HAS_AUTH_PARAMS,
    ENCODED,
    NON_DNS,
    ENCODED_QUERY,
    ENCODED_PATH,
    ENCODED_FRAGMENT,
    SCHEME_NORMALIZE,
}
export enum UriHideFlags {
    NONE,
    USERINFO,
    PASSWORD,
    AUTH_PARAMS,
    QUERY,
    FRAGMENT,
}
export enum UriParamsFlags {
    NONE,
    CASE_INSENSITIVE,
    WWW_FORM,
    PARSE_RELAXED,
}
export const ANALYZER_ANALYZING: number
export const ASCII_DTOSTR_BUF_SIZE: number
export const BIG_ENDIAN: number
export const CSET_A_2_Z: string
export const CSET_DIGITS: string
export const CSET_a_2_z: string
export const DATALIST_FLAGS_MASK: number
export const DATE_BAD_DAY: number
export const DATE_BAD_JULIAN: number
export const DATE_BAD_YEAR: number
export const DIR_SEPARATOR: number
export const DIR_SEPARATOR_S: string
export const E: number
export const GINT16_FORMAT: string
export const GINT16_MODIFIER: string
export const GINT32_FORMAT: string
export const GINT32_MODIFIER: string
export const GINT64_FORMAT: string
export const GINT64_MODIFIER: string
export const GINTPTR_FORMAT: string
export const GINTPTR_MODIFIER: string
export const GNUC_FUNCTION: string
export const GNUC_PRETTY_FUNCTION: string
export const GSIZE_FORMAT: string
export const GSIZE_MODIFIER: string
export const GSSIZE_FORMAT: string
export const GSSIZE_MODIFIER: string
export const GUINT16_FORMAT: string
export const GUINT32_FORMAT: string
export const GUINT64_FORMAT: string
export const GUINTPTR_FORMAT: string
export const HAVE_GINT64: number
export const HAVE_GNUC_VARARGS: number
export const HAVE_GNUC_VISIBILITY: number
export const HAVE_GROWING_STACK: number
export const HAVE_ISO_VARARGS: number
export const HOOK_FLAG_USER_SHIFT: number
export const IEEE754_DOUBLE_BIAS: number
export const IEEE754_FLOAT_BIAS: number
export const KEY_FILE_DESKTOP_GROUP: string
export const KEY_FILE_DESKTOP_KEY_ACTIONS: string
export const KEY_FILE_DESKTOP_KEY_CATEGORIES: string
export const KEY_FILE_DESKTOP_KEY_COMMENT: string
export const KEY_FILE_DESKTOP_KEY_DBUS_ACTIVATABLE: string
export const KEY_FILE_DESKTOP_KEY_EXEC: string
export const KEY_FILE_DESKTOP_KEY_GENERIC_NAME: string
export const KEY_FILE_DESKTOP_KEY_HIDDEN: string
export const KEY_FILE_DESKTOP_KEY_ICON: string
export const KEY_FILE_DESKTOP_KEY_MIME_TYPE: string
export const KEY_FILE_DESKTOP_KEY_NAME: string
export const KEY_FILE_DESKTOP_KEY_NOT_SHOW_IN: string
export const KEY_FILE_DESKTOP_KEY_NO_DISPLAY: string
export const KEY_FILE_DESKTOP_KEY_ONLY_SHOW_IN: string
export const KEY_FILE_DESKTOP_KEY_PATH: string
export const KEY_FILE_DESKTOP_KEY_STARTUP_NOTIFY: string
export const KEY_FILE_DESKTOP_KEY_STARTUP_WM_CLASS: string
export const KEY_FILE_DESKTOP_KEY_TERMINAL: string
export const KEY_FILE_DESKTOP_KEY_TRY_EXEC: string
export const KEY_FILE_DESKTOP_KEY_TYPE: string
export const KEY_FILE_DESKTOP_KEY_URL: string
export const KEY_FILE_DESKTOP_KEY_VERSION: string
export const KEY_FILE_DESKTOP_TYPE_APPLICATION: string
export const KEY_FILE_DESKTOP_TYPE_DIRECTORY: string
export const KEY_FILE_DESKTOP_TYPE_LINK: string
export const LITTLE_ENDIAN: number
export const LN10: number
export const LN2: number
export const LOG_2_BASE_10: number
export const LOG_DOMAIN: number
export const LOG_FATAL_MASK: number
export const LOG_LEVEL_USER_SHIFT: number
export const MAJOR_VERSION: number
export const MAXINT16: number
export const MAXINT32: number
export const MAXINT64: number
export const MAXINT8: number
export const MAXUINT16: number
export const MAXUINT32: number
export const MAXUINT64: number
export const MAXUINT8: number
export const MICRO_VERSION: number
export const MININT16: number
export const MININT32: number
export const MININT64: number
export const MININT8: number
export const MINOR_VERSION: number
export const MODULE_SUFFIX: string
export const OPTION_REMAINING: string
export const PDP_ENDIAN: number
export const PI: number
export const PID_FORMAT: string
export const PI_2: number
export const PI_4: number
export const POLLFD_FORMAT: string
export const PRIORITY_DEFAULT: number
export const PRIORITY_DEFAULT_IDLE: number
export const PRIORITY_HIGH: number
export const PRIORITY_HIGH_IDLE: number
export const PRIORITY_LOW: number
export const SEARCHPATH_SEPARATOR: number
export const SEARCHPATH_SEPARATOR_S: string
export const SIZEOF_LONG: number
export const SIZEOF_SIZE_T: number
export const SIZEOF_SSIZE_T: number
export const SIZEOF_VOID_P: number
export const SOURCE_CONTINUE: boolean
export const SOURCE_REMOVE: boolean
export const SQRT2: number
export const STR_DELIMITERS: string
export const SYSDEF_AF_INET: number
export const SYSDEF_AF_INET6: number
export const SYSDEF_AF_UNIX: number
export const SYSDEF_MSG_DONTROUTE: number
export const SYSDEF_MSG_OOB: number
export const SYSDEF_MSG_PEEK: number
export const TEST_OPTION_ISOLATE_DIRS: string
export const TIME_SPAN_DAY: number
export const TIME_SPAN_HOUR: number
export const TIME_SPAN_MILLISECOND: number
export const TIME_SPAN_MINUTE: number
export const TIME_SPAN_SECOND: number
export const UNICHAR_MAX_DECOMPOSITION_LENGTH: number
export const URI_RESERVED_CHARS_GENERIC_DELIMITERS: string
export const URI_RESERVED_CHARS_SUBCOMPONENT_DELIMITERS: string
export const USEC_PER_SEC: number
export const VA_COPY_AS_ARRAY: number
export const VERSION_MIN_REQUIRED: number
export const WIN32_MSG_HANDLE: number
export function access(filename: string, mode: number): number
export function ascii_digit_value(c: number): number
export function ascii_dtostr(buffer: string, buf_len: number, d: number): string
export function ascii_formatd(buffer: string, buf_len: number, format: string, d: number): string
export function ascii_strcasecmp(s1: string, s2: string): number
export function ascii_strdown(str: string, len: number): string
export function ascii_string_to_signed(str: string, base: number, min: number, max: number): [ /* returnType */ boolean, /* out_num */ number | null ]
export function ascii_string_to_unsigned(str: string, base: number, min: number, max: number): [ /* returnType */ boolean, /* out_num */ number | null ]
export function ascii_strncasecmp(s1: string, s2: string, n: number): number
export function ascii_strtod(nptr: string): [ /* returnType */ number, /* endptr */ string | null ]
export function ascii_strtoll(nptr: string, base: number): [ /* returnType */ number, /* endptr */ string | null ]
export function ascii_strtoull(nptr: string, base: number): [ /* returnType */ number, /* endptr */ string | null ]
export function ascii_strup(str: string, len: number): string
export function ascii_tolower(c: number): number
export function ascii_toupper(c: number): number
export function ascii_xdigit_value(c: number): number
export function assert_warning(log_domain: string, file: string, line: number, pretty_function: string, expression: string): void
export function assertion_message(domain: string, file: string, line: number, func: string, message: string): void
export function assertion_message_cmpstr(domain: string, file: string, line: number, func: string, expr: string, arg1: string, cmp: string, arg2: string): void
export function assertion_message_cmpstrv(domain: string, file: string, line: number, func: string, expr: string, arg1: string, arg2: string, first_wrong_idx: number): void
export function assertion_message_error(domain: string, file: string, line: number, func: string, expr: string, error: Error, error_domain: Quark, error_code: number): void
export function atexit(func: VoidFunc): void
export function atomic_int_add(atomic: number, val: number): number
export function atomic_int_and(atomic: number, val: number): number
export function atomic_int_compare_and_exchange(atomic: number, oldval: number, newval: number): boolean
export function atomic_int_dec_and_test(atomic: number): boolean
export function atomic_int_exchange_and_add(atomic: number, val: number): number
export function atomic_int_get(atomic: number): number
export function atomic_int_inc(atomic: number): void
export function atomic_int_or(atomic: number, val: number): number
export function atomic_int_set(atomic: number, newval: number): void
export function atomic_int_xor(atomic: number, val: number): number
export function atomic_pointer_add(atomic: object, val: number): number
export function atomic_pointer_and(atomic: object, val: number): number
export function atomic_pointer_compare_and_exchange(atomic: object, oldval?: object | null, newval?: object | null): boolean
export function atomic_pointer_get(atomic: object): object | null
export function atomic_pointer_or(atomic: object, val: number): number
export function atomic_pointer_set(atomic: object, newval?: object | null): void
export function atomic_pointer_xor(atomic: object, val: number): number
export function atomic_rc_box_acquire(mem_block: object): object
export function atomic_rc_box_alloc(block_size: number): object
export function atomic_rc_box_alloc0(block_size: number): object
export function atomic_rc_box_dup(block_size: number, mem_block: object): object
export function atomic_rc_box_get_size(mem_block: object): number
export function atomic_rc_box_release(mem_block: object): void
export function atomic_rc_box_release_full(mem_block: object, clear_func: DestroyNotify): void
export function atomic_ref_count_compare(arc: number, val: number): boolean
export function atomic_ref_count_dec(arc: number): boolean
export function atomic_ref_count_inc(arc: number): void
export function atomic_ref_count_init(arc: number): void
export function base64_decode(text: string): Uint8Array
export function base64_decode_inplace(text: Uint8Array): [ /* returnType */ number, /* text */ Uint8Array ]
export function base64_encode(data: Uint8Array | null): string
export function base64_encode_close(break_lines: boolean, state: number, save: number): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* save */ number ]
export function base64_encode_step(in_: Uint8Array, break_lines: boolean, state: number, save: number): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* save */ number ]
export function basename(file_name: string): string
export function bit_lock(address: number, lock_bit: number): void
export function bit_nth_lsf(mask: number, nth_bit: number): number
export function bit_nth_msf(mask: number, nth_bit: number): number
export function bit_storage(number: number): number
export function bit_trylock(address: number, lock_bit: number): boolean
export function bit_unlock(address: number, lock_bit: number): void
export function bookmark_file_error_quark(): Quark
export function build_filenamev(args: string[]): string
export function build_pathv(separator: string, args: string[]): string
export function byte_array_free(array: Uint8Array, free_segment: boolean): number
export function byte_array_free_to_bytes(array: Uint8Array): Bytes
export function byte_array_new(): Uint8Array
export function byte_array_new_take(data: Uint8Array): Uint8Array
export function byte_array_steal(array: Uint8Array): [ /* returnType */ number, /* len */ number | null ]
export function byte_array_unref(array: Uint8Array): void
export function canonicalize_filename(filename: string, relative_to?: string | null): string
export function chdir(path: string): number
export function check_version(required_major: number, required_minor: number, required_micro: number): string
export function checksum_type_get_length(checksum_type: ChecksumType): number
export function child_watch_add(priority: number, pid: Pid, function_: ChildWatchFunc): number
export function child_watch_source_new(pid: Pid): Source
export function clear_error(): void
export function close(fd: number): boolean
export function compute_checksum_for_bytes(checksum_type: ChecksumType, data: Bytes): string | null
export function compute_checksum_for_data(checksum_type: ChecksumType, data: Uint8Array): string | null
export function compute_checksum_for_string(checksum_type: ChecksumType, str: string, length: number): string | null
export function compute_hmac_for_bytes(digest_type: ChecksumType, key: Bytes, data: Bytes): string
export function compute_hmac_for_data(digest_type: ChecksumType, key: Uint8Array, data: Uint8Array): string
export function compute_hmac_for_string(digest_type: ChecksumType, key: Uint8Array, str: string, length: number): string
export function convert(str: Uint8Array, to_codeset: string, from_codeset: string): [ /* returnType */ Uint8Array, /* bytes_read */ number | null ]
export function convert_error_quark(): Quark
export function convert_with_fallback(str: Uint8Array, to_codeset: string, from_codeset: string, fallback: string): [ /* returnType */ Uint8Array, /* bytes_read */ number | null ]
export function datalist_foreach(datalist: Data, func: DataForeachFunc): void
export function datalist_get_data(datalist: Data, key: string): object | null
export function datalist_get_flags(datalist: Data): number
export function datalist_id_get_data(datalist: Data, key_id: Quark): object | null
export function datalist_set_flags(datalist: Data, flags: number): void
export function datalist_unset_flags(datalist: Data, flags: number): void
export function dataset_destroy(dataset_location: object): void
export function dataset_foreach(dataset_location: object, func: DataForeachFunc): void
export function dataset_id_get_data(dataset_location: object, key_id: Quark): object | null
export function date_get_days_in_month(month: DateMonth, year: DateYear): number
export function date_get_monday_weeks_in_year(year: DateYear): number
export function date_get_sunday_weeks_in_year(year: DateYear): number
export function date_is_leap_year(year: DateYear): boolean
export function date_strftime(s: string, slen: number, format: string, date: Date): number
export function date_valid_day(day: DateDay): boolean
export function date_valid_dmy(day: DateDay, month: DateMonth, year: DateYear): boolean
export function date_valid_julian(julian_date: number): boolean
export function date_valid_month(month: DateMonth): boolean
export function date_valid_weekday(weekday: DateWeekday): boolean
export function date_valid_year(year: DateYear): boolean
export function dcgettext(domain: string | null, msgid: string, category: number): string
export function dgettext(domain: string | null, msgid: string): string
export function dir_make_tmp(tmpl?: string | null): string
export function direct_equal(v1?: object | null, v2?: object | null): boolean
export function direct_hash(v?: object | null): number
export function dngettext(domain: string | null, msgid: string, msgid_plural: string, n: number): string
export function double_equal(v1: object, v2: object): boolean
export function double_hash(v: object): number
export function dpgettext(domain: string | null, msgctxtid: string, msgidoffset: number): string
export function dpgettext2(domain: string | null, context: string, msgid: string): string
export function environ_getenv(envp: string[] | null, variable: string): string
export function environ_setenv(envp: string[] | null, variable: string, value: string, overwrite: boolean): string[]
export function environ_unsetenv(envp: string[] | null, variable: string): string[]
export function file_error_from_errno(err_no: number): FileError
export function file_error_quark(): Quark
export function file_get_contents(filename: string): [ /* returnType */ boolean, /* contents */ Uint8Array ]
export function file_open_tmp(tmpl?: string | null): [ /* returnType */ number, /* name_used */ string ]
export function file_read_link(filename: string): string
export function file_set_contents(filename: string, contents: Uint8Array): boolean
export function file_set_contents_full(filename: string, contents: Uint8Array, flags: FileSetContentsFlags, mode: number): boolean
export function file_test(filename: string, test: FileTest): boolean
export function filename_display_basename(filename: string): string
export function filename_display_name(filename: string): string
export function filename_from_uri(uri: string): [ /* returnType */ string, /* hostname */ string | null ]
export function filename_from_utf8(utf8string: string, len: number): [ /* returnType */ string, /* bytes_read */ number | null, /* bytes_written */ number | null ]
export function filename_to_uri(filename: string, hostname?: string | null): string
export function filename_to_utf8(opsysstring: string, len: number): [ /* returnType */ string, /* bytes_read */ number | null, /* bytes_written */ number | null ]
export function find_program_in_path(program: string): string | null
export function format_size(size: number): string
export function format_size_for_display(size: number): string
export function format_size_full(size: number, flags: FormatSizeFlags): string
export function free(mem?: object | null): void
export function get_application_name(): string | null
export function get_charset(): [ /* returnType */ boolean, /* charset */ string | null ]
export function get_codeset(): string
export function get_console_charset(): [ /* returnType */ boolean, /* charset */ string | null ]
export function get_current_dir(): string
export function get_current_time(result: TimeVal): void
export function get_environ(): string[]
export function get_filename_charsets(): [ /* returnType */ boolean, /* filename_charsets */ string[] ]
export function get_home_dir(): string
export function get_host_name(): string
export function get_language_names(): string[]
export function get_language_names_with_category(category_name: string): string[]
export function get_locale_variants(locale: string): string[]
export function get_monotonic_time(): number
export function get_num_processors(): number
export function get_os_info(key_name: string): string | null
export function get_prgname(): string | null
export function get_real_name(): string
export function get_real_time(): number
export function get_system_config_dirs(): string[]
export function get_system_data_dirs(): string[]
export function get_tmp_dir(): string
export function get_user_cache_dir(): string
export function get_user_config_dir(): string
export function get_user_data_dir(): string
export function get_user_name(): string
export function get_user_runtime_dir(): string
export function get_user_special_dir(directory: UserDirectory): string
export function getenv(variable: string): string
export function hash_table_add(hash_table: HashTable, key?: object | null): boolean
export function hash_table_contains(hash_table: HashTable, key?: object | null): boolean
export function hash_table_destroy(hash_table: HashTable): void
export function hash_table_insert(hash_table: HashTable, key?: object | null, value?: object | null): boolean
export function hash_table_lookup(hash_table: HashTable, key?: object | null): object | null
export function hash_table_lookup_extended(hash_table: HashTable, lookup_key?: object | null): [ /* returnType */ boolean, /* orig_key */ object | null, /* value */ object | null ]
export function hash_table_remove(hash_table: HashTable, key?: object | null): boolean
export function hash_table_remove_all(hash_table: HashTable): void
export function hash_table_replace(hash_table: HashTable, key?: object | null, value?: object | null): boolean
export function hash_table_size(hash_table: HashTable): number
export function hash_table_steal(hash_table: HashTable, key?: object | null): boolean
export function hash_table_steal_all(hash_table: HashTable): void
export function hash_table_steal_extended(hash_table: HashTable, lookup_key?: object | null): [ /* returnType */ boolean, /* stolen_key */ object | null, /* stolen_value */ object | null ]
export function hash_table_unref(hash_table: HashTable): void
export function hook_destroy(hook_list: HookList, hook_id: number): boolean
export function hook_destroy_link(hook_list: HookList, hook: Hook): void
export function hook_free(hook_list: HookList, hook: Hook): void
export function hook_insert_before(hook_list: HookList, sibling: Hook | null, hook: Hook): void
export function hook_prepend(hook_list: HookList, hook: Hook): void
export function hook_unref(hook_list: HookList, hook: Hook): void
export function hostname_is_ascii_encoded(hostname: string): boolean
export function hostname_is_ip_address(hostname: string): boolean
export function hostname_is_non_ascii(hostname: string): boolean
export function hostname_to_ascii(hostname: string): string | null
export function hostname_to_unicode(hostname: string): string | null
export function idle_add(priority: number, function_: SourceFunc): number
export function idle_remove_by_data(data?: object | null): boolean
export function idle_source_new(): Source
export function int64_equal(v1: object, v2: object): boolean
export function int64_hash(v: object): number
export function int_equal(v1: object, v2: object): boolean
export function int_hash(v: object): number
export function intern_static_string(string?: string | null): string
export function intern_string(string?: string | null): string
export function io_add_watch(channel: IOChannel, priority: number, condition: IOCondition, func: IOFunc): number
export function io_channel_error_from_errno(en: number): IOChannelError
export function io_channel_error_quark(): Quark
export function io_create_watch(channel: IOChannel, condition: IOCondition): Source
export function key_file_error_quark(): Quark
export function listenv(): string[]
export function locale_from_utf8(utf8string: string, len: number): [ /* returnType */ Uint8Array, /* bytes_read */ number | null ]
export function locale_to_utf8(opsysstring: Uint8Array): [ /* returnType */ string, /* bytes_read */ number | null, /* bytes_written */ number | null ]
export function log_default_handler(log_domain: string | null, log_level: LogLevelFlags, message?: string | null, unused_data?: object | null): void
export function log_remove_handler(log_domain: string, handler_id: number): void
export function log_set_always_fatal(fatal_mask: LogLevelFlags): LogLevelFlags
export function log_set_fatal_mask(log_domain: string, fatal_mask: LogLevelFlags): LogLevelFlags
export function log_set_handler(log_domain: string | null, log_levels: LogLevelFlags, log_func: LogFunc): number
export function log_set_writer_func(): void
export function log_structured_array(log_level: LogLevelFlags, fields: LogField[]): void
export function log_variant(log_domain: string | null, log_level: LogLevelFlags, fields: Variant): void
export function log_writer_default(log_level: LogLevelFlags, fields: LogField[], user_data?: object | null): LogWriterOutput
export function log_writer_default_set_use_stderr(use_stderr: boolean): void
export function log_writer_default_would_drop(log_level: LogLevelFlags, log_domain?: string | null): boolean
export function log_writer_format_fields(log_level: LogLevelFlags, fields: LogField[], use_color: boolean): string
export function log_writer_is_journald(output_fd: number): boolean
export function log_writer_journald(log_level: LogLevelFlags, fields: LogField[], user_data?: object | null): LogWriterOutput
export function log_writer_standard_streams(log_level: LogLevelFlags, fields: LogField[], user_data?: object | null): LogWriterOutput
export function log_writer_supports_color(output_fd: number): boolean
export function main_context_default(): MainContext
export function main_context_get_thread_default(): MainContext | null
export function main_context_ref_thread_default(): MainContext
export function main_current_source(): Source | null
export function main_depth(): number
export function malloc(n_bytes: number): object | null
export function malloc0(n_bytes: number): object | null
export function malloc0_n(n_blocks: number, n_block_bytes: number): object | null
export function malloc_n(n_blocks: number, n_block_bytes: number): object | null
export function markup_error_quark(): Quark
export function markup_escape_text(text: string, length: number): string
export function mem_is_system_malloc(): boolean
export function mem_profile(): void
export function mem_set_vtable(vtable: MemVTable): void
export function memdup(mem: object | null, byte_size: number): object | null
export function memdup2(mem: object | null, byte_size: number): object | null
export function mkdir_with_parents(pathname: string, mode: number): number
export function nullify_pointer(nullify_location: object): void
export function number_parser_error_quark(): Quark
export function on_error_query(prg_name: string): void
export function on_error_stack_trace(prg_name: string): void
export function once_init_enter(location: object): boolean
export function once_init_leave(location: object, result: number): void
export function option_error_quark(): Quark
export function parse_debug_string(string: string | null, keys: DebugKey[]): number
export function path_get_basename(file_name: string): string
export function path_get_dirname(file_name: string): string
export function path_is_absolute(file_name: string): boolean
export function path_skip_root(file_name: string): string | null
export function pattern_match(pspec: PatternSpec, string_length: number, string: string, string_reversed?: string | null): boolean
export function pattern_match_simple(pattern: string, string: string): boolean
export function pattern_match_string(pspec: PatternSpec, string: string): boolean
export function pointer_bit_lock(address: object, lock_bit: number): void
export function pointer_bit_trylock(address: object, lock_bit: number): boolean
export function pointer_bit_unlock(address: object, lock_bit: number): void
export function poll(fds: PollFD, nfds: number, timeout: number): number
export function propagate_error(src: Error): /* dest */ Error | null
export function quark_from_static_string(string?: string | null): Quark
export function quark_from_string(string?: string | null): Quark
export function quark_to_string(quark: Quark): string
export function quark_try_string(string?: string | null): Quark
export function random_double(): number
export function random_double_range(begin: number, end: number): number
export function random_int(): number
export function random_int_range(begin: number, end: number): number
export function random_set_seed(seed: number): void
export function rc_box_acquire(mem_block: object): object
export function rc_box_alloc(block_size: number): object
export function rc_box_alloc0(block_size: number): object
export function rc_box_dup(block_size: number, mem_block: object): object
export function rc_box_get_size(mem_block: object): number
export function rc_box_release(mem_block: object): void
export function rc_box_release_full(mem_block: object, clear_func: DestroyNotify): void
export function realloc(mem: object | null, n_bytes: number): object | null
export function realloc_n(mem: object | null, n_blocks: number, n_block_bytes: number): object | null
export function ref_count_compare(rc: number, val: number): boolean
export function ref_count_dec(rc: number): boolean
export function ref_count_inc(rc: number): void
export function ref_count_init(rc: number): void
export function ref_string_acquire(str: string): string
export function ref_string_length(str: string): number
export function ref_string_new(str: string): string
export function ref_string_new_intern(str: string): string
export function ref_string_new_len(str: string, len: number): string
export function ref_string_release(str: string): void
export function regex_check_replacement(replacement: string): [ /* returnType */ boolean, /* has_references */ boolean | null ]
export function regex_error_quark(): Quark
export function regex_escape_nul(string: string, length: number): string
export function regex_escape_string(string: string[]): string
export function regex_match_simple(pattern: string, string: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): boolean
export function regex_split_simple(pattern: string, string: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): string[]
export function reload_user_special_dirs_cache(): void
export function rmdir(filename: string): number
export function sequence_get(iter: SequenceIter): object | null
export function sequence_insert_before(iter: SequenceIter, data?: object | null): SequenceIter
export function sequence_move(src: SequenceIter, dest: SequenceIter): void
export function sequence_move_range(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void
export function sequence_range_get_midpoint(begin: SequenceIter, end: SequenceIter): SequenceIter
export function sequence_remove(iter: SequenceIter): void
export function sequence_remove_range(begin: SequenceIter, end: SequenceIter): void
export function sequence_set(iter: SequenceIter, data?: object | null): void
export function sequence_swap(a: SequenceIter, b: SequenceIter): void
export function set_application_name(application_name: string): void
export function set_error_literal(domain: Quark, code: number, message: string): /* err */ Error | null
export function set_prgname(prgname: string): void
export function setenv(variable: string, value: string, overwrite: boolean): boolean
export function shell_error_quark(): Quark
export function shell_parse_argv(command_line: string): [ /* returnType */ boolean, /* argvp */ string[] | null ]
export function shell_quote(unquoted_string: string): string
export function shell_unquote(quoted_string: string): string
export function slice_alloc(block_size: number): object | null
export function slice_alloc0(block_size: number): object | null
export function slice_copy(block_size: number, mem_block?: object | null): object | null
export function slice_free1(block_size: number, mem_block?: object | null): void
export function slice_free_chain_with_offset(block_size: number, mem_chain: object | null, next_offset: number): void
export function slice_get_config(ckey: SliceConfig): number
export function slice_get_config_state(ckey: SliceConfig, address: number, n_values: number): number
export function slice_set_config(ckey: SliceConfig, value: number): void
export function source_remove(tag: number): boolean
export function source_remove_by_funcs_user_data(funcs: SourceFuncs, user_data?: object | null): boolean
export function source_remove_by_user_data(user_data?: object | null): boolean
export function source_set_name_by_id(tag: number, name: string): void
export function spaced_primes_closest(num: number): number
export function spawn_async(working_directory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, child_setup?: SpawnChildSetupFunc | null): [ /* returnType */ boolean, /* child_pid */ Pid | null ]
export function spawn_async_with_fds(working_directory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, child_setup: SpawnChildSetupFunc | null, stdin_fd: number, stdout_fd: number, stderr_fd: number): [ /* returnType */ boolean, /* child_pid */ Pid | null ]
export function spawn_async_with_pipes(working_directory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, child_setup?: SpawnChildSetupFunc | null): [ /* returnType */ boolean, /* child_pid */ Pid | null, /* standard_input */ number | null, /* standard_output */ number | null, /* standard_error */ number | null ]
export function spawn_async_with_pipes_and_fds(working_directory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, child_setup: SpawnChildSetupFunc | null, stdin_fd: number, stdout_fd: number, stderr_fd: number, source_fds: number[] | null, target_fds: number[] | null): [ /* returnType */ boolean, /* child_pid_out */ Pid | null, /* stdin_pipe_out */ number | null, /* stdout_pipe_out */ number | null, /* stderr_pipe_out */ number | null ]
export function spawn_check_exit_status(exit_status: number): boolean
export function spawn_close_pid(pid: Pid): void
export function spawn_command_line_async(command_line: string): boolean
export function spawn_command_line_sync(command_line: string): [ /* returnType */ boolean, /* standard_output */ Uint8Array | null, /* standard_error */ Uint8Array | null, /* exit_status */ number | null ]
export function spawn_error_quark(): Quark
export function spawn_exit_error_quark(): Quark
export function spawn_sync(working_directory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, child_setup?: SpawnChildSetupFunc | null): [ /* returnType */ boolean, /* standard_output */ Uint8Array | null, /* standard_error */ Uint8Array | null, /* exit_status */ number | null ]
export function stpcpy(dest: string, src: string): string
export function str_equal(v1: object, v2: object): boolean
export function str_has_prefix(str: string, prefix: string): boolean
export function str_has_suffix(str: string, suffix: string): boolean
export function str_hash(v: object): number
export function str_is_ascii(str: string): boolean
export function str_match_string(search_term: string, potential_hit: string, accept_alternates: boolean): boolean
export function str_to_ascii(str: string, from_locale?: string | null): string
export function str_tokenize_and_fold(string: string, translit_locale?: string | null): [ /* returnType */ string[], /* ascii_alternates */ string[] ]
export function strcanon(string: string, valid_chars: string, substitutor: number): string
export function strcasecmp(s1: string, s2: string): number
export function strchomp(string: string): string
export function strchug(string: string): string
export function strcmp0(str1?: string | null, str2?: string | null): number
export function strcompress(source: string): string
export function strdelimit(string: string, delimiters: string | null, new_delimiter: number): string
export function strdown(string: string): string
export function strdup(str?: string | null): string
export function strerror(errnum: number): string
export function strescape(source: string, exceptions?: string | null): string
export function strfreev(str_array?: string | null): void
export function string_new(init?: string | null): String
export function string_new_len(init: string, len: number): String
export function string_sized_new(dfl_size: number): String
export function strip_context(msgid: string, msgval: string): string
export function strjoinv(separator: string | null, str_array: string): string
export function strlcat(dest: string, src: string, dest_size: number): number
export function strlcpy(dest: string, src: string, dest_size: number): number
export function strncasecmp(s1: string, s2: string, n: number): number
export function strndup(str: string, n: number): string
export function strnfill(length: number, fill_char: number): string
export function strreverse(string: string): string
export function strrstr(haystack: string, needle: string): string
export function strrstr_len(haystack: string, haystack_len: number, needle: string): string
export function strsignal(signum: number): string
export function strstr_len(haystack: string, haystack_len: number, needle: string): string
export function strtod(nptr: string): [ /* returnType */ number, /* endptr */ string | null ]
export function strup(string: string): string
export function strv_contains(strv: string, str: string): boolean
export function strv_equal(strv1: string, strv2: string): boolean
export function strv_get_type(): GObject.Type
export function strv_length(str_array: string): number
export function test_add_data_func(testpath: string, test_data: object | null, test_func: TestDataFunc): void
export function test_add_data_func_full(testpath: string, test_data: object | null, test_func: TestDataFunc): void
export function test_add_func(testpath: string, test_func: TestFunc): void
export function test_assert_expected_messages_internal(domain: string, file: string, line: number, func: string): void
export function test_bug(bug_uri_snippet: string): void
export function test_bug_base(uri_pattern: string): void
export function test_expect_message(log_domain: string | null, log_level: LogLevelFlags, pattern: string): void
export function test_fail(): void
export function test_failed(): boolean
export function test_get_dir(file_type: TestFileType): string
export function test_get_path(): string
export function test_incomplete(msg?: string | null): void
export function test_log_type_name(log_type: TestLogType): string
export function test_queue_destroy(destroy_func: DestroyNotify, destroy_data?: object | null): void
export function test_queue_free(gfree_pointer?: object | null): void
export function test_rand_double(): number
export function test_rand_double_range(range_start: number, range_end: number): number
export function test_rand_int(): number
export function test_rand_int_range(begin: number, end: number): number
export function test_run(): number
export function test_run_suite(suite: TestSuite): number
export function test_set_nonfatal_assertions(): void
export function test_skip(msg?: string | null): void
export function test_subprocess(): boolean
export function test_summary(summary: string): void
export function test_timer_elapsed(): number
export function test_timer_last(): number
export function test_timer_start(): void
export function test_trap_assertions(domain: string, file: string, line: number, func: string, assertion_flags: number, pattern: string): void
export function test_trap_fork(usec_timeout: number, test_trap_flags: TestTrapFlags): boolean
export function test_trap_has_passed(): boolean
export function test_trap_reached_timeout(): boolean
export function test_trap_subprocess(test_path: string | null, usec_timeout: number, test_flags: TestSubprocessFlags): void
export function thread_error_quark(): Quark
export function thread_exit(retval?: object | null): void
export function thread_pool_get_max_idle_time(): number
export function thread_pool_get_max_unused_threads(): number
export function thread_pool_get_num_unused_threads(): number
export function thread_pool_set_max_idle_time(interval: number): void
export function thread_pool_set_max_unused_threads(max_threads: number): void
export function thread_pool_stop_unused_threads(): void
export function thread_self(): Thread
export function thread_yield(): void
export function time_val_from_iso8601(iso_date: string): [ /* returnType */ boolean, /* time_ */ TimeVal ]
export function timeout_add(priority: number, interval: number, function_: SourceFunc): number
export function timeout_add_seconds(priority: number, interval: number, function_: SourceFunc): number
export function timeout_source_new(interval: number): Source
export function timeout_source_new_seconds(interval: number): Source
export function trash_stack_height(stack_p: TrashStack): number
export function trash_stack_peek(stack_p: TrashStack): object | null
export function trash_stack_pop(stack_p: TrashStack): object | null
export function trash_stack_push(stack_p: TrashStack, data_p: object): void
export function try_malloc(n_bytes: number): object | null
export function try_malloc0(n_bytes: number): object | null
export function try_malloc0_n(n_blocks: number, n_block_bytes: number): object | null
export function try_malloc_n(n_blocks: number, n_block_bytes: number): object | null
export function try_realloc(mem: object | null, n_bytes: number): object | null
export function try_realloc_n(mem: object | null, n_blocks: number, n_block_bytes: number): object | null
export function ucs4_to_utf16(str: number, len: number): [ /* returnType */ number, /* items_read */ number | null, /* items_written */ number | null ]
export function ucs4_to_utf8(str: number, len: number): [ /* returnType */ string, /* items_read */ number | null, /* items_written */ number | null ]
export function unichar_break_type(c: number): UnicodeBreakType
export function unichar_combining_class(uc: number): number
export function unichar_compose(a: number, b: number): [ /* returnType */ boolean, /* ch */ number ]
export function unichar_decompose(ch: number): [ /* returnType */ boolean, /* a */ number, /* b */ number ]
export function unichar_digit_value(c: number): number
export function unichar_fully_decompose(ch: number, compat: boolean, result_len: number): [ /* returnType */ number, /* result */ number | null ]
export function unichar_get_mirror_char(ch: number, mirrored_ch: number): boolean
export function unichar_get_script(ch: number): UnicodeScript
export function unichar_isalnum(c: number): boolean
export function unichar_isalpha(c: number): boolean
export function unichar_iscntrl(c: number): boolean
export function unichar_isdefined(c: number): boolean
export function unichar_isdigit(c: number): boolean
export function unichar_isgraph(c: number): boolean
export function unichar_islower(c: number): boolean
export function unichar_ismark(c: number): boolean
export function unichar_isprint(c: number): boolean
export function unichar_ispunct(c: number): boolean
export function unichar_isspace(c: number): boolean
export function unichar_istitle(c: number): boolean
export function unichar_isupper(c: number): boolean
export function unichar_iswide(c: number): boolean
export function unichar_iswide_cjk(c: number): boolean
export function unichar_isxdigit(c: number): boolean
export function unichar_iszerowidth(c: number): boolean
export function unichar_to_utf8(c: number): [ /* returnType */ number, /* outbuf */ string | null ]
export function unichar_tolower(c: number): number
export function unichar_totitle(c: number): number
export function unichar_toupper(c: number): number
export function unichar_type(c: number): UnicodeType
export function unichar_validate(ch: number): boolean
export function unichar_xdigit_value(c: number): number
export function unicode_canonical_decomposition(ch: number, result_len: number): number
export function unicode_canonical_ordering(string: number, len: number): void
export function unicode_script_from_iso15924(iso15924: number): UnicodeScript
export function unicode_script_to_iso15924(script: UnicodeScript): number
export function unix_error_quark(): Quark
export function unix_fd_add_full(priority: number, fd: number, condition: IOCondition, function_: UnixFDSourceFunc): number
export function unix_fd_source_new(fd: number, condition: IOCondition): Source
export function unix_get_passwd_entry(user_name: string): object | null
export function unix_open_pipe(fds: number, flags: number): boolean
export function unix_set_fd_nonblocking(fd: number, nonblock: boolean): boolean
export function unix_signal_add(priority: number, signum: number, handler: SourceFunc): number
export function unix_signal_source_new(signum: number): Source
export function unlink(filename: string): number
export function unsetenv(variable: string): void
export function uri_build(flags: UriFlags, scheme: string, userinfo: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): Uri
export function uri_build_with_user(flags: UriFlags, scheme: string, user: string | null, password: string | null, auth_params: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): Uri
export function uri_error_quark(): Quark
export function uri_escape_bytes(unescaped: Uint8Array, reserved_chars_allowed?: string | null): string
export function uri_escape_string(unescaped: string, reserved_chars_allowed: string | null, allow_utf8: boolean): string
export function uri_is_valid(uri_string: string, flags: UriFlags): boolean
export function uri_join(flags: UriFlags, scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): string
export function uri_join_with_user(flags: UriFlags, scheme: string | null, user: string | null, password: string | null, auth_params: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): string
export function uri_list_extract_uris(uri_list: string): string[]
export function uri_parse(uri_string: string, flags: UriFlags): Uri
export function uri_parse_params(params: string, length: number, separators: string, flags: UriParamsFlags): HashTable
export function uri_parse_scheme(uri: string): string | null
export function uri_peek_scheme(uri: string): string | null
export function uri_resolve_relative(base_uri_string: string | null, uri_ref: string, flags: UriFlags): string
export function uri_split(uri_ref: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* userinfo */ string | null, /* host */ string | null, /* port */ number | null, /* path */ string | null, /* query */ string | null, /* fragment */ string | null ]
export function uri_split_network(uri_string: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* host */ string | null, /* port */ number | null ]
export function uri_split_with_user(uri_ref: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* user */ string | null, /* password */ string | null, /* auth_params */ string | null, /* host */ string | null, /* port */ number | null, /* path */ string | null, /* query */ string | null, /* fragment */ string | null ]
export function uri_unescape_bytes(escaped_string: string, length: number, illegal_characters?: string | null): Bytes
export function uri_unescape_segment(escaped_string?: string | null, escaped_string_end?: string | null, illegal_characters?: string | null): string | null
export function uri_unescape_string(escaped_string: string, illegal_characters?: string | null): string | null
export function usleep(microseconds: number): void
export function utf16_to_ucs4(str: number, len: number): [ /* returnType */ number, /* items_read */ number | null, /* items_written */ number | null ]
export function utf16_to_utf8(str: number, len: number): [ /* returnType */ string, /* items_read */ number | null, /* items_written */ number | null ]
export function utf8_casefold(str: string, len: number): string
export function utf8_collate(str1: string, str2: string): number
export function utf8_collate_key(str: string, len: number): string
export function utf8_collate_key_for_filename(str: string, len: number): string
export function utf8_find_next_char(p: string, end?: string | null): string | null
export function utf8_find_prev_char(str: string, p: string): string | null
export function utf8_get_char(p: string): number
export function utf8_get_char_validated(p: string, max_len: number): number
export function utf8_make_valid(str: string, len: number): string
export function utf8_normalize(str: string, len: number, mode: NormalizeMode): string | null
export function utf8_offset_to_pointer(str: string, offset: number): string
export function utf8_pointer_to_offset(str: string, pos: string): number
export function utf8_prev_char(p: string): string
export function utf8_strchr(p: string, len: number, c: number): string | null
export function utf8_strdown(str: string, len: number): string
export function utf8_strlen(p: string, max: number): number
export function utf8_strncpy(dest: string, src: string, n: number): string
export function utf8_strrchr(p: string, len: number, c: number): string | null
export function utf8_strreverse(str: string, len: number): string
export function utf8_strup(str: string, len: number): string
export function utf8_substring(str: string, start_pos: number, end_pos: number): string
export function utf8_to_ucs4(str: string, len: number): [ /* returnType */ number, /* items_read */ number | null, /* items_written */ number | null ]
export function utf8_to_ucs4_fast(str: string, len: number): [ /* returnType */ number, /* items_written */ number | null ]
export function utf8_to_utf16(str: string, len: number): [ /* returnType */ number, /* items_read */ number | null, /* items_written */ number | null ]
export function utf8_validate(str: Uint8Array): [ /* returnType */ boolean, /* end */ string | null ]
export function utf8_validate_len(str: Uint8Array): [ /* returnType */ boolean, /* end */ string | null ]
export function uuid_string_is_valid(str: string): boolean
export function uuid_string_random(): string
export function variant_get_gtype(): GObject.Type
export function variant_is_object_path(string: string): boolean
export function variant_is_signature(string: string): boolean
export function variant_parse(type: VariantType | null, text: string, limit?: string | null, endptr?: string | null): Variant
export function variant_parse_error_print_context(error: Error, source_str: string): string
export function variant_parse_error_quark(): Quark
export function variant_parser_get_error_quark(): Quark
export function variant_type_checked_(arg0: string): VariantType
export function variant_type_string_get_depth_(type_string: string): number
export function variant_type_string_is_valid(type_string: string): boolean
export function variant_type_string_scan(string: string, limit?: string | null): [ /* returnType */ boolean, /* endptr */ string | null ]
export interface ChildWatchFunc {
    (pid: Pid, status: number): void
}
export interface ClearHandleFunc {
    (handle_id: number): void
}
export interface CompareDataFunc {
    (a?: object | null, b?: object | null): number
}
export interface CompareFunc {
    (a?: object | null, b?: object | null): number
}
export interface CopyFunc {
    (src: object, data?: object | null): object
}
export interface DataForeachFunc {
    (key_id: Quark, data?: object | null): void
}
export interface DestroyNotify {
    (data?: object | null): void
}
export interface DuplicateFunc {
    (data?: object | null): object | null
}
export interface EqualFunc {
    (a?: object | null, b?: object | null): boolean
}
export interface ErrorClearFunc {
    (error: Error): void
}
export interface ErrorCopyFunc {
    (src_error: Error, dest_error: Error): void
}
export interface ErrorInitFunc {
    (error: Error): void
}
export interface FreeFunc {
    (data?: object | null): void
}
export interface Func {
    (data?: object | null): void
}
export interface HFunc {
    (key?: object | null, value?: object | null): void
}
export interface HRFunc {
    (key?: object | null, value?: object | null): boolean
}
export interface HashFunc {
    (key?: object | null): number
}
export interface HookCheckFunc {
    (data?: object | null): boolean
}
export interface HookCheckMarshaller {
    (hook: Hook, marshal_data?: object | null): boolean
}
export interface HookCompareFunc {
    (new_hook: Hook, sibling: Hook): number
}
export interface HookFinalizeFunc {
    (hook_list: HookList, hook: Hook): void
}
export interface HookFindFunc {
    (hook: Hook, data?: object | null): boolean
}
export interface HookFunc {
    (data?: object | null): void
}
export interface HookMarshaller {
    (hook: Hook, marshal_data?: object | null): void
}
export interface IOFunc {
    (source: IOChannel, condition: IOCondition, data?: object | null): boolean
}
export interface LogFunc {
    (log_domain: string, log_level: LogLevelFlags, message: string): void
}
export interface LogWriterFunc {
    (log_level: LogLevelFlags, fields: LogField[]): LogWriterOutput
}
export interface NodeForeachFunc {
    (node: Node, data?: object | null): void
}
export interface NodeTraverseFunc {
    (node: Node, data?: object | null): boolean
}
export interface OptionArgFunc {
    (option_name: string, value: string, data?: object | null): boolean
}
export interface OptionErrorFunc {
    (context: OptionContext, group: OptionGroup, data?: object | null): void
}
export interface OptionParseFunc {
    (context: OptionContext, group: OptionGroup, data?: object | null): boolean
}
export interface PollFunc {
    (ufds: PollFD, nfsd: number, timeout_: number): number
}
export interface PrintFunc {
    (string: string): void
}
export interface RegexEvalCallback {
    (match_info: MatchInfo, result: String): boolean
}
export interface ScannerMsgFunc {
    (scanner: Scanner, message: string, error: boolean): void
}
export interface SequenceIterCompareFunc {
    (a: SequenceIter, b: SequenceIter, data?: object | null): number
}
export interface SourceDisposeFunc {
    (source: Source): void
}
export interface SourceDummyMarshal {
    (): void
}
export interface SourceFunc {
    (): boolean
}
export interface SpawnChildSetupFunc {
    (): void
}
export interface TestDataFunc {
    (): void
}
export interface TestFixtureFunc {
    (fixture: object): void
}
export interface TestFunc {
    (): void
}
export interface TestLogFatalFunc {
    (log_domain: string, log_level: LogLevelFlags, message: string): boolean
}
export interface ThreadFunc {
    (data?: object | null): object | null
}
export interface TranslateFunc {
    (str: string, data?: object | null): string
}
export interface TraverseFunc {
    (key?: object | null, value?: object | null, data?: object | null): boolean
}
export interface TraverseNodeFunc {
    (node: TreeNode, data?: object | null): boolean
}
export interface UnixFDSourceFunc {
    (fd: number, condition: IOCondition): boolean
}
export interface VoidFunc {
    (): void
}
export class Array {
    /* Fields of GLib.Array */
    data: string
    len: number
    static name: string
}
export class AsyncQueue {
    /* Methods of GLib.AsyncQueue */
    length(): number
    length_unlocked(): number
    lock(): void
    pop(): object | null
    pop_unlocked(): object | null
    push(data?: object | null): void
    push_front(item?: object | null): void
    push_front_unlocked(item?: object | null): void
    push_unlocked(data?: object | null): void
    ref_unlocked(): void
    remove(item?: object | null): boolean
    remove_unlocked(item?: object | null): boolean
    timed_pop(end_time: TimeVal): object | null
    timed_pop_unlocked(end_time: TimeVal): object | null
    timeout_pop(timeout: number): object | null
    timeout_pop_unlocked(timeout: number): object | null
    try_pop(): object | null
    try_pop_unlocked(): object | null
    unlock(): void
    unref(): void
    unref_and_unlock(): void
    static name: string
}
export class BookmarkFile {
    /* Methods of GLib.BookmarkFile */
    add_application(uri: string, name?: string | null, exec?: string | null): void
    add_group(uri: string, group: string): void
    free(): void
    get_added(uri: string): number
    get_added_date_time(uri: string): DateTime
    get_app_info(uri: string, name: string): [ /* returnType */ boolean, /* exec */ string | null, /* count */ number | null, /* stamp */ number | null ]
    get_application_info(uri: string, name: string): [ /* returnType */ boolean, /* exec */ string | null, /* count */ number | null, /* stamp */ DateTime | null ]
    get_applications(uri: string): string[]
    get_description(uri: string): string
    get_groups(uri: string): string[]
    get_icon(uri: string): [ /* returnType */ boolean, /* href */ string | null, /* mime_type */ string | null ]
    get_is_private(uri: string): boolean
    get_mime_type(uri: string): string
    get_modified(uri: string): number
    get_modified_date_time(uri: string): DateTime
    get_size(): number
    get_title(uri?: string | null): string
    get_uris(): string[]
    get_visited(uri: string): number
    get_visited_date_time(uri: string): DateTime
    has_application(uri: string, name: string): boolean
    has_group(uri: string, group: string): boolean
    has_item(uri: string): boolean
    load_from_data(data: Uint8Array): boolean
    load_from_data_dirs(file: string): [ /* returnType */ boolean, /* full_path */ string | null ]
    load_from_file(filename: string): boolean
    move_item(old_uri: string, new_uri?: string | null): boolean
    remove_application(uri: string, name: string): boolean
    remove_group(uri: string, group: string): boolean
    remove_item(uri: string): boolean
    set_added(uri: string, added: number): void
    set_added_date_time(uri: string, added: DateTime): void
    set_app_info(uri: string, name: string, exec: string, count: number, stamp: number): boolean
    set_application_info(uri: string, name: string, exec: string, count: number, stamp?: DateTime | null): boolean
    set_description(uri: string | null, description: string): void
    set_groups(uri: string, groups: string[] | null): void
    set_icon(uri: string, href: string | null, mime_type: string): void
    set_is_private(uri: string, is_private: boolean): void
    set_mime_type(uri: string, mime_type: string): void
    set_modified(uri: string, modified: number): void
    set_modified_date_time(uri: string, modified: DateTime): void
    set_title(uri: string | null, title: string): void
    set_visited(uri: string, visited: number): void
    set_visited_date_time(uri: string, visited: DateTime): void
    to_data(): Uint8Array
    to_file(filename: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): Quark
}
export class ByteArray {
    /* Fields of GLib.ByteArray */
    data: number
    len: number
    static name: string
    /* Static methods and pseudo-constructors */
    static free(array: Uint8Array, free_segment: boolean): number
    static free_to_bytes(array: Uint8Array): Bytes
    static new_take(data: Uint8Array): Uint8Array
    static steal(array: Uint8Array): [ /* returnType */ number, /* len */ number | null ]
    static unref(array: Uint8Array): void
}
export class Bytes {
    /* Methods of GLib.Bytes */
    compare(bytes2: Bytes): number
    equal(bytes2: Bytes): boolean
    get_data(): Uint8Array | null
    get_size(): number
    hash(): number
    new_from_bytes(offset: number, length: number): Bytes
    ref(): Bytes
    unref(): void
    unref_to_array(): Uint8Array
    unref_to_data(): Uint8Array
    static name: string
    static new(data: Uint8Array | null): Bytes
    constructor(data: Uint8Array | null)
    /* Static methods and pseudo-constructors */
    static new(data: Uint8Array | null): Bytes
    static new_take(data: Uint8Array | null): Bytes
}
export class Checksum {
    /* Methods of GLib.Checksum */
    copy(): Checksum
    free(): void
    get_string(): string
    reset(): void
    update(data: Uint8Array): void
    static name: string
    static new(checksum_type: ChecksumType): Checksum
    constructor(checksum_type: ChecksumType)
    /* Static methods and pseudo-constructors */
    static new(checksum_type: ChecksumType): Checksum
    static type_get_length(checksum_type: ChecksumType): number
}
export class Cond {
    /* Methods of GLib.Cond */
    broadcast(): void
    clear(): void
    init(): void
    signal(): void
    wait(mutex: Mutex): void
    wait_until(mutex: Mutex, end_time: number): boolean
    static name: string
}
export class Data {
    static name: string
}
export class Date {
    /* Fields of GLib.Date */
    julian_days: number
    julian: number
    dmy: number
    day: number
    month: number
    year: number
    /* Methods of GLib.Date */
    add_days(n_days: number): void
    add_months(n_months: number): void
    add_years(n_years: number): void
    clamp(min_date: Date, max_date: Date): void
    clear(n_dates: number): void
    compare(rhs: Date): number
    copy(): Date
    days_between(date2: Date): number
    free(): void
    get_day(): DateDay
    get_day_of_year(): number
    get_iso8601_week_of_year(): number
    get_julian(): number
    get_monday_week_of_year(): number
    get_month(): DateMonth
    get_sunday_week_of_year(): number
    get_weekday(): DateWeekday
    get_year(): DateYear
    is_first_of_month(): boolean
    is_last_of_month(): boolean
    order(date2: Date): void
    set_day(day: DateDay): void
    set_dmy(day: DateDay, month: DateMonth, y: DateYear): void
    set_julian(julian_date: number): void
    set_month(month: DateMonth): void
    set_parse(str: string): void
    set_time(time_: Time): void
    set_time_t(timet: number): void
    set_time_val(timeval: TimeVal): void
    set_year(year: DateYear): void
    subtract_days(n_days: number): void
    subtract_months(n_months: number): void
    subtract_years(n_years: number): void
    to_struct_tm(tm: object): void
    valid(): boolean
    static name: string
    static new(): Date
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Date
    static new_dmy(day: DateDay, month: DateMonth, year: DateYear): Date
    static new_julian(julian_day: number): Date
    static get_days_in_month(month: DateMonth, year: DateYear): number
    static get_monday_weeks_in_year(year: DateYear): number
    static get_sunday_weeks_in_year(year: DateYear): number
    static is_leap_year(year: DateYear): boolean
    static strftime(s: string, slen: number, format: string, date: Date): number
    static valid_day(day: DateDay): boolean
    static valid_dmy(day: DateDay, month: DateMonth, year: DateYear): boolean
    static valid_julian(julian_date: number): boolean
    static valid_month(month: DateMonth): boolean
    static valid_weekday(weekday: DateWeekday): boolean
    static valid_year(year: DateYear): boolean
}
export class DateTime {
    /* Methods of GLib.DateTime */
    add(timespan: TimeSpan): DateTime | null
    add_days(days: number): DateTime | null
    add_full(years: number, months: number, days: number, hours: number, minutes: number, seconds: number): DateTime | null
    add_hours(hours: number): DateTime | null
    add_minutes(minutes: number): DateTime | null
    add_months(months: number): DateTime | null
    add_seconds(seconds: number): DateTime | null
    add_weeks(weeks: number): DateTime | null
    add_years(years: number): DateTime | null
    compare(dt2: DateTime): number
    difference(begin: DateTime): TimeSpan
    equal(dt2: DateTime): boolean
    format(format: string): string | null
    format_iso8601(): string | null
    get_day_of_month(): number
    get_day_of_week(): number
    get_day_of_year(): number
    get_hour(): number
    get_microsecond(): number
    get_minute(): number
    get_month(): number
    get_second(): number
    get_seconds(): number
    get_timezone(): TimeZone
    get_timezone_abbreviation(): string
    get_utc_offset(): TimeSpan
    get_week_numbering_year(): number
    get_week_of_year(): number
    get_year(): number
    get_ymd(): [ /* year */ number | null, /* month */ number | null, /* day */ number | null ]
    hash(): number
    is_daylight_savings(): boolean
    ref(): DateTime
    to_local(): DateTime | null
    to_timeval(tv: TimeVal): boolean
    to_timezone(tz: TimeZone): DateTime | null
    to_unix(): number
    to_utc(): DateTime | null
    unref(): void
    static name: string
    static new(tz: TimeZone, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    constructor(tz: TimeZone, year: number, month: number, day: number, hour: number, minute: number, seconds: number)
    /* Static methods and pseudo-constructors */
    static new(tz: TimeZone, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    static new_from_iso8601(text: string, default_tz?: TimeZone | null): DateTime
    static new_from_timeval_local(tv: TimeVal): DateTime
    static new_from_timeval_utc(tv: TimeVal): DateTime
    static new_from_unix_local(t: number): DateTime
    static new_from_unix_utc(t: number): DateTime
    static new_local(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    static new_now(tz: TimeZone): DateTime
    static new_now_local(): DateTime
    static new_now_utc(): DateTime
    static new_utc(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
}
export class DebugKey {
    /* Fields of GLib.DebugKey */
    key: string
    value: number
    static name: string
}
export class Dir {
    /* Methods of GLib.Dir */
    close(): void
    read_name(): string
    rewind(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static make_tmp(tmpl?: string | null): string
}
export class Error {
    /* Fields of GLib.Error */
    domain: Quark
    code: number
    message: string
    /* Methods of GLib.Error */
    copy(): Error
    free(): void
    matches(domain: Quark, code: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static new_literal(domain: Quark, code: number, message: string): Error
}
export class HashTable {
    static name: string
    /* Static methods and pseudo-constructors */
    static add(hash_table: HashTable, key?: object | null): boolean
    static contains(hash_table: HashTable, key?: object | null): boolean
    static destroy(hash_table: HashTable): void
    static insert(hash_table: HashTable, key?: object | null, value?: object | null): boolean
    static lookup(hash_table: HashTable, key?: object | null): object | null
    static lookup_extended(hash_table: HashTable, lookup_key?: object | null): [ /* returnType */ boolean, /* orig_key */ object | null, /* value */ object | null ]
    static remove(hash_table: HashTable, key?: object | null): boolean
    static remove_all(hash_table: HashTable): void
    static replace(hash_table: HashTable, key?: object | null, value?: object | null): boolean
    static size(hash_table: HashTable): number
    static steal(hash_table: HashTable, key?: object | null): boolean
    static steal_all(hash_table: HashTable): void
    static steal_extended(hash_table: HashTable, lookup_key?: object | null): [ /* returnType */ boolean, /* stolen_key */ object | null, /* stolen_value */ object | null ]
    static unref(hash_table: HashTable): void
}
export class HashTableIter {
    /* Methods of GLib.HashTableIter */
    init(hash_table: HashTable): void
    next(): [ /* returnType */ boolean, /* key */ object | null, /* value */ object | null ]
    remove(): void
    replace(value?: object | null): void
    steal(): void
    static name: string
}
export class Hmac {
    /* Methods of GLib.Hmac */
    get_digest(buffer: Uint8Array): void
    get_string(): string
    unref(): void
    update(data: Uint8Array): void
    static name: string
}
export class Hook {
    /* Fields of GLib.Hook */
    data: object
    next: Hook
    prev: Hook
    ref_count: number
    hook_id: number
    flags: number
    func: object
    destroy: DestroyNotify
    /* Methods of GLib.Hook */
    compare_ids(sibling: Hook): number
    static name: string
    /* Static methods and pseudo-constructors */
    static destroy(hook_list: HookList, hook_id: number): boolean
    static destroy_link(hook_list: HookList, hook: Hook): void
    static free(hook_list: HookList, hook: Hook): void
    static insert_before(hook_list: HookList, sibling: Hook | null, hook: Hook): void
    static prepend(hook_list: HookList, hook: Hook): void
    static unref(hook_list: HookList, hook: Hook): void
}
export class HookList {
    /* Fields of GLib.HookList */
    seq_id: number
    hook_size: number
    is_setup: number
    hooks: Hook
    dummy3: object
    finalize_hook: HookFinalizeFunc
    dummy: object[]
    /* Methods of GLib.HookList */
    clear(): void
    init(hook_size: number): void
    invoke(may_recurse: boolean): void
    invoke_check(may_recurse: boolean): void
    static name: string
}
export class IConv {
    static name: string
}
export class IOChannel {
    /* Methods of GLib.IOChannel */
    close(): void
    flush(): IOStatus
    get_buffer_condition(): IOCondition
    get_buffer_size(): number
    get_buffered(): boolean
    get_close_on_unref(): boolean
    get_encoding(): string
    get_flags(): IOFlags
    get_line_term(length: number): string
    init(): void
    read(buf: string, count: number, bytes_read: number): IOError
    read_chars(): [ /* returnType */ IOStatus, /* buf */ Uint8Array, /* bytes_read */ number | null ]
    read_line(): [ /* returnType */ IOStatus, /* str_return */ string, /* length */ number | null, /* terminator_pos */ number | null ]
    read_line_string(buffer: String, terminator_pos?: number | null): IOStatus
    read_to_end(): [ /* returnType */ IOStatus, /* str_return */ Uint8Array ]
    read_unichar(): [ /* returnType */ IOStatus, /* thechar */ number ]
    ref(): IOChannel
    seek(offset: number, type: SeekType): IOError
    seek_position(offset: number, type: SeekType): IOStatus
    set_buffer_size(size: number): void
    set_buffered(buffered: boolean): void
    set_close_on_unref(do_close: boolean): void
    set_encoding(encoding?: string | null): IOStatus
    set_flags(flags: IOFlags): IOStatus
    set_line_term(line_term: string | null, length: number): void
    shutdown(flush: boolean): IOStatus
    unix_get_fd(): number
    unref(): void
    write(buf: string, count: number, bytes_written: number): IOError
    write_chars(buf: Uint8Array, count: number): [ /* returnType */ IOStatus, /* bytes_written */ number ]
    write_unichar(thechar: number): IOStatus
    static name: string
    /* Static methods and pseudo-constructors */
    static new_file(filename: string, mode: string): IOChannel
    static unix_new(fd: number): IOChannel
    static error_from_errno(en: number): IOChannelError
    static error_quark(): Quark
}
export class IOFuncs {
    /* Fields of GLib.IOFuncs */
    io_read: (channel: IOChannel, buf: string, count: number, bytes_read: number) => IOStatus
    io_write: (channel: IOChannel, buf: string, count: number, bytes_written: number) => IOStatus
    io_seek: (channel: IOChannel, offset: number, type: SeekType) => IOStatus
    io_close: (channel: IOChannel) => IOStatus
    io_create_watch: (channel: IOChannel, condition: IOCondition) => Source
    io_free: (channel: IOChannel) => void
    io_set_flags: (channel: IOChannel, flags: IOFlags) => IOStatus
    io_get_flags: (channel: IOChannel) => IOFlags
    static name: string
}
export class KeyFile {
    /* Methods of GLib.KeyFile */
    get_boolean(group_name: string, key: string): boolean
    get_boolean_list(group_name: string, key: string): boolean[]
    get_comment(group_name?: string | null, key?: string | null): string
    get_double(group_name: string, key: string): number
    get_double_list(group_name: string, key: string): number[]
    get_groups(): [ /* returnType */ string[], /* length */ number | null ]
    get_int64(group_name: string, key: string): number
    get_integer(group_name: string, key: string): number
    get_integer_list(group_name: string, key: string): number[]
    get_keys(group_name: string): [ /* returnType */ string[], /* length */ number | null ]
    get_locale_for_key(group_name: string, key: string, locale?: string | null): string | null
    get_locale_string(group_name: string, key: string, locale?: string | null): string
    get_locale_string_list(group_name: string, key: string, locale?: string | null): string[]
    get_start_group(): string | null
    get_string(group_name: string, key: string): string
    get_string_list(group_name: string, key: string): string[]
    get_uint64(group_name: string, key: string): number
    get_value(group_name: string, key: string): string
    has_group(group_name: string): boolean
    load_from_bytes(bytes: Bytes, flags: KeyFileFlags): boolean
    load_from_data(data: string, length: number, flags: KeyFileFlags): boolean
    load_from_data_dirs(file: string, flags: KeyFileFlags): [ /* returnType */ boolean, /* full_path */ string | null ]
    load_from_dirs(file: string, search_dirs: string[], flags: KeyFileFlags): [ /* returnType */ boolean, /* full_path */ string | null ]
    load_from_file(file: string, flags: KeyFileFlags): boolean
    remove_comment(group_name?: string | null, key?: string | null): boolean
    remove_group(group_name: string): boolean
    remove_key(group_name: string, key: string): boolean
    save_to_file(filename: string): boolean
    set_boolean(group_name: string, key: string, value: boolean): void
    set_boolean_list(group_name: string, key: string, list: boolean[]): void
    set_comment(group_name: string | null, key: string | null, comment: string): boolean
    set_double(group_name: string, key: string, value: number): void
    set_double_list(group_name: string, key: string, list: number[]): void
    set_int64(group_name: string, key: string, value: number): void
    set_integer(group_name: string, key: string, value: number): void
    set_integer_list(group_name: string, key: string, list: number[]): void
    set_list_separator(separator: number): void
    set_locale_string(group_name: string, key: string, locale: string, string: string): void
    set_locale_string_list(group_name: string, key: string, locale: string, list: string[]): void
    set_string(group_name: string, key: string, string: string): void
    set_string_list(group_name: string, key: string, list: string[]): void
    set_uint64(group_name: string, key: string, value: number): void
    set_value(group_name: string, key: string, value: string): void
    to_data(): [ /* returnType */ string, /* length */ number | null ]
    unref(): void
    static name: string
    static new(): KeyFile
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): KeyFile
    static error_quark(): Quark
}
export class List {
    /* Fields of GLib.List */
    data: object
    next: object[]
    prev: object[]
    static name: string
}
export class LogField {
    /* Fields of GLib.LogField */
    key: string
    value: object
    length: number
    static name: string
}
export class MainContext {
    /* Methods of GLib.MainContext */
    acquire(): boolean
    add_poll(fd: PollFD, priority: number): void
    check(max_priority: number, fds: PollFD[]): boolean
    dispatch(): void
    find_source_by_funcs_user_data(funcs: SourceFuncs, user_data?: object | null): Source
    find_source_by_id(source_id: number): Source
    find_source_by_user_data(user_data?: object | null): Source
    invoke_full(priority: number, function_: SourceFunc): void
    is_owner(): boolean
    iteration(may_block: boolean): boolean
    pending(): boolean
    pop_thread_default(): void
    prepare(): [ /* returnType */ boolean, /* priority */ number | null ]
    push_thread_default(): void
    query(max_priority: number): [ /* returnType */ number, /* timeout_ */ number, /* fds */ PollFD[] ]
    ref(): MainContext
    release(): void
    remove_poll(fd: PollFD): void
    unref(): void
    wait(cond: Cond, mutex: Mutex): boolean
    wakeup(): void
    static name: string
    static new(): MainContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MainContext
    static default(): MainContext
    static get_thread_default(): MainContext | null
    static ref_thread_default(): MainContext
}
export class MainLoop {
    /* Methods of GLib.MainLoop */
    get_context(): MainContext
    is_running(): boolean
    quit(): void
    ref(): MainLoop
    run(): void
    unref(): void
    static name: string
    static new(context: MainContext | null, is_running: boolean): MainLoop
    constructor(context: MainContext | null, is_running: boolean)
    /* Static methods and pseudo-constructors */
    static new(context: MainContext | null, is_running: boolean): MainLoop
}
export class MappedFile {
    /* Methods of GLib.MappedFile */
    free(): void
    get_bytes(): Bytes
    get_contents(): string
    get_length(): number
    ref(): MappedFile
    unref(): void
    static name: string
    static new(filename: string, writable: boolean): MappedFile
    constructor(filename: string, writable: boolean)
    /* Static methods and pseudo-constructors */
    static new(filename: string, writable: boolean): MappedFile
    static new_from_fd(fd: number, writable: boolean): MappedFile
}
export class MarkupParseContext {
    /* Methods of GLib.MarkupParseContext */
    end_parse(): boolean
    free(): void
    get_element(): string
    get_position(): [ /* line_number */ number | null, /* char_number */ number | null ]
    get_user_data(): object | null
    parse(text: string, text_len: number): boolean
    pop(): object | null
    push(parser: MarkupParser, user_data?: object | null): void
    ref(): MarkupParseContext
    unref(): void
    static name: string
    static new(parser: MarkupParser, flags: MarkupParseFlags, user_data: object | null, user_data_dnotify: DestroyNotify): MarkupParseContext
    constructor(parser: MarkupParser, flags: MarkupParseFlags, user_data: object | null, user_data_dnotify: DestroyNotify)
    /* Static methods and pseudo-constructors */
    static new(parser: MarkupParser, flags: MarkupParseFlags, user_data: object | null, user_data_dnotify: DestroyNotify): MarkupParseContext
}
export class MarkupParser {
    /* Fields of GLib.MarkupParser */
    start_element: (context: MarkupParseContext, element_name: string, attribute_names: string, attribute_values: string) => void
    end_element: (context: MarkupParseContext, element_name: string) => void
    text: (context: MarkupParseContext, text: string, text_len: number) => void
    passthrough: (context: MarkupParseContext, passthrough_text: string, text_len: number) => void
    error: (context: MarkupParseContext, error: Error) => void
    static name: string
}
export class MatchInfo {
    /* Methods of GLib.MatchInfo */
    expand_references(string_to_expand: string): string | null
    fetch(match_num: number): string | null
    fetch_all(): string[]
    fetch_named(name: string): string | null
    fetch_named_pos(name: string): [ /* returnType */ boolean, /* start_pos */ number | null, /* end_pos */ number | null ]
    fetch_pos(match_num: number): [ /* returnType */ boolean, /* start_pos */ number | null, /* end_pos */ number | null ]
    free(): void
    get_match_count(): number
    get_regex(): Regex
    get_string(): string
    is_partial_match(): boolean
    matches(): boolean
    next(): boolean
    ref(): MatchInfo
    unref(): void
    static name: string
}
export class MemVTable {
    /* Fields of GLib.MemVTable */
    malloc: (n_bytes: number) => object
    realloc: (mem: object, n_bytes: number) => object
    free: (mem: object) => void
    calloc: (n_blocks: number, n_block_bytes: number) => object
    try_malloc: (n_bytes: number) => object
    try_realloc: (mem: object, n_bytes: number) => object
    static name: string
}
export class Node {
    /* Fields of GLib.Node */
    data: object
    next: Node
    prev: Node
    parent: Node
    children: Node
    /* Methods of GLib.Node */
    child_index(data?: object | null): number
    child_position(child: Node): number
    depth(): number
    destroy(): void
    is_ancestor(descendant: Node): boolean
    max_height(): number
    n_children(): number
    n_nodes(flags: TraverseFlags): number
    reverse_children(): void
    unlink(): void
    static name: string
}
export class Once {
    /* Fields of GLib.Once */
    status: OnceStatus
    retval: object
    static name: string
    /* Static methods and pseudo-constructors */
    static init_enter(location: object): boolean
    static init_leave(location: object, result: number): void
}
export class OptionContext {
    /* Methods of GLib.OptionContext */
    add_group(group: OptionGroup): void
    add_main_entries(entries: OptionEntry[], translation_domain?: string | null): void
    free(): void
    get_description(): string
    get_help(main_help: boolean, group?: OptionGroup | null): string
    get_help_enabled(): boolean
    get_ignore_unknown_options(): boolean
    get_main_group(): OptionGroup
    get_strict_posix(): boolean
    get_summary(): string
    parse(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
    parse_strv(arguments_?: string[] | null): [ /* returnType */ boolean, /* arguments_ */ string[] | null ]
    set_description(description?: string | null): void
    set_help_enabled(help_enabled: boolean): void
    set_ignore_unknown_options(ignore_unknown: boolean): void
    set_main_group(group: OptionGroup): void
    set_strict_posix(strict_posix: boolean): void
    set_summary(summary?: string | null): void
    set_translate_func(func?: TranslateFunc | null): void
    set_translation_domain(domain: string): void
    static name: string
}
export class OptionEntry {
    /* Fields of GLib.OptionEntry */
    long_name: string
    short_name: number
    flags: number
    arg: OptionArg
    arg_data: object
    description: string
    arg_description: string
    static name: string
}
export class OptionGroup {
    /* Methods of GLib.OptionGroup */
    add_entries(entries: OptionEntry[]): void
    free(): void
    ref(): OptionGroup
    set_translate_func(func?: TranslateFunc | null): void
    set_translation_domain(domain: string): void
    unref(): void
    static name: string
    static new(name: string, description: string, help_description: string, user_data?: object | null, destroy?: DestroyNotify | null): OptionGroup
    constructor(name: string, description: string, help_description: string, user_data?: object | null, destroy?: DestroyNotify | null)
    /* Static methods and pseudo-constructors */
    static new(name: string, description: string, help_description: string, user_data?: object | null, destroy?: DestroyNotify | null): OptionGroup
}
export class PatternSpec {
    /* Methods of GLib.PatternSpec */
    equal(pspec2: PatternSpec): boolean
    free(): void
    static name: string
}
export class PollFD {
    /* Fields of GLib.PollFD */
    fd: number
    events: number
    revents: number
    static name: string
}
export class Private {
    /* Methods of GLib.Private */
    get(): object | null
    replace(value?: object | null): void
    set(value?: object | null): void
    static name: string
}
export class PtrArray {
    /* Fields of GLib.PtrArray */
    pdata: object
    len: number
    static name: string
}
export class Queue {
    /* Fields of GLib.Queue */
    head: object[]
    tail: object[]
    length: number
    /* Methods of GLib.Queue */
    clear(): void
    clear_full(free_func?: DestroyNotify | null): void
    free(): void
    free_full(free_func: DestroyNotify): void
    get_length(): number
    index(data?: object | null): number
    init(): void
    is_empty(): boolean
    peek_head(): object | null
    peek_nth(n: number): object | null
    peek_tail(): object | null
    pop_head(): object | null
    pop_nth(n: number): object | null
    pop_tail(): object | null
    push_head(data?: object | null): void
    push_nth(data: object | null, n: number): void
    push_tail(data?: object | null): void
    remove(data?: object | null): boolean
    remove_all(data?: object | null): number
    reverse(): void
    static name: string
}
export class RWLock {
    /* Methods of GLib.RWLock */
    clear(): void
    init(): void
    reader_lock(): void
    reader_trylock(): boolean
    reader_unlock(): void
    writer_lock(): void
    writer_trylock(): boolean
    writer_unlock(): void
    static name: string
}
export class Rand {
    /* Methods of GLib.Rand */
    double(): number
    double_range(begin: number, end: number): number
    free(): void
    int(): number
    int_range(begin: number, end: number): number
    set_seed(seed: number): void
    set_seed_array(seed: number, seed_length: number): void
    static name: string
}
export class RecMutex {
    /* Methods of GLib.RecMutex */
    clear(): void
    init(): void
    lock(): void
    trylock(): boolean
    unlock(): void
    static name: string
}
export class Regex {
    /* Methods of GLib.Regex */
    get_capture_count(): number
    get_compile_flags(): RegexCompileFlags
    get_has_cr_or_lf(): boolean
    get_match_flags(): RegexMatchFlags
    get_max_backref(): number
    get_max_lookbehind(): number
    get_pattern(): string
    get_string_number(name: string): number
    match(string: string, match_options: RegexMatchFlags): [ /* returnType */ boolean, /* match_info */ MatchInfo | null ]
    match_all(string: string, match_options: RegexMatchFlags): [ /* returnType */ boolean, /* match_info */ MatchInfo | null ]
    match_all_full(string: string[], start_position: number, match_options: RegexMatchFlags): [ /* returnType */ boolean, /* match_info */ MatchInfo | null ]
    match_full(string: string[], start_position: number, match_options: RegexMatchFlags): [ /* returnType */ boolean, /* match_info */ MatchInfo | null ]
    ref(): Regex
    replace(string: string[], start_position: number, replacement: string, match_options: RegexMatchFlags): string
    replace_literal(string: string[], start_position: number, replacement: string, match_options: RegexMatchFlags): string
    split(string: string, match_options: RegexMatchFlags): string[]
    split_full(string: string[], start_position: number, match_options: RegexMatchFlags, max_tokens: number): string[]
    unref(): void
    static name: string
    static new(pattern: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): Regex
    constructor(pattern: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags)
    /* Static methods and pseudo-constructors */
    static new(pattern: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): Regex
    static check_replacement(replacement: string): [ /* returnType */ boolean, /* has_references */ boolean | null ]
    static error_quark(): Quark
    static escape_nul(string: string, length: number): string
    static escape_string(string: string[]): string
    static match_simple(pattern: string, string: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): boolean
    static split_simple(pattern: string, string: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): string[]
}
export class SList {
    /* Fields of GLib.SList */
    data: object
    next: object[]
    static name: string
}
export class Scanner {
    /* Fields of GLib.Scanner */
    user_data: object
    max_parse_errors: number
    parse_errors: number
    input_name: string
    qdata: Data
    config: ScannerConfig
    token: TokenType
    value: TokenValue
    line: number
    position: number
    next_token: TokenType
    next_value: TokenValue
    next_line: number
    next_position: number
    msg_handler: ScannerMsgFunc
    /* Methods of GLib.Scanner */
    cur_line(): number
    cur_position(): number
    cur_token(): TokenType
    destroy(): void
    eof(): boolean
    get_next_token(): TokenType
    input_file(input_fd: number): void
    input_text(text: string, text_len: number): void
    lookup_symbol(symbol: string): object | null
    peek_next_token(): TokenType
    scope_add_symbol(scope_id: number, symbol: string, value?: object | null): void
    scope_lookup_symbol(scope_id: number, symbol: string): object | null
    scope_remove_symbol(scope_id: number, symbol: string): void
    set_scope(scope_id: number): number
    sync_file_offset(): void
    unexp_token(expected_token: TokenType, identifier_spec: string, symbol_spec: string, symbol_name: string, message: string, is_error: number): void
    static name: string
}
export class ScannerConfig {
    /* Fields of GLib.ScannerConfig */
    cset_skip_characters: string
    cset_identifier_first: string
    cset_identifier_nth: string
    cpair_comment_single: string
    case_sensitive: number
    skip_comment_multi: number
    skip_comment_single: number
    scan_comment_multi: number
    scan_identifier: number
    scan_identifier_1char: number
    scan_identifier_NULL: number
    scan_symbols: number
    scan_binary: number
    scan_octal: number
    scan_float: number
    scan_hex: number
    scan_hex_dollar: number
    scan_string_sq: number
    scan_string_dq: number
    numbers_2_int: number
    int_2_float: number
    identifier_2_string: number
    char_2_token: number
    symbol_2_token: number
    scope_0_fallback: number
    store_int64: number
    static name: string
}
export class Sequence {
    /* Methods of GLib.Sequence */
    append(data?: object | null): SequenceIter
    free(): void
    get_begin_iter(): SequenceIter
    get_end_iter(): SequenceIter
    get_iter_at_pos(pos: number): SequenceIter
    get_length(): number
    is_empty(): boolean
    prepend(data?: object | null): SequenceIter
    static name: string
    /* Static methods and pseudo-constructors */
    static get(iter: SequenceIter): object | null
    static insert_before(iter: SequenceIter, data?: object | null): SequenceIter
    static move(src: SequenceIter, dest: SequenceIter): void
    static move_range(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void
    static range_get_midpoint(begin: SequenceIter, end: SequenceIter): SequenceIter
    static remove(iter: SequenceIter): void
    static remove_range(begin: SequenceIter, end: SequenceIter): void
    static set(iter: SequenceIter, data?: object | null): void
    static swap(a: SequenceIter, b: SequenceIter): void
}
export class SequenceIter {
    /* Methods of GLib.SequenceIter */
    compare(b: SequenceIter): number
    get_position(): number
    get_sequence(): Sequence
    is_begin(): boolean
    is_end(): boolean
    move(delta: number): SequenceIter
    next(): SequenceIter
    prev(): SequenceIter
    static name: string
}
export class Source {
    /* Methods of GLib.Source */
    add_child_source(child_source: Source): void
    add_poll(fd: PollFD): void
    add_unix_fd(fd: number, events: IOCondition): object
    attach(context?: MainContext | null): number
    destroy(): void
    get_can_recurse(): boolean
    get_context(): MainContext | null
    get_current_time(timeval: TimeVal): void
    get_id(): number
    get_name(): string | null
    get_priority(): number
    get_ready_time(): number
    get_time(): number
    is_destroyed(): boolean
    modify_unix_fd(tag: object, new_events: IOCondition): void
    query_unix_fd(tag: object): IOCondition
    ref(): Source
    remove_child_source(child_source: Source): void
    remove_poll(fd: PollFD): void
    remove_unix_fd(tag: object): void
    set_callback(func: SourceFunc): void
    set_callback_indirect(callback_data: object | null, callback_funcs: SourceCallbackFuncs): void
    set_can_recurse(can_recurse: boolean): void
    set_funcs(funcs: SourceFuncs): void
    set_name(name: string): void
    set_priority(priority: number): void
    set_ready_time(ready_time: number): void
    unref(): void
    static name: string
    static new(source_funcs: SourceFuncs, struct_size: number): Source
    constructor(source_funcs: SourceFuncs, struct_size: number)
    /* Static methods and pseudo-constructors */
    static new(source_funcs: SourceFuncs, struct_size: number): Source
    static remove(tag: number): boolean
    static remove_by_funcs_user_data(funcs: SourceFuncs, user_data?: object | null): boolean
    static remove_by_user_data(user_data?: object | null): boolean
    static set_name_by_id(tag: number, name: string): void
}
export class SourceCallbackFuncs {
    /* Fields of GLib.SourceCallbackFuncs */
    ref: (cb_data: object) => void
    unref: (cb_data: object) => void
    static name: string
}
export class SourceFuncs {
    /* Fields of GLib.SourceFuncs */
    prepare: (source: Source, timeout_: number) => boolean
    check: (source: Source) => boolean
    finalize: (source: Source) => void
    static name: string
}
export class SourcePrivate {
    static name: string
}
export class StatBuf {
    static name: string
}
export class String {
    /* Fields of GLib.String */
    str: string
    len: number
    allocated_len: number
    /* Methods of GLib.String */
    append(val: string): String
    append_c(c: number): String
    append_len(val: string, len: number): String
    append_unichar(wc: number): String
    append_uri_escaped(unescaped: string, reserved_chars_allowed: string, allow_utf8: boolean): String
    ascii_down(): String
    ascii_up(): String
    assign(rval: string): String
    down(): String
    equal(v2: String): boolean
    erase(pos: number, len: number): String
    free(free_segment: boolean): string | null
    free_to_bytes(): Bytes
    hash(): number
    insert(pos: number, val: string): String
    insert_c(pos: number, c: number): String
    insert_len(pos: number, val: string, len: number): String
    insert_unichar(pos: number, wc: number): String
    overwrite(pos: number, val: string): String
    overwrite_len(pos: number, val: string, len: number): String
    prepend(val: string): String
    prepend_c(c: number): String
    prepend_len(val: string, len: number): String
    prepend_unichar(wc: number): String
    replace(find: string, replace: string, limit: number): number
    set_size(len: number): String
    truncate(len: number): String
    up(): String
    static name: string
}
export class StringChunk {
    /* Methods of GLib.StringChunk */
    clear(): void
    free(): void
    insert(string: string): string
    insert_const(string: string): string
    insert_len(string: string, len: number): string
    static name: string
}
export class StrvBuilder {
    /* Methods of GLib.StrvBuilder */
    add(value: string): void
    end(): string[]
    unref(): void
    static name: string
}
export class TestCase {
    static name: string
}
export class TestConfig {
    /* Fields of GLib.TestConfig */
    test_initialized: boolean
    test_quick: boolean
    test_perf: boolean
    test_verbose: boolean
    test_quiet: boolean
    test_undefined: boolean
    static name: string
}
export class TestLogBuffer {
    /* Methods of GLib.TestLogBuffer */
    free(): void
    push(n_bytes: number, bytes: number): void
    static name: string
}
export class TestLogMsg {
    /* Fields of GLib.TestLogMsg */
    log_type: TestLogType
    n_strings: number
    strings: string
    n_nums: number
    /* Methods of GLib.TestLogMsg */
    free(): void
    static name: string
}
export class TestSuite {
    /* Methods of GLib.TestSuite */
    add(test_case: TestCase): void
    add_suite(nestedsuite: TestSuite): void
    static name: string
}
export class Thread {
    /* Methods of GLib.Thread */
    join(): object | null
    ref(): Thread
    unref(): void
    static name: string
    static new(name: string | null, func: ThreadFunc): Thread
    constructor(name: string | null, func: ThreadFunc)
    /* Static methods and pseudo-constructors */
    static new(name: string | null, func: ThreadFunc): Thread
    static try_new(name: string | null, func: ThreadFunc): Thread
    static error_quark(): Quark
    static exit(retval?: object | null): void
    static self(): Thread
    static yield(): void
}
export class ThreadPool {
    /* Fields of GLib.ThreadPool */
    func: Func
    user_data: object
    exclusive: boolean
    /* Methods of GLib.ThreadPool */
    free(immediate: boolean, wait_: boolean): void
    get_max_threads(): number
    get_num_threads(): number
    move_to_front(data?: object | null): boolean
    push(data?: object | null): boolean
    set_max_threads(max_threads: number): boolean
    unprocessed(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static get_max_idle_time(): number
    static get_max_unused_threads(): number
    static get_num_unused_threads(): number
    static set_max_idle_time(interval: number): void
    static set_max_unused_threads(max_threads: number): void
    static stop_unused_threads(): void
}
export class TimeVal {
    /* Fields of GLib.TimeVal */
    tv_sec: number
    tv_usec: number
    /* Methods of GLib.TimeVal */
    add(microseconds: number): void
    to_iso8601(): string | null
    static name: string
    /* Static methods and pseudo-constructors */
    static from_iso8601(iso_date: string): [ /* returnType */ boolean, /* time_ */ TimeVal ]
}
export class TimeZone {
    /* Methods of GLib.TimeZone */
    adjust_time(type: TimeType, time_: number): number
    find_interval(type: TimeType, time_: number): number
    get_abbreviation(interval: number): string
    get_identifier(): string
    get_offset(interval: number): number
    is_dst(interval: number): boolean
    ref(): TimeZone
    unref(): void
    static name: string
    static new(identifier?: string | null): TimeZone
    constructor(identifier?: string | null)
    /* Static methods and pseudo-constructors */
    static new(identifier?: string | null): TimeZone
    static new_identifier(identifier?: string | null): TimeZone
    static new_local(): TimeZone
    static new_offset(seconds: number): TimeZone
    static new_utc(): TimeZone
}
export class Timer {
    /* Methods of GLib.Timer */
    continue(): void
    destroy(): void
    elapsed(microseconds: number): number
    is_active(): boolean
    reset(): void
    start(): void
    stop(): void
    static name: string
}
export class TrashStack {
    /* Fields of GLib.TrashStack */
    next: TrashStack
    static name: string
    /* Static methods and pseudo-constructors */
    static height(stack_p: TrashStack): number
    static peek(stack_p: TrashStack): object | null
    static pop(stack_p: TrashStack): object | null
    static push(stack_p: TrashStack, data_p: object): void
}
export class Tree {
    /* Methods of GLib.Tree */
    destroy(): void
    height(): number
    insert(key?: object | null, value?: object | null): void
    insert_node(key?: object | null, value?: object | null): TreeNode
    lookup(key?: object | null): object | null
    lookup_extended(lookup_key?: object | null): [ /* returnType */ boolean, /* orig_key */ object | null, /* value */ object | null ]
    lookup_node(key?: object | null): TreeNode | null
    lower_bound(key?: object | null): TreeNode | null
    nnodes(): number
    node_first(): TreeNode | null
    node_last(): TreeNode | null
    ref(): Tree
    remove(key?: object | null): boolean
    replace(key?: object | null, value?: object | null): void
    replace_node(key?: object | null, value?: object | null): TreeNode
    steal(key?: object | null): boolean
    unref(): void
    upper_bound(key?: object | null): TreeNode | null
    static name: string
    /* Static methods and pseudo-constructors */
    static new_full(key_compare_func: CompareDataFunc, key_destroy_func: DestroyNotify): Tree
}
export class TreeNode {
    /* Methods of GLib.TreeNode */
    key(): object | null
    next(): TreeNode | null
    previous(): TreeNode | null
    value(): object | null
    static name: string
}
export class Uri {
    /* Methods of GLib.Uri */
    get_auth_params(): string | null
    get_flags(): UriFlags
    get_fragment(): string | null
    get_host(): string | null
    get_password(): string | null
    get_path(): string
    get_port(): number
    get_query(): string | null
    get_scheme(): string
    get_user(): string | null
    get_userinfo(): string | null
    parse_relative(uri_ref: string, flags: UriFlags): Uri
    to_string(): string
    to_string_partial(flags: UriHideFlags): string
    static name: string
    /* Static methods and pseudo-constructors */
    static build(flags: UriFlags, scheme: string, userinfo: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): Uri
    static build_with_user(flags: UriFlags, scheme: string, user: string | null, password: string | null, auth_params: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): Uri
    static error_quark(): Quark
    static escape_bytes(unescaped: Uint8Array, reserved_chars_allowed?: string | null): string
    static escape_string(unescaped: string, reserved_chars_allowed: string | null, allow_utf8: boolean): string
    static is_valid(uri_string: string, flags: UriFlags): boolean
    static join(flags: UriFlags, scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): string
    static join_with_user(flags: UriFlags, scheme: string | null, user: string | null, password: string | null, auth_params: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): string
    static list_extract_uris(uri_list: string): string[]
    static parse(uri_string: string, flags: UriFlags): Uri
    static parse_params(params: string, length: number, separators: string, flags: UriParamsFlags): HashTable
    static parse_scheme(uri: string): string | null
    static peek_scheme(uri: string): string | null
    static resolve_relative(base_uri_string: string | null, uri_ref: string, flags: UriFlags): string
    static split(uri_ref: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* userinfo */ string | null, /* host */ string | null, /* port */ number | null, /* path */ string | null, /* query */ string | null, /* fragment */ string | null ]
    static split_network(uri_string: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* host */ string | null, /* port */ number | null ]
    static split_with_user(uri_ref: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* user */ string | null, /* password */ string | null, /* auth_params */ string | null, /* host */ string | null, /* port */ number | null, /* path */ string | null, /* query */ string | null, /* fragment */ string | null ]
    static unescape_bytes(escaped_string: string, length: number, illegal_characters?: string | null): Bytes
    static unescape_segment(escaped_string?: string | null, escaped_string_end?: string | null, illegal_characters?: string | null): string | null
    static unescape_string(escaped_string: string, illegal_characters?: string | null): string | null
}
export class UriParamsIter {
    /* Methods of GLib.UriParamsIter */
    init(params: string, length: number, separators: string, flags: UriParamsFlags): void
    next(): [ /* returnType */ boolean, /* attribute */ string | null, /* value */ string | null ]
    static name: string
}
export class Variant {
    /* Methods of GLib.Variant */
    byteswap(): Variant
    check_format_string(format_string: string, copy_only: boolean): boolean
    classify(): VariantClass
    compare(two: Variant): number
    dup_bytestring(): Uint8Array
    dup_bytestring_array(): string[]
    dup_objv(): string[]
    dup_string(): [ /* returnType */ string, /* length */ number ]
    dup_strv(): string[]
    equal(two: Variant): boolean
    get_boolean(): boolean
    get_byte(): number
    get_bytestring(): Uint8Array
    get_bytestring_array(): string[]
    get_child_value(index_: number): Variant
    get_data(): object | null
    get_data_as_bytes(): Bytes
    get_double(): number
    get_handle(): number
    get_int16(): number
    get_int32(): number
    get_int64(): number
    get_maybe(): Variant | null
    get_normal_form(): Variant
    get_objv(): string[]
    get_size(): number
    get_string(): [ /* returnType */ string, /* length */ number | null ]
    get_strv(): string[]
    get_type(): VariantType
    get_type_string(): string
    get_uint16(): number
    get_uint32(): number
    get_uint64(): number
    get_variant(): Variant
    hash(): number
    is_container(): boolean
    is_floating(): boolean
    is_normal_form(): boolean
    is_of_type(type: VariantType): boolean
    lookup_value(key: string, expected_type?: VariantType | null): Variant
    n_children(): number
    print(type_annotate: boolean): string
    ref(): Variant
    ref_sink(): Variant
    store(data: object): void
    take_ref(): Variant
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_array(child_type: VariantType | null, children: Variant[] | null): Variant
    static new_boolean(value: boolean): Variant
    static new_byte(value: number): Variant
    static new_bytestring(string: Uint8Array): Variant
    static new_bytestring_array(strv: string[]): Variant
    static new_dict_entry(key: Variant, value: Variant): Variant
    static new_double(value: number): Variant
    static new_fixed_array(element_type: VariantType, elements: object | null, n_elements: number, element_size: number): Variant
    static new_from_bytes(type: VariantType, bytes: Bytes, trusted: boolean): Variant
    static new_from_data(type: VariantType, data: Uint8Array, trusted: boolean, notify: DestroyNotify, user_data?: object | null): Variant
    static new_handle(value: number): Variant
    static new_int16(value: number): Variant
    static new_int32(value: number): Variant
    static new_int64(value: number): Variant
    static new_maybe(child_type?: VariantType | null, child?: Variant | null): Variant
    static new_object_path(object_path: string): Variant
    static new_objv(strv: string[]): Variant
    static new_signature(signature: string): Variant
    static new_string(string: string): Variant
    static new_strv(strv: string[]): Variant
    static new_tuple(children: Variant[]): Variant
    static new_uint16(value: number): Variant
    static new_uint32(value: number): Variant
    static new_uint64(value: number): Variant
    static new_variant(value: Variant): Variant
    static is_object_path(string: string): boolean
    static is_signature(string: string): boolean
    static parse(type: VariantType | null, text: string, limit?: string | null, endptr?: string | null): Variant
    static parse_error_print_context(error: Error, source_str: string): string
    static parse_error_quark(): Quark
    static parser_get_error_quark(): Quark
}
export class VariantBuilder {
    /* Methods of GLib.VariantBuilder */
    add_value(value: Variant): void
    close(): void
    end(): Variant
    open(type: VariantType): void
    ref(): VariantBuilder
    unref(): void
    static name: string
    static new(type: VariantType): VariantBuilder
    constructor(type: VariantType)
    /* Static methods and pseudo-constructors */
    static new(type: VariantType): VariantBuilder
}
export class VariantDict {
    /* Methods of GLib.VariantDict */
    clear(): void
    contains(key: string): boolean
    end(): Variant
    insert_value(key: string, value: Variant): void
    lookup_value(key: string, expected_type?: VariantType | null): Variant
    ref(): VariantDict
    remove(key: string): boolean
    unref(): void
    static name: string
    static new(from_asv?: Variant | null): VariantDict
    constructor(from_asv?: Variant | null)
    /* Static methods and pseudo-constructors */
    static new(from_asv?: Variant | null): VariantDict
}
export class VariantIter {
    /* Methods of GLib.VariantIter */
    free(): void
    n_children(): number
    next_value(): Variant | null
    static name: string
}
export class VariantType {
    /* Methods of GLib.VariantType */
    copy(): VariantType
    dup_string(): string
    element(): VariantType
    equal(type2: VariantType): boolean
    first(): VariantType
    free(): void
    get_string_length(): number
    hash(): number
    is_array(): boolean
    is_basic(): boolean
    is_container(): boolean
    is_definite(): boolean
    is_dict_entry(): boolean
    is_maybe(): boolean
    is_subtype_of(supertype: VariantType): boolean
    is_tuple(): boolean
    is_variant(): boolean
    key(): VariantType
    n_items(): number
    next(): VariantType
    value(): VariantType
    static name: string
    static new(type_string: string): VariantType
    constructor(type_string: string)
    /* Static methods and pseudo-constructors */
    static new(type_string: string): VariantType
    static new_array(element: VariantType): VariantType
    static new_dict_entry(key: VariantType, value: VariantType): VariantType
    static new_maybe(element: VariantType): VariantType
    static new_tuple(items: VariantType[]): VariantType
    static checked_(arg0: string): VariantType
    static string_get_depth_(type_string: string): number
    static string_is_valid(type_string: string): boolean
    static string_scan(string: string, limit?: string | null): [ /* returnType */ boolean, /* endptr */ string | null ]
}
export class DoubleIEEE754 {
    /* Fields of GLib.DoubleIEEE754 */
    v_double: number
    static name: string
}
export class FloatIEEE754 {
    /* Fields of GLib.FloatIEEE754 */
    v_float: number
    static name: string
}
export class Mutex {
    /* Methods of GLib.Mutex */
    clear(): void
    init(): void
    lock(): void
    trylock(): boolean
    unlock(): void
    static name: string
}
export class TokenValue {
    /* Fields of GLib.TokenValue */
    v_symbol: object
    v_identifier: string
    v_binary: number
    v_octal: number
    v_int: number
    v_int64: number
    v_float: number
    v_hex: number
    v_string: string
    v_comment: string
    v_char: number
    v_error: number
    static name: string
}
type DateDay = number
type DateYear = number
type MainContextPusher = void
type MutexLocker = void
type Pid = number
type Quark = number
type RWLockReaderLocker = void
type RWLockWriterLocker = void
type RecMutexLocker = void
type RefString = number
type Strv = string
type Time = number
type TimeSpan = number
type Type = number