const snippets = new Map();

export function get_snippet(key, create) {
    let snippet = snippets.get(key);
    if (!snippet) {
        snippet = create();
        snippets.set(key, snippet);
    }
    return snippet;
}

export function clear_snippets() {
    snippets.clear();
}
