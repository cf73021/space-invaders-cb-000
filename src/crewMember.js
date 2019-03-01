class CrewMember {
  constructor(position) {
    this.position = position ;
    this.currentShip = "Looking for a Rig."
  }
  engageWarpDrive() {
    if (this.currentShip !== "Looking for a Rig") {
    }
    else {
      return "had no effect";
    }
  }
  chargePhasers(){
    if (this.position === "Gunner" && this.currentShip !== "Looking for a Rig.") {
      this.currentShip.phasersCharge = "charged"
    }
    else {return "had no effect"}
  }
  setsInvisibility(){
    if (this.position === "Defender" && this.currentShip !== "Looking for a Rig.") {
      this.currentShip.cloaked = true
    }
    else {return "had no effect"}
  }
}
