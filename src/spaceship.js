class Spaceship {
  constructor(name, crew, shields, phasers){
    this.name = name;
    this.crew = crew;
    if (!!crew) {
      this.crew.forEach (function(element){
        element.currentShip = this ;
      })
    }
    this.phasers = phasers ;
    this.shields = shields ;
    this.phasersCharge = "uncharged" ;
    this.warpDrive = "disengaged" ;
    this.cloaked = false ;
    if (!this.crew) {this.docked = true}
    else {this.docked = false}
  }
}
