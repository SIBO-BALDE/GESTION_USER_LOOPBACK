import {Entity, model, property} from '@loopback/repository';

@model()
export class Loopmodel extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  confirmpassword: string;

  @property({
    type: 'number',
  })
  etat?: number;

  @property({
    type: 'boolean',
    required: true,
  })
  isAuth: boolean;


  constructor(data?: Partial<Loopmodel>) {
    super(data);
  }
}

export interface LoopmodelRelations {
  // describe navigational properties here
}

export type LoopmodelWithRelations = Loopmodel & LoopmodelRelations;
