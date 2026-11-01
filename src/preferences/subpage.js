import Adw from 'gi://Adw';


export function create_subpage(title, content) {
    const toolbar = new Adw.ToolbarView({ content });
    toolbar.add_top_bar(new Adw.HeaderBar());
    return new Adw.NavigationPage({ title, child: toolbar });
}
