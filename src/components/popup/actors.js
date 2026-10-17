import St from 'gi://St';

const INTERNAL_ACTOR_NAMES = ['bms-popup-blurred-widget', 'bms-popup-backgroundgroup'];

export function has_style_class(actor, style_class) {
    return actor instanceof St.Widget && actor.has_style_class_name(style_class);
}

export function has_any_style_class(actor, style_classes) {
    return actor instanceof St.Widget
        && style_classes.some(style_class => actor.has_style_class_name(style_class));
}

export function is_internal_actor(actor) {
    return INTERNAL_ACTOR_NAMES.includes(actor.name);
}
