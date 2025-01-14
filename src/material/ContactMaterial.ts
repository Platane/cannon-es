import { Utils } from '../utils/Utils'
import type { Material } from '../material/Material'

export type ContactMaterialOptions = {
  friction?: number
  restitution?: number
  contactEquationStiffness?: number
  contactEquationRelaxation?: number
  frictionEquationStiffness?: number
  frictionEquationRelaxation?: number
}

/**
 * Defines what happens when two materials meet.
 * @class ContactMaterial
 * @constructor
 * @param {Material} m1
 * @param {Material} m2
 * @param {object} [options]
 * @param {Number} [options.friction=0.3]
 * @param {Number} [options.restitution=0.3]
 * @param {number} [options.contactEquationStiffness=1e7]
 * @param {number} [options.contactEquationRelaxation=3]
 * @param {number} [options.frictionEquationStiffness=1e7]
 * @param {Number} [options.frictionEquationRelaxation=3]
 */
export class ContactMaterial {
  id: number // Identifier of this material.
  materials: [Material, Material] // Participating materials.
  friction: number // Friction coefficient.
  restitution: number // Restitution coefficient.
  contactEquationStiffness: number // Stiffness of the produced contact equations.
  contactEquationRelaxation: number // Relaxation time of the produced contact equations.
  frictionEquationStiffness: number // Stiffness of the produced friction equations.
  frictionEquationRelaxation: number // Relaxation time of the produced friction equations

  static idCounter: number

  constructor(m1: Material, m2: Material, options: ContactMaterialOptions) {
    options = Utils.defaults(options, {
      friction: 0.3,
      restitution: 0.3,
      contactEquationStiffness: 1e7,
      contactEquationRelaxation: 3,
      frictionEquationStiffness: 1e7,
      frictionEquationRelaxation: 3,
    })

    this.id = ContactMaterial.idCounter++
    this.materials = [m1, m2]
    this.friction = options.friction!
    this.restitution = options.restitution!
    this.contactEquationStiffness = options.contactEquationStiffness!
    this.contactEquationRelaxation = options.contactEquationRelaxation!
    this.frictionEquationStiffness = options.frictionEquationStiffness!
    this.frictionEquationRelaxation = options.frictionEquationRelaxation!
  }
}

ContactMaterial.idCounter = 0
