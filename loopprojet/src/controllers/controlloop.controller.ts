import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Loopmodel} from '../models';
import {LoopmodelRepository} from '../repositories';

export class ControlloopController {
  constructor(
    @repository(LoopmodelRepository)
    public loopmodelRepository : LoopmodelRepository,
  ) {}

  @post('/loopmodels')
  @response(200, {
    description: 'Loopmodel model instance',
    content: {'application/json': {schema: getModelSchemaRef(Loopmodel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loopmodel, {
            title: 'NewLoopmodel',
            exclude: ['id'],
          }),
        },
      },
    })
    loopmodel: Omit<Loopmodel, 'id'>,
  ): Promise<Loopmodel> {
    return this.loopmodelRepository.create(loopmodel);
  }

  @get('/loopmodels/count')
  @response(200, {
    description: 'Loopmodel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Loopmodel) where?: Where<Loopmodel>,
  ): Promise<Count> {
    return this.loopmodelRepository.count(where);
  }

  @get('/loopmodels')
  @response(200, {
    description: 'Array of Loopmodel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Loopmodel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Loopmodel) filter?: Filter<Loopmodel>,
  ): Promise<Loopmodel[]> {
    return this.loopmodelRepository.find(filter);
  }

  @patch('/loopmodels')
  @response(200, {
    description: 'Loopmodel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loopmodel, {partial: true}),
        },
      },
    })
    loopmodel: Loopmodel,
    @param.where(Loopmodel) where?: Where<Loopmodel>,
  ): Promise<Count> {
    return this.loopmodelRepository.updateAll(loopmodel, where);
  }

  @get('/loopmodels/{id}')
  @response(200, {
    description: 'Loopmodel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Loopmodel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Loopmodel, {exclude: 'where'}) filter?: FilterExcludingWhere<Loopmodel>
  ): Promise<Loopmodel> {
    return this.loopmodelRepository.findById(id, filter);
  }

  @patch('/loopmodels/{id}')
  @response(204, {
    description: 'Loopmodel PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loopmodel, {partial: true}),
        },
      },
    })
    loopmodel: Loopmodel,
  ): Promise<void> {
    await this.loopmodelRepository.updateById(id, loopmodel);
  }

  @put('/loopmodels/{id}')
  @response(204, {
    description: 'Loopmodel PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() loopmodel: Loopmodel,
  ): Promise<void> {
    await this.loopmodelRepository.replaceById(id, loopmodel);
  }

  @del('/loopmodels/{id}')
  @response(204, {
    description: 'Loopmodel DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.loopmodelRepository.deleteById(id);
  }
}
