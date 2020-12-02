//
// 2DKit - Rapid game development
// http://2dkit.com

import Component from "kit/Component";
import Entity from "kit/Entity";
import System from "kit/System";

import EzApp from "ez/EzApp";

/** The main component class. */
export default class YourProject extends Component
{
    /** Called when the component is started. */
    onStart ()
    {
        // Create a visual application based on assets/bootstrap/Home.scene
        this.owner.add(new EzApp("Home"));
    }
}
