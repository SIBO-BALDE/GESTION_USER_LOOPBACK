import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'databasedb',
  connector: 'mongodb',
  url: 'mongodb://0.0.0.0:27017',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'databasemongo',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DatabasedbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'databasedb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.databasedb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
