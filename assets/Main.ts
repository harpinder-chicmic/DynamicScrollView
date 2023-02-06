import { _decorator, Component, Node, ScrollView, __private, Vec2, Label } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Main")
export class Main extends Component {
    @property(ScrollView) scrollView: ScrollView = null;

    firstIndexAt: number = 1;
    lastIndexAt: number = 6;

    start() {
        this.scrollView.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.handleScrolltoBottom, this);
        this.scrollView.node.on(ScrollView.EventType.SCROLL_TO_TOP, this.handleScrolltoTop, this);
    }

    onUp() {
        this.scrollView.content.children[5].setSiblingIndex(0);
    }
    onDown() {
        this.scrollView.content.children[0].setSiblingIndex(5);
    }

    handleScrolltoBottom(): void {
        this.lastIndexAt++;
        this.firstIndexAt++;
        this.scrollView.content.children[0].getChildByName("Label").getComponent(Label).string = this.lastIndexAt.toString();
        this.scrollView.content.children[0].setSiblingIndex(5);
        this.scrollView.scrollToOffset(new Vec2(0, -50), 0);
    }
    handleScrolltoTop(): void {
        this.lastIndexAt--;
        this.firstIndexAt--;
        this.scrollView.content.children[5].getChildByName("Label").getComponent(Label).string = this.firstIndexAt.toString();
        this.scrollView.content.children[5].setSiblingIndex(0);
        this.scrollView.scrollToOffset(new Vec2(0, +50), 0);
    }

    scrollToIndex(index: number): void {
        this.lastIndexAt--;
        this.firstIndexAt--;
        if (index > this.lastIndexAt) {
            //scroll upwards
        }
        if (index < this.firstIndexAt) {
            //scroll downwards
        }
    }

    update(deltaTime: number) {}
}
