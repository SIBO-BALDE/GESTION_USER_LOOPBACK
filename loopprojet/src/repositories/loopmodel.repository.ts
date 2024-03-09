import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatabasedbDataSource} from '../datasources';
import {Loopmodel, LoopmodelRelations} from '../models';

export class LoopmodelRepository extends DefaultCrudRepository<
  Loopmodel,
  typeof Loopmodel.prototype.id,
  LoopmodelRelations
> {
  constructor(
    @inject('datasources.databasedb') dataSource: DatabasedbDataSource,
  ) {
    super(Loopmodel, dataSource);
  }
}
