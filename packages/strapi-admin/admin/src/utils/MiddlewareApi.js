import { cloneDeep } from 'lodash';

class MiddlewaresHandler {
  middlewares = [];

  add(middleware) {
    this.middlewares.push(middleware);
  }

  // eslint-disable-next-line no-dupe-class-members
  get middlewares() {
    return cloneDeep(this.middlewares);
  }
}

export default () => new MiddlewaresHandler();
