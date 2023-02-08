import { _decorator, Component, Node, ScrollView, __private, Vec2, Label, UITransform } from "cc";
import { Types } from "./Types";
const { ccclass, property, type } = _decorator;

@ccclass("Main")
export class Main extends Component {
    @property(ScrollView) scrollView: ScrollView = null;

    firstIndexAt: number = 1;
    lastIndexAt: number = 6;
    cellHeight: number = 0;
    totalCells: number = 0;

    start() {
        this.cellHeight = this.scrollView.content.children[0].getComponent(UITransform).height;
        this.totalCells = this.scrollView.content.children.length - 1;
        this.scrollView.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.handleScrolltoBottom, this);
        this.scrollView.node.on(ScrollView.EventType.SCROLL_TO_TOP, this.handleScrolltoTop, this);
        // this.scrollView.node.on(ScrollView.EventType.SCROLLING, this.handleScrolling, this);
    }

    // onUp() {
    //     this.scrollView.content.children[5].setSiblingIndex(0);
    // }
    // onDown() {
    //     this.scrollView.content.children[0].setSiblingIndex(5);
    // }

    handleScrolltoBottom(): void {
        this.lastIndexAt++;
        this.firstIndexAt++;
        this.scrollView.content.children[0].getChildByName("Label").getComponent(Label).string = this.lastIndexAt.toString();
        this.scrollView.content.children[0].setSiblingIndex(this.totalCells);
        this.scrollView.scrollToOffset(new Vec2(0, -this.cellHeight), 0);
    }
    handleScrolltoTop(): void {
        this.lastIndexAt--;
        this.firstIndexAt--;
        this.scrollView.content.children[this.totalCells].getChildByName("Label").getComponent(Label).string = this.firstIndexAt.toString();
        this.scrollView.content.children[this.totalCells].setSiblingIndex(0);
        this.scrollView.scrollToOffset(new Vec2(0, +this.cellHeight), 0);
    }

    callback(scrollview, eventType, customEventData) {
        console.log(eventType);

        switch (eventType) {
            case ScrollView.EventType.SCROLLING:
                {
                    console.log("SCROLLING");
                }
                break;
            case ScrollView.EventType.SCROLL_BEGAN:
                {
                    console.log("SCROLL_BEGAN");
                }
                break;
            case ScrollView.EventType.SCROLL_ENDED:
                {
                    console.log("SCROLL_ENDED");
                }
                break;
            case ScrollView.EventType.SCROLL_TO_BOTTOM:
                {
                    console.log("SCROLL_TO_BOTTOM");
                }
                break;
            case ScrollView.EventType.SCROLL_TO_TOP:
                {
                    console.log("SCROLL_TO_TOP");
                }
                break;
        }
    }

    update(deltaTime: number) {}
}
