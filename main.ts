// Fixem el canal de transmissió igual que el del receptor. 
let angle = 0
let millig = 0
radio.setGroup(20)
// La variable "millig" és l'acceleració a l'eix X que es mapeja a graus per al servo. La nova variable"angle" amb els graus de gir s'envia per ràdio. 
basic.forever(function () {
    millig = input.acceleration(Dimension.X)
    angle = pins.map(
    millig,
    -1023,
    1023,
    0,
    180
    )
    radio.sendNumber(angle)
})
