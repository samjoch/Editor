import Editor from '../editor';
import Toolbar from '../gui/toolbar';

export default class EditorToolbar {
    // Public members
    public main: Toolbar;
    public tools: Toolbar;

    /**
     * Constructor
     * @param editor: the editor's reference
     */
    constructor (protected editor: Editor) {
        // Build main toolbar
        this.main = new Toolbar('MainToolBar');
        this.main.items = [
            {
                type: 'menu', id: 'project', text: 'Project', img: 'icon-folder', items: [

                ]
            },
            { type: 'break' },
            {
                type: 'menu', id: 'edit', text: 'Edit', img: 'icon-edit', items: [

                ]
            }
        ];
        this.main.onClick = target => this.onMainClick(target);
        this.main.build('MAIN-TOOLBAR');

        // Build toolbar
        this.tools = new Toolbar('ToolsToolBar');
        this.tools.items = [
            { type: 'button', id: 'play', text: 'Play', img: 'icon-play-game' },
            { type: 'button', id: 'test', text: 'Test...', img: 'icon-play-game-windowed' }
        ];
        this.tools.onClick = target => this.onToolsClick(target);
        this.tools.build('TOOLS-TOOLBAR');
    }

    /**
     * Once the user clicks on a menu of the main toolbar
     * @param target the target element
     */
    protected onMainClick (target: string): void {
        switch (target) {

            default: break;
        }
    }

    /**
     * Once the user clicks on a menu of the tools toolbar
     * @param target the target element
     */
    protected onToolsClick (target: string): void {
        switch (target) {
            
            default: break;
        }
    }
}