import {Injectable} from 'angular2/core';
import {Hero} from './hero';
import {BackendService} from './backend.service';
import {Logger} from './logger.service';

@Injectable()
export class HeroService {
  constructor(
    private _backend: BackendService,
    private _logger: Logger) { }

  private _heroes: Hero[] = [];

  getHeroes() {
    this._backend.getAll(Hero).then((heroes: Hero[]) => {
      this._logger.log(`Fetched ${heroes.length} heroes.`);
      this._heroes.push(...heroes); // fill cache
    });
    return this._heroes;
  }
}