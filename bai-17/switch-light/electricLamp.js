class ElectricLamp {
    constructor(status) {
        this.status = status;
    }

    getStatus() {
        return this.status=!this.status;
    }
}


class SwitchButton {

    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    connectToLamp(newLamp) {
        this.lamp=newLamp;
    }

}
