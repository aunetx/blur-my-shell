/**
 * GLib-2.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />

declare namespace GLib {

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
export function asciiDigitValue(c: number): number
export function asciiDtostr(buffer: string, bufLen: number, d: number): string
export function asciiFormatd(buffer: string, bufLen: number, format: string, d: number): string
export function asciiStrcasecmp(s1: string, s2: string): number
export function asciiStrdown(str: string, len: number): string
export function asciiStringToSigned(str: string, base: number, min: number, max: number): [ /* returnType */ boolean, /* outNum */ number | null ]
export function asciiStringToUnsigned(str: string, base: number, min: number, max: number): [ /* returnType */ boolean, /* outNum */ number | null ]
export function asciiStrncasecmp(s1: string, s2: string, n: number): number
export function asciiStrtod(nptr: string): [ /* returnType */ number, /* endptr */ string | null ]
export function asciiStrtoll(nptr: string, base: number): [ /* returnType */ number, /* endptr */ string | null ]
export function asciiStrtoull(nptr: string, base: number): [ /* returnType */ number, /* endptr */ string | null ]
export function asciiStrup(str: string, len: number): string
export function asciiTolower(c: number): number
export function asciiToupper(c: number): number
export function asciiXdigitValue(c: number): number
export function assertWarning(logDomain: string, file: string, line: number, prettyFunction: string, expression: string): void
export function assertionMessage(domain: string, file: string, line: number, func: string, message: string): void
export function assertionMessageCmpstr(domain: string, file: string, line: number, func: string, expr: string, arg1: string, cmp: string, arg2: string): void
export function assertionMessageCmpstrv(domain: string, file: string, line: number, func: string, expr: string, arg1: string, arg2: string, firstWrongIdx: number): void
export function assertionMessageError(domain: string, file: string, line: number, func: string, expr: string, error: Error, errorDomain: Quark, errorCode: number): void
export function atexit(func: VoidFunc): void
export function atomicIntAdd(atomic: number, val: number): number
export function atomicIntAnd(atomic: number, val: number): number
export function atomicIntCompareAndExchange(atomic: number, oldval: number, newval: number): boolean
export function atomicIntDecAndTest(atomic: number): boolean
export function atomicIntExchangeAndAdd(atomic: number, val: number): number
export function atomicIntGet(atomic: number): number
export function atomicIntInc(atomic: number): void
export function atomicIntOr(atomic: number, val: number): number
export function atomicIntSet(atomic: number, newval: number): void
export function atomicIntXor(atomic: number, val: number): number
export function atomicPointerAdd(atomic: object, val: number): number
export function atomicPointerAnd(atomic: object, val: number): number
export function atomicPointerCompareAndExchange(atomic: object, oldval?: object | null, newval?: object | null): boolean
export function atomicPointerGet(atomic: object): object | null
export function atomicPointerOr(atomic: object, val: number): number
export function atomicPointerSet(atomic: object, newval?: object | null): void
export function atomicPointerXor(atomic: object, val: number): number
export function atomicRcBoxAcquire(memBlock: object): object
export function atomicRcBoxAlloc(blockSize: number): object
export function atomicRcBoxAlloc0(blockSize: number): object
export function atomicRcBoxDup(blockSize: number, memBlock: object): object
export function atomicRcBoxGetSize(memBlock: object): number
export function atomicRcBoxRelease(memBlock: object): void
export function atomicRcBoxReleaseFull(memBlock: object, clearFunc: DestroyNotify): void
export function atomicRefCountCompare(arc: number, val: number): boolean
export function atomicRefCountDec(arc: number): boolean
export function atomicRefCountInc(arc: number): void
export function atomicRefCountInit(arc: number): void
export function base64Decode(text: string): any
export function base64DecodeInplace(text: any): [ /* returnType */ number, /* text */ any ]
export function base64Encode(data: any | null): string
export function base64EncodeClose(breakLines: boolean, state: number, save: number): [ /* returnType */ number, /* out */ any, /* state */ number, /* save */ number ]
export function base64EncodeStep(in_: any, breakLines: boolean, state: number, save: number): [ /* returnType */ number, /* out */ any, /* state */ number, /* save */ number ]
export function basename(fileName: string): string
export function bitLock(address: number, lockBit: number): void
export function bitNthLsf(mask: number, nthBit: number): number
export function bitNthMsf(mask: number, nthBit: number): number
export function bitStorage(number: number): number
export function bitTrylock(address: number, lockBit: number): boolean
export function bitUnlock(address: number, lockBit: number): void
export function bookmarkFileErrorQuark(): Quark
export function buildFilenamev(args: string[]): string
export function buildPathv(separator: string, args: string[]): string
export function byteArrayFree(array: any, freeSegment: boolean): number
export function byteArrayFreeToBytes(array: any): Bytes
export function byteArrayNew(): any
export function byteArrayNewTake(data: any): any
export function byteArraySteal(array: any): [ /* returnType */ number, /* len */ number | null ]
export function byteArrayUnref(array: any): void
export function canonicalizeFilename(filename: string, relativeTo?: string | null): string
export function chdir(path: string): number
export function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string
export function checksumTypeGetLength(checksumType: ChecksumType): number
export function childWatchAdd(priority: number, pid: Pid, function_: ChildWatchFunc): number
export function childWatchSourceNew(pid: Pid): Source
export function clearError(): void
export function close(fd: number): boolean
export function computeChecksumForBytes(checksumType: ChecksumType, data: Bytes): string | null
export function computeChecksumForData(checksumType: ChecksumType, data: any): string | null
export function computeChecksumForString(checksumType: ChecksumType, str: string, length: number): string | null
export function computeHmacForBytes(digestType: ChecksumType, key: Bytes, data: Bytes): string
export function computeHmacForData(digestType: ChecksumType, key: any, data: any): string
export function computeHmacForString(digestType: ChecksumType, key: any, str: string, length: number): string
export function convert(str: any, toCodeset: string, fromCodeset: string): [ /* returnType */ any, /* bytesRead */ number | null ]
export function convertErrorQuark(): Quark
export function convertWithFallback(str: any, toCodeset: string, fromCodeset: string, fallback: string): [ /* returnType */ any, /* bytesRead */ number | null ]
export function datalistForeach(datalist: Data, func: DataForeachFunc): void
export function datalistGetData(datalist: Data, key: string): object | null
export function datalistGetFlags(datalist: Data): number
export function datalistIdGetData(datalist: Data, keyId: Quark): object | null
export function datalistSetFlags(datalist: Data, flags: number): void
export function datalistUnsetFlags(datalist: Data, flags: number): void
export function datasetDestroy(datasetLocation: object): void
export function datasetForeach(datasetLocation: object, func: DataForeachFunc): void
export function datasetIdGetData(datasetLocation: object, keyId: Quark): object | null
export function dateGetDaysInMonth(month: DateMonth, year: DateYear): number
export function dateGetMondayWeeksInYear(year: DateYear): number
export function dateGetSundayWeeksInYear(year: DateYear): number
export function dateIsLeapYear(year: DateYear): boolean
export function dateStrftime(s: string, slen: number, format: string, date: Date): number
export function dateValidDay(day: DateDay): boolean
export function dateValidDmy(day: DateDay, month: DateMonth, year: DateYear): boolean
export function dateValidJulian(julianDate: number): boolean
export function dateValidMonth(month: DateMonth): boolean
export function dateValidWeekday(weekday: DateWeekday): boolean
export function dateValidYear(year: DateYear): boolean
export function dcgettext(domain: string | null, msgid: string, category: number): string
export function dgettext(domain: string | null, msgid: string): string
export function dirMakeTmp(tmpl?: string | null): string
export function directEqual(v1?: object | null, v2?: object | null): boolean
export function directHash(v?: object | null): number
export function dngettext(domain: string | null, msgid: string, msgidPlural: string, n: number): string
export function doubleEqual(v1: object, v2: object): boolean
export function doubleHash(v: object): number
export function dpgettext(domain: string | null, msgctxtid: string, msgidoffset: number): string
export function dpgettext2(domain: string | null, context: string, msgid: string): string
export function environGetenv(envp: string[] | null, variable: string): string
export function environSetenv(envp: string[] | null, variable: string, value: string, overwrite: boolean): string[]
export function environUnsetenv(envp: string[] | null, variable: string): string[]
export function fileErrorFromErrno(errNo: number): FileError
export function fileErrorQuark(): Quark
export function fileGetContents(filename: string): [ /* returnType */ boolean, /* contents */ any ]
export function fileOpenTmp(tmpl?: string | null): [ /* returnType */ number, /* nameUsed */ string ]
export function fileReadLink(filename: string): string
export function fileSetContents(filename: string, contents: any): boolean
export function fileSetContentsFull(filename: string, contents: any, flags: FileSetContentsFlags, mode: number): boolean
export function fileTest(filename: string, test: FileTest): boolean
export function filenameDisplayBasename(filename: string): string
export function filenameDisplayName(filename: string): string
export function filenameFromUri(uri: string): [ /* returnType */ string, /* hostname */ string | null ]
export function filenameFromUtf8(utf8string: string, len: number): [ /* returnType */ string, /* bytesRead */ number | null, /* bytesWritten */ number | null ]
export function filenameToUri(filename: string, hostname?: string | null): string
export function filenameToUtf8(opsysstring: string, len: number): [ /* returnType */ string, /* bytesRead */ number | null, /* bytesWritten */ number | null ]
export function findProgramInPath(program: string): string | null
export function formatSize(size: number): string
export function formatSizeForDisplay(size: number): string
export function formatSizeFull(size: number, flags: FormatSizeFlags): string
export function free(mem?: object | null): void
export function getApplicationName(): string | null
export function getCharset(): [ /* returnType */ boolean, /* charset */ string | null ]
export function getCodeset(): string
export function getConsoleCharset(): [ /* returnType */ boolean, /* charset */ string | null ]
export function getCurrentDir(): string
export function getCurrentTime(result: TimeVal): void
export function getEnviron(): string[]
export function getFilenameCharsets(): [ /* returnType */ boolean, /* filenameCharsets */ string[] ]
export function getHomeDir(): string
export function getHostName(): string
export function getLanguageNames(): string[]
export function getLanguageNamesWithCategory(categoryName: string): string[]
export function getLocaleVariants(locale: string): string[]
export function getMonotonicTime(): number
export function getNumProcessors(): number
export function getOsInfo(keyName: string): string | null
export function getPrgname(): string | null
export function getRealName(): string
export function getRealTime(): number
export function getSystemConfigDirs(): string[]
export function getSystemDataDirs(): string[]
export function getTmpDir(): string
export function getUserCacheDir(): string
export function getUserConfigDir(): string
export function getUserDataDir(): string
export function getUserName(): string
export function getUserRuntimeDir(): string
export function getUserSpecialDir(directory: UserDirectory): string
export function getenv(variable: string): string
export function hashTableAdd(hashTable: HashTable, key?: object | null): boolean
export function hashTableContains(hashTable: HashTable, key?: object | null): boolean
export function hashTableDestroy(hashTable: HashTable): void
export function hashTableInsert(hashTable: HashTable, key?: object | null, value?: object | null): boolean
export function hashTableLookup(hashTable: HashTable, key?: object | null): object | null
export function hashTableLookupExtended(hashTable: HashTable, lookupKey?: object | null): [ /* returnType */ boolean, /* origKey */ object | null, /* value */ object | null ]
export function hashTableRemove(hashTable: HashTable, key?: object | null): boolean
export function hashTableRemoveAll(hashTable: HashTable): void
export function hashTableReplace(hashTable: HashTable, key?: object | null, value?: object | null): boolean
export function hashTableSize(hashTable: HashTable): number
export function hashTableSteal(hashTable: HashTable, key?: object | null): boolean
export function hashTableStealAll(hashTable: HashTable): void
export function hashTableStealExtended(hashTable: HashTable, lookupKey?: object | null): [ /* returnType */ boolean, /* stolenKey */ object | null, /* stolenValue */ object | null ]
export function hashTableUnref(hashTable: HashTable): void
export function hookDestroy(hookList: HookList, hookId: number): boolean
export function hookDestroyLink(hookList: HookList, hook: Hook): void
export function hookFree(hookList: HookList, hook: Hook): void
export function hookInsertBefore(hookList: HookList, sibling: Hook | null, hook: Hook): void
export function hookPrepend(hookList: HookList, hook: Hook): void
export function hookUnref(hookList: HookList, hook: Hook): void
export function hostnameIsAsciiEncoded(hostname: string): boolean
export function hostnameIsIpAddress(hostname: string): boolean
export function hostnameIsNonAscii(hostname: string): boolean
export function hostnameToAscii(hostname: string): string | null
export function hostnameToUnicode(hostname: string): string | null
export function idleAdd(priority: number, function_: SourceFunc): number
export function idleRemoveByData(data?: object | null): boolean
export function idleSourceNew(): Source
export function int64Equal(v1: object, v2: object): boolean
export function int64Hash(v: object): number
export function intEqual(v1: object, v2: object): boolean
export function intHash(v: object): number
export function internStaticString(string?: string | null): string
export function internString(string?: string | null): string
export function ioAddWatch(channel: IOChannel, priority: number, condition: IOCondition, func: IOFunc): number
export function ioChannelErrorFromErrno(en: number): IOChannelError
export function ioChannelErrorQuark(): Quark
export function ioCreateWatch(channel: IOChannel, condition: IOCondition): Source
export function keyFileErrorQuark(): Quark
export function listenv(): string[]
export function localeFromUtf8(utf8string: string, len: number): [ /* returnType */ any, /* bytesRead */ number | null ]
export function localeToUtf8(opsysstring: any): [ /* returnType */ string, /* bytesRead */ number | null, /* bytesWritten */ number | null ]
export function logDefaultHandler(logDomain: string | null, logLevel: LogLevelFlags, message?: string | null, unusedData?: object | null): void
export function logRemoveHandler(logDomain: string, handlerId: number): void
export function logSetAlwaysFatal(fatalMask: LogLevelFlags): LogLevelFlags
export function logSetFatalMask(logDomain: string, fatalMask: LogLevelFlags): LogLevelFlags
export function logSetHandler(logDomain: string | null, logLevels: LogLevelFlags, logFunc: LogFunc): number
export function logSetWriterFunc(): void
export function logStructuredArray(logLevel: LogLevelFlags, fields: LogField[]): void
export function logVariant(logDomain: string | null, logLevel: LogLevelFlags, fields: Variant): void
export function logWriterDefault(logLevel: LogLevelFlags, fields: LogField[], userData?: object | null): LogWriterOutput
export function logWriterDefaultSetUseStderr(useStderr: boolean): void
export function logWriterDefaultWouldDrop(logLevel: LogLevelFlags, logDomain?: string | null): boolean
export function logWriterFormatFields(logLevel: LogLevelFlags, fields: LogField[], useColor: boolean): string
export function logWriterIsJournald(outputFd: number): boolean
export function logWriterJournald(logLevel: LogLevelFlags, fields: LogField[], userData?: object | null): LogWriterOutput
export function logWriterStandardStreams(logLevel: LogLevelFlags, fields: LogField[], userData?: object | null): LogWriterOutput
export function logWriterSupportsColor(outputFd: number): boolean
export function mainContextDefault(): MainContext
export function mainContextGetThreadDefault(): MainContext | null
export function mainContextRefThreadDefault(): MainContext
export function mainCurrentSource(): Source | null
export function mainDepth(): number
export function malloc(nBytes: number): object | null
export function malloc0(nBytes: number): object | null
export function malloc0N(nBlocks: number, nBlockBytes: number): object | null
export function mallocN(nBlocks: number, nBlockBytes: number): object | null
export function markupErrorQuark(): Quark
export function markupEscapeText(text: string, length: number): string
export function memIsSystemMalloc(): boolean
export function memProfile(): void
export function memSetVtable(vtable: MemVTable): void
export function memdup(mem: object | null, byteSize: number): object | null
export function memdup2(mem: object | null, byteSize: number): object | null
export function mkdirWithParents(pathname: string, mode: number): number
export function nullifyPointer(nullifyLocation: object): void
export function numberParserErrorQuark(): Quark
export function onErrorQuery(prgName: string): void
export function onErrorStackTrace(prgName: string): void
export function onceInitEnter(location: object): boolean
export function onceInitLeave(location: object, result: number): void
export function optionErrorQuark(): Quark
export function parseDebugString(string: string | null, keys: DebugKey[]): number
export function pathGetBasename(fileName: string): string
export function pathGetDirname(fileName: string): string
export function pathIsAbsolute(fileName: string): boolean
export function pathSkipRoot(fileName: string): string | null
export function patternMatch(pspec: PatternSpec, stringLength: number, string: string, stringReversed?: string | null): boolean
export function patternMatchSimple(pattern: string, string: string): boolean
export function patternMatchString(pspec: PatternSpec, string: string): boolean
export function pointerBitLock(address: object, lockBit: number): void
export function pointerBitTrylock(address: object, lockBit: number): boolean
export function pointerBitUnlock(address: object, lockBit: number): void
export function poll(fds: PollFD, nfds: number, timeout: number): number
export function propagateError(src: Error): /* dest */ Error | null
export function quarkFromStaticString(string?: string | null): Quark
export function quarkFromString(string?: string | null): Quark
export function quarkToString(quark: Quark): string
export function quarkTryString(string?: string | null): Quark
export function randomDouble(): number
export function randomDoubleRange(begin: number, end: number): number
export function randomInt(): number
export function randomIntRange(begin: number, end: number): number
export function randomSetSeed(seed: number): void
export function rcBoxAcquire(memBlock: object): object
export function rcBoxAlloc(blockSize: number): object
export function rcBoxAlloc0(blockSize: number): object
export function rcBoxDup(blockSize: number, memBlock: object): object
export function rcBoxGetSize(memBlock: object): number
export function rcBoxRelease(memBlock: object): void
export function rcBoxReleaseFull(memBlock: object, clearFunc: DestroyNotify): void
export function realloc(mem: object | null, nBytes: number): object | null
export function reallocN(mem: object | null, nBlocks: number, nBlockBytes: number): object | null
export function refCountCompare(rc: number, val: number): boolean
export function refCountDec(rc: number): boolean
export function refCountInc(rc: number): void
export function refCountInit(rc: number): void
export function refStringAcquire(str: string): string
export function refStringLength(str: string): number
export function refStringNew(str: string): string
export function refStringNewIntern(str: string): string
export function refStringNewLen(str: string, len: number): string
export function refStringRelease(str: string): void
export function regexCheckReplacement(replacement: string): [ /* returnType */ boolean, /* hasReferences */ boolean | null ]
export function regexErrorQuark(): Quark
export function regexEscapeNul(string: string, length: number): string
export function regexEscapeString(string: string[]): string
export function regexMatchSimple(pattern: string, string: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): boolean
export function regexSplitSimple(pattern: string, string: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): string[]
export function reloadUserSpecialDirsCache(): void
export function rmdir(filename: string): number
export function sequenceGet(iter: SequenceIter): object | null
export function sequenceInsertBefore(iter: SequenceIter, data?: object | null): SequenceIter
export function sequenceMove(src: SequenceIter, dest: SequenceIter): void
export function sequenceMoveRange(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void
export function sequenceRangeGetMidpoint(begin: SequenceIter, end: SequenceIter): SequenceIter
export function sequenceRemove(iter: SequenceIter): void
export function sequenceRemoveRange(begin: SequenceIter, end: SequenceIter): void
export function sequenceSet(iter: SequenceIter, data?: object | null): void
export function sequenceSwap(a: SequenceIter, b: SequenceIter): void
export function setApplicationName(applicationName: string): void
export function setErrorLiteral(domain: Quark, code: number, message: string): /* err */ Error | null
export function setPrgname(prgname: string): void
export function setenv(variable: string, value: string, overwrite: boolean): boolean
export function shellErrorQuark(): Quark
export function shellParseArgv(commandLine: string): [ /* returnType */ boolean, /* argvp */ string[] | null ]
export function shellQuote(unquotedString: string): string
export function shellUnquote(quotedString: string): string
export function sliceAlloc(blockSize: number): object | null
export function sliceAlloc0(blockSize: number): object | null
export function sliceCopy(blockSize: number, memBlock?: object | null): object | null
export function sliceFree1(blockSize: number, memBlock?: object | null): void
export function sliceFreeChainWithOffset(blockSize: number, memChain: object | null, nextOffset: number): void
export function sliceGetConfig(ckey: SliceConfig): number
export function sliceGetConfigState(ckey: SliceConfig, address: number, nValues: number): number
export function sliceSetConfig(ckey: SliceConfig, value: number): void
export function sourceRemove(tag: number): boolean
export function sourceRemoveByFuncsUserData(funcs: SourceFuncs, userData?: object | null): boolean
export function sourceRemoveByUserData(userData?: object | null): boolean
export function sourceSetNameById(tag: number, name: string): void
export function spacedPrimesClosest(num: number): number
export function spawnAsync(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup?: SpawnChildSetupFunc | null): [ /* returnType */ boolean, /* childPid */ Pid | null ]
export function spawnAsyncWithFds(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup: SpawnChildSetupFunc | null, stdinFd: number, stdoutFd: number, stderrFd: number): [ /* returnType */ boolean, /* childPid */ Pid | null ]
export function spawnAsyncWithPipes(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup?: SpawnChildSetupFunc | null): [ /* returnType */ boolean, /* childPid */ Pid | null, /* standardInput */ number | null, /* standardOutput */ number | null, /* standardError */ number | null ]
export function spawnAsyncWithPipesAndFds(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup: SpawnChildSetupFunc | null, stdinFd: number, stdoutFd: number, stderrFd: number, sourceFds: number[] | null, targetFds: number[] | null): [ /* returnType */ boolean, /* childPidOut */ Pid | null, /* stdinPipeOut */ number | null, /* stdoutPipeOut */ number | null, /* stderrPipeOut */ number | null ]
export function spawnCheckExitStatus(exitStatus: number): boolean
export function spawnClosePid(pid: Pid): void
export function spawnCommandLineAsync(commandLine: string): boolean
export function spawnCommandLineSync(commandLine: string): [ /* returnType */ boolean, /* standardOutput */ any | null, /* standardError */ any | null, /* exitStatus */ number | null ]
export function spawnErrorQuark(): Quark
export function spawnExitErrorQuark(): Quark
export function spawnSync(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup?: SpawnChildSetupFunc | null): [ /* returnType */ boolean, /* standardOutput */ any | null, /* standardError */ any | null, /* exitStatus */ number | null ]
export function stpcpy(dest: string, src: string): string
export function strEqual(v1: object, v2: object): boolean
export function strHasPrefix(str: string, prefix: string): boolean
export function strHasSuffix(str: string, suffix: string): boolean
export function strHash(v: object): number
export function strIsAscii(str: string): boolean
export function strMatchString(searchTerm: string, potentialHit: string, acceptAlternates: boolean): boolean
export function strToAscii(str: string, fromLocale?: string | null): string
export function strTokenizeAndFold(string: string, translitLocale?: string | null): [ /* returnType */ string[], /* asciiAlternates */ string[] ]
export function strcanon(string: string, validChars: string, substitutor: number): string
export function strcasecmp(s1: string, s2: string): number
export function strchomp(string: string): string
export function strchug(string: string): string
export function strcmp0(str1?: string | null, str2?: string | null): number
export function strcompress(source: string): string
export function strdelimit(string: string, delimiters: string | null, newDelimiter: number): string
export function strdown(string: string): string
export function strdup(str?: string | null): string
export function strerror(errnum: number): string
export function strescape(source: string, exceptions?: string | null): string
export function strfreev(strArray?: string | null): void
export function stringNew(init?: string | null): String
export function stringNewLen(init: string, len: number): String
export function stringSizedNew(dflSize: number): String
export function stripContext(msgid: string, msgval: string): string
export function strjoinv(separator: string | null, strArray: string): string
export function strlcat(dest: string, src: string, destSize: number): number
export function strlcpy(dest: string, src: string, destSize: number): number
export function strncasecmp(s1: string, s2: string, n: number): number
export function strndup(str: string, n: number): string
export function strnfill(length: number, fillChar: number): string
export function strreverse(string: string): string
export function strrstr(haystack: string, needle: string): string
export function strrstrLen(haystack: string, haystackLen: number, needle: string): string
export function strsignal(signum: number): string
export function strstrLen(haystack: string, haystackLen: number, needle: string): string
export function strtod(nptr: string): [ /* returnType */ number, /* endptr */ string | null ]
export function strup(string: string): string
export function strvContains(strv: string, str: string): boolean
export function strvEqual(strv1: string, strv2: string): boolean
export function strvGetType(): GObject.Type
export function strvLength(strArray: string): number
export function testAddDataFunc(testpath: string, testData: object | null, testFunc: TestDataFunc): void
export function testAddDataFuncFull(testpath: string, testData: object | null, testFunc: TestDataFunc): void
export function testAddFunc(testpath: string, testFunc: TestFunc): void
export function testAssertExpectedMessagesInternal(domain: string, file: string, line: number, func: string): void
export function testBug(bugUriSnippet: string): void
export function testBugBase(uriPattern: string): void
export function testExpectMessage(logDomain: string | null, logLevel: LogLevelFlags, pattern: string): void
export function testFail(): void
export function testFailed(): boolean
export function testGetDir(fileType: TestFileType): string
export function testGetPath(): string
export function testIncomplete(msg?: string | null): void
export function testLogTypeName(logType: TestLogType): string
export function testQueueDestroy(destroyFunc: DestroyNotify, destroyData?: object | null): void
export function testQueueFree(gfreePointer?: object | null): void
export function testRandDouble(): number
export function testRandDoubleRange(rangeStart: number, rangeEnd: number): number
export function testRandInt(): number
export function testRandIntRange(begin: number, end: number): number
export function testRun(): number
export function testRunSuite(suite: TestSuite): number
export function testSetNonfatalAssertions(): void
export function testSkip(msg?: string | null): void
export function testSubprocess(): boolean
export function testSummary(summary: string): void
export function testTimerElapsed(): number
export function testTimerLast(): number
export function testTimerStart(): void
export function testTrapAssertions(domain: string, file: string, line: number, func: string, assertionFlags: number, pattern: string): void
export function testTrapFork(usecTimeout: number, testTrapFlags: TestTrapFlags): boolean
export function testTrapHasPassed(): boolean
export function testTrapReachedTimeout(): boolean
export function testTrapSubprocess(testPath: string | null, usecTimeout: number, testFlags: TestSubprocessFlags): void
export function threadErrorQuark(): Quark
export function threadExit(retval?: object | null): void
export function threadPoolGetMaxIdleTime(): number
export function threadPoolGetMaxUnusedThreads(): number
export function threadPoolGetNumUnusedThreads(): number
export function threadPoolSetMaxIdleTime(interval: number): void
export function threadPoolSetMaxUnusedThreads(maxThreads: number): void
export function threadPoolStopUnusedThreads(): void
export function threadSelf(): Thread
export function threadYield(): void
export function timeValFromIso8601(isoDate: string): [ /* returnType */ boolean, /* time */ TimeVal ]
export function timeoutAdd(priority: number, interval: number, function_: SourceFunc): number
export function timeoutAddSeconds(priority: number, interval: number, function_: SourceFunc): number
export function timeoutSourceNew(interval: number): Source
export function timeoutSourceNewSeconds(interval: number): Source
export function trashStackHeight(stackP: TrashStack): number
export function trashStackPeek(stackP: TrashStack): object | null
export function trashStackPop(stackP: TrashStack): object | null
export function trashStackPush(stackP: TrashStack, dataP: object): void
export function tryMalloc(nBytes: number): object | null
export function tryMalloc0(nBytes: number): object | null
export function tryMalloc0N(nBlocks: number, nBlockBytes: number): object | null
export function tryMallocN(nBlocks: number, nBlockBytes: number): object | null
export function tryRealloc(mem: object | null, nBytes: number): object | null
export function tryReallocN(mem: object | null, nBlocks: number, nBlockBytes: number): object | null
export function ucs4ToUtf16(str: number, len: number): [ /* returnType */ number, /* itemsRead */ number | null, /* itemsWritten */ number | null ]
export function ucs4ToUtf8(str: number, len: number): [ /* returnType */ string, /* itemsRead */ number | null, /* itemsWritten */ number | null ]
export function unicharBreakType(c: number): UnicodeBreakType
export function unicharCombiningClass(uc: number): number
export function unicharCompose(a: number, b: number): [ /* returnType */ boolean, /* ch */ number ]
export function unicharDecompose(ch: number): [ /* returnType */ boolean, /* a */ number, /* b */ number ]
export function unicharDigitValue(c: number): number
export function unicharFullyDecompose(ch: number, compat: boolean, resultLen: number): [ /* returnType */ number, /* result */ number | null ]
export function unicharGetMirrorChar(ch: number, mirroredCh: number): boolean
export function unicharGetScript(ch: number): UnicodeScript
export function unicharIsalnum(c: number): boolean
export function unicharIsalpha(c: number): boolean
export function unicharIscntrl(c: number): boolean
export function unicharIsdefined(c: number): boolean
export function unicharIsdigit(c: number): boolean
export function unicharIsgraph(c: number): boolean
export function unicharIslower(c: number): boolean
export function unicharIsmark(c: number): boolean
export function unicharIsprint(c: number): boolean
export function unicharIspunct(c: number): boolean
export function unicharIsspace(c: number): boolean
export function unicharIstitle(c: number): boolean
export function unicharIsupper(c: number): boolean
export function unicharIswide(c: number): boolean
export function unicharIswideCjk(c: number): boolean
export function unicharIsxdigit(c: number): boolean
export function unicharIszerowidth(c: number): boolean
export function unicharToUtf8(c: number): [ /* returnType */ number, /* outbuf */ string | null ]
export function unicharTolower(c: number): number
export function unicharTotitle(c: number): number
export function unicharToupper(c: number): number
export function unicharType(c: number): UnicodeType
export function unicharValidate(ch: number): boolean
export function unicharXdigitValue(c: number): number
export function unicodeCanonicalDecomposition(ch: number, resultLen: number): number
export function unicodeCanonicalOrdering(string: number, len: number): void
export function unicodeScriptFromIso15924(iso15924: number): UnicodeScript
export function unicodeScriptToIso15924(script: UnicodeScript): number
export function unixErrorQuark(): Quark
export function unixFdAddFull(priority: number, fd: number, condition: IOCondition, function_: UnixFDSourceFunc): number
export function unixFdSourceNew(fd: number, condition: IOCondition): Source
export function unixGetPasswdEntry(userName: string): object | null
export function unixOpenPipe(fds: number, flags: number): boolean
export function unixSetFdNonblocking(fd: number, nonblock: boolean): boolean
export function unixSignalAdd(priority: number, signum: number, handler: SourceFunc): number
export function unixSignalSourceNew(signum: number): Source
export function unlink(filename: string): number
export function unsetenv(variable: string): void
export function uriBuild(flags: UriFlags, scheme: string, userinfo: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): Uri
export function uriBuildWithUser(flags: UriFlags, scheme: string, user: string | null, password: string | null, authParams: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): Uri
export function uriErrorQuark(): Quark
export function uriEscapeBytes(unescaped: any, reservedCharsAllowed?: string | null): string
export function uriEscapeString(unescaped: string, reservedCharsAllowed: string | null, allowUtf8: boolean): string
export function uriIsValid(uriString: string, flags: UriFlags): boolean
export function uriJoin(flags: UriFlags, scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): string
export function uriJoinWithUser(flags: UriFlags, scheme: string | null, user: string | null, password: string | null, authParams: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): string
export function uriListExtractUris(uriList: string): string[]
export function uriParse(uriString: string, flags: UriFlags): Uri
export function uriParseParams(params: string, length: number, separators: string, flags: UriParamsFlags): HashTable
export function uriParseScheme(uri: string): string | null
export function uriPeekScheme(uri: string): string | null
export function uriResolveRelative(baseUriString: string | null, uriRef: string, flags: UriFlags): string
export function uriSplit(uriRef: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* userinfo */ string | null, /* host */ string | null, /* port */ number | null, /* path */ string | null, /* query */ string | null, /* fragment */ string | null ]
export function uriSplitNetwork(uriString: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* host */ string | null, /* port */ number | null ]
export function uriSplitWithUser(uriRef: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* user */ string | null, /* password */ string | null, /* authParams */ string | null, /* host */ string | null, /* port */ number | null, /* path */ string | null, /* query */ string | null, /* fragment */ string | null ]
export function uriUnescapeBytes(escapedString: string, length: number, illegalCharacters?: string | null): Bytes
export function uriUnescapeSegment(escapedString?: string | null, escapedStringEnd?: string | null, illegalCharacters?: string | null): string | null
export function uriUnescapeString(escapedString: string, illegalCharacters?: string | null): string | null
export function usleep(microseconds: number): void
export function utf16ToUcs4(str: number, len: number): [ /* returnType */ number, /* itemsRead */ number | null, /* itemsWritten */ number | null ]
export function utf16ToUtf8(str: number, len: number): [ /* returnType */ string, /* itemsRead */ number | null, /* itemsWritten */ number | null ]
export function utf8Casefold(str: string, len: number): string
export function utf8Collate(str1: string, str2: string): number
export function utf8CollateKey(str: string, len: number): string
export function utf8CollateKeyForFilename(str: string, len: number): string
export function utf8FindNextChar(p: string, end?: string | null): string | null
export function utf8FindPrevChar(str: string, p: string): string | null
export function utf8GetChar(p: string): number
export function utf8GetCharValidated(p: string, maxLen: number): number
export function utf8MakeValid(str: string, len: number): string
export function utf8Normalize(str: string, len: number, mode: NormalizeMode): string | null
export function utf8OffsetToPointer(str: string, offset: number): string
export function utf8PointerToOffset(str: string, pos: string): number
export function utf8PrevChar(p: string): string
export function utf8Strchr(p: string, len: number, c: number): string | null
export function utf8Strdown(str: string, len: number): string
export function utf8Strlen(p: string, max: number): number
export function utf8Strncpy(dest: string, src: string, n: number): string
export function utf8Strrchr(p: string, len: number, c: number): string | null
export function utf8Strreverse(str: string, len: number): string
export function utf8Strup(str: string, len: number): string
export function utf8Substring(str: string, startPos: number, endPos: number): string
export function utf8ToUcs4(str: string, len: number): [ /* returnType */ number, /* itemsRead */ number | null, /* itemsWritten */ number | null ]
export function utf8ToUcs4Fast(str: string, len: number): [ /* returnType */ number, /* itemsWritten */ number | null ]
export function utf8ToUtf16(str: string, len: number): [ /* returnType */ number, /* itemsRead */ number | null, /* itemsWritten */ number | null ]
export function utf8Validate(str: any): [ /* returnType */ boolean, /* end */ string | null ]
export function utf8ValidateLen(str: any): [ /* returnType */ boolean, /* end */ string | null ]
export function uuidStringIsValid(str: string): boolean
export function uuidStringRandom(): string
export function variantGetGtype(): GObject.Type
export function variantIsObjectPath(string: string): boolean
export function variantIsSignature(string: string): boolean
export function variantParse(type: VariantType | null, text: string, limit?: string | null, endptr?: string | null): Variant
export function variantParseErrorPrintContext(error: Error, sourceStr: string): string
export function variantParseErrorQuark(): Quark
export function variantParserGetErrorQuark(): Quark
export function variantTypeChecked(arg0: string): VariantType
export function variantTypeStringGetDepth(typeString: string): number
export function variantTypeStringIsValid(typeString: string): boolean
export function variantTypeStringScan(string: string, limit?: string | null): [ /* returnType */ boolean, /* endptr */ string | null ]
export interface ChildWatchFunc {
    (pid: Pid, status: number): void
}
export interface ClearHandleFunc {
    (handleId: number): void
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
    (keyId: Quark, data?: object | null): void
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
    (srcError: Error, destError: Error): void
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
    (hook: Hook, marshalData?: object | null): boolean
}
export interface HookCompareFunc {
    (newHook: Hook, sibling: Hook): number
}
export interface HookFinalizeFunc {
    (hookList: HookList, hook: Hook): void
}
export interface HookFindFunc {
    (hook: Hook, data?: object | null): boolean
}
export interface HookFunc {
    (data?: object | null): void
}
export interface HookMarshaller {
    (hook: Hook, marshalData?: object | null): void
}
export interface IOFunc {
    (source: IOChannel, condition: IOCondition, data?: object | null): boolean
}
export interface LogFunc {
    (logDomain: string, logLevel: LogLevelFlags, message: string): void
}
export interface LogWriterFunc {
    (logLevel: LogLevelFlags, fields: LogField[]): LogWriterOutput
}
export interface NodeForeachFunc {
    (node: Node, data?: object | null): void
}
export interface NodeTraverseFunc {
    (node: Node, data?: object | null): boolean
}
export interface OptionArgFunc {
    (optionName: string, value: string, data?: object | null): boolean
}
export interface OptionErrorFunc {
    (context: OptionContext, group: OptionGroup, data?: object | null): void
}
export interface OptionParseFunc {
    (context: OptionContext, group: OptionGroup, data?: object | null): boolean
}
export interface PollFunc {
    (ufds: PollFD, nfsd: number, timeout: number): number
}
export interface PrintFunc {
    (string: string): void
}
export interface RegexEvalCallback {
    (matchInfo: MatchInfo, result: String): boolean
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
    (logDomain: string, logLevel: LogLevelFlags, message: string): boolean
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
    lengthUnlocked(): number
    lock(): void
    pop(): object | null
    popUnlocked(): object | null
    push(data?: object | null): void
    pushFront(item?: object | null): void
    pushFrontUnlocked(item?: object | null): void
    pushUnlocked(data?: object | null): void
    refUnlocked(): void
    remove(item?: object | null): boolean
    removeUnlocked(item?: object | null): boolean
    timedPop(endTime: TimeVal): object | null
    timedPopUnlocked(endTime: TimeVal): object | null
    timeoutPop(timeout: number): object | null
    timeoutPopUnlocked(timeout: number): object | null
    tryPop(): object | null
    tryPopUnlocked(): object | null
    unlock(): void
    unref(): void
    unrefAndUnlock(): void
    static name: string
}
export class BookmarkFile {
    /* Methods of GLib.BookmarkFile */
    addApplication(uri: string, name?: string | null, exec?: string | null): void
    addGroup(uri: string, group: string): void
    free(): void
    getAdded(uri: string): number
    getAddedDateTime(uri: string): DateTime
    getAppInfo(uri: string, name: string): [ /* returnType */ boolean, /* exec */ string | null, /* count */ number | null, /* stamp */ number | null ]
    getApplicationInfo(uri: string, name: string): [ /* returnType */ boolean, /* exec */ string | null, /* count */ number | null, /* stamp */ DateTime | null ]
    getApplications(uri: string): string[]
    getDescription(uri: string): string
    getGroups(uri: string): string[]
    getIcon(uri: string): [ /* returnType */ boolean, /* href */ string | null, /* mimeType */ string | null ]
    getIsPrivate(uri: string): boolean
    getMimeType(uri: string): string
    getModified(uri: string): number
    getModifiedDateTime(uri: string): DateTime
    getSize(): number
    getTitle(uri?: string | null): string
    getUris(): string[]
    getVisited(uri: string): number
    getVisitedDateTime(uri: string): DateTime
    hasApplication(uri: string, name: string): boolean
    hasGroup(uri: string, group: string): boolean
    hasItem(uri: string): boolean
    loadFromData(data: any): boolean
    loadFromDataDirs(file: string): [ /* returnType */ boolean, /* fullPath */ string | null ]
    loadFromFile(filename: string): boolean
    moveItem(oldUri: string, newUri?: string | null): boolean
    removeApplication(uri: string, name: string): boolean
    removeGroup(uri: string, group: string): boolean
    removeItem(uri: string): boolean
    setAdded(uri: string, added: number): void
    setAddedDateTime(uri: string, added: DateTime): void
    setAppInfo(uri: string, name: string, exec: string, count: number, stamp: number): boolean
    setApplicationInfo(uri: string, name: string, exec: string, count: number, stamp?: DateTime | null): boolean
    setDescription(uri: string | null, description: string): void
    setGroups(uri: string, groups: string[] | null): void
    setIcon(uri: string, href: string | null, mimeType: string): void
    setIsPrivate(uri: string, isPrivate: boolean): void
    setMimeType(uri: string, mimeType: string): void
    setModified(uri: string, modified: number): void
    setModifiedDateTime(uri: string, modified: DateTime): void
    setTitle(uri: string | null, title: string): void
    setVisited(uri: string, visited: number): void
    setVisitedDateTime(uri: string, visited: DateTime): void
    toData(): any
    toFile(filename: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): Quark
}
export class ByteArray {
    /* Fields of GLib.ByteArray */
    data: number
    len: number
    static name: string
    /* Static methods and pseudo-constructors */
    static free(array: any, freeSegment: boolean): number
    static freeToBytes(array: any): Bytes
    static newTake(data: any): any
    static steal(array: any): [ /* returnType */ number, /* len */ number | null ]
    static unref(array: any): void
}
export class Bytes {
    /* Methods of GLib.Bytes */
    compare(bytes2: Bytes): number
    equal(bytes2: Bytes): boolean
    getData(): any | null
    getSize(): number
    hash(): number
    newFromBytes(offset: number, length: number): Bytes
    ref(): Bytes
    unref(): void
    unrefToArray(): any
    unrefToData(): any
    static name: string
    static new(data: any | null): Bytes
    constructor(data: any | null)
    /* Static methods and pseudo-constructors */
    static new(data: any | null): Bytes
    static newTake(data: any | null): Bytes
}
export class Checksum {
    /* Methods of GLib.Checksum */
    copy(): Checksum
    free(): void
    getString(): string
    reset(): void
    update(data: any): void
    static name: string
    static new(checksumType: ChecksumType): Checksum
    constructor(checksumType: ChecksumType)
    /* Static methods and pseudo-constructors */
    static new(checksumType: ChecksumType): Checksum
    static typeGetLength(checksumType: ChecksumType): number
}
export class Cond {
    /* Methods of GLib.Cond */
    broadcast(): void
    clear(): void
    init(): void
    signal(): void
    wait(mutex: Mutex): void
    waitUntil(mutex: Mutex, endTime: number): boolean
    static name: string
}
export class Data {
    static name: string
}
export class Date {
    /* Fields of GLib.Date */
    julianDays: number
    julian: number
    dmy: number
    day: number
    month: number
    year: number
    /* Methods of GLib.Date */
    addDays(nDays: number): void
    addMonths(nMonths: number): void
    addYears(nYears: number): void
    clamp(minDate: Date, maxDate: Date): void
    clear(nDates: number): void
    compare(rhs: Date): number
    copy(): Date
    daysBetween(date2: Date): number
    free(): void
    getDay(): DateDay
    getDayOfYear(): number
    getIso8601WeekOfYear(): number
    getJulian(): number
    getMondayWeekOfYear(): number
    getMonth(): DateMonth
    getSundayWeekOfYear(): number
    getWeekday(): DateWeekday
    getYear(): DateYear
    isFirstOfMonth(): boolean
    isLastOfMonth(): boolean
    order(date2: Date): void
    setDay(day: DateDay): void
    setDmy(day: DateDay, month: DateMonth, y: DateYear): void
    setJulian(julianDate: number): void
    setMonth(month: DateMonth): void
    setParse(str: string): void
    setTime(time: Time): void
    setTimeT(timet: number): void
    setTimeVal(timeval: TimeVal): void
    setYear(year: DateYear): void
    subtractDays(nDays: number): void
    subtractMonths(nMonths: number): void
    subtractYears(nYears: number): void
    toStructTm(tm: object): void
    valid(): boolean
    static name: string
    static new(): Date
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Date
    static newDmy(day: DateDay, month: DateMonth, year: DateYear): Date
    static newJulian(julianDay: number): Date
    static getDaysInMonth(month: DateMonth, year: DateYear): number
    static getMondayWeeksInYear(year: DateYear): number
    static getSundayWeeksInYear(year: DateYear): number
    static isLeapYear(year: DateYear): boolean
    static strftime(s: string, slen: number, format: string, date: Date): number
    static validDay(day: DateDay): boolean
    static validDmy(day: DateDay, month: DateMonth, year: DateYear): boolean
    static validJulian(julianDate: number): boolean
    static validMonth(month: DateMonth): boolean
    static validWeekday(weekday: DateWeekday): boolean
    static validYear(year: DateYear): boolean
}
export class DateTime {
    /* Methods of GLib.DateTime */
    add(timespan: TimeSpan): DateTime | null
    addDays(days: number): DateTime | null
    addFull(years: number, months: number, days: number, hours: number, minutes: number, seconds: number): DateTime | null
    addHours(hours: number): DateTime | null
    addMinutes(minutes: number): DateTime | null
    addMonths(months: number): DateTime | null
    addSeconds(seconds: number): DateTime | null
    addWeeks(weeks: number): DateTime | null
    addYears(years: number): DateTime | null
    compare(dt2: DateTime): number
    difference(begin: DateTime): TimeSpan
    equal(dt2: DateTime): boolean
    format(format: string): string | null
    formatIso8601(): string | null
    getDayOfMonth(): number
    getDayOfWeek(): number
    getDayOfYear(): number
    getHour(): number
    getMicrosecond(): number
    getMinute(): number
    getMonth(): number
    getSecond(): number
    getSeconds(): number
    getTimezone(): TimeZone
    getTimezoneAbbreviation(): string
    getUtcOffset(): TimeSpan
    getWeekNumberingYear(): number
    getWeekOfYear(): number
    getYear(): number
    getYmd(): [ /* year */ number | null, /* month */ number | null, /* day */ number | null ]
    hash(): number
    isDaylightSavings(): boolean
    ref(): DateTime
    toLocal(): DateTime | null
    toTimeval(tv: TimeVal): boolean
    toTimezone(tz: TimeZone): DateTime | null
    toUnix(): number
    toUtc(): DateTime | null
    unref(): void
    static name: string
    static new(tz: TimeZone, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    constructor(tz: TimeZone, year: number, month: number, day: number, hour: number, minute: number, seconds: number)
    /* Static methods and pseudo-constructors */
    static new(tz: TimeZone, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    static newFromIso8601(text: string, defaultTz?: TimeZone | null): DateTime
    static newFromTimevalLocal(tv: TimeVal): DateTime
    static newFromTimevalUtc(tv: TimeVal): DateTime
    static newFromUnixLocal(t: number): DateTime
    static newFromUnixUtc(t: number): DateTime
    static newLocal(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    static newNow(tz: TimeZone): DateTime
    static newNowLocal(): DateTime
    static newNowUtc(): DateTime
    static newUtc(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
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
    readName(): string
    rewind(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static makeTmp(tmpl?: string | null): string
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
    static newLiteral(domain: Quark, code: number, message: string): Error
}
export class HashTable {
    static name: string
    /* Static methods and pseudo-constructors */
    static add(hashTable: HashTable, key?: object | null): boolean
    static contains(hashTable: HashTable, key?: object | null): boolean
    static destroy(hashTable: HashTable): void
    static insert(hashTable: HashTable, key?: object | null, value?: object | null): boolean
    static lookup(hashTable: HashTable, key?: object | null): object | null
    static lookupExtended(hashTable: HashTable, lookupKey?: object | null): [ /* returnType */ boolean, /* origKey */ object | null, /* value */ object | null ]
    static remove(hashTable: HashTable, key?: object | null): boolean
    static removeAll(hashTable: HashTable): void
    static replace(hashTable: HashTable, key?: object | null, value?: object | null): boolean
    static size(hashTable: HashTable): number
    static steal(hashTable: HashTable, key?: object | null): boolean
    static stealAll(hashTable: HashTable): void
    static stealExtended(hashTable: HashTable, lookupKey?: object | null): [ /* returnType */ boolean, /* stolenKey */ object | null, /* stolenValue */ object | null ]
    static unref(hashTable: HashTable): void
}
export class HashTableIter {
    /* Methods of GLib.HashTableIter */
    init(hashTable: HashTable): void
    next(): [ /* returnType */ boolean, /* key */ object | null, /* value */ object | null ]
    remove(): void
    replace(value?: object | null): void
    steal(): void
    static name: string
}
export class Hmac {
    /* Methods of GLib.Hmac */
    getDigest(buffer: any): void
    getString(): string
    unref(): void
    update(data: any): void
    static name: string
}
export class Hook {
    /* Fields of GLib.Hook */
    data: object
    next: Hook
    prev: Hook
    refCount: number
    hookId: number
    flags: number
    func: object
    destroy: DestroyNotify
    /* Methods of GLib.Hook */
    compareIds(sibling: Hook): number
    static name: string
    /* Static methods and pseudo-constructors */
    static destroy(hookList: HookList, hookId: number): boolean
    static destroyLink(hookList: HookList, hook: Hook): void
    static free(hookList: HookList, hook: Hook): void
    static insertBefore(hookList: HookList, sibling: Hook | null, hook: Hook): void
    static prepend(hookList: HookList, hook: Hook): void
    static unref(hookList: HookList, hook: Hook): void
}
export class HookList {
    /* Fields of GLib.HookList */
    seqId: number
    hookSize: number
    isSetup: number
    hooks: Hook
    dummy3: object
    finalizeHook: HookFinalizeFunc
    dummy: object[]
    /* Methods of GLib.HookList */
    clear(): void
    init(hookSize: number): void
    invoke(mayRecurse: boolean): void
    invokeCheck(mayRecurse: boolean): void
    static name: string
}
export class IConv {
    static name: string
}
export class IOChannel {
    /* Methods of GLib.IOChannel */
    close(): void
    flush(): IOStatus
    getBufferCondition(): IOCondition
    getBufferSize(): number
    getBuffered(): boolean
    getCloseOnUnref(): boolean
    getEncoding(): string
    getFlags(): IOFlags
    getLineTerm(length: number): string
    init(): void
    read(buf: string, count: number, bytesRead: number): IOError
    readChars(): [ /* returnType */ IOStatus, /* buf */ any, /* bytesRead */ number | null ]
    readLine(): [ /* returnType */ IOStatus, /* strReturn */ string, /* length */ number | null, /* terminatorPos */ number | null ]
    readLineString(buffer: String, terminatorPos?: number | null): IOStatus
    readToEnd(): [ /* returnType */ IOStatus, /* strReturn */ any ]
    readUnichar(): [ /* returnType */ IOStatus, /* thechar */ number ]
    ref(): IOChannel
    seek(offset: number, type: SeekType): IOError
    seekPosition(offset: number, type: SeekType): IOStatus
    setBufferSize(size: number): void
    setBuffered(buffered: boolean): void
    setCloseOnUnref(doClose: boolean): void
    setEncoding(encoding?: string | null): IOStatus
    setFlags(flags: IOFlags): IOStatus
    setLineTerm(lineTerm: string | null, length: number): void
    shutdown(flush: boolean): IOStatus
    unixGetFd(): number
    unref(): void
    write(buf: string, count: number, bytesWritten: number): IOError
    writeChars(buf: any, count: number): [ /* returnType */ IOStatus, /* bytesWritten */ number ]
    writeUnichar(thechar: number): IOStatus
    static name: string
    /* Static methods and pseudo-constructors */
    static newFile(filename: string, mode: string): IOChannel
    static unixNew(fd: number): IOChannel
    static errorFromErrno(en: number): IOChannelError
    static errorQuark(): Quark
}
export class IOFuncs {
    /* Fields of GLib.IOFuncs */
    ioRead: (channel: IOChannel, buf: string, count: number, bytesRead: number) => IOStatus
    ioWrite: (channel: IOChannel, buf: string, count: number, bytesWritten: number) => IOStatus
    ioSeek: (channel: IOChannel, offset: number, type: SeekType) => IOStatus
    ioClose: (channel: IOChannel) => IOStatus
    ioCreateWatch: (channel: IOChannel, condition: IOCondition) => Source
    ioFree: (channel: IOChannel) => void
    ioSetFlags: (channel: IOChannel, flags: IOFlags) => IOStatus
    ioGetFlags: (channel: IOChannel) => IOFlags
    static name: string
}
export class KeyFile {
    /* Methods of GLib.KeyFile */
    getBoolean(groupName: string, key: string): boolean
    getBooleanList(groupName: string, key: string): boolean[]
    getComment(groupName?: string | null, key?: string | null): string
    getDouble(groupName: string, key: string): number
    getDoubleList(groupName: string, key: string): number[]
    getGroups(): [ /* returnType */ string[], /* length */ number | null ]
    getInt64(groupName: string, key: string): number
    getInteger(groupName: string, key: string): number
    getIntegerList(groupName: string, key: string): number[]
    getKeys(groupName: string): [ /* returnType */ string[], /* length */ number | null ]
    getLocaleForKey(groupName: string, key: string, locale?: string | null): string | null
    getLocaleString(groupName: string, key: string, locale?: string | null): string
    getLocaleStringList(groupName: string, key: string, locale?: string | null): string[]
    getStartGroup(): string | null
    getString(groupName: string, key: string): string
    getStringList(groupName: string, key: string): string[]
    getUint64(groupName: string, key: string): number
    getValue(groupName: string, key: string): string
    hasGroup(groupName: string): boolean
    loadFromBytes(bytes: Bytes, flags: KeyFileFlags): boolean
    loadFromData(data: string, length: number, flags: KeyFileFlags): boolean
    loadFromDataDirs(file: string, flags: KeyFileFlags): [ /* returnType */ boolean, /* fullPath */ string | null ]
    loadFromDirs(file: string, searchDirs: string[], flags: KeyFileFlags): [ /* returnType */ boolean, /* fullPath */ string | null ]
    loadFromFile(file: string, flags: KeyFileFlags): boolean
    removeComment(groupName?: string | null, key?: string | null): boolean
    removeGroup(groupName: string): boolean
    removeKey(groupName: string, key: string): boolean
    saveToFile(filename: string): boolean
    setBoolean(groupName: string, key: string, value: boolean): void
    setBooleanList(groupName: string, key: string, list: boolean[]): void
    setComment(groupName: string | null, key: string | null, comment: string): boolean
    setDouble(groupName: string, key: string, value: number): void
    setDoubleList(groupName: string, key: string, list: number[]): void
    setInt64(groupName: string, key: string, value: number): void
    setInteger(groupName: string, key: string, value: number): void
    setIntegerList(groupName: string, key: string, list: number[]): void
    setListSeparator(separator: number): void
    setLocaleString(groupName: string, key: string, locale: string, string: string): void
    setLocaleStringList(groupName: string, key: string, locale: string, list: string[]): void
    setString(groupName: string, key: string, string: string): void
    setStringList(groupName: string, key: string, list: string[]): void
    setUint64(groupName: string, key: string, value: number): void
    setValue(groupName: string, key: string, value: string): void
    toData(): [ /* returnType */ string, /* length */ number | null ]
    unref(): void
    static name: string
    static new(): KeyFile
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): KeyFile
    static errorQuark(): Quark
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
    addPoll(fd: PollFD, priority: number): void
    check(maxPriority: number, fds: PollFD[]): boolean
    dispatch(): void
    findSourceByFuncsUserData(funcs: SourceFuncs, userData?: object | null): Source
    findSourceById(sourceId: number): Source
    findSourceByUserData(userData?: object | null): Source
    invokeFull(priority: number, function_: SourceFunc): void
    isOwner(): boolean
    iteration(mayBlock: boolean): boolean
    pending(): boolean
    popThreadDefault(): void
    prepare(): [ /* returnType */ boolean, /* priority */ number | null ]
    pushThreadDefault(): void
    query(maxPriority: number): [ /* returnType */ number, /* timeout */ number, /* fds */ PollFD[] ]
    ref(): MainContext
    release(): void
    removePoll(fd: PollFD): void
    unref(): void
    wait(cond: Cond, mutex: Mutex): boolean
    wakeup(): void
    static name: string
    static new(): MainContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MainContext
    static default(): MainContext
    static getThreadDefault(): MainContext | null
    static refThreadDefault(): MainContext
}
export class MainLoop {
    /* Methods of GLib.MainLoop */
    getContext(): MainContext
    isRunning(): boolean
    quit(): void
    ref(): MainLoop
    run(): void
    unref(): void
    static name: string
    static new(context: MainContext | null, isRunning: boolean): MainLoop
    constructor(context: MainContext | null, isRunning: boolean)
    /* Static methods and pseudo-constructors */
    static new(context: MainContext | null, isRunning: boolean): MainLoop
}
export class MappedFile {
    /* Methods of GLib.MappedFile */
    free(): void
    getBytes(): Bytes
    getContents(): string
    getLength(): number
    ref(): MappedFile
    unref(): void
    static name: string
    static new(filename: string, writable: boolean): MappedFile
    constructor(filename: string, writable: boolean)
    /* Static methods and pseudo-constructors */
    static new(filename: string, writable: boolean): MappedFile
    static newFromFd(fd: number, writable: boolean): MappedFile
}
export class MarkupParseContext {
    /* Methods of GLib.MarkupParseContext */
    endParse(): boolean
    free(): void
    getElement(): string
    getPosition(): [ /* lineNumber */ number | null, /* charNumber */ number | null ]
    getUserData(): object | null
    parse(text: string, textLen: number): boolean
    pop(): object | null
    push(parser: MarkupParser, userData?: object | null): void
    ref(): MarkupParseContext
    unref(): void
    static name: string
    static new(parser: MarkupParser, flags: MarkupParseFlags, userData: object | null, userDataDnotify: DestroyNotify): MarkupParseContext
    constructor(parser: MarkupParser, flags: MarkupParseFlags, userData: object | null, userDataDnotify: DestroyNotify)
    /* Static methods and pseudo-constructors */
    static new(parser: MarkupParser, flags: MarkupParseFlags, userData: object | null, userDataDnotify: DestroyNotify): MarkupParseContext
}
export class MarkupParser {
    /* Fields of GLib.MarkupParser */
    startElement: (context: MarkupParseContext, elementName: string, attributeNames: string, attributeValues: string) => void
    endElement: (context: MarkupParseContext, elementName: string) => void
    text: (context: MarkupParseContext, text: string, textLen: number) => void
    passthrough: (context: MarkupParseContext, passthroughText: string, textLen: number) => void
    error: (context: MarkupParseContext, error: Error) => void
    static name: string
}
export class MatchInfo {
    /* Methods of GLib.MatchInfo */
    expandReferences(stringToExpand: string): string | null
    fetch(matchNum: number): string | null
    fetchAll(): string[]
    fetchNamed(name: string): string | null
    fetchNamedPos(name: string): [ /* returnType */ boolean, /* startPos */ number | null, /* endPos */ number | null ]
    fetchPos(matchNum: number): [ /* returnType */ boolean, /* startPos */ number | null, /* endPos */ number | null ]
    free(): void
    getMatchCount(): number
    getRegex(): Regex
    getString(): string
    isPartialMatch(): boolean
    matches(): boolean
    next(): boolean
    ref(): MatchInfo
    unref(): void
    static name: string
}
export class MemVTable {
    /* Fields of GLib.MemVTable */
    malloc: (nBytes: number) => object
    realloc: (mem: object, nBytes: number) => object
    free: (mem: object) => void
    calloc: (nBlocks: number, nBlockBytes: number) => object
    tryMalloc: (nBytes: number) => object
    tryRealloc: (mem: object, nBytes: number) => object
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
    childIndex(data?: object | null): number
    childPosition(child: Node): number
    depth(): number
    destroy(): void
    isAncestor(descendant: Node): boolean
    maxHeight(): number
    nChildren(): number
    nNodes(flags: TraverseFlags): number
    reverseChildren(): void
    unlink(): void
    static name: string
}
export class Once {
    /* Fields of GLib.Once */
    status: OnceStatus
    retval: object
    static name: string
    /* Static methods and pseudo-constructors */
    static initEnter(location: object): boolean
    static initLeave(location: object, result: number): void
}
export class OptionContext {
    /* Methods of GLib.OptionContext */
    addGroup(group: OptionGroup): void
    addMainEntries(entries: OptionEntry[], translationDomain?: string | null): void
    free(): void
    getDescription(): string
    getHelp(mainHelp: boolean, group?: OptionGroup | null): string
    getHelpEnabled(): boolean
    getIgnoreUnknownOptions(): boolean
    getMainGroup(): OptionGroup
    getStrictPosix(): boolean
    getSummary(): string
    parse(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
    parseStrv(arguments_?: string[] | null): [ /* returnType */ boolean, /* arguments_ */ string[] | null ]
    setDescription(description?: string | null): void
    setHelpEnabled(helpEnabled: boolean): void
    setIgnoreUnknownOptions(ignoreUnknown: boolean): void
    setMainGroup(group: OptionGroup): void
    setStrictPosix(strictPosix: boolean): void
    setSummary(summary?: string | null): void
    setTranslateFunc(func?: TranslateFunc | null): void
    setTranslationDomain(domain: string): void
    static name: string
}
export class OptionEntry {
    /* Fields of GLib.OptionEntry */
    longName: string
    shortName: number
    flags: number
    arg: OptionArg
    argData: object
    description: string
    argDescription: string
    static name: string
}
export class OptionGroup {
    /* Methods of GLib.OptionGroup */
    addEntries(entries: OptionEntry[]): void
    free(): void
    ref(): OptionGroup
    setTranslateFunc(func?: TranslateFunc | null): void
    setTranslationDomain(domain: string): void
    unref(): void
    static name: string
    static new(name: string, description: string, helpDescription: string, userData?: object | null, destroy?: DestroyNotify | null): OptionGroup
    constructor(name: string, description: string, helpDescription: string, userData?: object | null, destroy?: DestroyNotify | null)
    /* Static methods and pseudo-constructors */
    static new(name: string, description: string, helpDescription: string, userData?: object | null, destroy?: DestroyNotify | null): OptionGroup
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
    clearFull(freeFunc?: DestroyNotify | null): void
    free(): void
    freeFull(freeFunc: DestroyNotify): void
    getLength(): number
    index(data?: object | null): number
    init(): void
    isEmpty(): boolean
    peekHead(): object | null
    peekNth(n: number): object | null
    peekTail(): object | null
    popHead(): object | null
    popNth(n: number): object | null
    popTail(): object | null
    pushHead(data?: object | null): void
    pushNth(data: object | null, n: number): void
    pushTail(data?: object | null): void
    remove(data?: object | null): boolean
    removeAll(data?: object | null): number
    reverse(): void
    static name: string
}
export class RWLock {
    /* Methods of GLib.RWLock */
    clear(): void
    init(): void
    readerLock(): void
    readerTrylock(): boolean
    readerUnlock(): void
    writerLock(): void
    writerTrylock(): boolean
    writerUnlock(): void
    static name: string
}
export class Rand {
    /* Methods of GLib.Rand */
    double(): number
    doubleRange(begin: number, end: number): number
    free(): void
    int(): number
    intRange(begin: number, end: number): number
    setSeed(seed: number): void
    setSeedArray(seed: number, seedLength: number): void
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
    getCaptureCount(): number
    getCompileFlags(): RegexCompileFlags
    getHasCrOrLf(): boolean
    getMatchFlags(): RegexMatchFlags
    getMaxBackref(): number
    getMaxLookbehind(): number
    getPattern(): string
    getStringNumber(name: string): number
    match(string: string, matchOptions: RegexMatchFlags): [ /* returnType */ boolean, /* matchInfo */ MatchInfo | null ]
    matchAll(string: string, matchOptions: RegexMatchFlags): [ /* returnType */ boolean, /* matchInfo */ MatchInfo | null ]
    matchAllFull(string: string[], startPosition: number, matchOptions: RegexMatchFlags): [ /* returnType */ boolean, /* matchInfo */ MatchInfo | null ]
    matchFull(string: string[], startPosition: number, matchOptions: RegexMatchFlags): [ /* returnType */ boolean, /* matchInfo */ MatchInfo | null ]
    ref(): Regex
    replace(string: string[], startPosition: number, replacement: string, matchOptions: RegexMatchFlags): string
    replaceLiteral(string: string[], startPosition: number, replacement: string, matchOptions: RegexMatchFlags): string
    split(string: string, matchOptions: RegexMatchFlags): string[]
    splitFull(string: string[], startPosition: number, matchOptions: RegexMatchFlags, maxTokens: number): string[]
    unref(): void
    static name: string
    static new(pattern: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): Regex
    constructor(pattern: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags)
    /* Static methods and pseudo-constructors */
    static new(pattern: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): Regex
    static checkReplacement(replacement: string): [ /* returnType */ boolean, /* hasReferences */ boolean | null ]
    static errorQuark(): Quark
    static escapeNul(string: string, length: number): string
    static escapeString(string: string[]): string
    static matchSimple(pattern: string, string: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): boolean
    static splitSimple(pattern: string, string: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): string[]
}
export class SList {
    /* Fields of GLib.SList */
    data: object
    next: object[]
    static name: string
}
export class Scanner {
    /* Fields of GLib.Scanner */
    userData: object
    maxParseErrors: number
    parseErrors: number
    inputName: string
    qdata: Data
    config: ScannerConfig
    token: TokenType
    value: TokenValue
    line: number
    position: number
    nextToken: TokenType
    nextValue: TokenValue
    nextLine: number
    nextPosition: number
    msgHandler: ScannerMsgFunc
    /* Methods of GLib.Scanner */
    curLine(): number
    curPosition(): number
    curToken(): TokenType
    destroy(): void
    eof(): boolean
    getNextToken(): TokenType
    inputFile(inputFd: number): void
    inputText(text: string, textLen: number): void
    lookupSymbol(symbol: string): object | null
    peekNextToken(): TokenType
    scopeAddSymbol(scopeId: number, symbol: string, value?: object | null): void
    scopeLookupSymbol(scopeId: number, symbol: string): object | null
    scopeRemoveSymbol(scopeId: number, symbol: string): void
    setScope(scopeId: number): number
    syncFileOffset(): void
    unexpToken(expectedToken: TokenType, identifierSpec: string, symbolSpec: string, symbolName: string, message: string, isError: number): void
    static name: string
}
export class ScannerConfig {
    /* Fields of GLib.ScannerConfig */
    csetSkipCharacters: string
    csetIdentifierFirst: string
    csetIdentifierNth: string
    cpairCommentSingle: string
    caseSensitive: number
    skipCommentMulti: number
    skipCommentSingle: number
    scanCommentMulti: number
    scanIdentifier: number
    scanIdentifier1char: number
    scanIdentifierNULL: number
    scanSymbols: number
    scanBinary: number
    scanOctal: number
    scanFloat: number
    scanHex: number
    scanHexDollar: number
    scanStringSq: number
    scanStringDq: number
    numbers2Int: number
    int2Float: number
    identifier2String: number
    char2Token: number
    symbol2Token: number
    scope0Fallback: number
    storeInt64: number
    static name: string
}
export class Sequence {
    /* Methods of GLib.Sequence */
    append(data?: object | null): SequenceIter
    free(): void
    getBeginIter(): SequenceIter
    getEndIter(): SequenceIter
    getIterAtPos(pos: number): SequenceIter
    getLength(): number
    isEmpty(): boolean
    prepend(data?: object | null): SequenceIter
    static name: string
    /* Static methods and pseudo-constructors */
    static get(iter: SequenceIter): object | null
    static insertBefore(iter: SequenceIter, data?: object | null): SequenceIter
    static move(src: SequenceIter, dest: SequenceIter): void
    static moveRange(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void
    static rangeGetMidpoint(begin: SequenceIter, end: SequenceIter): SequenceIter
    static remove(iter: SequenceIter): void
    static removeRange(begin: SequenceIter, end: SequenceIter): void
    static set(iter: SequenceIter, data?: object | null): void
    static swap(a: SequenceIter, b: SequenceIter): void
}
export class SequenceIter {
    /* Methods of GLib.SequenceIter */
    compare(b: SequenceIter): number
    getPosition(): number
    getSequence(): Sequence
    isBegin(): boolean
    isEnd(): boolean
    move(delta: number): SequenceIter
    next(): SequenceIter
    prev(): SequenceIter
    static name: string
}
export class Source {
    /* Methods of GLib.Source */
    addChildSource(childSource: Source): void
    addPoll(fd: PollFD): void
    addUnixFd(fd: number, events: IOCondition): object
    attach(context?: MainContext | null): number
    destroy(): void
    getCanRecurse(): boolean
    getContext(): MainContext | null
    getCurrentTime(timeval: TimeVal): void
    getId(): number
    getName(): string | null
    getPriority(): number
    getReadyTime(): number
    getTime(): number
    isDestroyed(): boolean
    modifyUnixFd(tag: object, newEvents: IOCondition): void
    queryUnixFd(tag: object): IOCondition
    ref(): Source
    removeChildSource(childSource: Source): void
    removePoll(fd: PollFD): void
    removeUnixFd(tag: object): void
    setCallback(func: SourceFunc): void
    setCallbackIndirect(callbackData: object | null, callbackFuncs: SourceCallbackFuncs): void
    setCanRecurse(canRecurse: boolean): void
    setFuncs(funcs: SourceFuncs): void
    setName(name: string): void
    setPriority(priority: number): void
    setReadyTime(readyTime: number): void
    unref(): void
    static name: string
    static new(sourceFuncs: SourceFuncs, structSize: number): Source
    constructor(sourceFuncs: SourceFuncs, structSize: number)
    /* Static methods and pseudo-constructors */
    static new(sourceFuncs: SourceFuncs, structSize: number): Source
    static remove(tag: number): boolean
    static removeByFuncsUserData(funcs: SourceFuncs, userData?: object | null): boolean
    static removeByUserData(userData?: object | null): boolean
    static setNameById(tag: number, name: string): void
}
export class SourceCallbackFuncs {
    /* Fields of GLib.SourceCallbackFuncs */
    ref: (cbData: object) => void
    unref: (cbData: object) => void
    static name: string
}
export class SourceFuncs {
    /* Fields of GLib.SourceFuncs */
    prepare: (source: Source, timeout: number) => boolean
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
    allocatedLen: number
    /* Methods of GLib.String */
    append(val: string): String
    appendC(c: number): String
    appendLen(val: string, len: number): String
    appendUnichar(wc: number): String
    appendUriEscaped(unescaped: string, reservedCharsAllowed: string, allowUtf8: boolean): String
    asciiDown(): String
    asciiUp(): String
    assign(rval: string): String
    down(): String
    equal(v2: String): boolean
    erase(pos: number, len: number): String
    free(freeSegment: boolean): string | null
    freeToBytes(): Bytes
    hash(): number
    insert(pos: number, val: string): String
    insertC(pos: number, c: number): String
    insertLen(pos: number, val: string, len: number): String
    insertUnichar(pos: number, wc: number): String
    overwrite(pos: number, val: string): String
    overwriteLen(pos: number, val: string, len: number): String
    prepend(val: string): String
    prependC(c: number): String
    prependLen(val: string, len: number): String
    prependUnichar(wc: number): String
    replace(find: string, replace: string, limit: number): number
    setSize(len: number): String
    truncate(len: number): String
    up(): String
    static name: string
}
export class StringChunk {
    /* Methods of GLib.StringChunk */
    clear(): void
    free(): void
    insert(string: string): string
    insertConst(string: string): string
    insertLen(string: string, len: number): string
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
    testInitialized: boolean
    testQuick: boolean
    testPerf: boolean
    testVerbose: boolean
    testQuiet: boolean
    testUndefined: boolean
    static name: string
}
export class TestLogBuffer {
    /* Methods of GLib.TestLogBuffer */
    free(): void
    push(nBytes: number, bytes: number): void
    static name: string
}
export class TestLogMsg {
    /* Fields of GLib.TestLogMsg */
    logType: TestLogType
    nStrings: number
    strings: string
    nNums: number
    /* Methods of GLib.TestLogMsg */
    free(): void
    static name: string
}
export class TestSuite {
    /* Methods of GLib.TestSuite */
    add(testCase: TestCase): void
    addSuite(nestedsuite: TestSuite): void
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
    static tryNew(name: string | null, func: ThreadFunc): Thread
    static errorQuark(): Quark
    static exit(retval?: object | null): void
    static self(): Thread
    static yield(): void
}
export class ThreadPool {
    /* Fields of GLib.ThreadPool */
    func: Func
    userData: object
    exclusive: boolean
    /* Methods of GLib.ThreadPool */
    free(immediate: boolean, wait: boolean): void
    getMaxThreads(): number
    getNumThreads(): number
    moveToFront(data?: object | null): boolean
    push(data?: object | null): boolean
    setMaxThreads(maxThreads: number): boolean
    unprocessed(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static getMaxIdleTime(): number
    static getMaxUnusedThreads(): number
    static getNumUnusedThreads(): number
    static setMaxIdleTime(interval: number): void
    static setMaxUnusedThreads(maxThreads: number): void
    static stopUnusedThreads(): void
}
export class TimeVal {
    /* Fields of GLib.TimeVal */
    tvSec: number
    tvUsec: number
    /* Methods of GLib.TimeVal */
    add(microseconds: number): void
    toIso8601(): string | null
    static name: string
    /* Static methods and pseudo-constructors */
    static fromIso8601(isoDate: string): [ /* returnType */ boolean, /* time */ TimeVal ]
}
export class TimeZone {
    /* Methods of GLib.TimeZone */
    adjustTime(type: TimeType, time: number): number
    findInterval(type: TimeType, time: number): number
    getAbbreviation(interval: number): string
    getIdentifier(): string
    getOffset(interval: number): number
    isDst(interval: number): boolean
    ref(): TimeZone
    unref(): void
    static name: string
    static new(identifier?: string | null): TimeZone
    constructor(identifier?: string | null)
    /* Static methods and pseudo-constructors */
    static new(identifier?: string | null): TimeZone
    static newIdentifier(identifier?: string | null): TimeZone
    static newLocal(): TimeZone
    static newOffset(seconds: number): TimeZone
    static newUtc(): TimeZone
}
export class Timer {
    /* Methods of GLib.Timer */
    continue(): void
    destroy(): void
    elapsed(microseconds: number): number
    isActive(): boolean
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
    static height(stackP: TrashStack): number
    static peek(stackP: TrashStack): object | null
    static pop(stackP: TrashStack): object | null
    static push(stackP: TrashStack, dataP: object): void
}
export class Tree {
    /* Methods of GLib.Tree */
    destroy(): void
    height(): number
    insert(key?: object | null, value?: object | null): void
    insertNode(key?: object | null, value?: object | null): TreeNode
    lookup(key?: object | null): object | null
    lookupExtended(lookupKey?: object | null): [ /* returnType */ boolean, /* origKey */ object | null, /* value */ object | null ]
    lookupNode(key?: object | null): TreeNode | null
    lowerBound(key?: object | null): TreeNode | null
    nnodes(): number
    nodeFirst(): TreeNode | null
    nodeLast(): TreeNode | null
    ref(): Tree
    remove(key?: object | null): boolean
    replace(key?: object | null, value?: object | null): void
    replaceNode(key?: object | null, value?: object | null): TreeNode
    steal(key?: object | null): boolean
    unref(): void
    upperBound(key?: object | null): TreeNode | null
    static name: string
    /* Static methods and pseudo-constructors */
    static newFull(keyCompareFunc: CompareDataFunc, keyDestroyFunc: DestroyNotify): Tree
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
    getAuthParams(): string | null
    getFlags(): UriFlags
    getFragment(): string | null
    getHost(): string | null
    getPassword(): string | null
    getPath(): string
    getPort(): number
    getQuery(): string | null
    getScheme(): string
    getUser(): string | null
    getUserinfo(): string | null
    parseRelative(uriRef: string, flags: UriFlags): Uri
    toStringPartial(flags: UriHideFlags): string
    static name: string
    /* Static methods and pseudo-constructors */
    static build(flags: UriFlags, scheme: string, userinfo: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): Uri
    static buildWithUser(flags: UriFlags, scheme: string, user: string | null, password: string | null, authParams: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): Uri
    static errorQuark(): Quark
    static escapeBytes(unescaped: any, reservedCharsAllowed?: string | null): string
    static escapeString(unescaped: string, reservedCharsAllowed: string | null, allowUtf8: boolean): string
    static isValid(uriString: string, flags: UriFlags): boolean
    static join(flags: UriFlags, scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): string
    static joinWithUser(flags: UriFlags, scheme: string | null, user: string | null, password: string | null, authParams: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): string
    static listExtractUris(uriList: string): string[]
    static parse(uriString: string, flags: UriFlags): Uri
    static parseParams(params: string, length: number, separators: string, flags: UriParamsFlags): HashTable
    static parseScheme(uri: string): string | null
    static peekScheme(uri: string): string | null
    static resolveRelative(baseUriString: string | null, uriRef: string, flags: UriFlags): string
    static split(uriRef: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* userinfo */ string | null, /* host */ string | null, /* port */ number | null, /* path */ string | null, /* query */ string | null, /* fragment */ string | null ]
    static splitNetwork(uriString: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* host */ string | null, /* port */ number | null ]
    static splitWithUser(uriRef: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* user */ string | null, /* password */ string | null, /* authParams */ string | null, /* host */ string | null, /* port */ number | null, /* path */ string | null, /* query */ string | null, /* fragment */ string | null ]
    static unescapeBytes(escapedString: string, length: number, illegalCharacters?: string | null): Bytes
    static unescapeSegment(escapedString?: string | null, escapedStringEnd?: string | null, illegalCharacters?: string | null): string | null
    static unescapeString(escapedString: string, illegalCharacters?: string | null): string | null
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
    checkFormatString(formatString: string, copyOnly: boolean): boolean
    classify(): VariantClass
    compare(two: Variant): number
    dupBytestring(): any
    dupBytestringArray(): string[]
    dupObjv(): string[]
    dupString(): [ /* returnType */ string, /* length */ number ]
    dupStrv(): string[]
    equal(two: Variant): boolean
    getBoolean(): boolean
    getByte(): number
    getBytestring(): any
    getBytestringArray(): string[]
    getChildValue(index: number): Variant
    getData(): object | null
    getDataAsBytes(): Bytes
    getDouble(): number
    getHandle(): number
    getInt16(): number
    getInt32(): number
    getInt64(): number
    getMaybe(): Variant | null
    getNormalForm(): Variant
    getObjv(): string[]
    getSize(): number
    getString(): [ /* returnType */ string, /* length */ number | null ]
    getStrv(): string[]
    getType(): VariantType
    getTypeString(): string
    getUint16(): number
    getUint32(): number
    getUint64(): number
    getVariant(): Variant
    hash(): number
    isContainer(): boolean
    isFloating(): boolean
    isNormalForm(): boolean
    isOfType(type: VariantType): boolean
    lookupValue(key: string, expectedType?: VariantType | null): Variant
    nChildren(): number
    print(typeAnnotate: boolean): string
    ref(): Variant
    refSink(): Variant
    store(data: object): void
    takeRef(): Variant
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newArray(childType: VariantType | null, children: Variant[] | null): Variant
    static newBoolean(value: boolean): Variant
    static newByte(value: number): Variant
    static newBytestring(string: any): Variant
    static newBytestringArray(strv: string[]): Variant
    static newDictEntry(key: Variant, value: Variant): Variant
    static newDouble(value: number): Variant
    static newFixedArray(elementType: VariantType, elements: object | null, nElements: number, elementSize: number): Variant
    static newFromBytes(type: VariantType, bytes: Bytes, trusted: boolean): Variant
    static newFromData(type: VariantType, data: any, trusted: boolean, notify: DestroyNotify, userData?: object | null): Variant
    static newHandle(value: number): Variant
    static newInt16(value: number): Variant
    static newInt32(value: number): Variant
    static newInt64(value: number): Variant
    static newMaybe(childType?: VariantType | null, child?: Variant | null): Variant
    static newObjectPath(objectPath: string): Variant
    static newObjv(strv: string[]): Variant
    static newSignature(signature: string): Variant
    static newString(string: string): Variant
    static newStrv(strv: string[]): Variant
    static newTuple(children: Variant[]): Variant
    static newUint16(value: number): Variant
    static newUint32(value: number): Variant
    static newUint64(value: number): Variant
    static newVariant(value: Variant): Variant
    static isObjectPath(string: string): boolean
    static isSignature(string: string): boolean
    static parse(type: VariantType | null, text: string, limit?: string | null, endptr?: string | null): Variant
    static parseErrorPrintContext(error: Error, sourceStr: string): string
    static parseErrorQuark(): Quark
    static parserGetErrorQuark(): Quark
}
export class VariantBuilder {
    /* Methods of GLib.VariantBuilder */
    addValue(value: Variant): void
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
    insertValue(key: string, value: Variant): void
    lookupValue(key: string, expectedType?: VariantType | null): Variant
    ref(): VariantDict
    remove(key: string): boolean
    unref(): void
    static name: string
    static new(fromAsv?: Variant | null): VariantDict
    constructor(fromAsv?: Variant | null)
    /* Static methods and pseudo-constructors */
    static new(fromAsv?: Variant | null): VariantDict
}
export class VariantIter {
    /* Methods of GLib.VariantIter */
    free(): void
    nChildren(): number
    nextValue(): Variant | null
    static name: string
}
export class VariantType {
    /* Methods of GLib.VariantType */
    copy(): VariantType
    dupString(): string
    element(): VariantType
    equal(type2: VariantType): boolean
    first(): VariantType
    free(): void
    getStringLength(): number
    hash(): number
    isArray(): boolean
    isBasic(): boolean
    isContainer(): boolean
    isDefinite(): boolean
    isDictEntry(): boolean
    isMaybe(): boolean
    isSubtypeOf(supertype: VariantType): boolean
    isTuple(): boolean
    isVariant(): boolean
    key(): VariantType
    nItems(): number
    next(): VariantType
    value(): VariantType
    static name: string
    static new(typeString: string): VariantType
    constructor(typeString: string)
    /* Static methods and pseudo-constructors */
    static new(typeString: string): VariantType
    static newArray(element: VariantType): VariantType
    static newDictEntry(key: VariantType, value: VariantType): VariantType
    static newMaybe(element: VariantType): VariantType
    static newTuple(items: VariantType[]): VariantType
    static checked(arg0: string): VariantType
    static stringGetDepth(typeString: string): number
    static stringIsValid(typeString: string): boolean
    static stringScan(string: string, limit?: string | null): [ /* returnType */ boolean, /* endptr */ string | null ]
}
export class DoubleIEEE754 {
    /* Fields of GLib.DoubleIEEE754 */
    vDouble: number
    static name: string
}
export class FloatIEEE754 {
    /* Fields of GLib.FloatIEEE754 */
    vFloat: number
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
    vSymbol: object
    vIdentifier: string
    vBinary: number
    vOctal: number
    vInt: number
    vInt64: number
    vFloat: number
    vHex: number
    vString: string
    vComment: string
    vChar: number
    vError: number
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
}