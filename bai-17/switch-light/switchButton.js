
class SwitchButton {

    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    connectToLamp(newLamp) {
        this.lamp=newLamp;
    }
    turnOnOff() {
        this.lamp=!this.lamp;
        return this.lamp;
    }

}
