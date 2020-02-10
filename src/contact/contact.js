export class Contact {
  constructor(opts) {
    this.id = '';
    this.firstName = '';
    this.middleName = '';
    this.lastName = '';

    Object.assign(this, opts);
  }
}
