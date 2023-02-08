import { _decorator, Component, Node, Sprite } from "cc";
const { ccclass, property, type } = _decorator;

@ccclass("Types")
export class Types extends Component {
    start() {}

    @type(String)
    myName: String = null!;

    @type(Number)
    age: Number = null!;

    @type(Sprite)
    profilePic: Sprite = null!;

    constructor(myName: String, age: Number, profilePic: Sprite) {
        super();
        this.myName = myName;
        this.age = age;
        this.profilePic = profilePic;
    }

    update(deltaTime: number) {}
}
